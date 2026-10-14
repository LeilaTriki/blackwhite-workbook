import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      { name: "description", content: `Contact ${site.name} for collaborations and enquiries.` },
      { property: "og:title", content: `Contact — ${site.name}` },
      { property: "og:description", content: `Contact ${site.name}.` },
    ],
  }),
  component: Contact,
});

function Contact() {
  const c = site.contact;
  return (
    <section className="mx-auto max-w-[1600px] px-6 pt-40 md:px-12">
      <h1 className="text-5xl md:text-7xl">Contact</h1>
      <div className="mt-20 grid gap-10 border-t pt-12 md:grid-cols-12">
        <p className="label-caps text-muted-foreground md:col-span-3">Email</p>
        <a href={`mailto:${c.email}`} className="font-display text-3xl hover:opacity-60 md:col-span-8 md:text-5xl">{c.email}</a>
      </div>
      <div className="mt-12 grid gap-10 border-t pt-12 md:grid-cols-12">
        <p className="label-caps text-muted-foreground md:col-span-3">Elsewhere</p>
        <ul className="space-y-3 md:col-span-8">
          {c.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer" className="text-xl hover:opacity-60">{l.label} ↗</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
