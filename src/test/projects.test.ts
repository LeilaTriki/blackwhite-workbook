import { describe, it, expect } from "vitest";
import { projects, featuredProjects, publishedProjects } from "@/data/projects";

describe("project visibility", () => {
  it("homepage shows only featured and published projects", () => {
    for (const p of featuredProjects()) expect(p.featured && p.published).toBe(true);
  });
  it("hidden projects never appear", () => {
    const hidden = projects.filter((p) => !p.published).map((p) => p.slug);
    expect(publishedProjects().some((p) => hidden.includes(p.slug))).toBe(false);
  });
});
