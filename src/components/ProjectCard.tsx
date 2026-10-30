import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectMeta({ p }: { p: Project }) {
  return (
    <p className="label-caps text-muted-foreground">
      {[p.location, p.year, p.category].filter(Boolean).join(" · ")}
    </p>
  );
}

export function ProjectCard({ p, aspect = "aspect-[4/3]" }: { p: Project; aspect?: string }) {
  return (
    <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
      <div className={`overflow-hidden bg-muted ${aspect}`}>
        <img src={p.cover.src} alt={p.cover.alt} loading="lazy" className="img-zoom h-full w-full object-cover" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl">{p.title}</h3>
          <div className="mt-2"><ProjectMeta p={p} /></div>
        </div>
      </div>
    </Link>
  );
}
