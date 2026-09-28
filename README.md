# Colosseum Engineering

A complete, portable HTML/CSS/JavaScript website: homepage and seven individual project pages. The exact supplied logo is used without modification. No framework, CDN, fonts service, API keys or package downloads are required.

## Open locally

1. Extract the ZIP and open the `colosseum-engineering` folder in VS Code.
2. With Node.js 22.x installed, run `npm run dev` in the terminal.
3. Open http://127.0.0.1:4173.

Alternatively open `dist/index.html` directly, or use VS Code Live Server. All links and images work offline. No `npm install` is needed because there are no dependencies.

## Structure

```text
colosseum-engineering/
  dist/                     Complete deployable site; edit these files
    index.html              Homepage
    projects/               Seven project detail HTML files
    assets/
      styles.css            Shared responsive styles
      site.js               Accessible mobile navigation
      images/               Original logo and replaceable stock photos
  docs/
    CONTENT-SOURCES.md      PDF evidence and editorial decisions
    PHOTO-CREDITS.md        Photo origins and license
    projects.json          Editorial reference for project facts
  scripts/                  Local server and link checker
  .vscode/                  Editor / Live Server settings
  .editorconfig
  .gitignore
  package.json
  README.md
```

## Replace photos

Replace JPGs inside `dist/assets/images/` using the same filenames. Each project has its own image named after its page, such as `chapra-river-bridge.jpg`. That single file appears on its homepage card and detail page. `road-construction.jpg` is the homepage hero; `building-construction.jpg` is the About photo. Original category stock copies are retained for convenience.

Prefer landscape photographs at least 1600px wide. Update the relevant `alt` text and remove the illustrative caption only after supplying a genuine project photo. The homepage project introduction also identifies all images as placeholders; revise it when appropriate. Do not replace `logo.png` with a redraw: this is the original supplied file.

## Edit content

Edit `dist/index.html` and `dist/projects/*.html` directly. Shared layout styles are in `dist/assets/styles.css`. The JSON in `docs/` records the sourced content; it is not a runtime data feed. Keep the source ledger updated when changing factual claims. Header and footer markup is repeated in the eight HTML files for simple offline use.

Contact actions open email or phone applications. No form backend is required, and the site does not pretend to submit enquiries. Contact details are sourced from the July 2025 Karatia work order; verify they remain current before publishing.

## Check and commit

```sh
npm run check
git init
git add .
git commit -m "Build Colosseum Engineering website"
```

Add your own remote before pushing. No Git account, remote or commit is created automatically.

## Publish

Upload the contents of `dist/` to a static host. `npm run build` validates the already-built site; there is no compilation step. Publish only `dist/`, not the editorial `docs/` folder. The source PDFs are intentionally not bundled as public downloads. No site has been published as part of this local delivery.

## Content notes

All project descriptions are based on the seven supplied PDFs. The original five-step Our Approach remains connected horizontally on desktop and vertically on mobile. No unverified project completion dates, financial totals, testimonials or statistics are used. Stock images are clearly identified as illustrative. See `docs/CONTENT-SOURCES.md` and `docs/PHOTO-CREDITS.md`.


## Motion and navigation update

The existing site now includes an animated hamburger-to-close button, a mobile navigation sheet, touch feedback, staggered hero entrance, one-time scroll reveals, project-image hover zoom, desktop-only subtle hero parallax, and a scroll-progress timeline. Previous and next links connect all seven project pages. No dependencies were added.

The mobile sheet supports Escape, keyboard focus containment, background scroll locking and scroll restoration. Navigation remains available with JavaScript disabled. Reduced-motion preferences disable animated effects and keep all content accessible.

The WhatsApp link uses the existing documented business telephone number (+91 62943 81886). Confirm it is enabled for WhatsApp before publishing. No message is sent automatically and no enquiry submission is simulated.

## Unified design update

All eight pages now share self-hosted Manrope typography, consistent spacing, image treatment, tags, cards, buttons and motion. Local Lucide service icons and their license are included. See docs/DESIGN-SYSTEM.md and docs/VALIDATION.md.

## Vercel deployment

This is plain static HTML/CSS/JavaScript, not Vite or Next.js. The deployable site is committed in `dist/`; `npm run build` validates it rather than generating another folder. Keep all of `dist/` tracked.

Use these settings under Project > Settings > Build and Deployment:

| Setting | Value |
| --- | --- |
| Framework Preset | Other |
| Build Command | npm run build |
| Output Directory | dist |
| Install Command | Default (npm install) |
| Node.js Version | 22.x |
| Root Directory | Repository root, if package.json and vercel.json are there |

If your repository contains this project inside a subfolder, select that exact subfolder as Root Directory (for this workspace layout: `outputs/colosseum-engineering`). Never select `dist` as Root Directory: it is the Output Directory.

The checked-in vercel.json specifies the output directory and build command. Replace any old `public` dashboard override with `dist`. Commit and push the updated project, including package-lock.json and vercel.json, then redeploy. Existing `/projects/*.html` routes remain ordinary static files; no SPA rewrite is required.

