import type { ContentItem } from "../content.ts";
import { contentPath } from "../routes.ts";
import { layout } from "./layout.ts";

export function articlePage(item: ContentItem) {
  return layout(
    `<main>
      <article>
        <h1>${item.title}</h1>
        <p class="meta">${item.date}</p>
        ${item.summary ? `<p class="summary">${item.summary}</p>` : ""}
        ${item.body}
      </article>
    </main>`,
    {
      title: item.title,
      description: item.summary,
      path: contentPath(item.kind, item.slug),
      type: "article",
    },
  );
}
