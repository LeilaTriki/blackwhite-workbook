/**
 * ============================================================
 *  YOUR PROJECTS — edit this file to manage your portfolio.
 * ============================================================
 *
 *  • Images go in:  public/images/projects/<project-slug>/
 *    and are referenced as "/images/projects/<project-slug>/file.jpg"
 *  • Array order = display order on the Projects page.
 *  • featured: true  → appears on the homepage.
 *  • published: false → hidden everywhere.
 *  • Every field marked "?" is optional; leave it out to hide it.
 *
 *  The three entries below are PLACEHOLDERS. Replace them with your own work.
 */

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
  placeholder?: boolean; // shows a "Placeholder" label — remove for real work
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
  images?: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "placeholder-project-01",
    title: "Placeholder Project 01",
    placeholder: true,
    published: true,
    featured: true,
    category: "Residential Architecture",
    status: "Conceptual project",
    location: "Location to be added",
    year: "Year",
    cover: {
      src: "/images/projects/placeholder-project-01/cover.jpg",
      alt: "Placeholder image: white house on a hillside",
    },
    shortDescription:
      "Placeholder — replace with a one-sentence summary of your project.",
    description: [
      "Placeholder text. Replace this paragraph with the full description of your project: the brief, the site and the main design decisions.",
    ],
    concept: [
      "Placeholder text. Describe your design concept and architectural approach here.",
    ],
    materials: ["Placeholder material 1", "Placeholder material 2"],
    specifications: [
      { label: "Area", value: "— m²" },
      { label: "Program", value: "To be added" },
    ],
    images: [
      {
        src: "/images/projects/placeholder-project-01/plan.jpg",
        alt: "Placeholder floor plan drawing",
        caption: "Placeholder — ground floor plan",
        kind: "plan",
        layout: "contained",
      },
      {
        src: "/images/projects/placeholder-project-02/cover.jpg",
        alt: "Placeholder interior image",
        kind: "photo",
        layout: "half",
      },
      {
        src: "/images/projects/placeholder-project-03/cover.jpg",
        alt: "Placeholder model photograph",
        kind: "model",
        layout: "half",
      },
    ],
  },
  {
    slug: "placeholder-project-02",
    title: "Placeholder Project 02",
    placeholder: true,
    published: true,
    featured: true,
    category: "Public and Cultural Architecture",
    status: "Academic project",
    location: "Location to be added",
    year: "Year",
    cover: {
      src: "/images/projects/placeholder-project-02/cover.jpg",
      alt: "Placeholder image: white interior with skylight",
    },
    shortDescription:
      "Placeholder — replace with a one-sentence summary of your project.",
    description: [
      "Placeholder text. Replace with your own project description.",
    ],
  },
  {
    slug: "placeholder-project-03",
    title: "Placeholder Project 03",
    placeholder: true,
    published: true,
    featured: true,
    category: "Competitions",
    status: "Competition",
    location: "Location to be added",
    year: "Year",
    cover: {
      src: "/images/projects/placeholder-project-03/cover.jpg",
      alt: "Placeholder image: white architectural model",
    },
    shortDescription:
      "Placeholder — replace with a one-sentence summary of your project.",
    description: [
      "Placeholder text. Replace with your own project description.",
    ],
  },
];

export const publishedProjects = () => projects.filter((p) => p.published);
export const featuredProjects = () =>
  publishedProjects().filter((p) => p.featured);
export const getProject = (slug: string) =>
  publishedProjects().find((p) => p.slug === slug);
