import type { ContentItem } from "../content.ts";
import { contentPath } from "../routes.ts";
import { layout } from "./layout.ts";

export function articlePage(item: ContentItem) {
  return layout(
    `<main>
      <article class="article-page">
        <h1>${item.title}</h1>
        <p class="meta"><time datetime="${item.date}">${item.date}</time></p>
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
