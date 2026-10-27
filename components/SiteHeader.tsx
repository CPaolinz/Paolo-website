'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

function ArrowUpRight() {
  return <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/#top" aria-label="Paolo Paolini personal research site home" onClick={closeMenu}>
        <span className="wordmark-name">Paolo Paolini</span>
        <span className="wordmark-sub">Research, ideas &amp; people</span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? 'Close' : 'Explore'}</span>
        <span className={`menu-glyph ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
      </button>

      <nav id="main-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <Link href="/#atlas" onClick={closeMenu}>My work</Link>
        <Link href="/#journeys" onClick={closeMenu}>Research paths</Link>
        <Link href="/#timeline" onClick={closeMenu}>Across time</Link>
        <Link href="/publications" onClick={closeMenu}>Publications <ArrowUpRight /></Link>
        <Link href="/sources" onClick={closeMenu}>Sources &amp; notes <ArrowUpRight /></Link>
      </nav>

      <div className="header-note"><span className="live-dot" /><span>INFORMATION · WEB · LEARNING</span></div>
    </header>
  );
}
