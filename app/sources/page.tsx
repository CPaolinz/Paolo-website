import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Sources & notes',
  description: 'The records I use to document selected publications, collaborations, and the editorial choices behind this personal-site concept.'
};

const sourceGroups = [
  {
    label: '01 / My background',
    title: 'Start with the record.',
    intro: 'I use institutional pages to verify biographical details, research areas, teaching history, and current affiliations.',
    items: [
      { name: 'Paolo Paolini — DEIB profile', detail: 'Retired professor status, research line “Data, web, and society,” research interests and teaching context.', href: 'https://www.deib.polimi.it/eng/people/details/60294', source: 'Politecnico di Milano' },
      { name: 'HOC-LAB — Research', detail: 'Current lab research context: educational technology, EVOLI, educational chatbots, digital storytelling, and evaluation in real contexts.', href: 'https://www.hoc.polimi.it/en/research/', source: 'HOC-LAB' },
      { name: 'HOC-LAB — About', detail: 'Laboratory context for cultural-heritage communication, learning technology, and the societal project on cognitive health and ageing.', href: 'https://www.hoc.polimi.it/en/about/', source: 'HOC-LAB' },
      { name: 'HOC-LAB — Team and current context', detail: 'The lab’s current team page lists me as Senior Scientific Advisor in Computer Science.', href: 'https://www.hoc.polimi.it/en/home/', source: 'HOC-LAB' },
      { name: 'DOL — Faculty information', detail: 'Additional biographical context and research areas including databases, hypertext, usability, accessibility, cultural heritage, and education.', href: 'https://www.dol.polimi.it/chi-siamo/i-docenti/', source: 'Politecnico di Milano' },
      { name: 'HOC-LAB — Department record', detail: 'Multidisciplinary remit and the relationship between methods, tools, technology-enhanced education, and cultural heritage.', href: 'https://www.deib.polimi.it/eng/deib-labs/details/27', source: 'Politecnico di Milano' }
    ]
  },
  {
    label: '02 / Publications I selected',
    title: 'I follow ideas back to the papers.',
    intro: 'Where I could find them, I link directly to DOIs, institutional repositories, and publisher records rather than repeating bibliographic details without a source.',
    items: [
      { name: 'Properties and Update Semantics of Consistent Views (1988)', detail: 'ACM Transactions on Database Systems, 13(4), 486–524.', href: 'https://doi.org/10.1145/49346.50068', source: 'DOI record' },
      { name: 'HDM — A Model for the Design of Hypertext Applications (1991)', detail: 'Proceedings of Hypertext ’91, pp. 313–328.', href: 'https://doi.org/10.1145/122974.123004', source: 'DOI record' },
      { name: 'HDM — A Model-Based Approach to Hypertext Application Design (1993)', detail: 'ACM Transactions on Information Systems, 11(1), 1–26.', href: 'https://doi.org/10.1145/151480.151483', source: 'DOI record' },
      { name: 'Storytelling for Cultural Heritage (2014)', detail: 'Digital storytelling, multimedia communication, and cultural-heritage interpretation.', href: 'https://re.public.polimi.it/handle/11311/868135', source: 'Politecnico research repository' },
      { name: 'Multi-User Virtual Environments Fostering Collaboration in Formal Education (2014)', detail: 'Educational Technology & Society, 17(1), 54–69; the paper reports the programme-level study of more than 9,000 students.', href: 'https://re.public.polimi.it/handle/11311/868346', source: 'Politecnico research repository' },
      { name: 'Adaptive Conversations for Adaptive Learning (2021)', detail: 'TalkyTutors and sustainable chatbot support for learning.', href: 'https://re.public.polimi.it/handle/11311/1183732', source: 'Politecnico research repository' }
    ]
  },
  {
    label: '03 / Work with colleagues',
    title: 'I work with other people.',
    intro: 'Some work described here grew out of collaboration. I have tried to make that context explicit instead of presenting group projects as my work alone.',
    items: [
      { name: 'Accessible cultural-heritage websites (2004)', detail: 'Research on access to educational and cultural-heritage websites.', href: 'https://re.public.polimi.it/handle/11311/1173380', source: 'Politecnico research repository' },
      { name: 'PoliCultura (2009)', detail: 'Digital storytelling and media literacy initiatives in schools.', href: 'https://re.public.polimi.it/handle/11311/506507', source: 'Politecnico research repository' },
      { name: 'TalkyTutors / educational chatbots (2022)', detail: 'Customizable conversational support in education.', href: 'https://re.public.polimi.it/handle/11311/1226919', source: 'Politecnico research repository' }
    ]
  }
];

