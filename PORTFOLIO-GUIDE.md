# How to manage your portfolio

## Add your first real project
1. Create a folder: `public/images/projects/my-project/` and put your images there (JPG/WebP, ~2000px wide).
2. Open `src/data/projects.ts`, copy one of the placeholder entries and change:
   - `slug` (URL name, e.g. `my-project`), `title`, `category`, `location`, `year`, `status`
   - `cover.src` → `/images/projects/my-project/cover.jpg`
   - remove `placeholder: true`
3. Add images to `images: [...]`. Use `layout: "half"` on two consecutive images for a two-column row, `"contained"` for plans/sections (never cropped), or `"full"`.
4. Delete placeholder entries you no longer need (and their image folders).

## Control the homepage
- `featured: true` → shown on the homepage. `published: false` → hidden everywhere.
- Order in the array = display order.

## Edit your text
`src/data/site.ts` holds your name, statement, hero image, introduction, About page and contact links.

## Category filters
Filters on the Projects page appear automatically only for categories that have projects.
