'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import SiteHeader from '@/components/SiteHeader';

type NodeKey = 'data' | 'structure' | 'links' | 'stories' | 'people';

type AtlasReference = {
  title: string;
  year: string;
  authors: string;
  venue: string;
  href: string;
  source: string;
};

type AtlasNode = {
  key: NodeKey;
  label: string;
  short: string;
  mapNote: string;
  title: string;
  body: string;
  reference: AtlasReference;
  href: string;
};

const atlasNodes: AtlasNode[] = [
  {
    key: 'data', label: 'Data', short: '01', mapNote: 'Consistent views',
    title: 'I study how data can stay consistent as it changes.',
    body: 'In this paper, my co-authors and I examined consistent views in databases and how updates to a view relate to underlying data. The question was how to keep different representations of information logically coherent.',
    reference: {
      title: 'Properties and Update Semantics of Consistent Views', year: '1988',
      authors: 'G. Gottlob, P. Paolini & R. Zicari',
      venue: 'ACM Transactions on Database Systems, 13(4), 486–524',
      href: 'https://doi.org/10.1145/49346.50068', source: 'DOI record'
    },
    href: '/publications?theme=data'
  },
  {
    key: 'structure', label: 'Structure', short: '02', mapNote: 'Design model',
    title: 'I model the information space before building it.',
    body: 'With Franca Garzotto and Daniel Schwabe, I helped develop the Hypertext Design Model (HDM). It describes applications through typed entities, component hierarchies, and perspectives—so we can model an information space before deciding how to implement it.',
    reference: {
      title: 'HDM — A Model for the Design of Hypertext Applications', year: '1991',
      authors: 'F. Garzotto, P. Paolini & D. Schwabe',
      venue: 'Proceedings of Hypertext ’91, pp. 313–328',
      href: 'https://doi.org/10.1145/122974.123004', source: 'DOI record'
    },
    href: '/publications?theme=hypertext'
  },
  {
    key: 'links', label: 'Links', short: '03', mapNote: 'Link semantics',
    title: 'I treat navigation as part of the design.',
    body: 'In our HDM work, we distinguished structural, application, and perspective links, alongside browsing semantics that define how people move through a hypertext application. For me, navigation belongs to the design itself—not as decoration added later.',
    reference: {
      title: 'HDM — A Model-Based Approach to Hypertext Application Design', year: '1993',
      authors: 'F. Garzotto, P. Paolini & D. Schwabe',
      venue: 'ACM Transactions on Information Systems, 11(1), 1–26',
      href: 'https://doi.org/10.1145/151480.151483', source: 'DOI record'
    },
    href: '/publications?theme=hypertext'
  },
  {
    key: 'stories', label: 'Stories', short: '04', mapNote: 'Cultural heritage',
    title: 'I use stories to interpret cultural heritage.',
    body: 'With Nicoletta Di Blas, I explored digital stories built around visual material and audio, with optional text for detail. Our chapter considers how this format can communicate cultural heritage and architecture across devices.',
    reference: {
      title: 'Storytelling for Cultural Heritage', year: '2014',
      authors: 'P. Paolini & N. Di Blas',
      venue: 'In A. Contin, P. Paolini & R. Salerno (Eds.), Innovative Technologies in Urban Mapping, pp. 33–48',
      href: 'https://re.public.polimi.it/handle/11311/868135', source: 'Politecnico di Milano repository'
    },
    href: '/publications?theme=culture'
  },
  {
    key: 'people', label: 'People', short: '05', mapNote: 'Learning & access',
    title: 'I design learning around people, not just tools.',
    body: 'In a study with Nicoletta Di Blas, we examined four programmes (2002–2009) involving more than 9,000 students aged 12–18 and explored collaboration in multi-user virtual environments. Our conclusion was measured: technology can mediate learning, but activities and school context must also serve clear educational goals.',
    reference: {
      title: 'Multi-User Virtual Environments Fostering Collaboration in Formal Education', year: '2014',
      authors: 'N. Di Blas & P. Paolini',
      venue: 'Educational Technology & Society, 17(1), 54–69',
      href: 'https://re.public.polimi.it/handle/11311/868346', source: 'Politecnico di Milano repository'
    },
    href: '/publications?theme=learning'
  }
];

const heroThreads: { key: NodeKey; number: string; label: string; note: string; position: string }[] = [
  { key: 'data', number: '01', label: 'Data models', note: 'How I think about data', position: 'hero-thread-data' },
  { key: 'links', number: '02', label: 'Hypertext & web', note: 'How I design connections', position: 'hero-thread-hypertext' },
  { key: 'stories', number: '03', label: 'Cultural memory', note: 'How I tell stories about places', position: 'hero-thread-culture' },
  { key: 'people', number: '04', label: 'Learning & access', note: 'Who gets included', position: 'hero-thread-learning' },
];

