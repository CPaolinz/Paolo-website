# Paolo Paolini — Research Profile

A two-page academic profile and selected-literature archive, designed around the ideas connecting Paolo Paolini’s work: data models, hypertext, web engineering, multimedia communication, cultural heritage, and technology-supported education.

## Design concept

This is an editorial research profile rather than a conventional personal-brand portfolio. The visual system uses an ink-green hero and publication archive, warm paper reading surfaces, acid-yellow diagram accents, and restrained oxide-red highlights. Fraunces provides editorial headings, DM Sans keeps paragraphs and navigation readable, and IBM Plex Mono is reserved for small metadata. The enlarged local portrait sits inside a clean paper frame over a subtle information-network diagram. Research illustrations share one fixed column and dimensions, so they remain aligned on hover and across screen sizes. The hero is compressed to fit a typical desktop viewport, and navigation uses descriptive labels without decorative numbering.

## Navigation and page flow

The homepage is a continuous profile: the Profile, Research, In practice, and Contact navigation items scroll to their sections without changing pages. Publications is the only separate internal page, because it contains the filterable bibliography. External links in the initiative list are labelled with their destination, rather than using unexplained arrow-only controls. The active navigation underline follows the visible homepage section.

## Pages

- `index.html` — profile, research themes, selected publications, research initiatives, academic background, and institutional contact links.
- `publications.html` — selected bibliography with theme filters and links to publisher or institutional research records.

## Run locally

From this directory:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to Vercel

1. Push this directory to a GitHub repository.
2. Import the repository into Vercel.
3. Select **Other** as the framework preset and set the output directory to `.` if requested. There is no build command or package installation.
4. Deploy.

## Content and assets

The portrait is stored locally at `assets/paolo-paolini-profile.jpg`. Public biography and research areas are cross-checked against the official DEIB profile and HOC-LAB. Education and earlier appointments are based on the curriculum vitae provided for this site. The Fondazione Politecnico di Milano advisory role is from the supplied CV and should be confirmed before publishing.

The selected bibliography is not a complete list of works. Verify metadata and author order against each publisher or institutional record before using the entries as formal citations. Conflicting publication counts were intentionally omitted.

See `SOURCES.md` for research links and source notes.
