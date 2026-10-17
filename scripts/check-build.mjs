import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = join(root, "dist");
const site = (process.env.SITE_URL ?? "https://wzxsph.github.io").replace(/\/$/, "");
const configuredBase = process.env.BASE_PATH ?? "/wzxsph";
const base = configuredBase === "/" ? "" : `/${configuredBase.replace(/^\/+|\/+$/g, "")}`;
const absoluteUrl = (path) => `${site}${base}${path}`;
const expectedPages = ["index.html", "en/index.html", "zh/index.html", "404.html"];
const expectedAssets = ["favicon.svg", "robots.txt", "sitemap-index.xml", "sitemap-0.xml", "og/home.png"];
const retiredContent = /fashionai|tt16|storyweaver|catops|autoinsight|personality[\s-]*(?:escape|station)|narrative[\s-]*trace|badguard|hip[\s-]*(?:22|24|xray)|hotpot|人生火锅|人格出逃|旗舰|青年共振|vibeathon|北京理工|beijing institute|toolbox|ai product builder/i;

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

const outputFiles = walk(dist);
const htmlFiles = outputFiles.filter((file) => file.endsWith(".html"));
assert(htmlFiles.length === expectedPages.length, "Unexpected HTML page remains in the build");

for (const file of outputFiles) {
  const name = relative(dist, file);
  assert(!/(?:^|\/)(?:work|projects)(?:\/|$)/.test(name), `Retired portfolio output remains: ${name}`);
  if (/\.(?:png|jpe?g|webp|gif|svg)$/i.test(name)) {
    assert(["favicon.svg", "og/home.png"].includes(name), `Unexpected display asset remains: ${name}`);
  }
  if (/\.(?:html|xml|txt|css|js|svg)$/i.test(name)) {
    assert(!retiredContent.test(readFileSync(file, "utf8")), `Retired public content remains: ${name}`);
  }
}

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const name = relative(dist, file);
  assert(/<html lang="(?:en|zh-CN)">/.test(html), `${name}: missing document language`);
  assert((html.match(/<h1[ >]/g) ?? []).length === 1, `${name}: expected exactly one h1`);
  assert(/<title>[^<]+<\/title>/.test(html), `${name}: missing title`);
  assert(html.includes(`rel="canonical" href="${site}${base}/`), `${name}: invalid canonical URL`);
  assert(html.includes(`hreflang="x-default" href="${absoluteUrl("/")}"`), `${name}: default language must be Chinese`);

  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    assert(/alt="[^"]+"/.test(tag), `${name}: image is missing meaningful alt text`);
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (/^(?:https?:)?\/\//.test(url)) {
      assert(url.startsWith(`${site}${base}/`) || url === "https://github.com/wzxsph", `${name}: unexpected external link ${url}`);
    }
    if (base && url.startsWith("/")) {
      assert(url === base || url.startsWith(`${base}/`), `${name}: found root-relative URL outside ${base}`);
    }
    const localUrl = url.startsWith(`${site}${base}/`) ? url.slice(site.length) : url;
    if (!localUrl.startsWith(`${base}/`)) continue;
    const clean = decodeURIComponent(localUrl.slice(base.length).split(/[?#]/)[0]);
    const target = clean.endsWith("/") ? join(dist, clean, "index.html") : join(dist, clean);
    assert(existsSync(target), `${name}: broken local reference ${url}`);
  }
}

const chineseHome = readFileSync(join(dist, "index.html"), "utf8");
const englishHome = readFileSync(join(dist, "en/index.html"), "utf8");
const legacyChinese = readFileSync(join(dist, "zh/index.html"), "utf8");
assert(chineseHome.includes('<html lang="zh-CN">'), "Root page must be Chinese");
assert(englishHome.includes('<html lang="en">'), "English page must use /en/");
assert(chineseHome.includes(`hreflang="en" href="${absoluteUrl("/en/")}"`), "Chinese home is missing English alternate");
assert(englishHome.includes(`hreflang="zh-CN" href="${absoluteUrl("/")}"`), "English home is missing Chinese alternate");
assert(chineseHome.includes(`href="${base}/en/"`), "Chinese home is missing the English language link");
assert(englishHome.includes(`href="${base}/"`), "English home is missing the Chinese language link");
assert(legacyChinese.includes(`http-equiv="refresh" content="0;url=${base}/"`), "Legacy Chinese URL must redirect to the root");
assert(legacyChinese.includes(`rel="canonical" href="${absoluteUrl("/")}"`), "Legacy Chinese URL must canonicalize to the root");
assert(legacyChinese.includes('name="robots" content="noindex, follow"'), "Legacy Chinese URL must not be indexed");

for (const html of [chineseHome, englishHome]) {
  assert(html.includes("mailto:nizabentley397@gmail.com"), "Home page is missing the original email");
  assert(html.includes('href="https://github.com/wzxsph"'), "Home page is missing the GitHub profile");
  assert(html.includes("og/home.png"), "Home page is missing the personal social image");
}

const sitemap = readFileSync(join(dist, "sitemap-0.xml"), "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).sort();
assert(JSON.stringify(locations) === JSON.stringify([absoluteUrl("/"), absoluteUrl("/en/")].sort()), "Sitemap must contain only the two current language pages");
assert(readFileSync(join(dist, "robots.txt"), "utf8").includes(absoluteUrl("/sitemap-index.xml")), "Robots file is missing the configured sitemap URL");

for (const file of ["README.md", "README_en.md", "README_zh.md", "wzxsph.md"]) {
  const content = readFileSync(join(root, file), "utf8");
  assert(!retiredContent.test(content), `${file}: retired profile content remains`);
  assert(!/!\[|<img\b/i.test(content), `${file}: personal introduction must remain text-only`);
}
assert(readFileSync(join(root, "README.md"), "utf8").includes("./README_en.md"), "Chinese README is missing the English entry");
assert(readFileSync(join(root, "README_en.md"), "utf8").includes("./README.md"), "English README is missing the Chinese entry");
assert(readFileSync(join(root, "README_zh.md"), "utf8").includes("./README.md"), "Legacy Chinese README is missing the compatibility link");

console.log(`Build checks passed: ${expectedPages.length} pages, two language home pages, one legacy redirect, and no retired portfolio content.`);
