import type { ContentItem } from "../content.ts";
import { contentPath } from "../routes.ts";
import { layout } from "./layout.ts";

export function experimentPage(item: ContentItem) {
  return layout(
    `<main>
      <article class="article-page">
        <h1>${item.title}</h1>
        <p class="meta"><time datetime="${item.date}">${item.date}</time>${item.type ? ` / ${item.type}` : ""}</p>
        ${item.body}
        ${item.url ? `<p class="experiment-link"><a href="${item.url}">Read the code</a></p>` : ""}
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
