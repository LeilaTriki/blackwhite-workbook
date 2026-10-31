import type { ProjectImage } from "@/data/projects";
import { hasArchitecturalCaption } from "@/lib/project-image-captions";

export function ProjectImageCaption({ image }: { image: Pick<ProjectImage, "eyebrow" | "title" | "kind" | "captionExcluded"> }) {
  if (!hasArchitecturalCaption(image)) return null;
  return (
    <div className="mb-5 space-y-2 text-left [letter-spacing:0]" data-image-caption>
      <p className="text-xs font-sans font-light text-muted-foreground">{image.eyebrow}</p>
      <p className="font-display text-2xl leading-snug">{image.title}</p>
    </div>
  );
}