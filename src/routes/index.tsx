import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Architecture Portfolio` },
      { name: "description", content: `${site.statement} Selected architectural work by ${site.name}.` },
      { property: "og:title", content: `${site.name} — Architecture Portfolio` },
      { property: "og:description", content: site.statement },
    ],
  }),
  component: Home,
});

// Asymmetric rhythm for the selected-projects gallery
const layouts = [
  { wrap: "md:col-span-12", aspect: "aspect-[16/9]" },
  { wrap: "md:col-span-5 md:col-start-2", aspect: "aspect-[4/5]" },
  { wrap: "md:col-span-5 md:col-start-8 md:mt-48", aspect: "aspect-[4/3]" },
];

function Home() {
  const featured = featuredProjects();
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <img src={site.heroImage.src} alt={site.heroImage.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-6 pb-14 md:px-12">
          <h1 className="fade-up text-5xl md:text-8xl">{site.name}</h1>
          <p className="fade-up label-caps mt-4 text-muted-foreground [animation-delay:300ms]">{site.statement}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="label-caps text-muted-foreground md:col-span-3">Introduction</p>
          <p className="font-display text-3xl leading-snug md:col-span-8 md:text-4xl">{site.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex items-end justify-between border-t pt-6">
          <p className="label-caps">Selected projects</p>
          <Link to="/projects" className="label-caps text-muted-foreground hover:text-foreground">All projects →</Link>
        </div>
        <div className="grid gap-x-10 gap-y-24 md:grid-cols-12">
          {featured.map((p, i) => {
            const l = layouts[i % layouts.length];
            return (
              <div key={p.slug} className={l.wrap}>
                <ProjectCard p={p} aspect={l.aspect} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
