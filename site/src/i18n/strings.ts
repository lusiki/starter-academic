// UI strings for both locales. Publication titles stay in the original language.
export type Lang = 'en' | 'hr';

export const strings = {
  en: {
    brand: 'luka šikić',

    nav: {
      about: '01 About',
      research: '02 Research',
      projects: '03 Projects',
      teaching: '04 Teaching',
    },

    home: {
      title: 'Luka Šikić — Data Science · Econometrics · Applied Statistics',
      eyebrow: '00 — Profile',
      heroTitle: 'At the intersection of data science, econometrics, and applied statistics.',
      bio1: `I'm an Assistant Professor of Statistics and Data Science at the <a href="https://www.unicath.hr/">Croatian Catholic University</a> in Zagreb, where I teach and lead research projects on digital media, economic dynamics, and machine learning.`,
      bio2: `Day-to-day my toolkit spans time-series and financial econometrics, machine learning in R and Python, NLP-driven media monitoring and narrative analysis, and social and digital analytics for research and communications teams. The through-line is rigorous, reproducible quantitative work — forecasting, causal analysis, and turning messy data into something a team can actually act on.`,
      metaRole: 'Assistant Professor',
      metaRoleSub: 'Croatian Catholic University, Zagreb',
      metaWorkshops: 'Workshops',
      metaWorkshopsSub: 'Economic Institute Zagreb',
      metaCollab: 'Collaboration',
      metaCollabSub: 'Croatian National Bank',

      focus: '01 — Focus',
      focusTitle: 'What I work on',
      focusItems: [
        { title: 'Econometrics & quantitative modeling', body: 'Time series, financial econometrics, causal inference, panel data.' },
        { title: 'Machine learning & computational data science', body: 'R and Python, fully reproducible reporting.' },
        { title: 'Natural language processing & text mining', body: 'Media monitoring, narrative and sentiment analysis, mapping digital media spaces.' },
        { title: 'Social and digital analytics', body: 'For research groups and communications teams.' },
      ],

      selectedWork: '01 — Currently',
      selectedWorkTitle: 'In progress',
      selectedWorkItems: [
        { year: '2026', title: 'Everything You Want to Know About the State and Public Policies in Croatia', body: 'University textbook on public choice and public-sector economics, applied to the Croatian context. With Milan Deskar-Škrbić and Petra Palić. CC BY 4.0.', href: 'https://lusiki.github.io/Javne-politike/' },
        { year: '2025—27', title: 'Catholic themes in Croatian digital media', body: 'Structured database and NLP-driven thematic analysis. Project lead.', href: 'https://lusiki.github.io/DigiKat/pages/' },
        { year: '2024',    title: 'Mapping the Croatian National Bank across digital media', body: 'Coverage analysis of CNB presence in the Croatian media space.', href: 'https://raw.githack.com/lusiki/HNB-Media-Map/main/presentation.html#/title-slide' },
        { year: '2023',    title: 'Stock–bond hedge breakdown, 2022–23 inflation shock', body: 'Markov-switching analysis of the classic 60/40 hedge failure.', href: 'https://raw.githack.com/lusiki/The-Breakdown-of-the-Classic-Portfolio-Hedge-A-Comprehensive-Markov-Switching-Analysis/main/paper/main_analysis.html' },
        { year: '2024',    title: 'Income convergence in Croatia, 2000–2024', body: 'Fractional integration and long-memory time-series methods. Open source.', href: 'https://github.com/lusiki/Convergence' },
        { year: '2023',    title: 'ESG effects on tourism, EU country panel', body: 'Panel-data study of ESG indicators in EU tourism economies.', href: undefined as string | undefined },
      ],

      research: '02 — Research',
      researchTitle: 'Recent publications',
      allPubs: 'All publications →',

      background: '03 — Background',
      backgroundTitle: 'Path',
      backgroundBody: `PhD in Economics, University of Zagreb and University of Vienna. MSc in International Economics (Kiel Institute) and MSc in Finance (Zagreb). About eight years as a researcher at the Institute of Social Sciences Ivo Pilar and the Faculty of Croatian Studies before joining the Croatian Catholic University. I publish in international and Croatian journals and speak regularly on advanced analytics and data-driven decision-making.`,

      contact: '04 — Get in touch',
      contactTitle: 'Workshops, consulting, collaborations',
      contactBody: `If you have data you want turned into clear answers, or you'd like a workshop for your team, send a message — <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a>.`,
      btnEmail: 'Email',
      btnGithub: 'GitHub',
      btnScholar: 'Google Scholar',
      btnLinkedin: 'LinkedIn',
    },

    pubs: {
      title: 'Publications — Luka Šikić',
      eyebrow: '02 — Research',
      heroTitle: 'Publications',
      hero: 'Peer-reviewed articles, book chapters, and working papers, in reverse chronological order.',
      sectionLabel: (n: number) => `${n} items`,
      sectionTitle: 'All publications',
      back: '← All publications',
      abstract: 'Abstract',
      bibtex: 'BibTeX',
    },

    projects: {
      title: 'Projects — Luka Šikić',
      eyebrow: '03 — Projects',
      heroTitle: 'Open research projects',
      hero: 'Code, data, and writing released in the open.',
      sectionLabel: (n: number) => `${n} items`,
      sectionTitle: 'Active',
      back: '← All projects',
      visit: 'Visit project →',
    },

    teaching: {
      title: 'Teaching — Luka Šikić',
      eyebrow: '04 — Teaching',
      heroTitle: 'Courses',
      hero: 'Statistics, data science, and digital media. All course materials are public — code and exercises on <a href="https://github.com/lusiki" target="_blank" rel="noopener">GitHub</a>.',
      currentLabel: 'Current',
      currentTitle: '2024/25 — 2025/26',
      previousLabel: 'Previous',
      previousTitle: '2020/21 — 2021/22',
      materials: 'Materials →',
      workshopsLabel: '—',
      workshopsTitle: 'Workshops',
      workshopsBody: `I run analytics workshops for institutions and organisations, including the <strong>Economic Institute Zagreb</strong>. Topics include applied econometrics, machine learning for non-specialists, and data-driven decision-making. Get in touch at <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a> to discuss.`,
    },

    courses: {
      newMedia: 'Web infrastructure, content management systems, strategic communication planning, AI implications, and digital analytics. Students learn to critically evaluate and implement web communication strategies.',
      stats: 'Statistical foundations for communication students. Descriptive statistics, probability theory, hypothesis testing, and inferential statistics in R (tidyverse, ggplot2), with examples from media and communications.',
      data: 'Data types and sources, R programming, data visualisation, web scraping, machine learning, text analysis, and reproducible reporting. For graduate sociology and social science students.',
      social: 'Computational approaches to social media data. Platform-specific analysis (Twitter, Facebook, Instagram, LinkedIn), data infrastructure, statistical methods, and open-source analytics tools.',
      text: 'Computational text analysis from data preparation through NLP. Dictionary methods, supervised and unsupervised machine learning, topic modelling, and text clustering in R.',
      statsSocial: 'R programming, descriptive statistics, data visualisation, hypothesis testing, categorical analysis, ANOVA, and linear regression for undergraduate social science students.',
    },
  },

  hr: {
    brand: 'luka šikić',

    nav: {
      about: '01 O meni',
      research: '02 Istraživanje',
      projects: '03 Projekti',
      teaching: '04 Nastava',
    },

    home: {
      title: 'Luka Šikić — Znanost o podacima · Ekonometrija · Primijenjena statistika',
      eyebrow: '00 — Profil',
      heroTitle: 'Na sjecištu znanosti o podacima, ekonometrije i primijenjene statistike.',
      bio1: `Docent sam statistike i znanosti o podacima na <a href="https://www.unicath.hr/">Hrvatskom katoličkom sveučilištu</a> u Zagrebu, gdje predajem i vodim istraživačke projekte iz digitalnih medija, ekonomske dinamike i strojnog učenja.`,
      bio2: `U svakodnevnom radu kombiniram ekonometriju vremenskih serija i financijsku ekonometriju, strojno učenje u R-u i Pythonu, praćenje medija i analizu narativa temeljene na obradi prirodnog jezika te društvenu i digitalnu analitiku za istraživačke i komunikacijske timove. Zajednička nit je rigorozan, reproducibilan kvantitativan rad — prognoziranje, kauzalna analiza i pretvaranje nesređenih podataka u nešto što tim može stvarno iskoristiti.`,
      metaRole: 'Docent',
      metaRoleSub: 'Hrvatsko katoličko sveučilište, Zagreb',
      metaWorkshops: 'Radionice',
      metaWorkshopsSub: 'Ekonomski institut Zagreb',
      metaCollab: 'Suradnja',
      metaCollabSub: 'Hrvatska narodna banka',

      focus: '01 — Fokus',
      focusTitle: 'Čime se bavim',
      focusItems: [
        { title: 'Ekonometrija i kvantitativno modeliranje', body: 'Vremenske serije, financijska ekonometrija, kauzalno zaključivanje, panel podaci.' },
        { title: 'Strojno učenje i računalna znanost o podacima', body: 'R i Python, potpuno reproducibilno izvještavanje.' },
        { title: 'Obrada prirodnog jezika i tekstualna analitika', body: 'Praćenje medija, analiza narativa i sentimenta, mapiranje digitalnih medijskih prostora.' },
        { title: 'Društvena i digitalna analitika', body: 'Za istraživačke skupine i komunikacijske timove.' },
      ],

      selectedWork: '01 — Trenutno',
      selectedWorkTitle: 'U radu',
      selectedWorkItems: [
        { year: '2026.', title: 'Sve što želite znati o državi i javnim politikama u Hrvatskoj', body: 'Sveučilišni udžbenik o teoriji javnog izbora i ekonomici javnog sektora, primijenjen na hrvatski kontekst. S Milanom Deskar-Škrbićem i Petrom Palić. CC BY 4.0.', href: 'https://lusiki.github.io/Javne-politike/' },
        { year: '2025.—27.', title: 'Katoličke teme u hrvatskim digitalnim medijima', body: 'Strukturirana baza podataka i tematska analiza temeljena na obradi prirodnog jezika. Voditelj projekta.', href: 'https://lusiki.github.io/DigiKat/pages/' },
        { year: '2024.',     title: 'Mapiranje Hrvatske narodne banke u digitalnom medijskom prostoru', body: 'Analiza prisutnosti HNB-a u hrvatskom medijskom prostoru.', href: 'https://raw.githack.com/lusiki/HNB-Media-Map/main/presentation.html#/title-slide' },
        { year: '2023.',     title: 'Slom klasičnog dionica–obveznice hedža tijekom inflacijskog šoka 2022.–23.', body: 'Markov-switching analiza neuspjeha klasičnog 60/40 portfelja.', href: 'https://raw.githack.com/lusiki/The-Breakdown-of-the-Classic-Portfolio-Hedge-A-Comprehensive-Markov-Switching-Analysis/main/paper/main_analysis.html' },
        { year: '2024.',     title: 'Konvergencija dohotka u Hrvatskoj, 2000.–2024.', body: 'Frakcionalna integracija i metode dugog pamćenja u vremenskim serijama. Otvoreni kod.', href: 'https://github.com/lusiki/Convergence' },
        { year: '2023.',     title: 'ESG učinci na turizam, panel zemalja EU-a', body: 'Studija ESG pokazatelja u turističkim ekonomijama EU-a metodom panel podataka.', href: undefined as string | undefined },
      ],

      research: '02 — Istraživanje',
      researchTitle: 'Nedavne publikacije',
      allPubs: 'Sve publikacije →',

      background: '03 — Pozadina',
      backgroundTitle: 'Put',
      backgroundBody: `Doktorat iz ekonomije, Sveučilište u Zagrebu i Sveučilište u Beču. Magisterij iz međunarodne ekonomije (Kiel Institute) i magisterij iz financija (Zagreb). Otprilike osam godina kao istraživač na Institutu društvenih znanosti Ivo Pilar i Fakultetu hrvatskih studija prije prelaska na Hrvatsko katoličko sveučilište. Objavljujem u međunarodnim i hrvatskim časopisima te redovito predajem o naprednoj analitici i odlučivanju temeljenom na podacima.`,

      contact: '04 — Kontakt',
      contactTitle: 'Radionice, konzultacije, suradnje',
      contactBody: `Ako imate podatke koje želite pretvoriti u jasne odgovore, ili biste željeli radionicu za svoj tim, javite se — <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a>.`,
      btnEmail: 'E-pošta',
      btnGithub: 'GitHub',
      btnScholar: 'Google Scholar',
      btnLinkedin: 'LinkedIn',
    },

    pubs: {
      title: 'Publikacije — Luka Šikić',
      eyebrow: '02 — Istraživanje',
      heroTitle: 'Publikacije',
      hero: 'Recenzirani članci, poglavlja u knjigama i radni materijali, obrnutim kronološkim redom.',
      sectionLabel: (n: number) => `${n} stavki`,
      sectionTitle: 'Sve publikacije',
      back: '← Sve publikacije',
      abstract: 'Sažetak',
      bibtex: 'BibTeX',
    },

    projects: {
      title: 'Projekti — Luka Šikić',
      eyebrow: '03 — Projekti',
      heroTitle: 'Otvoreni istraživački projekti',
      hero: 'Kod, podaci i tekstovi objavljeni u otvorenom kodu.',
      sectionLabel: (n: number) => `${n} stavki`,
      sectionTitle: 'Aktivno',
      back: '← Svi projekti',
      visit: 'Posjeti projekt →',
    },

    teaching: {
      title: 'Nastava — Luka Šikić',
      eyebrow: '04 — Nastava',
      heroTitle: 'Kolegiji',
      hero: 'Statistika, znanost o podacima i digitalni mediji. Svi nastavni materijali javni su — kod i vježbe na <a href="https://github.com/lusiki" target="_blank" rel="noopener">GitHubu</a>.',
      currentLabel: 'Aktualno',
      currentTitle: '2024./25. — 2025./26.',
      previousLabel: 'Prethodno',
      previousTitle: '2020./21. — 2021./22.',
      materials: 'Materijali →',
      workshopsLabel: '—',
      workshopsTitle: 'Radionice',
      workshopsBody: `Vodim analitičke radionice za institucije i organizacije, uključujući <strong>Ekonomski institut Zagreb</strong>. Teme obuhvaćaju primijenjenu ekonometriju, strojno učenje za nespecijaliste i odlučivanje temeljeno na podacima. Javite se na <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a>.`,
    },

    courses: {
      newMedia: 'Web infrastruktura, sustavi za upravljanje sadržajem, strateško planiranje komunikacije, implikacije umjetne inteligencije i digitalna analitika. Studenti uče kritički procjenjivati i provoditi web-komunikacijske strategije.',
      stats: 'Statistički temelji za studente komunikologije. Deskriptivna statistika, teorija vjerojatnosti, testiranje hipoteza i inferencijalna statistika u R-u (tidyverse, ggplot2), s primjerima iz medija i komunikacija.',
      data: 'Vrste i izvori podataka, programiranje u R-u, vizualizacija podataka, web scraping, strojno učenje, analiza teksta i reproducibilno izvještavanje. Za studente diplomske razine sociologije i društvenih znanosti.',
      social: 'Računalni pristupi podacima društvenih mreža. Analiza specifična za platforme (Twitter, Facebook, Instagram, LinkedIn), podatkovna infrastruktura, statističke metode i otvoreni analitički alati.',
      text: 'Računalna analiza teksta od pripreme podataka do obrade prirodnog jezika. Rječničke metode, nadgledano i nenadgledano strojno učenje, modeliranje tema i grupiranje teksta u R-u.',
      statsSocial: 'Programiranje u R-u, deskriptivna statistika, vizualizacija podataka, testiranje hipoteza, analiza kategorijskih varijabli, ANOVA i linearna regresija za studente preddiplomske razine društvenih znanosti.',
    },
  },
} as const;

export function t(lang: Lang) {
  return strings[lang];
}

export function altLang(lang: Lang): Lang { return lang === 'en' ? 'hr' : 'en'; }
export function altPath(pathname: string, lang: Lang): string {
  if (lang === 'hr') {
    // currently on /hr/..., switch to EN by stripping /hr prefix
    const stripped = pathname.replace(/^\/hr(\/|$)/, '/');
    return stripped || '/';
  } else {
    // currently on /..., switch to HR by prepending /hr
    return '/hr' + (pathname === '/' ? '/' : pathname);
  }
}
