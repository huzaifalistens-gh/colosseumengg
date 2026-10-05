# Colosseum Engineering — UX copy audit
Date: 5 October 2026

## Verdict
The updated archive has a sound structure: clear primary buttons, seven specific case studies, named agencies with work descriptions, and a distinct five-step process. It needs focused copy editing, not a redesign. The strongest improvement is making each action disclose its destination. Reusing the word “project” was not itself a usability failure: contact and portfolio were already different destinations with different visual weight. “See Our Work” makes that distinction easier to scan, but no conversion uplift has been measured.

Audit source: the user-supplied colosseum-engineering.zip, extracted into a separate working copy. The original GitHub working folder and prior project deliverables were not edited. No deployment or Git push was performed.

## Flow reviewed and health
1. Arrival / header / hero — good hierarchy, refined terminology. Desktop screenshot 01 records the original. Screenshot 09 records the shorter scope statement, DPR expansion, and See Our Work secondary action. Familiar navigation and exact logo retained.
2. About / services — useful scope, previously repetitive and abstract. Screenshot 02 records From the ground up and the repeated capability paragraph. About now establishes identity, founding year and geography. Service heading now names the work; PPR is written as preliminary reports. Six other service descriptions and all seven service names retained.
3. Portfolio / case studies — good factual detail; redundant labels removed. Screenshot 10 shows the portfolio, 07 the case structure, and 11 the refined mobile CTA/navigation. All seven pages were reviewed. The repeated Key services chip group duplicated the hero chips exactly; only the repeated group was removed. Technical scope, project names, locations, lengths, source notes and images retained.
4. Clients — strong, retain the format. Screenshot 03 shows named agencies and specific work. The introductory sector list was shortened; all nine client records, including full South Eastern Railway scope, remain intact. No carousel or featured border added.
5. Our Approach — strong distinct stages. Screenshot 04 records the connected timeline. Kept Understand, Survey, Analyse, Design & Estimate, Document and all motion. Replaced the generic heading with How we work. Five connected steps. Descriptions now start with actions.
6. Why Colosseum — credible specialist positioning, tightened. Screenshot 05 shows repeated service/sector lists. Kept PMGSY specialisation, repeat government work and the technical team/tools claim. Shortened the first two cards to emphasise in-house coordination and difficult terrain instead of listing services again.
7. Contact / footer — destination clarity improved. Screenshot 06 shows a Discuss Your Project button opening mailto. Screenshot 12 shows Email Your Enquiry and WhatsApp Us. Existing email, phone and addresses remain; no form was invented. Footer navigation retained.
8. Mobile navigation — good in the tested flow. Screenshot 08 shows obvious labels, a clear conversion action and comfortable targets. Menu opens and closes with Escape; background inert handling and focus-trap logic are present. This is not a screen-reader certification.

## Main issues and changes
| Priority | Issue | Refinement | Reason |
|---|---|---|---|
| Medium | Contact button hides that it launches email | Discuss Your Project → Email Your Enquiry at contact only | Names the actual channel; upstream Discuss Your Project still leads to contact |
| Medium | Hero, About and Why repeat a broad capability list | Hero shortened; About focuses on identity; Why focuses on coordination/terrain | Each section adds a different reason to keep reading |
| Medium | DPR is unexplained on first arrival | Detailed Project Reports (DPRs) in hero supporting copy | Makes the headline understandable to non-specialists without renaming technical services |
| Medium | Railway maintenance tile can suggest an offered maintenance service | Tile label → Rail infrastructure | Preserves the photograph's accurate maintenance alt text while avoiding an unsupported service implication |
| Low | Abstract section headlines | Explicit services, assignment and process headings | Improves scanability |
| Low | Repeated case-study Key services chips | Remove duplicate group on all seven pages | Hero chips and detailed scope already convey that information |
| Low | Whole project card becomes a very long accessible link name | View Project: [project title] accessible labels | Unique, concise destinations for link navigation |
| Low | Contact/support copy repeats the service catalogue | Shorter case-study CTA and channel-specific contact invitation | Tells the visitor what to provide next |

## CTA vocabulary
| Intention | Label | Destination |
|---|---|---|
| Start a discussion | Discuss Your Project | Homepage contact section |
| Browse evidence | See Our Work | Homepage project listing |
| Open one assignment | View Project | Named project page |
| Return to listing | Back to Projects | Homepage project listing |
| Move between assignments | Previous Project / Next Project | Adjacent project page |
| Send an email | Email Your Enquiry | Existing mailto address |
| Start a WhatsApp conversation | WhatsApp Us | Existing WhatsApp link |

No Send Enquiry label was used: there is no submission form. No Explore Services button was added because services already have a navigation link. Header and bottom contact CTAs are intentionally repeated across long pages; that supports access at different reading stages rather than adding competing intentions.

## Intentionally unchanged
Exact logo, image files and illustrative disclosures; hero headline and grid; typography, CSS, animation and JavaScript; seven project identities and technical scope; client names and work records; agency divisions and scheme names; contact details; five-stage process; service names; source-note qualifications about construction status; previous/next routes. All project factual blocks and homepage client/contact records were compared with the Git snapshot included in the archive. Styles/scripts match after line-ending normalisation; binary assets match exactly. No claims, statistics, testimonials, completion outcomes or new client scopes were invented.

Technical terminology such as DGPS, LiDAR, GIS, FLS and scheme names is retained for the engineering audience. The most prominent acronym, DPR, is expanded early; PPR in the homepage service description is made readable. Project-specific terminology is preserved to avoid altering contractual meaning.

## Remaining opportunities and limits
- Replace illustrative stock imagery with approved site photographs or drawings when available. Repeated stock bridge imagery limits project differentiation. Existing captions correctly disclose it, and the user previously requested placeholders; no image replacement was made in this copy pass.
- Kolkata Municipal Corporation has no work summary. Keep the name only until a verified scope is supplied; the audit does not invent one.
- Contact still depends on the visitor's email/phone/WhatsApp apps. A future enquiry form could reduce this dependency, but would require a working submission service and confirmation/error handling. None was added or implied.
- The hero primary action uses an external-link-like icon for an internal anchor. This is a minor cue mismatch, not a broken link. Left untouched to respect the requested visual scope.
- Small chips/captions and actual device readability merit a human check. No claim of full WCAG compliance, exhaustive contrast testing, real-device testing or conversion improvement is made. Screenshot and DOM checks do not replace assistive-technology testing.
- The remaining recurrence of survey/design/DPR is intentional where it distinguishes actual project scope. Removing every repeated industry term would reduce clarity.

## Validation
Production build: PASS, all eight pages and local links/images/anchors resolve.
Responsive checks: homepage plus all seven project pages at 360, 375, 390 and 430 CSS pixels; no document or project-navigation horizontal overflow. Desktop homepage and shared project layout also inspected.
Interaction checks: See Our Work reaches #projects; project CTA reaches #contact; all seven back/previous/next links clicked successfully; mobile menu opens and Escape closes it. Mailto/WhatsApp destinations inspected without sending messages or launching a client conversation.
Screenshots: current audit captures only, numbered in this folder. No old screenshots used as evidence.
