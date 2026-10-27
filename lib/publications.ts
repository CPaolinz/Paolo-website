export type ResearchTheme = 'Data & systems' | 'Hypertext & web' | 'Culture & communication' | 'Learning & society';

export type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  theme: ResearchTheme;
  note: string;
  href: string;
  sourceType: 'Institutional repository' | 'DOI' | 'Publisher / proceedings' | 'Bibliographic search';
};

export const themes: ResearchTheme[] = [
  'Data & systems',
  'Hypertext & web',
  'Culture & communication',
  'Learning & society'
];

export const publications: Publication[] = [
  {
    year: 1974,
    title: 'A Multilevel Relational Model for Database Management Systems',
    authors: 'G. Bracchi, A. Fedeli, P. Paolini',
    venue: 'In Data Base Management, North-Holland Publishing Company',
    theme: 'Data & systems',
    note: 'I include this early co-authored publication as a pointer to multilevel data modelling. The available bibliographic details, including the note about SQUARE, still need to be checked against the original volume.',
    href: 'https://scholar.google.com/scholar?q=A+Multilevel+Relational+Model+for+Database+Management+Systems+Bracchi+Fedeli+Paolini',
    sourceType: 'Bibliographic search'
  },
  {
    year: 1988,
    title: 'Properties and Update Semantics of Consistent Views',
    authors: 'G. Gottlob, P. Paolini, R. Zicari',
    venue: 'ACM Transactions on Database Systems, 13(4), 486–524',
    theme: 'Data & systems',
    note: 'In this paper, my co-authors and I studied what it means for database views to remain consistent as information changes.',
    href: 'https://doi.org/10.1145/49346.50068',
    sourceType: 'DOI'
  },
  {
    year: 1991,
    title: 'HDM — A Model for the Design of Hypertext Applications',
    authors: 'F. Garzotto, P. Paolini, D. Schwabe',
    venue: 'Proceedings of Hypertext ’91, 313–328',
    theme: 'Hypertext & web',
    note: 'With Franca Garzotto and Daniel Schwabe, I worked on a model-based approach to designing hypertext before implementation details overwhelm the information structure.',
    href: 'https://doi.org/10.1145/122974.123004',
    sourceType: 'DOI'
  },
  {
    year: 1993,
    title: 'HDM — A Model-Based Approach to Hypertext Application Design',
    authors: 'F. Garzotto, P. Paolini, D. Schwabe',
    venue: 'ACM Transactions on Information Systems, 11(1), 1–26',
    theme: 'Hypertext & web',
    note: 'With Franca Garzotto and Daniel Schwabe, I developed the HDM approach to “authoring-in-the-large”—describing information structures and their links at a conceptual level.',
    href: 'https://doi.org/10.1145/151480.151483',
    sourceType: 'DOI'
  },
  {
    year: 1995,
    title: 'Hypermedia Design, Analysis, and Evaluation Issues',
    authors: 'F. Garzotto, L. Mainetti, P. Paolini',
    venue: 'Communications of the ACM, 38(8), 74–86',
    theme: 'Hypertext & web',
    note: 'With my co-authors, I examined how hypermedia systems can be designed and evaluated as experiences, not simply built as software.',
    href: 'https://doi.org/10.1145/208344.208349',
    sourceType: 'DOI'
  },
  {
    year: 2000,
    title: 'Model-driven Development of Web Applications: The AutoWeb System',
    authors: 'P. Fraternali, P. Paolini',
    venue: 'ACM Transactions on Information Systems, 18(4), 323–382',
    theme: 'Hypertext & web',
    note: 'With P. Fraternali, I carried model-driven thinking into the design and development of web applications through the AutoWeb system.',
    href: 'https://doi.org/10.1145/358108.358110',
    sourceType: 'DOI'
  },
  {
    year: 2004,
    title: 'Listen to a Web Site: Web Accessibility for Educational Cultural-Heritage Websites',
    authors: 'M. Speroni, N. Di Blas, P. Paolini',
    venue: 'ED-MEDIA 2004',
    theme: 'Culture & communication',
    note: 'With M. Speroni and N. Di Blas, I examined web accessibility for educational cultural-heritage websites—a reminder that cultural content is public only when people with different access needs can experience it.',
    href: 'https://re.public.polimi.it/handle/11311/1173380',
    sourceType: 'Institutional repository'
  },
  {
    year: 2009,
    title: 'PoliCultura: Introducing Media Literacy in Italian Schools',
    authors: 'N. Di Blas, P. Paolini, C. Poggi',
    venue: 'In Issues in Information and Media Literacy',
    theme: 'Learning & society',
    note: 'With N. Di Blas and C. Poggi, I contributed to work on PoliCultura, a digital storytelling initiative connecting school learning with making and sharing a story.',
    href: 'https://re.public.polimi.it/handle/11311/506507',
    sourceType: 'Institutional repository'
  },
  {
    year: 2011,
    title: 'How to Build Effective “Edutainment” Experiences in MUVEs',
    authors: 'A. Bucciero, N. Di Blas, L. Mainetti, P. Paolini, C. Poggi',
    venue: 'In Multi-User Virtual Environments for the Classroom, pp. 115–133',
    theme: 'Learning & society',
    note: 'With my co-authors, I explored how shared virtual environments can support learning when activity design, pedagogy, and technology work together.',
    href: 'https://doi.org/10.4018/978-1-60960-545-2.ch009',
    sourceType: 'DOI'
  },
  {
    year: 2013,
    title: 'Beyond the School’s Boundaries: PoliCultura, a Large-Scale Digital Storytelling Initiative',
    authors: 'N. Di Blas, P. Paolini',
    venue: 'Educational Technology & Society, 16(1), 15–27',
    theme: 'Learning & society',
    note: 'With N. Di Blas, I examined digital storytelling as a way to bring learners into the work of making knowledge public.',
    href: 'https://re.public.polimi.it/bitstream/11311/690635/1/2013_DiBlas_Paolini_JETS.pdf',
    sourceType: 'Publisher / proceedings'
  },
  {
    year: 2014,
    title: 'Storytelling for Cultural Heritage',
    authors: 'P. Paolini, N. Di Blas',
    venue: 'In Innovative Technologies in Urban Mapping',
    theme: 'Culture & communication',
    note: 'With Nicoletta Di Blas, I explored digital storytelling as a multi-channel way to make cultural heritage understandable and engaging.',
    href: 'https://re.public.polimi.it/handle/11311/868135',
    sourceType: 'Institutional repository'
  },
  {
    year: 2014,
    title: 'Multi-User Virtual Environments Fostering Collaboration in Formal Education',
    authors: 'N. Di Blas, P. Paolini',
    venue: 'Educational Technology & Society, 17(1), 54–69',
    theme: 'Learning & society',
    note: 'With Nicoletta Di Blas, I examined four programmes involving more than 9,000 students from 18 European countries, Israel, and the United States. That figure belongs to the programmes studied, not to an individual achievement; collaboration emerged as an important learning outcome.',
    href: 'https://re.public.polimi.it/handle/11311/868346',
    sourceType: 'Institutional repository'
  },
  {
    year: 2016,
    title: 'Distributed and Dynamic TPACK: Evidences from a Real-Life Case Study',
    authors: 'N. Di Blas, P. Paolini',
    venue: 'Politecnico di Milano research repository',
    theme: 'Learning & society',
    note: 'With N. Di Blas, I examined technology-supported teaching as a living system of people, content, and resources—not a tool bolted onto a lesson.',
    href: 'https://re.public.polimi.it/handle/11311/1051004',
    sourceType: 'Institutional repository'
  },
  {
    year: 2021,
    title: 'Adaptive Conversations for Adaptive Learning: TalkyTutors, Sustainable Chatbots as Tutors',
    authors: 'D. Rooein, P. Paolini',
    venue: 'Politecnico di Milano research repository',
    theme: 'Learning & society',
    note: 'With D. Rooein, I explored conversational systems that can adapt learning pathways to a learner’s needs.',
    href: 'https://re.public.polimi.it/handle/11311/1183732',
    sourceType: 'Institutional repository'
  },
  {
    year: 2022,
    title: 'Educational Chatbots: A Sustainable Approach for Customizable Conversations for Education',
    authors: 'D. Rooein, P. Paolini, B. Pernici',
    venue: 'CSEDU proceedings',
    theme: 'Learning & society',
    note: 'With D. Rooein and B. Pernici, I continued exploring how conversational technology can support—not replace—the teaching and learning relationship.',
    href: 'https://re.public.polimi.it/handle/11311/1226919',
    sourceType: 'Institutional repository'
  }
];
