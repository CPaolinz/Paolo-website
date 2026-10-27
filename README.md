# Paolo Paolini — Personal Research Site Concept

A first-person personal-site concept about the connected questions in Paolo Paolini’s work: how information is structured, how people navigate it, and how technology can support culture, accessibility, education, and society. The first-person wording is proposed copy from public records and selected publications; Paolo Paolini should review and approve the wording and biographical details before it is published as his personal website.

I’ve shaped this concept to feel like a personal research website rather than a conventional academic portfolio. Its central interaction is an **idea atlas** where readers can move between Data → Structure → Links → Stories → People. The atlas uses a non-chronological relationship map: five theme nodes connect to a central question, while lighter secondary curves show relationships between neighboring themes. Selecting a node updates its highlighted spoke and reveals an explanation plus one linked publication record. On small screens, the dense diagram becomes a readable, keyboard-accessible list of themes.

## Project status

This is a design/development concept, not a verified or approved personal website. The first-person wording, biographical details, and portrait permissions need the owner’s review before publishing.

## Stack

- Next.js 16 App Router
- React 19 + TypeScript
- Hand-authored responsive CSS; no UI framework dependency
- Semantic HTML, keyboard-accessible controls, visible focus states, reduced-motion support
- Scroll-triggered, subtle SVG line reveal in the Through-line section, with a stacked mobile layout and reduced-motion fallback
- Three hand-authored research-journey illustrations: a relational grid, a clean hypertext hub, and an open book connected to learners; all use consistent stroke geometry and palette-aware styling
- Interactive five-node research map with distinct relationship and central-question spokes, active-theme highlighting, and source-linked selected writing
- Dedicated `/publications` route with topic filters and live search
- Page metadata, Open Graph/Twitter card image, and favicon

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm start
```

## Project structure

```text
app/
  layout.tsx               Shared layout and metadata
  page.tsx                 Homepage route
  globals.css              Responsive visual system
  publications/page.tsx    Dedicated publication archive route
  sources/page.tsx         Source notes and editorial transparency route
components/
  SiteHeader.tsx           Responsive navigation
  SiteExperience.tsx       Homepage and interactive research atlas
  PublicationArchive.tsx   Filterable publication archive
lib/
  publications.ts          Structured and filterable bibliography
public/
  paolo-paolini-profile.jpg
  favicon.svg
  og-card.svg / og-card.png
```

## Before public launch

- This is an independent, non-official research profile. It is not affiliated with or endorsed by Paolo Paolini or Politecnico di Milano.
- The portrait is a locally stored crop from a portrait previously supplied with the project materials. Confirm image reuse rights and replace the asset with an authorized original if needed.
- The bibliography is a curated starting point, not a complete or formally validated list. Check author order, issue details, pagination, and availability against the linked source before citing.
- The 1974 record and its note about SQUARE/SQL were provided in the CV supplied for the project. The archive clearly links to a bibliographic search because a definitive open publisher record was not located during this build.
- Appointment details and project descriptions are drawn from institutional sources and the CV text supplied for the project. Reconfirm any current advisory title before publishing it as current; the public pages describe different roles and dates.
- Set the final canonical domain / `metadataBase` only when the site is deployed to a known URL. No domain is invented in this project.

## Latest research-journey refinement

The three research-journey rows use deterministic inline SVG rather than improvised node illustrations. The graphics share a viewBox, stroke system, and circle sizing while using distinct muted blue, terracotta, and ochre accents. The section introduction and row copy were tightened for clarity; the responsive sizes and hover motion are kept subtle.

## Field-work section refinement

The “Where ideas meet the world” section uses three hand-authored SVG illustrations: cultural-heritage architecture with a narrative path, learners gathered around a shared book, and an access route into an open doorway. The supporting copy distinguishes HOC-LAB’s collaborative work from papers I co-authored. The 9,000+ figure is explicitly attributed to the four educational programmes reported in Di Blas and Paolini’s 2014 study.

## Testing notes

The project is authored for current evergreen desktop and mobile browsers. Before publication, run `npm install`, `npm run lint`, and `npm run build`; then test the navigation and publication filters on at least one desktop browser, iOS Safari, and Android Chrome. Real device/browser testing has not been represented as completed here.
## Selected-works section refinement

The selected-works section now uses a low-opacity radial paper-blue wash across the section rather than a gradient contained within the first publication card. The wash fades to the ivory page with no visible rectangular edge. Publication cards include author initials and journal volume, issue, and pages where verified. The editorial synthesis below the cards is labelled as an interpretation and no longer uses quotation-mark styling that could imply it is a direct quote.


## Timeline visual refinement

The “Across Time” timeline now uses the site’s warm paper palette with a very low-opacity blue-grey wash and a minimal terracotta accent, rather than a full pale-blue panel. Text sizes and line contrast were increased for readability. The timeline spine is drawn as row-to-row segments aligned to marker centres; the final segment continues from item 06 to the last row rule instead of disappearing. Desktop and mobile isolated-section previews were checked for the six markers and horizontal overflow, but the full Next.js build and cross-device browser QA still need to be run before deployment.


## Biography, closing statement, header, and footer refinement

The final biography block keeps the approved editorial headline while tightening the factual narrative around Paolini’s education, research areas, teaching, and HOC-LAB role. Current role wording is tied to the lab’s public profile; the biography remains clearly identified as an independent interpretation.

The closing statement is now a responsive two-column composition: the headline and CTA sit in a readable text column, while a restrained SVG relationship map occupies its own visual column. The text is presented as the site's editorial synthesis, not as a quotation. The header navigation uses clearer destinations, includes the Sources page, and supports Escape to close the mobile menu. The footer separates the editorial through-line from further-reading links and repeats the independent-profile disclosure.

The changed sections were previewed with the project CSS at 1440px and 390px widths. The preview showed no horizontal overflow at either width. TSX transpilation and CSS parsing passed. A full Next.js production build and real-device testing remain deployment checks.

## Reading-room map refinement

The `/publications` hero diagram is a conceptual relationship map, not a chronology. Its main visual thread connects Data, Model, Links, and Story; a lower branch links Access with Learning, while Links also connect into Learning. The paths are routed to avoid crossings and terminate beneath their node markers. The central hub uses transparent rings rather than a filled disc. Node labels use the same high-contrast blue as the rest of the archive, and the illustration has a softened paper gradient with a very faint drafting grid. The caption explicitly clarifies that the map is not a timeline.


### Reading Room relationship map
The map distinguishes the structure/link/browsing concepts discussed within HDM (solid lines) from editorial cross-field associations between separate selected works (dashed lines). See `SOURCES.md` for the evidence and limits of this visual interpretation.
