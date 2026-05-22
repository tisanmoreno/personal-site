import { site } from "../config.ts";

type LayoutMeta = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
};

export function layout(content: string, meta: LayoutMeta | string = {}) {
  const title = typeof meta === "string" ? meta : meta.title || site.title;
  const description = typeof meta === "string" ? site.description : meta.description || site.description;
  const pathname = typeof meta === "string" ? "/" : meta.path || "/";
  const type = typeof meta === "string" ? "website" : meta.type || "website";
  const pageTitle = title === site.title ? site.title : `${title} | ${site.title}`;
  const canonicalUrl = new URL(pathname, site.url).toString();

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${canonicalUrl}">
    <meta property="og:title" content="${escapeHtml(pageTitle)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:site_name" content="${escapeHtml(site.title)}">
    <meta property="og:type" content="${type}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <link rel="stylesheet" href="/styles/main.css">
    <script>
      window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    </script>
    <script defer src="/_vercel/insights/script.js"></script>
  </head>
  <body>
    ${content}
  </body>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
