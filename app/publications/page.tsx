import type { Metadata } from 'next';
import PublicationArchive from '@/components/PublicationArchive';

export const metadata: Metadata = {
  title: 'My publications',
  description: 'A selected reading path through my work on relational databases, hypertext, multimedia communication, accessibility, and learning.'
};

export default function PublicationsPage() {
  return <PublicationArchive />;
}
