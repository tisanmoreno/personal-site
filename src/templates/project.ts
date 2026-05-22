import type { ContentItem } from "../content.ts";
import { contentPath } from "../routes.ts";
import { layout } from "./layout.ts";

export function projectPage(item: ContentItem) {
  const meta = [item.year, item.status, ...item.tags].filter(Boolean).join(" / ");

  return layout(
    `<main>
      <article>
        <p class="meta">${meta}</p>
        <h1>${item.title}</h1>
        ${item.summary ? `<p class="summary">${item.summary}</p>` : ""}
        ${item.url ? `<p><a href="${item.url}">Visit project</a></p>` : ""}
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
