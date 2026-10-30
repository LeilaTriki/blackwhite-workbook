/**
 * ============================================================
 *  YOUR PROJECTS — edit this file to manage your portfolio.
 * ============================================================
 *
 *  • Images are CDN-hosted; each import below points to an
 *    .asset.json file under src/assets/projects/<slug>/.
 *  • Array order = display order on the Projects page.
 *  • featured: true  → appears on the homepage.
 *  • published: false → hidden everywhere.
 *  • Every field marked "?" is optional; leave it out to hide it.
 *  • photos[] always renders before drawings[] on the project page.
 */

// Halle événementielle
import halleP1 from "@/assets/projects/halle-evenementielle/photos-01.jpg.asset.json";
import halleP2 from "@/assets/projects/halle-evenementielle/photos-02.png.asset.json";
import halleP3 from "@/assets/projects/halle-evenementielle/photos-03.jpg.asset.json";
import halleP4 from "@/assets/projects/halle-evenementielle/photos-04.jpg.asset.json";
import halleP5 from "@/assets/projects/halle-evenementielle/photos-05.jpg.asset.json";
import halleD1 from "@/assets/projects/halle-evenementielle/drawings-01-plan.png.asset.json";
import halleD2 from "@/assets/projects/halle-evenementielle/drawings-02-elevation.png.asset.json";
import halleD3 from "@/assets/projects/halle-evenementielle/drawings-03-coupe-a-a.png.asset.json";
import halleD4 from "@/assets/projects/halle-evenementielle/drawings-04-coupe-b-b.png.asset.json";

// Forum des arts traditionnels d'El Halfaouine (reconversion du palais)
import forumP1 from "@/assets/projects/reconversion-palais/photos-01.jpg.asset.json";
import forumP2 from "@/assets/projects/reconversion-palais/photos-02.jpg.asset.json";
import forumP3 from "@/assets/projects/reconversion-palais/photos-03.png.asset.json";
import forumP4 from "@/assets/projects/reconversion-palais/photos-04.jpg.asset.json";
import forumP5 from "@/assets/projects/reconversion-palais/photos-05.jpg.asset.json";
import forumP6 from "@/assets/projects/reconversion-palais/photos-06.jpg.asset.json";
import forumP7 from "@/assets/projects/reconversion-palais/photos-07.jpg.asset.json";
import forumP8 from "@/assets/projects/reconversion-palais/photos-08.jpg.asset.json";
import forumD1 from "@/assets/projects/reconversion-palais/drawings-01-plan-rdc.png.asset.json";
import forumD2 from "@/assets/projects/reconversion-palais/drawings-02-plan-1er-etage.png.asset.json";
import forumD3 from "@/assets/projects/reconversion-palais/drawings-02-plan-2eme-etage.png.asset.json";
import forumD4 from "@/assets/projects/reconversion-palais/drawings-04-plan-sous-sol.png.asset.json";
import forumD5 from "@/assets/projects/reconversion-palais/drawings-05-elevation-sud.png.asset.json";
import forumD6 from "@/assets/projects/reconversion-palais/drawings-06-elevation-ouest.png.asset.json";
import forumD7 from "@/assets/projects/reconversion-palais/drawings-07-coupe-aa.png.asset.json";
import forumD8 from "@/assets/projects/reconversion-palais/drawings-08-coupe-bb.png.asset.json";
import forumD9 from "@/assets/projects/reconversion-palais/drawings-09-coupe-cc.png.asset.json";

// Musée de l'écriture
import museeP1 from "@/assets/projects/musee-de-lecriture/photos-01.jpg.asset.json";
import museeP2 from "@/assets/projects/musee-de-lecriture/photos-02.jpg.asset.json";
import museeP3 from "@/assets/projects/musee-de-lecriture/photos-03.jpg.asset.json";
import museeP4 from "@/assets/projects/musee-de-lecriture/photos-04.jpg.asset.json";
import museeP5 from "@/assets/projects/musee-de-lecriture/photos-05.jpg.asset.json";
import museeP6 from "@/assets/projects/musee-de-lecriture/photos-06.jpg.asset.json";
import museeD1 from "@/assets/projects/musee-de-lecriture/drawings-01-plan-rdc.png.asset.json";
import museeD2 from "@/assets/projects/musee-de-lecriture/drawings-02-plan-sous-sol.png.asset.json";
import museeD3 from "@/assets/projects/musee-de-lecriture/drawings-03-elevation.png.asset.json";
import museeD4 from "@/assets/projects/musee-de-lecriture/drawings-04-coupe-a-a.png.asset.json";
import museeD5 from "@/assets/projects/musee-de-lecriture/drawings-05-coupe-b-b.png.asset.json";

