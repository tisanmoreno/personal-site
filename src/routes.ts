import type { ContentKind } from "./content.ts";

export function contentPath(kind: ContentKind, slug: string) {
  return `/${kind}/${slug}/`;
}

