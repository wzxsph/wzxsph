import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const dist = join(root, "dist");
const base = "/wzxsph";
const slugs = ["fashionai-studio", "tt16", "storyweaver"];
const expectedPages = [
  "index.html",
  "zh/index.html",
  "404.html",
  ...slugs.flatMap((slug) => [`work/${slug}/index.html`, `zh/work/${slug}/index.html`]),
];
const expectedAssets = ["favicon.svg", "robots.txt", "sitemap-index.xml", "og/home.png", ...slugs.map((slug) => `og/${slug}.png`)];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

for (const file of [...expectedPages, ...expectedAssets]) {
  assert(existsSync(join(dist, file)), `Missing build output: ${file}`);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const name = relative(dist, file);
  assert(/<html lang="(?:en|zh-CN)">/.test(html), `${name}: missing document language`);
  assert((html.match(/<h1[ >]/g) ?? []).length === 1, `${name}: expected exactly one h1`);
  assert(/<title>[^<]+<\/title>/.test(html), `${name}: missing title`);
  assert(/rel="canonical" href="https:\/\/wzxsph\.github\.io\/wzxsph\//.test(html), `${name}: invalid canonical URL`);
  assert(!/(?:href|src)="\/(?!wzxsph(?:\/|"))/.test(html), `${name}: found root-relative URL outside ${base}`);

  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    assert(/alt="[^"]+"/.test(tag), `${name}: image is missing meaningful alt text`);
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith(`${base}/`)) continue;
    const clean = decodeURIComponent(url.slice(base.length).split(/[?#]/)[0]);
    const target = clean.endsWith("/") ? join(dist, clean, "index.html") : join(dist, clean);
    assert(existsSync(target), `${name}: broken local reference ${url}`);
  }
}

const englishHome = readFileSync(join(dist, "index.html"), "utf8");
const chineseHome = readFileSync(join(dist, "zh/index.html"), "utf8");
assert((englishHome.match(/class="project-row /g) ?? []).length === 3, "English home must contain exactly three flagship rows");
assert((chineseHome.match(/class="project-row /g) ?? []).length === 3, "Chinese home must contain exactly three flagship rows");
assert(englishHome.includes('hreflang="zh-CN" href="https://wzxsph.github.io/wzxsph/zh/"'), "English home is missing Chinese alternate");
assert(chineseHome.includes('hreflang="en" href="https://wzxsph.github.io/wzxsph/"'), "Chinese home is missing English alternate");

for (const slug of slugs) {
  const en = readFileSync(join(dist, `work/${slug}/index.html`), "utf8");
  const zh = readFileSync(join(dist, `zh/work/${slug}/index.html`), "utf8");
  assert(en.includes(`href="${base}/zh/work/${slug}/"`), `${slug}: English page cannot reach Chinese page`);
  assert(zh.includes(`href="${base}/work/${slug}/"`), `${slug}: Chinese page cannot reach English page`);
  assert(en.includes(`og/${slug}.png`) && zh.includes(`og/${slug}.png`), `${slug}: missing route-specific social image`);
}

console.log(`Build checks passed: ${expectedPages.length} pages, ${expectedAssets.length} static assets, ${htmlFiles.length} HTML files.`);
