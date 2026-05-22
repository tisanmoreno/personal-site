import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import { site } from "./config.ts";
import type { ContentItem } from "./content.ts";
import { getContent } from "./content.ts";
import { contentPath } from "./routes.ts";
import { articlePage } from "./templates/article.ts";
import { homePage } from "./templates/home.ts";
import { listingPage } from "./templates/listing.ts";
import { experimentPage } from "./templates/experiment.ts";

const dist = path.join(process.cwd(), "dist");

async function build() {
  const [writing, experiments] = await Promise.all([
    getContent("writing"),
    getContent("experiments"),
  ]);

  await rm(dist, { force: true, recursive: true });
  await mkdir(dist, { recursive: true });

  await Promise.all([
    writePage("index.html", homePage({ writing, experiments })),
    writePage("writing/index.html", listingPage("Writing", writing)),
    writePage("experiments/index.html", listingPage("Experiments", experiments)),
    writePage("robots.txt", robotsTxt()),
    writePage("sitemap.xml", sitemapXml(["/", "/writing/", "/experiments/", ...contentPaths(writing, experiments)])),
    copyStaticFiles(),
  ]);

  await Promise.all([
    ...writing.map((item) => writePage(`${item.kind}/${item.slug}/index.html`, articlePage(item))),
    ...experiments.map((item) => writePage(`${item.kind}/${item.slug}/index.html`, experimentPage(item))),
  ]);

  console.log(`Built ${site.title} with ${writing.length} writing and ${experiments.length} experiments.`);
}

async function writePage(relativePath: string, html: string) {
  const file = path.join(dist, relativePath);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

async function copyStaticFiles() {
  await Promise.all([
    cp(path.join(process.cwd(), "src/styles"), path.join(dist, "styles"), { recursive: true }),
    cp(path.join(process.cwd(), "public"), dist, { recursive: true }),
  ]);
}

function contentPaths(...groups: ContentItem[][]) {
  return groups.flat().map((item) => contentPath(item.kind, item.slug));
}

function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site.url).toString()}
`;
}

function sitemapXml(paths: string[]) {
  const urls = paths
    .map((pathname) => `  <url>
    <loc>${new URL(pathname, site.url).toString()}</loc>
  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

await build();
