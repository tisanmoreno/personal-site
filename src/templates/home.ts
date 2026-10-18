import { site } from "../config.ts";
import type { ContentItem } from "../content.ts";
import { contentPath } from "../routes.ts";
import { layout } from "./layout.ts";

type HomePageProps = {
  writing: ContentItem[];
  experiments: ContentItem[];
};

export function homePage({ writing, experiments }: HomePageProps) {
  const featuredExperiments = experiments.slice(0, 6);
  const featuredWriting = writing.slice(0, 6);

  return layout(
    `<main>
      <h1>${site.title}</h1>
      <p>Hey — welcome. This is where I share my writing and some experiments I’m working on.</p>
      <p>AI-pilled builder of acquisition growth systems at <a href="https://platzi.com/">Platzi</a> (YC W15). Before that: product management, product marketing, and a year all-in on AI.</p>
      <p class="section-path"><a href="/writing/">writing/</a></p>
      ${pathList(featuredWriting)}
      <p class="section-path"><a href="/experiments/">experiments/</a></p>
      ${pathList(featuredExperiments)}
      <p>If something here resonates, I’m always open to connect and discuss ideas. Follow me on <a href="https://x.com/tisanmoreno">X</a> or <a href="mailto:tisanmoreno@gmail.com">send me an email</a>.</p>
    </main>`,
    {
      title: site.title,
      description: site.description,
      path: "/",
    },
  );
}

function pathList(items: ContentItem[]) {
  const list = items.length
    ? items
        .map(
          (item) => `<li>
            <time datetime="${item.date}">${item.date}</time>
            <a href="${contentPath(item.kind, item.slug)}">${item.title}</a>
          </li>`,
        )
        .join("")
    : `<li class="muted">Coming soon.</li>`;

  return `<ul class="path-list">${list}</ul>`;
}
