import { describe, expect, it } from "vitest";
import { hasArchitecturalCaption } from "@/lib/project-image-captions";

describe("architectural caption eligibility", () => {
  it("allows architectural photographs, renders, models and drawings", () => {
    for (const kind of ["photo", "render", "site", "model", "plan", "section", "elevation"] as const) {
      expect(hasArchitecturalCaption({ kind, eyebrow: "Context", title: "View" })).toBe(true);
    }
  });
  it("excludes diagrams and conceptual graphics", () => {
    for (const kind of ["diagram", "sketch", "collage"] as const) {
      expect(hasArchitecturalCaption({ kind, eyebrow: "Context", title: "Graphic" })).toBe(false);
    }
  });
  it("excludes decorative images and composite graphic boards explicitly", () => {
    expect(hasArchitecturalCaption({ kind: "render", eyebrow: "Context", title: "View", captionExcluded: true })).toBe(false);
  });
});