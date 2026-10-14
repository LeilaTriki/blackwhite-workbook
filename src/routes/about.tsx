import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      { name: "description", content: `Biography, education and design philosophy of ${site.name}.` },
      { property: "og:title", content: `About — ${site.name}` },
      { property: "og:description", content: `Biography and design philosophy of ${site.name}.` },
    ],
  }),
  component: About,
});

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-t py-12 md:grid-cols-12">
      <h2 className="label-caps font-sans text-muted-foreground md:col-span-3">{label}</h2>
      <div className="space-y-4 text-lg leading-relaxed md:col-span-8">{children}</div>
    </div>
  );
}

function About() {
  const a = site.about;
  return (
    <section className="mx-auto max-w-[1600px] px-6 pt-40 md:px-12">
      <h1 className="mb-20 text-5xl md:text-7xl">About</h1>
      <Row label="Biography">{a.biography.map((t, i) => <p key={i}>{t}</p>)}</Row>
      <Row label="Philosophy">{a.philosophy.map((t, i) => <p key={i} className="font-display text-2xl">{t}</p>)}</Row>
      <Row label="Education">
        {a.education.map((e, i) => (
          <div key={i} className="flex flex-col md:flex-row md:gap-10"><span className="w-32 text-muted-foreground">{e.period}</span><span>{e.title} — {e.place}</span></div>
        ))}
      </Row>
      <Row label="Experience">
        {a.experience.map((e, i) => (
          <div key={i} className="flex flex-col md:flex-row md:gap-10"><span className="w-32 text-muted-foreground">{e.period}</span><span>{e.title} — {e.place}</span></div>
        ))}
      </Row>
      <Row label="Skills & software"><p>{a.skills.join(" · ")}</p></Row>
      <Row label="Achievements & exhibitions">
        {a.achievements.map((e, i) => (
          <div key={i} className="flex flex-col md:flex-row md:gap-10"><span className="w-32 text-muted-foreground">{e.year}</span><span>{e.title}</span></div>
        ))}
      </Row>
      <Row label="Contact"><Link to="/contact" className="underline underline-offset-4">Get in touch →</Link></Row>
    </section>
  );
}
