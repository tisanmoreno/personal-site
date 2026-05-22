import { site } from "../config.ts";
import type { ContentItem } from "../content.ts";
import { contentPath } from "../routes.ts";
import { layout } from "./layout.ts";

type HomePageProps = {
  writing: ContentItem[];
  projects: ContentItem[];
  notes: ContentItem[];
};

export function homePage({ writing, projects, notes }: HomePageProps) {
  const featuredProjects = projects.slice(0, 6);
  const featuredWriting = writing.slice(0, 6);

  return layout(
    `<main>
      <h1>${site.title}</h1>
      <p>I’m a product builder focused on how AI can expand the way people learn, think, and work.</p>
      <p>I previously worked at <a href="https://www.treble.ai/">treble.ai</a> (YC S19). I left to explore what AI makes newly possible: personal tools, agents, hacking stuff, business experiments, and better ways to learn.</p>
      <p>Some recent writing:</p>
      ${itemList(featuredWriting)}
      <p>Some recent experiments:</p>
      ${itemList(featuredProjects)}
      <p>You can browse my <a href="/writing/">writing</a>, <a href="/projects/">code</a>, or follow me on <a href="https://x.com/tisanmoreno">X</a>. If something here resonates, <a href="mailto:tisanmoreno@gmail.com">email me</a>.</p>
    </main>`,
    {
      title: site.title,
      description: site.description,
      path: "/",
    },
  );
}

function itemList(items: ContentItem[]) {
  const list = items.length
    ? items
        .map(
          (item) => `<li>
            <a href="${contentPath(item.kind, item.slug)}">${item.title}</a>
          </li>`,
        )
        .join("")
    : `<li class="muted">Coming soon.</li>`;

  return `<ul class="item-list">${list}</ul>`;
}