export type ProjectCategory =
  | "Residential Architecture"
  | "Public and Cultural Architecture"
  | "Interior Architecture"
  | "Urban Design"
  | "Academic Projects"
  | "Conceptual Projects"
  | "Competitions";

export type ProjectStatus =
  | "Academic project"
  | "Conceptual project"
  | "Competition"
  | "Built project"
  | "In progress";

export type ImageKind =
  | "render"
  | "photo"
  | "site"
  | "plan"
  | "section"
  | "elevation"
  | "diagram"
  | "sketch"
  | "model"
  | "collage";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  kind?: ImageKind;
  /**
   * "full"  – full width (default)
   * "half"  – sits next to the following "half" image in two columns
   * "contained" – centered, narrower; recommended for drawings
   */
  layout?: "full" | "half" | "contained";
}

export interface Project {
  slug: string; // used in the URL: /projects/<slug>
  title: string;
  published: boolean;
  featured: boolean;
  category: ProjectCategory;
  status?: ProjectStatus;
  location?: string;
  year?: string;
  cover: { src: string; alt: string };
  shortDescription?: string;
  description?: string[]; // paragraphs
  concept?: string[];
  materials?: string[];
  specifications?: { label: string; value: string }[];
  photos?: ProjectImage[]; // Section 3 — Photos & Visualizations
  drawings?: ProjectImage[]; // Section 4 — Architectural Drawings
}

