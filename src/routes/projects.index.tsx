import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { publishedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/data/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: `Projects — ${site.name}` },
      { name: "description", content: `All architectural projects by ${site.name}.` },
      { property: "og:title", content: `Projects — ${site.name}` },
      { property: "og:description", content: `All architectural projects by ${site.name}.` },
    ],
  }),
  component: Projects,
});

function Projects() {
  const all = publishedProjects();
  const categories = Array.from(new Set(all.map((p) => p.category)));
  const [filter, setFilter] = useState<string | null>(null);
  const list = filter ? all.filter((p) => p.category === filter) : all;

  return (
    <section className="mx-auto max-w-[1600px] px-6 pt-40 md:px-12">
      <h1 className="text-5xl md:text-7xl">Projects</h1>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-b pb-6" role="group" aria-label="Filter by category">
        {[null, ...categories].map((c) => (
          <button
            key={c ?? "all"}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`label-caps transition-colors ${filter === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            {c ?? "All"}
          </button>
        ))}
      </div>
      <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-2">
        {list.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </section>
  );
}