const thesisThreads: { key: NodeKey; number: string; label: string; note: string }[] = [
  { key: 'data', number: '01', label: 'Data models', note: 'How I think about data' },
  { key: 'links', number: '02', label: 'Hypertext', note: 'How I design connections' },
  { key: 'stories', number: '03', label: 'Cultural heritage', note: 'How I tell stories about places' },
  { key: 'people', number: '04', label: 'Learning & access', note: 'Who gets included' },
];

type JourneyGraphicKind = 'data' | 'hypertext' | 'culture';

type Journey = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  result: string;
  theme: 'blue' | 'coral' | 'gold';
  graphic: JourneyGraphicKind;
};

const journeys: Journey[] = [
  {
    number: '01', eyebrow: 'DATA & SYSTEMS', title: 'I work to make information dependable.',
    description: 'I explored how data can be represented and updated while preserving consistency through relational models and consistent views.',
    result: 'I want to build on foundations people can rely on.', theme: 'blue', graphic: 'data'
  },
  {
    number: '02', eyebrow: 'HYPERTEXT & THE WEB', title: 'I make complexity navigable.',
    description: 'I treated structure and links as part of the experience, shaping how readers move through information.',
    result: 'For me, navigation is part of the design—not an afterthought.', theme: 'coral', graphic: 'hypertext'
  },
  {
    number: '03', eyebrow: 'CULTURE, ACCESS & LEARNING', title: 'I ask what makes technology matter.',
    description: 'With colleagues, I explored digital storytelling, accessible cultural websites, and collaborative learning—with an emphasis on what people can experience, understand, and share.',
    result: 'I believe technology works best when people can take part, learn, and create.', theme: 'gold', graphic: 'culture'
  }
];

function JourneyGraphic({ kind }: { kind: JourneyGraphicKind }) {
  if (kind === 'data') {
    return (
      <svg className="journey-drawing journey-drawing-data" viewBox="0 0 120 96" fill="none" aria-hidden="true">
        <rect className="grid-highlight" x="43" y="30" width="28" height="17" rx="1" />
        <rect className="grid-highlight grid-highlight-secondary" x="71" y="47" width="28" height="18" rx="1" />
        <rect x="15" y="13" width="84" height="69" rx="1.5" />
        <path d="M15 30H99M15 47H99M15 65H99M43 13V82M71 13V82" />
        <circle className="grid-point" cx="43" cy="30" r="2.4" />
        <circle className="grid-point" cx="71" cy="47" r="2.4" />
        <circle className="grid-point" cx="43" cy="65" r="2.4" />
      </svg>
    );
  }

  if (kind === 'hypertext') {
    return (
      <svg className="journey-drawing journey-drawing-hypertext" viewBox="0 0 120 96" fill="none" aria-hidden="true">
        <path d="M29 25L52 42M91 25L68 42M29 71L52 54M91 71L68 54" />
        <path className="link-echo" d="M34 20Q60 8 86 20M34 76Q60 88 86 76" />
        <circle className="link-node" cx="23" cy="21" r="5.2" />
        <circle className="link-node" cx="97" cy="21" r="5.2" />
        <circle className="link-node" cx="23" cy="75" r="5.2" />
        <circle className="link-node" cx="97" cy="75" r="5.2" />
        <circle className="link-hub" cx="60" cy="48" r="8.5" />
        <circle className="link-hub-dot" cx="60" cy="48" r="2" />
      </svg>
    );
  }

  return (
    <svg className="journey-drawing journey-drawing-culture" viewBox="0 0 120 96" fill="none" aria-hidden="true">
      <path className="reader-link" d="M28 24L40 39M92 24L80 39M60 17V35" />
      <circle className="reader-head" cx="25" cy="20" r="5" />
      <circle className="reader-head" cx="60" cy="13" r="5" />
      <circle className="reader-head" cx="95" cy="20" r="5" />
      <path className="book-page" d="M15 44Q35 36 58 46V78Q36 67 15 76Z" />
      <path className="book-page" d="M62 46Q85 36 105 44V76Q84 67 62 78Z" />
      <path className="book-spine" d="M60 45V79M22 53Q36 49 50 55M22 63Q36 59 50 65M70 55Q84 49 98 53M70 65Q84 59 98 63" />
      <path className="book-baseline" d="M12 81Q36 75 58 83Q82 75 108 81" />
    </svg>
  );
}

