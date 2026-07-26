import { access, readdir, readFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distRoot = resolve(projectRoot, "dist");
const origin = "https://www.lukasikic.info";
const missing = [];

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

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

for (const file of await htmlFiles(distRoot)) {
  const html = await readFile(file, "utf8");
  const pagePath = `/${relative(distRoot, file).split("\\").join("/")}`;
  const base = new URL(pagePath, origin);

  for (const match of html.matchAll(/<a\b[^>]*\bhref=(["'])(.*?)\1/gi)) {
    const href = match[2];
    if (!href || href.startsWith("#")) continue;

    let url;
    try {
      url = new URL(href, base);
    } catch {
      missing.push(`${pagePath}: invalid URL ${href}`);
      continue;
    }

    if (url.origin !== origin) continue;
    const decodedPath = decodeURIComponent(url.pathname);
    const candidates = decodedPath.endsWith("/")
      ? [resolve(distRoot, `.${decodedPath}`, "index.html")]
      : [
          resolve(distRoot, `.${decodedPath}`),
          resolve(distRoot, `.${decodedPath}`, "index.html"),
        ];

    if (
      !(await Promise.any(
        candidates.map(async (candidate) => {
          if (await exists(candidate)) return candidate;
          throw new Error();
        }),
      ).catch(() => false))
    ) {
      missing.push(`${pagePath}: ${href}`);
    }
  }
}

if (missing.length > 0) {
  console.error(`Found ${missing.length} unresolved internal link(s):`);
  for (const item of missing) console.error(`- ${item}`);
  process.exitCode = 1;
} else {
  console.log("All internal links resolve in the production build.");
}
