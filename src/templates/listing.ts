import type { ContentItem } from "../content.ts";
import { contentPath } from "../routes.ts";
import { layout } from "./layout.ts";

export function listingPage(title: string, items: ContentItem[]) {
  const list = items.length
    ? items
        .map((item) => (item.kind === "experiments" ? experimentListItem(item) : writingListItem(item)))
        .join("")
    : `<li class="muted">Nothing published yet.</li>`;

  return layout(
    `<main class="listing-page">
      <h1 class="listing-title ${title === "Experiments" ? "pixel-accent" : ""}">${title}</h1>
      <ul class="item-list">${list}</ul>
    </main>`,
    {
      title,
      description: descriptionFor(title),
      path: `/${title.toLowerCase()}/`,
    },
  );
}

function writingListItem(item: ContentItem) {
  return `<li class="archive-list-item">
    <div class="archive-list-row">
      <a href="${contentPath(item.kind, item.slug)}">${item.title}</a>
      <time datetime="${item.date}">${item.date}</time>
    </div>
    ${item.summary ? `<p>${item.summary}</p>` : ""}
  </li>`;
}

function experimentListItem(item: ContentItem) {
  return `<li class="archive-list-item">
    <div class="archive-list-row">
      <a href="${contentPath(item.kind, item.slug)}">${item.title}</a>
      <time datetime="${item.date}">${item.date}</time>
    </div>
    ${item.summary ? `<p>${item.summary}</p>` : ""}
  </li>`;
}

function descriptionFor(title: string) {
  if (title === "Writing") return "Essays and longer reflections by Tisan Moreno.";
  if (title === "Experiments") return "Experiments, shipped work, and prototypes by Tisan Moreno.";
  return "Writing and experiments by Tisan Moreno.";
}