const milestones = [
  { year: '1974', title: 'Models for data', text: 'With G. Bracchi and A. Fedeli, I explored a multilevel relational model and the question of how information should be represented.' },
  { year: '1988', title: 'Meaning through change', text: 'With my co-authors, I examined how database views can change while remaining consistent with the underlying data.' },
  { year: '1991–93', title: 'Hypertext becomes a design discipline', text: 'With Franca Garzotto and Daniel Schwabe, I helped develop HDM, a systematic way to model hypertext applications and their relationships.' },
  { year: '2004', title: 'Access is part of the experience', text: 'With colleagues, I explored accessible educational and cultural-heritage websites—and asked who can meaningfully use a digital experience.' },
  { year: '2009–14', title: 'Learning through making and collaboration', text: 'Through work on PoliCultura, digital storytelling, and multi-user virtual environments, I explored how learners can make and share knowledge together.' },
  { year: '2021–22', title: 'Conversation as a learning interface', text: 'With co-authors, I explored TalkyTutors and educational chatbots as ways to support more adaptive learning pathways.' }
];

function ArrowUpRight({ size = 16 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}


export default function SiteExperience() {
  const [activeNode, setActiveNode] = useState<NodeKey>('links');
  const [thesisInView, setThesisInView] = useState(false);
  const thesisRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const section = thesisRef.current;
    if (!section) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      setThesisInView(true);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setThesisInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  const selectedNode = atlasNodes.find((node) => node.key === activeNode) ?? atlasNodes[2];

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero page-gutter" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-rule" /> I FOLLOW QUESTIONS, NOT SILOS</p>
            <h1>I work in the spaces between <em>information</em> and understanding.</h1>
            <p className="hero-lede">I have worked across database models, hypertext, cultural heritage, and collaborative learning. Across these fields, I keep returning to one question: how can technology help people navigate, interpret, and share knowledge?</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#atlas">See how my ideas connect <ArrowRight /></a>
              <Link className="text-link" href="/publications">Read my publications <ArrowUpRight /></Link>
            </div>
            <div className="hero-footnote"><span className="footnote-line" /> A few paths through my research and ideas</div>
          </div>
          <div className="hero-art" aria-label="A visual map of connected themes in my research">
            <Image
              src="/paolo-research-collage.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
              className="hero-collage"
            />
            <div className="hero-art-wash" aria-hidden="true" />
            <div className="hero-art-stamp" aria-hidden="true"><span>THE IDEA ATLAS</span><span>FOUR PATHS · ONE QUESTION</span></div>
            <div className="portrait-card">
              <div className="portrait-frame"><Image src="/paolo-paolini-profile.jpg" alt="Portrait of me, Paolo Paolini" width={383} height={511} preload sizes="(max-width: 760px) 42vw, 19vw" /></div>
            <div className="portrait-caption"><span>Paolo Paolini</span><span>Data · Hypertext · Multimedia</span></div>
            </div>
            <nav className="hero-threads" aria-label="Explore my research themes">
              {heroThreads.map((thread) => (
                <a
                  key={thread.key}
                  className={`hero-thread ${thread.position}`}
                  href="#atlas"
                  onClick={() => setActiveNode(thread.key)}
                  aria-label={`Explore ${thread.label}: ${thread.note}`}
                >
                  <span className="hero-thread-number">{thread.number}</span>
                  <span className="hero-thread-copy"><strong>{thread.label}</strong><small>{thread.note}</small></span>
                  <span className="hero-thread-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="hero-bottomline"><span>From data models to the classroom</span><span className="scroll-note">SCROLL TO FOLLOW THE THREAD <span className="scroll-arrow">↓</span></span></div>
        </section>

        <section
          className={`opening-thesis page-gutter ${thesisInView ? 'is-visible' : ''}`}
          aria-labelledby="thesis-title"
          ref={thesisRef}
        >
          <div className="section-label"><span className="label-dot" /> THE IDEA THAT HOLDS IT TOGETHER</div>
          <div className="thesis-main">
            <h2 id="thesis-title">Different fields.<br /><span>One question I keep returning to.</span></h2>
            <div className="thesis-copy">
              <p className="thesis-question">How can I shape information so people can use it, move through it, learn from it, and make it their own?</p>
              <p className="thesis-context">It connects my early work on databases and hypertext with later explorations of digital storytelling, accessibility, cultural heritage, and collaborative education. The subjects change; my concern for the person on the other side remains.</p>
            </div>
          </div>
          <nav className="thesis-thread" aria-label="Follow the through-line across four research themes">
            <svg className="thesis-thread-svg" viewBox="0 0 1000 44" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="thesis-thread-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--blue)" />
                  <stop offset="48%" stopColor="var(--coral)" />
                  <stop offset="100%" stopColor="var(--blue)" />
                </linearGradient>
              </defs>
              <path className="thesis-thread-path" d="M125 22 C215 22 275 9 375 20 S530 35 625 20 S780 10 875 22" />
              <circle cx="125" cy="22" r="4" />
              <circle cx="375" cy="20" r="4" />
              <circle cx="625" cy="20" r="4" />
              <circle cx="875" cy="22" r="4" />
            </svg>
            {thesisThreads.map((thread) => (
              <a
                key={thread.key}
                className={`thesis-thread-point ${activeNode === thread.key ? 'is-active' : ''}`}
                href="#atlas"
                onClick={() => setActiveNode(thread.key)}
                aria-current={activeNode === thread.key ? 'true' : undefined}
                aria-label={`Explore ${thread.label}. ${thread.note}. Opens this theme in the idea atlas.`}
              >
                <span className="thesis-thread-marker" aria-hidden="true">{thread.number}</span>
                <span className="thesis-thread-copy"><strong>{thread.label}</strong><small>{thread.note}</small></span>
                <span className="thesis-thread-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <div className="thesis-thread-foot"><span>FOLLOW A PATH THROUGH MY WORK</span><span>STRUCTURE <i>→</i> CONNECTION <i>→</i> MEANING <i>→</i> PEOPLE</span></div>
        </section>

        <section className="atlas-section page-gutter" id="atlas" aria-labelledby="atlas-title">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-rule" /> IDEAS THAT CONNECT MY WORK</p>
              <h2 id="atlas-title">The connections I follow.</h2>
            </div>
            <p className="section-intro">Choose a theme to see how I approached it and open a paper I co-authored.</p>
          </div>
          <div className="atlas-layout">
            <div className="atlas-map" role="group" aria-label="Interactive research map with five connected themes">
              <div className="atlas-map-top"><span>A MAP OF RELATED IDEAS</span><span>SELECT A NODE</span></div>
              <svg className="atlas-lines" viewBox="0 0 800 560" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                <g className="atlas-relationships" fill="none" stroke="#8caaba" strokeWidth="1.35" strokeDasharray="3 7" strokeLinecap="round">
                  <path className={`atlas-relationship-line ${activeNode === 'data' || activeNode === 'structure' ? 'is-related' : ''}`} d="M 194 151 C 236 128, 282 105, 328 100" />
                  <path className={`atlas-relationship-line ${activeNode === 'structure' || activeNode === 'links' ? 'is-related' : ''}`} d="M 472 100 C 526 105, 568 137, 606 178" />
                  <path className={`atlas-relationship-line ${activeNode === 'links' || activeNode === 'stories' ? 'is-related' : ''}`} d="M 676 233 C 695 283, 661 348, 630 392" />
                  <path className={`atlas-relationship-line ${activeNode === 'stories' || activeNode === 'people' ? 'is-related' : ''}`} d="M 538 420 C 451 465, 279 465, 194 420" />
                  <path className={`atlas-relationship-line ${activeNode === 'people' || activeNode === 'data' ? 'is-related' : ''}`} d="M 125 391 C 82 339, 82 230, 125 186" />
                </g>
                <g className="atlas-spokes" fill="none" stroke="#a9c5d2" strokeWidth="1.6" strokeLinecap="round">
                  <path className={`atlas-spoke ${activeNode === 'data' ? 'is-active' : ''}`} d="M 195 157 C 241 166, 281 211, 326 247" />
                  <path className={`atlas-spoke ${activeNode === 'structure' ? 'is-active' : ''}`} d="M 400 127 C 400 150, 400 171, 400 190" />
                  <path className={`atlas-spoke ${activeNode === 'links' ? 'is-active' : ''}`} d="M 604 202 C 560 210, 521 232, 484 254" />
                  <path className={`atlas-spoke ${activeNode === 'stories' ? 'is-active' : ''}`} d="M 585 392 C 550 370, 510 348, 460 335" />
                  <path className={`atlas-spoke ${activeNode === 'people' ? 'is-active' : ''}`} d="M 195 398 C 245 375, 288 348, 340 335" />
                </g>
              </svg>
              <div className="atlas-core" role="note" aria-label="Central question: how should information serve people?">
                <span>THE CENTRAL QUESTION</span>
                <strong>How should<br />information<br /><em>serve people?</em></strong>
              </div>
              {atlasNodes.map((node) => (
                <button
                  className={`atlas-node node-${node.key} ${activeNode === node.key ? 'is-active' : ''}`}
                  key={node.key}
                  type="button"
                  onClick={() => setActiveNode(node.key)}
                  aria-pressed={activeNode === node.key}
                  aria-label={`Explore ${node.label}: ${node.mapNote}`}
                >
                  <span className="node-number">{node.short}</span>
                  <span className="node-label">{node.label}</span>
                  <span className="node-small">{node.mapNote}</span>
                </button>
              ))}
              <div className="atlas-map-foot"><span>TRACE A CONNECTION THROUGH MY WORK</span><span>5 THEMES · 5 SELECTED PAPERS</span></div>
            </div>
            <div className="atlas-detail" aria-live="polite" aria-atomic="true">
              <div className="detail-topline"><span>{selectedNode.short}</span><span>{selectedNode.label.toUpperCase()}</span></div>
              <h3>{selectedNode.title}</h3>
              <p>{selectedNode.body}</p>
              <div className="detail-work">
                <span className="detail-work-label">A PAPER I CO-AUTHORED · {selectedNode.reference.year}</span>
                <a className="detail-reference" href={selectedNode.reference.href} target="_blank" rel="noreferrer" aria-label={`Open publication record: ${selectedNode.reference.title}`}>
                  <span className="detail-reference-title">{selectedNode.reference.title}</span>
                  <span className="detail-reference-meta">{selectedNode.reference.authors}</span>
                  <span className="detail-reference-meta">{selectedNode.reference.venue}</span>
                  <span className="detail-reference-source">{selectedNode.reference.source} <ArrowUpRight size={13} /></span>
                </a>
              </div>
              <Link className="detail-link" href={selectedNode.href}>More of my work in this theme <ArrowRight /></Link>
              <div className="detail-bottomnote"><span className="tiny-node" /> A selection, not my complete bibliography.</div>
            </div>
          </div>
        </section>

        <section className="journeys-section page-gutter" id="journeys" aria-labelledby="journeys-title">
          <div className="journeys-heading">
            <p className="eyebrow"><span className="eyebrow-rule" /> THREE PATHS THROUGH MY WORK</p>
            <h2 id="journeys-title">I moved from building systems<br />to building <em>understanding.</em></h2>
            <p>My work has moved from data systems to hypertext, cultural heritage, and learning. The question that keeps returning is this: how can design help people make sense of information?</p>
          </div>
          <div className="journey-list">
            {journeys.map((journey) => (
              <article className={`journey-row journey-${journey.theme}`} key={journey.number}>
                <div className="journey-num">{journey.number}</div>
                <div className="journey-title"><span>{journey.eyebrow}</span><h3>{journey.title}</h3></div>
                <div className="journey-description"><p>{journey.description}</p><span className="journey-result">{journey.result}</span></div>
                <div className="journey-graphic" aria-hidden="true">
                  <JourneyGraphic kind={journey.graphic} />
                </div>
              </article>
            ))}
          </div>
          <div className="journey-note"><span>A PRINCIPLE I RETURN TO</span><p>For me, technology is a means. The human experience is the reason.</p></div>
        </section>

        <section className="field-section page-gutter" aria-labelledby="field-title">
          <div className="field-intro">
            <p className="eyebrow"><span className="eyebrow-rule" /> WHERE MY WORK MEETS THE WORLD</p>
            <h2 id="field-title">Ideas should leave the lab.</h2>
            <p>Much of this work has been collaborative. With colleagues in HOC-LAB, I explored multimedia communication, cultural heritage, and education by designing and evaluating technology in real settings, always asking who it serves and what it makes possible.</p>
            <a className="text-link" href="https://www.hoc.polimi.it/en/research/" target="_blank" rel="noreferrer">Explore the HOC-LAB research context <ArrowUpRight /></a>
          </div>
          <div className="field-cards">
            <article className="field-card field-story">
              <div className="field-card-illustration story-illustration" aria-hidden="true">
                <svg className="field-art" viewBox="0 0 320 180" focusable="false">
                  <path className="art-ground" d="M42 145H278" />
                  <path className="art-building-fill" d="M81 76L160 36L239 76Z" />
                  <path d="M74 78H246M82 84H238M89 129H231M80 136H240" />
                  <path d="M99 85V128M119 85V128M141 85V128M179 85V128M201 85V128M221 85V128" />
                  <path d="M145 128V103C145 84 175 84 175 103V128" />
                  <path d="M98 65L160 34L222 65" />
                  <path className="art-accent" d="M26 151C47 151 52 143 69 143H251C268 143 274 132 294 132" />
                  <circle className="art-accent-fill" cx="26" cy="151" r="4" />
                  <circle className="art-accent-fill" cx="69" cy="143" r="3" />
                  <circle className="art-accent-fill" cx="294" cy="132" r="4" />
                  <path className="art-detail" d="M111 95h6m26 0h-6m52 0h6m26 0h-6" />
                </svg>
              </div>
              <div className="field-card-copy">
                <span className="field-category">CULTURAL HERITAGE</span>
                <h3>I use stories to bring places alive.</h3>
                <p>In collaborative projects, I explored how images, sound, and narrative can connect places and collections with the histories they hold.</p>
                <a href="https://re.public.polimi.it/handle/11311/868135" target="_blank" rel="noreferrer" className="field-card-link">Read the chapter <ArrowUpRight /></a>
              </div>
            </article>
            <article className="field-card field-learn">
              <div className="field-card-illustration learn-illustration" aria-hidden="true">
                <svg className="field-art" viewBox="0 0 320 180" focusable="false">
                  <path className="art-ground" d="M42 146H278" />
                  <circle className="art-person-head" cx="82" cy="56" r="10" />
                  <circle className="art-person-head" cx="160" cy="42" r="10" />
                  <circle className="art-person-head" cx="238" cy="56" r="10" />
                  <path className="art-person" d="M56 109C57 88 67 78 82 78C96 78 106 88 108 109M132 96C133 72 143 64 160 64C177 64 187 72 188 96M212 109C214 88 224 78 238 78C253 78 263 88 264 109" />
                  <path className="art-table" d="M58 111H262M76 111V145M244 111V145" />
                  <path className="art-book" d="M119 111Q140 101 160 112Q180 101 201 111V137Q180 127 160 138Q140 127 119 137Z" />
                  <path d="M160 112V138M126 117Q142 112 153 118M126 124Q142 119 153 125M167 118Q180 112 194 117M167 125Q180 119 194 124" />
                  <circle className="art-accent-fill" cx="119" cy="111" r="3" />
                  <circle className="art-accent-fill" cx="201" cy="111" r="3" />
                </svg>
              </div>
              <div className="field-card-copy">
                <span className="field-category">LEARNING & COLLABORATION</span>
                <h3>I design the experience, not just the tool.</h3>
                <p>In our studies of multi-user learning environments, I found that collaboration depended on more than the platform. Activities, teachers, students, and school context all mattered.</p>
                <a href="https://re.public.polimi.it/handle/11311/868346" target="_blank" rel="noreferrer" className="field-card-link">Read the study <ArrowUpRight /></a>
              </div>
            </article>
            <article className="field-card field-access">
              <div className="field-card-illustration access-illustration" aria-hidden="true">
                <svg className="field-art" viewBox="0 0 320 180" focusable="false">
                  <path className="art-ground" d="M28 145H292" />
                  <path d="M206 144V63C206 49 216 40 230 40H260V144" />
                  <path className="art-door" d="M229 144V62L251 54V144Z" />
                  <circle className="art-accent-fill" cx="244" cy="100" r="2.2" />
                  <path className="art-person" d="M52 120C53 108 58 102 66 102C74 102 79 108 80 120M93 113C94 100 100 94 108 94C116 94 122 100 123 113M132 120C133 108 138 102 146 102C154 102 159 108 160 120" />
                  <circle className="art-person-head" cx="66" cy="89" r="6" />
                  <circle className="art-person-head" cx="108" cy="81" r="6" />
                  <circle className="art-person-head" cx="146" cy="89" r="6" />
                  <path className="art-accent" d="M30 145H80L140 127H204" />
                  <circle className="art-accent-fill" cx="30" cy="145" r="3" />
                  <circle className="art-accent-fill" cx="204" cy="127" r="3" />
                </svg>
              </div>
              <div className="field-card-copy">
                <span className="field-category">ACCESS, SOCIETY & AGEING</span>
                <h3>I treat access as part of the design.</h3>
                <p>With collaborators, I explored how cultural-heritage websites could be made accessible to blind users. Separately, the wider research community investigated persuasive communication and cognitive health in later life.</p>
                <a href="https://www.hoc.polimi.it/en/about/" target="_blank" rel="noreferrer" className="field-card-link">More about the research group <ArrowUpRight /></a>
              </div>
            </article>
          </div>
          <div className="research-evidence-rail">
            <div className="research-evidence-number"><span>ONE COLLABORATIVE STUDY</span><strong>9,000<span>+</span></strong></div>
            <div className="research-evidence-copy"><h3>What I learned from collaboration.</h3><p>In a 2014 study with Nicoletta Di Blas, we examined four programmes (2002–2009), involving students aged 12–18 across 18 European countries, Israel, and the United States. The study highlighted collaboration and the importance of purposeful activities and school context. The figure refers to those programmes, not to an individual achievement.</p></div>
            <a href="https://re.public.polimi.it/handle/11311/868346" target="_blank" rel="noreferrer">Read the study <ArrowUpRight /></a>
          </div>
          <p className="collaboration-note"><span className="note-mark">✳</span> These examples come from collaborative HOC-LAB projects and papers I co-authored with colleagues.</p>
        </section>

        <section className="evidence-section page-gutter" aria-labelledby="evidence-title">
          <div className="evidence-header"><div><p className="eyebrow"><span className="eyebrow-rule" /> SELECTED WORK</p><h2 id="evidence-title">Three papers. A wider conversation.</h2></div><Link className="text-link" href="/publications">Explore my publications <ArrowRight /></Link></div>
          <div className="evidence-grid">
            <article className="evidence-item evidence-featured"><span className="evidence-year">1993 <i>·</i> HYPERTEXT · WITH CO-AUTHORS</span><h3>HDM—A Model-Based Approach to Hypertext Application Design</h3><p className="evidence-authors">F. Garzotto · P. Paolini · D. Schwabe</p><div className="evidence-bottom"><span>ACM Transactions on Information Systems · 11(1), 1–26</span><a href="https://doi.org/10.1145/151480.151483" target="_blank" rel="noreferrer" aria-label="Open the 1993 HDM paper DOI"><ArrowUpRight /></a></div></article>
            <article className="evidence-item"><span className="evidence-year">1988 <i>·</i> DATABASES · WITH CO-AUTHORS</span><h3>Properties and Update Semantics of Consistent Views</h3><p className="evidence-authors">G. Gottlob · P. Paolini · R. Zicari</p><div className="evidence-bottom"><span>ACM Transactions on Database Systems · 13(4), 486–524</span><a href="https://doi.org/10.1145/49346.50068" target="_blank" rel="noreferrer" aria-label="Open the 1988 database paper DOI"><ArrowUpRight /></a></div></article>
            <article className="evidence-item"><span className="evidence-year">2014 <i>·</i> EDUCATION · WITH NICOLETTA DI BLAS</span><h3>Multi-User Virtual Environments Fostering Collaboration in Formal Education</h3><p className="evidence-authors">N. Di Blas · P. Paolini</p><div className="evidence-bottom"><span>Educational Technology &amp; Society · 17(1), 54–69</span><a href="https://re.public.polimi.it/handle/11311/868346" target="_blank" rel="noreferrer" aria-label="Open the 2014 education paper"><ArrowUpRight /></a></div></article>
          </div>
          <div className="reading-note"><span className="reading-note-label">THE QUESTION I KEEP RETURNING TO</span><p>Across these fields, I keep asking how information can be shaped into experiences people can understand and use.</p><span className="reading-note-byline">A summary of themes across selected co-authored work.</span></div>
        </section>

        <section className="timeline-section page-gutter" id="timeline" aria-labelledby="timeline-title">
          <div className="timeline-heading"><div><p className="eyebrow"><span className="eyebrow-rule" /> ACROSS TIME</p><h2 id="timeline-title">How my questions have changed shape.</h2></div><p>My work has moved from data modelling to adaptive learning. The contexts have changed, but my attention to structure and human experience has travelled with them.</p></div>
          <div className="timeline">
            {milestones.map((milestone, index) => <article className="timeline-item" key={milestone.year}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-year">{milestone.year}</div><div className="timeline-copy"><h3>{milestone.title}</h3><p>{milestone.text}</p></div></article>)}
          </div>
          <div className="timeline-foot"><span>THEN → NOW</span><span>A FEW MILESTONES FROM MY WORK · NOT A COMPLETE CV</span></div>
        </section>

        <section className="bio-section page-gutter" aria-labelledby="bio-title">
          <div className="bio-card">
            <div className="bio-heading">
              <p className="eyebrow"><span className="eyebrow-rule" /> A LITTLE ABOUT ME</p>
              <h2 id="bio-title">I started with physics.<br /><em>I kept returning to people.</em></h2>
              <p className="bio-side-note">From physics and information systems to communication and learning.</p>
            </div>
            <div className="bio-copy">
              <p>I studied Physics at the University of Milan before earning a Master’s degree and Ph.D. in Computer Science at UCLA. My work has since ranged across relational databases, hypertext, multimedia communication, web design, accessibility, cultural heritage, and technology-supported education.</p>
              <p>At Politecnico di Milano, I taught Web Application Design, Hypermedia Applications, and Human–Computer Interaction, and served as HOC-LAB’s scientific coordinator until 2016. The lab’s current profile lists me as Senior Scientific Advisor in Computer Science. Across these fields, I keep returning to the same question: how can information be designed, navigated, and used by real people?</p>
              <div className="bio-links">
                <a href="https://www.deib.polimi.it/eng/people/details/60294" target="_blank" rel="noreferrer">My DEIB profile <ArrowUpRight /></a>
                <a href="https://www.hoc.polimi.it/en/research/" target="_blank" rel="noreferrer">Research with HOC-LAB <ArrowUpRight /></a>
              </div>
            </div>
          </div>
          <div className="bio-bottomline"><span>RESEARCH · DESIGN · PEOPLE</span><span>FIRST-PERSON SITE CONCEPT · PENDING OWNER REVIEW</span></div>
        </section>

        <section className="closing-section page-gutter" aria-labelledby="closing-title">
          <div className="closing-inner">
            <div className="closing-content">
              <p className="eyebrow"><span className="eyebrow-rule" /> WHAT KEEPS ME CURIOUS</p>
              <h2 id="closing-title">I care about what a connection <em>makes possible.</em></h2>
              <p className="closing-copy">Across databases, hypertext, cultural heritage, and learning, I keep returning to how information can be structured, navigated, and shared. My guiding idea is simple: technology should support people—not require people to serve the system.</p>
              <div className="closing-actions">
                <Link className="button button-light" href="/publications">Explore my publications <ArrowRight /></Link>
                <Link className="closing-secondary-link" href="/sources">Read the source notes <ArrowUpRight /></Link>
              </div>
            </div>
            <div className="closing-visual" aria-hidden="true">
              <span className="closing-visual-kicker">STRUCTURE · CONNECTION · EXPERIENCE</span>
              <svg viewBox="0 0 520 390" fill="none" focusable="false">
                <circle className="closing-orbit" cx="264" cy="191" r="137" />
                <circle className="closing-orbit closing-orbit-inner" cx="264" cy="191" r="84" />
                <path className="closing-path" d="M44 242 C102 217 105 106 180 111 S286 255 354 212 S415 91 486 60" />
                <path className="closing-path closing-path-secondary" d="M42 90 C120 102 137 203 204 229 S316 187 374 208 S432 245 481 266" />
                <path className="closing-path closing-path-tertiary" d="M90 333 C155 285 211 280 263 299 S370 320 427 269" />
                <path className="closing-path closing-path-dashed" d="M158 34 C229 54 243 104 276 131 S355 145 404 130 S452 146 490 166" />
                <g className="closing-node closing-node-coral"><circle cx="180" cy="111" r="7"/><circle cx="354" cy="212" r="8"/><circle cx="486" cy="60" r="5"/></g>
                <g className="closing-node closing-node-blue"><circle cx="44" cy="242" r="5"/><circle cx="204" cy="229" r="5"/><circle cx="404" cy="130" r="5"/><circle cx="90" cy="333" r="5"/><circle cx="263" cy="299" r="5"/></g>
                <circle className="closing-node-core" cx="264" cy="191" r="7" />
              </svg>
              <span className="closing-visual-caption">I find meaning in the relationships between ideas.</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer page-gutter">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Link className="wordmark footer-wordmark" href="/#top" aria-label="Paolo Paolini personal research site home">
              <span className="wordmark-name">Paolo Paolini</span>
              <span className="wordmark-sub">Research, ideas &amp; people</span>
            </Link>
            <p className="footer-brand-note">Notes on my research, writing, and the questions connecting them.</p>
          </div>
          <div className="footer-editorial">
            <span className="footer-column-label">WHAT CONNECTS MY WORK</span>
            <p>I work across data, the web, and society, looking for the connections between them.</p>
            <span className="footer-editorial-note">STRUCTURE <i>→</i> CONNECTION <i>→</i> MEANING</span>
          </div>
          <nav className="footer-links" aria-label="Further reading and institutional sources">
            <span className="footer-column-label">EXPLORE MY WORK</span>
            <Link href="/publications">My publications <ArrowUpRight /></Link>
            <Link href="/sources">Sources &amp; notes <ArrowUpRight /></Link>
            <a href="https://www.deib.polimi.it/eng/people/details/60294" target="_blank" rel="noreferrer">DEIB profile <ArrowUpRight /></a>
            <a href="https://www.hoc.polimi.it/en/research/" target="_blank" rel="noreferrer">Research with HOC-LAB <ArrowUpRight /></a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} · My research &amp; ideas</span>
          <span>First-person site concept · Pending owner review.</span>
          <Link href="/#top">Back to top ↑</Link>
        </div>
      </footer>
    </>
  );
}
