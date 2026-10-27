'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import { publications, themes, type ResearchTheme } from '@/lib/publications';

const queryThemeMap: Record<string, ResearchTheme> = {
  data: 'Data & systems',
  hypertext: 'Hypertext & web',
  culture: 'Culture & communication',
  learning: 'Learning & society'
};

function ArrowUpRight() {
  return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function PublicationArchive() {
  const [activeTheme, setActiveTheme] = useState<'All themes' | ResearchTheme>('All themes');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get('theme');
    if (key && queryThemeMap[key]) setActiveTheme(queryThemeMap[key]);
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return publications.filter((paper) => {
      const themeMatch = activeTheme === 'All themes' || paper.theme === activeTheme;
      const queryMatch = !normalized || `${paper.year} ${paper.title} ${paper.authors} ${paper.venue} ${paper.note} ${paper.theme}`.toLowerCase().includes(normalized);
      return themeMatch && queryMatch;
    });
  }, [activeTheme, query]);

  return (
    <>
      <a className="skip-link" href="#archive-main">Skip to content</a>
      <SiteHeader />
      <main className="archive-page" id="archive-main">
        <section className="archive-hero page-gutter">
          <div className="archive-hero-copy">
            <p className="eyebrow"><span className="eyebrow-rule" /> THE READING ROOM</p>
            <h1>Follow an idea<br /><em>to its source.</em></h1>
            <p>I’ve selected papers from across five decades, from relational databases and hypertext design to cultural storytelling, accessibility, and collaborative learning.</p>
            <div className="archive-backline"><Link href="/">← Back to my work</Link><span>A SELECTION · NOT MY COMPLETE BIBLIOGRAPHY</span></div>
          </div>
          <div className="archive-illustration" role="group" aria-labelledby="archive-map-section-label">
            <div className="archive-illustration-label" id="archive-map-section-label">A SMALL MAP OF IDEAS</div>
            <svg className="archive-map-svg" viewBox="0 0 620 310" fill="none" role="img" aria-labelledby="archive-map-title archive-map-desc" focusable="false">
              <title id="archive-map-title">Selected papers and relationships between ideas in my work</title>
              <desc id="archive-map-desc">The solid-line cluster shows concepts discussed together in the Hypertext Design Model: information structure, link types, and browsing semantics. Dashed lines are editorial connections between separate works on database views, cultural heritage storytelling, and collaborative learning. They do not imply one shared model or project.</desc>
              <g className="archive-map-crosslinks" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M87 151 C130 127 187 116 243 116" />
                <path d="M367 166 C410 130 462 104 521 105" />
                <path d="M280 241 C341 267 418 267 516 238" />
              </g>
              <g className="archive-map-hdm-cluster">
                <rect className="archive-map-cluster-outline" x="184" y="50" width="230" height="221" rx="2" />
                <text className="archive-map-cluster-label" x="200" y="67">HDM · 1991–93</text>
                <g className="archive-map-edges" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M267 119 C292 126 324 153 344 165" />
                  <path d="M348 186 C334 203 300 226 280 229" />
                  <path d="M248 127 C234 160 241 202 261 226" />
                </g>
                <g className="archive-map-hdm-nodes" aria-hidden="true">
                  <circle cx="255" cy="116" r="12" />
                  <circle cx="355" cy="174" r="12" />
                  <circle cx="269" cy="235" r="11" />
                </g>
                <g className="archive-map-labels">
                  <text x="216" y="96">STRUCTURE</text>
                  <text x="330" y="151">LINK TYPES</text>
                  <text x="240" y="260">BROWSING</text>
                </g>
              </g>
              <g className="archive-map-independent-nodes" aria-hidden="true">
                <circle className="archive-map-node-coral" cx="78" cy="155" r="8.5" />
                <circle className="archive-map-node-blue" cx="530" cy="105" r="9.5" />
                <circle className="archive-map-node-coral" cx="526" cy="236" r="9.5" />
              </g>
              <g className="archive-map-labels archive-map-external-labels">
                <text x="42" y="181">DATABASE VIEWS</text>
                <text className="archive-map-year" x="42" y="194">1988 · CONSISTENT VIEWS</text>
                <text x="465" y="77">CULTURAL HERITAGE</text>
                <text className="archive-map-year" x="500" y="91">2014</text>
                <text x="488" y="262">COLLABORATIVE</text>
                <text x="506" y="275">LEARNING</text>
                <text className="archive-map-year" x="512" y="288">2014</text>
              </g>
            </svg>
            <div className="archive-map-legend" aria-label="Map legend">
              <span><i className="archive-map-legend-line is-solid" /> Relationships described within HDM</span>
              <span><i className="archive-map-legend-line is-dashed" /> Editorial links between separate works</span>
            </div>
            <p className="archive-illustration-note">A thematic reading map—not one unified model or timeline.</p>
          </div>
        </section>

        <section className="archive-controls-section page-gutter" aria-label="Filter publications">
          <div className="archive-controls-heading"><div><span className="section-label"><span className="label-dot" /> EXPLORE MY WORK</span><p>Choose a theme or search the publication list.</p></div><span className="archive-count">{filtered.length.toString().padStart(2, '0')} / {publications.length.toString().padStart(2, '0')} ITEMS</span></div>
          <div className="archive-controls">
            <div className="theme-filters" role="group" aria-label="Publication theme filter">
              <button type="button" className={activeTheme === 'All themes' ? 'filter-chip is-selected' : 'filter-chip'} aria-pressed={activeTheme === 'All themes'} onClick={() => setActiveTheme('All themes')}>All themes</button>
              {themes.map((theme) => <button key={theme} type="button" className={activeTheme === theme ? 'filter-chip is-selected' : 'filter-chip'} aria-pressed={activeTheme === theme} onClick={() => setActiveTheme(theme)}>{theme}</button>)}
            </div>
            <label className="archive-search"><span className="visually-hidden">Search publications</span><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.6"/><path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, author, year…" /></label>
          </div>
        </section>

        <section className="publication-list page-gutter" aria-label="Selected publications" aria-live="polite">
          {filtered.length ? filtered.map((paper) => (
            <article className="publication-row" key={`${paper.year}-${paper.title}`}>
              <div className="publication-year">{paper.year}</div>
              <div className="publication-main"><div className="publication-labels"><span>{paper.theme}</span><span>{paper.sourceType}</span></div><h2>{paper.title}</h2><p className="publication-authors">{paper.authors}</p><p className="publication-venue">{paper.venue}</p><p className="publication-note">{paper.note}</p></div>
              <a className="publication-source-link" href={paper.href} target="_blank" rel="noreferrer"><span>View publication</span><ArrowUpRight /></a>
            </article>
          )) : <div className="empty-results"><span>NO MATCHES JUST YET</span><h2>Try a broader question.</h2><p>Search a topic such as “hypertext”, “storytelling”, “learning”, or clear the filters to see the full selection.</p><button className="button button-dark" type="button" onClick={() => { setActiveTheme('All themes'); setQuery(''); }}>Clear filters</button></div>}
        </section>

        <section className="archive-note page-gutter"><div className="archive-note-symbol">i</div><div><h2>A note about my bibliography</h2><p>I’ve selected these works to sketch a few connected lines of inquiry; this is not my complete or formally validated bibliography. Where available, I link directly to DOI records, repositories, and publisher records. One early entry remains a bibliographic search because I have not located a definitive public record. Please verify publication metadata against the original edition before citing it.</p></div></section>
      </main>
      <footer className="site-footer page-gutter">
        <div className="footer-top"><Link className="wordmark footer-wordmark" href="/"><span className="wordmark-name">Paolo Paolini</span><span className="wordmark-sub">Research, ideas &amp; people</span></Link><p>I explore the connections<br />between data, the web, and people.</p><div className="footer-links"><Link href="/">Back to my work <ArrowUpRight /></Link><Link href="/sources">Sources &amp; notes <ArrowUpRight /></Link><a href="https://www.deib.polimi.it/eng/people/details/60294" target="_blank" rel="noreferrer">DEIB profile <ArrowUpRight /></a><a href="https://www.hoc.polimi.it/en/research/" target="_blank" rel="noreferrer">Research with HOC-LAB <ArrowUpRight /></a></div></div>
        <div className="footer-bottom"><span>Personal-site concept · First-person copy pending owner review</span><span>A selection · Not my complete bibliography</span><Link href="/">Back to my work ↑</Link></div>
      </footer>
    </>
  );
}
