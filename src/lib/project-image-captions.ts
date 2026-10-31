import type { ProjectImage } from "@/data/projects";

const architecturalKinds = new Set(["render", "photo", "site", "plan", "section", "elevation", "model"]);

export function hasArchitecturalCaption(image: Pick<ProjectImage, "eyebrow" | "title" | "kind" | "captionExcluded">) {
  return !image.captionExcluded && architecturalKinds.has(image.kind ?? "") && Boolean(image.eyebrow && image.title);
}