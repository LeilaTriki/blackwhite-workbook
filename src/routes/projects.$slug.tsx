import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, publishedProjects, type ProjectImage } from "@/data/projects";
import { PlaceholderTag } from "@/components/ProjectCard";
import { site } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — ${site.name}` : "Project not found";
    const desc = p?.shortDescription ?? "Architectural project";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 text-center">
      <h1 className="text-4xl">Project not found</h1>
      <Link to="/projects" className="label-caps mt-6 inline-block">← All projects</Link>
    </div>
  ),
  component: ProjectPage,
});

function Img({ img, className = "" }: { img: ProjectImage; className?: string }) {
  const drawing = ["plan", "section", "elevation", "diagram", "sketch"].includes(img.kind ?? "");
  return (
    <figure className={className}>
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className={`h-auto w-full ${drawing ? "object-contain" : ""}`}
      />
      {img.caption && <figcaption className="label-caps mt-3 text-muted-foreground">{img.caption}</figcaption>}
    </figure>
  );
}

// Groups consecutive "half" images into two-column rows
function groupImages(images: ProjectImage[]) {
  const rows: ProjectImage[][] = [];
  for (const img of images) {
    const last = rows[rows.length - 1];
    if (img.layout === "half" && last && last.length === 1 && last[0].layout === "half") last.push(img);
    else rows.push([img]);
  }
  return rows;
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-t py-10 md:grid-cols-12">
      <p className="label-caps text-muted-foreground md:col-span-3">{label}</p>
      <div className="space-y-5 text-lg leading-relaxed md:col-span-7">{children}</div>
    </div>
  );
}

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const all = publishedProjects();
  const i = all.findIndex((x) => x.slug === p.slug);
  const prev = all[(i - 1 + all.length) % all.length];
  const next = all[(i + 1) % all.length];

  return (
    <article>
      <div className="h-[85vh] w-full overflow-hidden bg-muted">
        <img src={p.cover.src} alt={p.cover.alt} className="h-full w-full object-cover" />
      </div>
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <header className="grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <PlaceholderTag p={p} />
            <h1 className="mt-4 text-5xl md:text-7xl">{p.title}</h1>
            {p.shortDescription && <p className="mt-6 font-display text-2xl text-muted-foreground">{p.shortDescription}</p>}
          </div>
          <dl className="grid grid-cols-2 gap-6 self-end md:col-span-4 md:col-start-9">
            {[["Location", p.location], ["Year", p.year], ["Category", p.category], ["Status", p.status]]
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div key={k}>
                  <dt className="label-caps text-muted-foreground">{k}</dt>
                  <dd className="mt-1">{v}</dd>
                </div>
              ))}
          </dl>
        </header>

        {p.description && <Block label="Project">{p.description.map((t, k) => <p key={k}>{t}</p>)}</Block>}
        {p.concept && <Block label="Concept">{p.concept.map((t, k) => <p key={k}>{t}</p>)}</Block>}
        {p.materials && <Block label="Materials"><p>{p.materials.join(", ")}</p></Block>}
        {p.specifications && (
          <Block label="Specifications">
            <dl className="space-y-2">
              {p.specifications.map((s) => (
                <div key={s.label} className="flex justify-between border-b pb-2">
                  <dt className="text-muted-foreground">{s.label}</dt><dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </Block>
        )}

        {p.images && (
          <div className="mt-20 space-y-16 md:space-y-24">
            {groupImages(p.images).map((row, k) =>
              row.length === 2 ? (
                <div key={k} className="grid gap-10 md:grid-cols-2">
                  {row.map((img) => <Img key={img.src} img={img} />)}
                </div>
              ) : (
                <Img key={k} img={row[0]!} className={row[0]!.layout === "contained" ? "mx-auto max-w-4xl" : ""} />
              ),
            )}
          </div>
        )}

        {all.length > 1 && prev && next && (
          <nav aria-label="Project navigation" className="mt-32 flex justify-between border-t pt-8">
            <Link to="/projects/$slug" params={{ slug: prev.slug }} className="group">
              <span className="label-caps text-muted-foreground">← Previous</span>
              <span className="mt-2 block font-display text-2xl group-hover:opacity-60">{prev.title}</span>
            </Link>
            <Link to="/projects/$slug" params={{ slug: next.slug }} className="group text-right">
              <span className="label-caps text-muted-foreground">Next →</span>
              <span className="mt-2 block font-display text-2xl group-hover:opacity-60">{next.title}</span>
            </Link>
          </nav>
        )}
      </div>
    </article>
  );
}
