import { readdir, readFile, writeFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const aiRoot = resolve(projectRoot, "public/ai");
const siteRoot = "https://www.lukasikic.info/ai/";
const marker = "<!-- lukasikic.info integration -->";

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
  if (html.includes(marker)) continue;

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

  html = html.replace("</head>", `${metadata}\n</head>`);
  html = html.replace(
    '<ul class="navbar-nav navbar-nav-scroll ms-auto">',
    `<ul class="navbar-nav navbar-nav-scroll ms-auto">
  <li class="nav-item">
    <a class="nav-link" href="/" aria-label="Return to lukasikic.info">
      <span class="menu-text">lukasikic.info</span>
    </a>
  </li>`,
  );

  await writeFile(file, html);
}