function ArrowUpRight() {
  return <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function SourcesPage() {
  return (
    <>
      <a className="skip-link" href="#sources-main">Skip to content</a>
      <SiteHeader />
      <main className="sources-page" id="sources-main">
        <section className="sources-hero page-gutter">
          <p className="eyebrow"><span className="eyebrow-rule" /> SOURCES & EDITORIAL APPROACH</p>
          <h1>I make the connections.<br /><em>I show the sources.</em></h1>
          <p>I’ve brought together selected publications, institutional records, and research collaborations to show the questions connecting my work. I’ve kept source links visible and noted where an interpretation goes beyond what a paper explicitly claims.</p>
          <div className="sources-hero-bottom"><span>MY WORK · PUBLICATION RECORDS · COLLABORATIONS</span><Link href="/publications">Back to my publications →</Link></div>
        </section>
        <section className="sources-main-list page-gutter">
          {sourceGroups.map((group) => (
            <section className="source-group" key={group.label}>
              <div className="source-group-intro"><span>{group.label}</span><h2>{group.title}</h2><p>{group.intro}</p></div>
              <div className="source-items">
                {group.items.map((item) => (
                  <article className="source-item" key={item.name}>
                    <div className="source-item-main"><h3>{item.name}</h3><p>{item.detail}</p><span>{item.source}</span></div>
                    <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Open source: ${item.name}`}><ArrowUpRight /></a>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>
        <section className="editorial-notes page-gutter">
          <div><span className="section-label"><span className="label-dot" /> HOW I’VE PUT THIS TOGETHER</span><h2>Interpretation is not quotation.</h2></div>
          <div className="editorial-notes-copy">
            <p>The headings “I work in the spaces between information and understanding,” “I started with physics. I kept returning to people,” and “I care about what a connection makes possible” are proposed editorial framings, not quotations from my published work. The first-person copy should be reviewed before this draft is presented as my personal website.</p>
            <p>Where I discuss HOC-LAB projects, I distinguish shared work from papers I co-authored. I link to the public records so that authorship and publication details can be checked before formal citation.</p>
            <p>The 1974 book chapter and the note about its relationship to SQUARE/SQL came from the CV supplied for this project. I have left it labelled as a bibliographic search rather than presenting it as a definitive publisher record.</p>
            <p>The portrait used in this concept came from an earlier project archive. Image reuse rights still need to be confirmed before public release.</p>
            <p><strong>Review note:</strong> this is a first-person website concept prepared from public records and supplied project materials. The proposed first-person wording and biographical claims have not been verified or approved by Paolo Paolini. Before public release, he should review the biography, research claims, and portrait permissions.</p>
          </div>
        </section>
      </main>
      <footer className="site-footer page-gutter">
        <div className="footer-top"><Link className="wordmark footer-wordmark" href="/"><span className="wordmark-name">Paolo Paolini</span><span className="wordmark-sub">Research, ideas &amp; people</span></Link><p>I explore the connections<br />between data, the web, and people.</p><div className="footer-links"><Link href="/">Back to my work <ArrowUpRight /></Link><Link href="/publications">My publications <ArrowUpRight /></Link><a href="https://www.deib.polimi.it/eng/people/details/60294" target="_blank" rel="noreferrer">My DEIB profile <ArrowUpRight /></a></div></div>
        <div className="footer-bottom"><span>Personal-site concept · First-person copy pending owner review</span><span>Sources linked for review · Verify details before formal citation.</span><Link href="/">Back to my work ↑</Link></div>
      </footer>
    </>
  );
}
