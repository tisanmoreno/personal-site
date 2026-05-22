export type ContentKind = "writing" | "experiments";

export type ContentItem = {
  kind: ContentKind;
  slug: string;
  title: string;
  date: string;
  year: string;
  summary: string;
  tags: string[];
  status: string;
  type: string;
  url: string;
  draft: boolean;
  body: string;
};

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const contentRoot = path.join(process.cwd(), "content");

const kinds: ContentKind[] = ["writing", "experiments"];
const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

export async function getAllContent({ includeDrafts = false } = {}) {
  const groups = await Promise.all(kinds.map((kind) => getContent(kind, { includeDrafts })));
  return groups.flat().sort(byNewest);
}

export async function getContent(kind: ContentKind, { includeDrafts = false } = {}) {
  const dir = path.join(contentRoot, kind);
  const entries = await readdir(dir, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md"));

  const items = await Promise.all(
    files.map(async (file) => {
      const source = await readFile(path.join(dir, file.name), "utf8");
      return parseContentFile(kind, file.name, source);
    }),
  );

  return items.filter((item) => includeDrafts || !item.draft).sort(byNewest);
}

export function parseContentFile(kind: ContentKind, filename: string, source: string): ContentItem {
  const slug = filename.replace(/\.md$/, "");
  const { data, content } = matter(source);
  const title = String(data.title || titleFromSlug(slug));

  return {
    kind,
    slug,
    title,
    date: dateFromFrontmatter(data.date),
    year: String(data.year || dateFromFrontmatter(data.date).slice(0, 4)),
    summary: String(data.summary || ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    status: String(data.status || ""),
    type: String(data.type || ""),
    url: String(data.url || ""),
    draft: Boolean(data.draft),
    body: markdown.render(content),
  };
}

function dateFromFrontmatter(value: unknown) {
  if (!value) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function byNewest(a: ContentItem, b: ContentItem) {
  return b.date.localeCompare(a.date);
}
