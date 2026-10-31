import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import modelingView from "@/assets/projects/halle-evenementielle/photos-01.jpg.asset.json";
import technicalPlan from "@/assets/projects/halle-evenementielle/drawings-01-plan.png.asset.json";

const services = [
  "Advanced Architectural 3D Modeling",
  "Complex Geometries and Architectural Forms",
  "Detailed BIM Modeling",
  "Development of Architectural Models from Drawings and Concepts",
  "Detailed Architectural Plans, Sections, and Elevations",
  "Revit Model Optimization and Organization",
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Revit Modeling Services — ${site.name}` },
      { name: "description", content: "Advanced architectural Revit modeling by Leila Triki. Precise BIM models, complex geometries, and detailed architectural drawings for industry professionals." },
      { property: "og:title", content: `Revit Modeling Services — ${site.name}` },
      { property: "og:description", content: "Complexity, modeled with precision. Professional Revit modeling for demanding architectural projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="revit-services">
      <section className="mx-auto max-w-[1600px] px-6 pt-32 md:px-12 md:pt-40">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-5">
          <p className="label-caps text-muted-foreground">Professional services</p>
          <p className="label-caps text-muted-foreground">Autodesk Revit / Architectural BIM</p>
        </div>
        <h1 className="fade-up mt-10 max-w-5xl text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
          COMPLEXITY, MODELED WITH PRECISION.
        </h1>
        <figure className="mt-10 md:mt-14">
          <div className="group aspect-[16/9] overflow-hidden md:aspect-[21/9]">
            <img src={modelingView.url} alt="Halle événementielle — architectural exterior visualization" className="img-zoom h-full w-full object-cover" fetchPriority="high" />
          </div>
          <figcaption className="mt-4 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
            <span>Halle événementielle</span>
            <span>Architectural visualization · Selected portfolio work</span>
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <div className="md:col-span-6">
          <p className="label-caps text-muted-foreground">Precision at every scale</p>
          <p className="mt-7 font-display text-3xl leading-snug md:text-4xl">
            I offer professional Revit modeling services for architects and industry professionals, specializing in complex architectural projects, challenging geometries, and detailed 3D modeling.
          </p>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            With excellent command and complete proficiency in Autodesk Revit, I can transform complex architectural concepts and designs into accurate, structured, and highly detailed digital models.
          </p>
        </div>
        <figure className="self-center md:col-span-5 md:col-start-8">
          <img src={technicalPlan.url} alt="Halle événementielle — detailed architectural plan" className="h-auto w-full object-contain" loading="lazy" />
          <figcaption className="mt-5 border-t pt-3 text-xs text-muted-foreground">Halle événementielle · Architectural plan</figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-8 border-t pt-6 md:grid-cols-12">
          <h2 className="label-caps font-sans text-muted-foreground md:col-span-3">Services offered</h2>
          <ol className="md:col-span-9">
            {services.map((service, index) => (
              <li key={service} className="flex items-baseline gap-5 border-b py-7 first:pt-0 md:gap-8 md:py-9">
                <span className="shrink-0 text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl leading-snug md:text-3xl">{service}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pt-24 md:px-12 md:pt-32">
        <div className="grid items-start gap-8 border-t pt-8 md:grid-cols-12">
          <p className="label-caps text-muted-foreground md:col-span-3">Collaboration</p>
          <div className="md:col-span-8">
            <h2 className="max-w-3xl text-3xl leading-snug md:text-5xl">Have a challenging architectural project? Let's bring it to life with precision and expertise.</h2>
            <Button asChild variant="outline" size="lg" className="mt-9 h-auto min-h-12 max-w-full gap-5 rounded-none px-6 py-4 font-sans text-xs shadow-none">
              <Link to="/contact">LET'S WORK TOGETHER <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}