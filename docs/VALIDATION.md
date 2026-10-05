# Validation — 27 September 2026

- Local link checker passes for all 8 HTML pages, images, assets and anchors.
- Browser layout checks: homepage at 360, 375, 390, 412, 430, 768, 1024, 1280, 1440 and 1920px; no horizontal document overflow.
- All seven project detail pages checked at 360 and 1440px; no horizontal document overflow.
- Computed homepage font is Manrope throughout tested widths; mobile heading alignment is centered.
- Visually reviewed desktop hero, services, project cards, approach, contact and project header; mobile hero and services.
- Mobile navigation opens and closes after section selection; Services anchor resolves correctly.
- All five service SVG icons load successfully after adding the correct SVG MIME type to the local server.
- Exact logo and docs/projects.json verified byte-for-byte against the prior delivered archive.
- Reduced-motion and no-JavaScript fallbacks retained and inspected in source; not re-emulated in this refinement pass.
- Archive integrity checked after packaging. No deployment or external contact action performed.

These are local Chromium checks, not a claim of testing every browser or device.

## Hero refinement — 28 September 2026
Genuine Manrope 800 added and hero drafting grid restored. Browser checks at 360, 375, 390, 430, 768 and 1440px confirm heading weight 800 and no horizontal overflow. Desktop and mobile screenshots reviewed. Exact logo, project records and all seven detail HTML files verified unchanged against the previous archive.

## Vercel configuration fix — 28 September 2026
Plain static site confirmed; no Vite, Next.js, framework dependencies or compilation output. Added vercel.json with framework null, buildCommand npm run build and outputDirectory dist. Node pinned to 24.x. npm install and npm run build succeeded on Node 24.19.0. All 8 local pages and asset references pass; CSS font URLs resolve. Browser checks passed at 360, 375, 390 and 430px; mobile menu opens and follows the Projects anchor. All 7 detail routes loaded with no horizontal overflow or console errors. Every dist file verified byte-for-byte unchanged against the previous delivered archive. Remote Vercel deployment was not performed or verified.

## Node 22 deployment alignment
Supersedes the earlier Node 24 setting. package.json and package-lock.json now specify 22.x; .nvmrc specifies 22. npm install and npm run build both returned exit code 0 in a fresh copy with no node_modules on Node 22.17.1. No engine warnings. All 8 pages, local links, images, and CSS font references pass. All dist files verified unchanged against the previous archive. dist is authored static source and was preserved. vercel.json continues to select framework null and outputDirectory dist. Remote Vercel logs and deployment were not available for verification.

## Client content refinement — 4 October 2026
Build succeeds on Node 22. Seven services and nine grouped client entries confirmed in browser. Homepage checked at 360, 375, 390, 430, 768, 1024 and 1440px with no horizontal overflow; mobile client cards form one centered column and service descriptions occupy at most two lines. All seven icons load. Mobile navigation opens and closes on Services selection. All seven project pages load at 390px without overflow or console errors. Exact logo, project data, project main content, approach section and Node/Vercel configuration verified unchanged against the previous archive. No railway project page added. Featured Projects changed only in its introductory copy. Documents support all new client and capability claims. No remote deployment performed.

## Equal client card treatment
Removed the Railway-only client-rail class and blue top-border rule. All nine cards use the shared neutral 1px border, 10px radius, white background, no default shadow and consistent breakpoint padding. Hover feedback now applies to every client card; mobile press feedback remains shared. Computed styles verified at 1440 and 390px with no horizontal overflow. Content and grid column layout retained. Link/build checker passes.

## CTA hierarchy and project navigation
Homepage primary CTA now targets contact; secondary targets projects. Contact email action uses Discuss Your Project. All seven project pages have a subtle top back link, unchanged project facts and image assets, supporting image after technical content, a shared blue contact CTA and two equal neutral previous/next cards. Browser clicks verified all seven back, previous, next and CTA destinations, and both homepage hero destinations. All seven project pages checked at 360, 390 and 430px without document or navigation-card overflow. Desktop navigation verified at 1440px. Production build passes all eight pages and local references.

## CTA icon and photo-caption cleanup
Hero primary CTA now uses the same northeast arrow markup as the header/menu CTA. Removed visible illustrative/placeholder image captions from homepage and all seven project pages, including the portfolio intro. Image descriptions and project facts retained.
