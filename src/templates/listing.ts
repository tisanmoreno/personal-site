import type { ContentItem } from "../content.ts";
import { contentPath } from "../routes.ts";
import { layout } from "./layout.ts";

export function listingPage(title: string, items: ContentItem[]) {
  const list = items.length
    ? items
        .map((item) => (item.kind === "projects" ? projectListItem(item) : defaultListItem(item)))
        .join("")
    : `<li class="muted">Nothing published yet.</li>`;

  return layout(
    `<main>
      <h1>${title}</h1>
      <ul class="item-list">${list}</ul>
    </main>`,
    {
      title,
      description: descriptionFor(title),
      path: `/${title.toLowerCase()}/`,
    },
  );
}

function defaultListItem(item: ContentItem) {
  return `<li>
    <a href="${contentPath(item.kind, item.slug)}">${item.title}</a>
    <span>${item.date}</span>
    ${item.summary ? `<p>${item.summary}</p>` : ""}
  </li>`;
}

function projectListItem(item: ContentItem) {
  const meta = [item.year, item.status, ...item.tags].filter(Boolean).join(" / ");

  return `<li class="project-list-item">
    <div>
      <a href="${contentPath(item.kind, item.slug)}">${item.title}</a>
      ${item.summary ? `<p>${item.summary}</p>` : ""}
    </div>
    ${meta ? `<span>${meta}</span>` : ""}
  </li>`;
}

function descriptionFor(title: string) {
  if (title === "Writing") return "Essays and longer reflections by Tisan Moreno.";
  if (title === "Projects") return "Projects, shipped work, and experiments by Tisan Moreno.";
  if (title === "Notes") return "Short notes, observations, and fragments by Tisan Moreno.";
  return "Writing, projects, and notes by Tisan Moreno.";
}
