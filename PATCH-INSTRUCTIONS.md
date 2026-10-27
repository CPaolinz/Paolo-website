# First-person narration update

This patch changes the site's narrative voice from a third-person editorial profile to a first-person personal-site concept.

## Updated files

- `components/SiteExperience.tsx` — homepage hero, thematic map, research paths, selected works, timeline, biography, closing section, and footer copy.
- `components/SiteHeader.tsx` — navigation labels and personal-site wordmark.
- `components/PublicationArchive.tsx` — Reading Room introduction, publication interactions, bibliography note, and footer.
- `lib/publications.ts` — publication notes rewritten as first-person summaries while retaining original paper titles, author lists, and source links.
- `app/sources/page.tsx` — first-person source narrative and explicit owner-review note.
- `app/layout.tsx` and `app/publications/page.tsx` — browser and social metadata.
- `public/og-card.svg` and `public/og-card.png` — personal-site social preview graphic.
- `package.json` — project name.
- `README.md` and `SOURCES.md` — project notes and research attribution.

## Apply the patch

1. Back up the existing project.
2. Extract the patch ZIP directly into the existing project root so the `app/`, `components/`, `lib/`, and `public/` paths merge and matching files are replaced.
3. Run `npm install` and `npm run dev` to inspect the site on desktop and mobile.
4. Before public release, have Paolo Paolini review the first-person wording, biographical details, research claims, and image reuse rights. The draft explicitly distinguishes collaborative work from individual authorship.

The full-site ZIP contains the complete updated project. The patch ZIP contains only the files listed above plus this note.
