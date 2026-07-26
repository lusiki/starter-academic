import { readdir, readFile, writeFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const aiRoot = resolve(projectRoot, "public/ai");
const siteRoot = "https://www.lukasikic.info/ai/";
const marker = "<!-- lukasikic.info integration -->";
const themeMarker = "<!-- lukasikic.info theme -->";
const theme = `${themeMarker}
<style>
  :root {
    --ls-bg: #FFFFFF;
    --ls-surface: #FAFAFA;
    --ls-body: #171717;
    --ls-muted: #737373;
    --ls-hairline: #E5E5E5;
    --ls-accent: #2563EB;
  }
  body {
    background: var(--ls-bg) !important;
    color: var(--ls-body) !important;
    font-family: "Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif !important;
  }
  h1, h2, h3, h4, h5, h6, .navbar-brand, .menu-text {
    font-family: "Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif !important;
  }
  code, pre, kbd, samp {
    font-family: "Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace !important;
  }
  a, .nav-link:hover, .nav-link:focus, .sidebar-link:hover { color: var(--ls-accent); }
  .navbar {
    background: color-mix(in oklab, var(--ls-bg) 94%, transparent) !important;
    border-bottom: 1px solid var(--ls-hairline) !important;
    backdrop-filter: saturate(160%) blur(8px);
  }
  .navbar-title, .nav-link, .menu-text { color: var(--ls-body) !important; }
  #quarto-sidebar, .sidebar, .quarto-title-banner { background: var(--ls-surface) !important; }
  @media (prefers-color-scheme: dark) {
    :root {
      --ls-bg: #0A0A0A;
      --ls-surface: #111111;
      --ls-body: #EDEDED;
      --ls-muted: #8A8A8A;
      --ls-hairline: #1F1F1F;
      --ls-accent: #60A5FA;
    }
  }
  body.quarto-light {
    --ls-bg: #FFFFFF;
    --ls-surface: #FAFAFA;
    --ls-body: #171717;
    --ls-muted: #737373;
    --ls-hairline: #E5E5E5;
    --ls-accent: #2563EB;
  }
  body.quarto-dark {
    --ls-bg: #0A0A0A;
    --ls-surface: #111111;
    --ls-body: #EDEDED;
    --ls-muted: #8A8A8A;
    --ls-hairline: #1F1F1F;
    --ls-accent: #60A5FA;
  }
</style>`;

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) return htmlFiles(path);
      return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
    }),
  );
  return nested.flat();
}

for (const file of await htmlFiles(aiRoot)) {
  let html = await readFile(file, "utf8");

  const path = relative(aiRoot, file).split("\\").join("/");
  const canonical = new URL(path === "index.html" ? "./" : path, siteRoot);
  const metadata = `${marker}
<meta name="description" content="An evidence-based retrospective and forecast of how economics is absorbing artificial intelligence.">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Luka Šikić">
<meta property="og:title" content="How Economics Absorbed AI">
<meta property="og:description" content="An evidence-based retrospective and forecast of how economics is absorbing artificial intelligence.">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="https://www.lukasikic.info/og.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="${canonical}">`;

  if (!html.includes(marker)) {
    html = html.replace("</head>", `${metadata}\n</head>`);
  }
  if (!html.includes(themeMarker)) {
    html = html.replace("</head>", `${theme}\n</head>`);
  }
  html = html.replace(
    /https:\/\/fonts\.googleapis\.com\/css2\?family=Roboto\+Mono[^"]+/,
    "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&amp;family=Geist+Mono:wght@400;500&amp;display=swap",
  );
  if (!html.includes('aria-label="Return to lukasikic.info"')) {
    html = html.replace(
      '<ul class="navbar-nav navbar-nav-scroll ms-auto">',
      `<ul class="navbar-nav navbar-nav-scroll ms-auto">
  <li class="nav-item">
    <a class="nav-link" href="/" aria-label="Return to lukasikic.info">
      <span class="menu-text">lukasikic.info</span>
    </a>
  </li>`,
    );
  }

  await writeFile(file, html);
}