export const projects: Project[] = [
  {
    slug: "halle-evenementielle",
    title: "Halle événementielle",
    published: true,
    featured: true,
    category: "Public and Cultural Architecture",
    status: "Conceptual project",
    location: "Montplaisir",
    cover: {
      src: halleP1.url,
      alt: "Halle événementielle — exterior view",
    },
    shortDescription:
      "[To complete] A one-sentence summary of the project.",
    description: [
      "[To complete] Describe the brief, the site and the main design decisions of the Halle événementielle.",
    ],
    photos: [
      { src: halleP1.url, alt: "Halle événementielle — view 1", kind: "render" },
      { src: halleP2.url, alt: "Halle événementielle — view 2", kind: "render" },
      { src: halleP3.url, alt: "Halle événementielle — view 3", kind: "render", layout: "half" },
      { src: halleP4.url, alt: "Halle événementielle — view 4", kind: "render", layout: "half" },
      { src: halleP5.url, alt: "Halle événementielle — view 5", kind: "render" },
    ],
    drawings: [
      { src: halleD1.url, alt: "Halle événementielle — plan", caption: "Plan", kind: "plan", layout: "contained" },
      { src: halleD2.url, alt: "Halle événementielle — elevation", caption: "Élévation", kind: "elevation", layout: "contained" },
      { src: halleD3.url, alt: "Halle événementielle — section A-A", caption: "Coupe A-A", kind: "section", layout: "contained" },
      { src: halleD4.url, alt: "Halle événementielle — section B-B", caption: "Coupe B-B", kind: "section", layout: "contained" },
    ],
  },
  {
    slug: "forum-arts-el-halfaouine",
    title: "Forum des arts traditionnels d'El Halfaouine",
    published: true,
    featured: true,
    category: "Public and Cultural Architecture",
    status: "Academic project",
    location: "El Halfaouine",
    cover: {
      src: forumP1.url,
      alt: "Forum des arts traditionnels d'El Halfaouine — exterior view",
    },
    shortDescription:
      "[To complete] A one-sentence summary of the project.",
    description: [
      "[To complete] Describe the brief, the site and the main design decisions of the Forum des arts traditionnels.",
    ],
    photos: [
      { src: forumP1.url, alt: "Forum des arts traditionnels — view 1", kind: "render" },
      { src: forumP2.url, alt: "Forum des arts traditionnels — view 2", kind: "render" },
      { src: forumP3.url, alt: "Forum des arts traditionnels — view 3", kind: "render" },
      { src: forumP4.url, alt: "Forum des arts traditionnels — view 4", kind: "render", layout: "half" },
      { src: forumP5.url, alt: "Forum des arts traditionnels — view 5", kind: "render", layout: "half" },
      { src: forumP6.url, alt: "Forum des arts traditionnels — view 6", kind: "render", layout: "half" },
      { src: forumP7.url, alt: "Forum des arts traditionnels — view 7", kind: "render", layout: "half" },
      { src: forumP8.url, alt: "Forum des arts traditionnels — view 8", kind: "render" },
    ],
    drawings: [
      { src: forumD1.url, alt: "Forum des arts traditionnels — ground floor plan", caption: "Plan RDC", kind: "plan", layout: "contained" },
      { src: forumD2.url, alt: "Forum des arts traditionnels — first floor plan", caption: "Plan 1er étage", kind: "plan", layout: "contained" },
      { src: forumD3.url, alt: "Forum des arts traditionnels — second floor plan", caption: "Plan 2ème étage", kind: "plan", layout: "contained" },
      { src: forumD4.url, alt: "Forum des arts traditionnels — basement plan", caption: "Plan sous-sol", kind: "plan", layout: "contained" },
      { src: forumD5.url, alt: "Forum des arts traditionnels — south elevation", caption: "Élévation sud", kind: "elevation", layout: "contained" },
      { src: forumD6.url, alt: "Forum des arts traditionnels — west elevation", caption: "Élévation ouest", kind: "elevation", layout: "contained" },
      { src: forumD7.url, alt: "Forum des arts traditionnels — section AA", caption: "Coupe AA", kind: "section", layout: "contained" },
      { src: forumD8.url, alt: "Forum des arts traditionnels — section BB", caption: "Coupe BB", kind: "section", layout: "contained" },
      { src: forumD9.url, alt: "Forum des arts traditionnels — section CC", caption: "Coupe CC", kind: "section", layout: "contained" },
    ],
  },
  {
    slug: "musee-de-lecriture",
    title: "Musée de l'écriture",
    published: true,
    featured: true,
    category: "Public and Cultural Architecture",
    status: "Competition",
    location: "Centre Urbain Nord",
    cover: {
      src: museeP1.url,
      alt: "Musée de l'écriture — exterior view",
    },
    shortDescription:
      "[To complete] A one-sentence summary of the project.",
    description: [
      "[To complete] Describe the brief, the site and the main design decisions of the Musée de l'écriture.",
    ],
    photos: [
      { src: museeP1.url, alt: "Musée de l'écriture — view 1", kind: "render" },
      { src: museeP2.url, alt: "Musée de l'écriture — view 2", kind: "render", layout: "half" },
      { src: museeP3.url, alt: "Musée de l'écriture — view 3", kind: "render", layout: "half" },
      { src: museeP4.url, alt: "Musée de l'écriture — view 4", kind: "render", layout: "half" },
      { src: museeP5.url, alt: "Musée de l'écriture — view 5", kind: "render", layout: "half" },
      { src: museeP6.url, alt: "Musée de l'écriture — view 6", kind: "render" },
    ],
    drawings: [
      { src: museeD1.url, alt: "Musée de l'écriture — ground floor plan", caption: "Plan RDC", kind: "plan", layout: "contained" },
      { src: museeD2.url, alt: "Musée de l'écriture — basement plan", caption: "Plan sous-sol", kind: "plan", layout: "contained" },
      { src: museeD3.url, alt: "Musée de l'écriture — elevation", caption: "Élévation", kind: "elevation", layout: "contained" },
      { src: museeD4.url, alt: "Musée de l'écriture — section A-A", caption: "Coupe A-A", kind: "section", layout: "contained" },
      { src: museeD5.url, alt: "Musée de l'écriture — section B-B", caption: "Coupe B-B", kind: "section", layout: "contained" },
    ],
  },
];

export const publishedProjects = () => projects.filter((p) => p.published);
export const featuredProjects = () =>
  publishedProjects().filter((p) => p.featured);
export const getProject = (slug: string) =>
  publishedProjects().find((p) => p.slug === slug);
