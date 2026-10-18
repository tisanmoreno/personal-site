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
      <p>I’m a product builder focused on how AI can expand the way people learn, think, communicate, and work.</p>
      <p>I previously worked at <a href="https://www.treble.ai/">treble.ai</a> (YC S19). I left to go all-in on learning AI.</p>
      <p>After multiple experiments exploring how to bring the value of AI to traditional industrial businesses, I pivoted and joined <a href="https://platzi.com/">Platzi</a> (YC W15) to build acquisition growth systems with AI at the core — pushing the frontier while staying accountable to real business outcomes.</p>
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
