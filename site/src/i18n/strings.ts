// UI strings for both locales. Publication titles stay in the original language.
export type Lang = "en" | "hr";

export const strings = {
  en: {
    brand: "luka šikić",
    common: {
      open: "Open",
      skipToContent: "Skip to content",
    },

    nav: {
      about: "01 About",
      research: "02 Research",
      projects: "03 Projects",
      teaching: "04 Teaching",
      ai: "05 AI",
      theme: "Toggle color theme",
    },

    home: {
      title: "Luka Šikić — Data Science · Econometrics · Applied Statistics",
      description:
        "Luka Šikić is an Assistant Professor of Statistics and Data Science working across econometrics, finance, digital media, and AI in economic research.",
      eyebrow: "00 — Profile",
      bio1: `I'm an Assistant Professor of Statistics and Data Science at the <a href="https://www.unicath.hr/">Croatian Catholic University</a> in Zagreb. My work sits where quantitative methods meet finance, economics, and digital media. I teach across the statistics curriculum, from introductory to multivariate, along with research methodology, data science, and digital media, and I lead a research project that brings these threads into conversation.`,
      bio2: `Outside the university, I've worked in financial markets and algorithmic trading, and partnered on applied research across time-series and financial econometrics, machine learning, NLP-driven media monitoring and narrative analysis, and social and digital analytics. Most of my current attention goes to <strong>AI in economic research</strong>. I want to know how large language models and agentic pipelines change the way empirical work actually gets done, and which parts of the craft they can't replace. I <a href="https://lusiki.github.io/AI_workshop_wiiw/" target="_blank" rel="noopener">gave a seminar on this recently</a>, and the whole pipeline behind it is open source.`,
      metaRole: "Assistant Professor",
      metaRoleSub: "Croatian Catholic University, Zagreb",

      selectedWork: "01 — Currently",
      selectedWorkTitle: "Selected current work",

      research: "02 — Research",
      researchTitle: "Recent publications",
      allPubs: "All publications →",

      background: "03 — Background",
      backgroundTitle: "Path",
      backgroundBody: `PhD in Economics, University of Zagreb and University of Vienna. MSc in International Economics (Kiel Institute) and MSc in Finance (Zagreb). About eight years as a researcher at the Institute of Social Sciences Ivo Pilar and the Faculty of Croatian Studies before joining the Croatian Catholic University. I publish in international and Croatian journals and speak regularly on advanced analytics and data-driven decision-making.`,

      contact: "04 — Get in touch",
      contactTitle: "Workshops, consulting, collaborations",
      contactBody: `If you have data you want turned into clear answers, or you'd like a workshop for your team, send a message — <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a>.`,
      btnEmail: "Email",
      btnGithub: "GitHub",
      btnScholar: "Google Scholar",
      btnLinkedin: "LinkedIn",
    },

    pubs: {
      title: "Publications — Luka Šikić",
      eyebrow: "02 — Research",
      heroTitle: "Publications",
      hero: "Peer-reviewed articles, book chapters, and working papers, in reverse chronological order.",
      sectionLabel: (n: number) => `${n} items`,
      sectionTitle: "All publications",
      back: "← All publications",
      abstract: "Abstract",
      bibtex: "BibTeX",
    },

    projects: {
      title: "Projects — Luka Šikić",
      eyebrow: "03 — Projects",
      heroTitle: "Open research projects",
      hero: "Code, data, and writing released in the open.",
      sectionLabel: (n: number) => `${n} items`,
      sectionTitle: "Active",
      back: "← All projects",
      visit: "Visit project →",
    },

    teaching: {
      title: "Teaching — Luka Šikić",
      eyebrow: "04 — Teaching",
      heroTitle: "Courses",
      hero: 'Statistics, data science, and digital media. All course materials are public — code and exercises on <a href="https://github.com/lusiki" target="_blank" rel="noopener">GitHub</a>.',
      currentLabel: "Current",
      currentTitle: "2024/25 — 2025/26",
      previousLabel: "Previous",
      previousTitle: "2020/21 — 2021/22",
      materials: "Materials →",
      workshopsLabel: "—",
      workshopsTitle: "Workshops & invited talks",
      workshopsBody: `I run workshops on applied analytics and, increasingly, on <strong>AI in research work</strong> — for universities, institutes, and organisations. All materials below are public. Get in touch at <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a> to discuss a workshop for your team.`,
    },
  },

  hr: {
    brand: "luka šikić",
    common: {
      open: "Otvori",
      skipToContent: "Preskoči na sadržaj",
    },

    nav: {
      about: "01 O meni",
      research: "02 Istraživanje",
      projects: "03 Projekti",
      teaching: "04 Nastava",
      ai: "05 AI (EN)",
      theme: "Promijeni temu boja",
    },

    home: {
      title:
        "Luka Šikić — Znanost o podacima · Ekonometrija · Primijenjena statistika",
      description:
        "Luka Šikić docent je statistike i znanosti o podacima, a bavi se ekonometrijom, financijama, digitalnim medijima i umjetnom inteligencijom u ekonomskim istraživanjima.",
      eyebrow: "00 — Profil",
      bio1: `Docent sam statistike i znanosti o podacima na <a href="https://www.unicath.hr/">Hrvatskom katoličkom sveučilištu</a> u Zagrebu. Moj rad nalazi se na sjecištu kvantitativnih metoda, financija, ekonomije i digitalnih medija. Predajem cijeli niz statističkih kolegija, od uvodne do multivarijatne statistike, kao i metodologiju istraživanja, znanost o podacima i digitalne medije, te vodim istraživački projekt koji te niti povezuje u zajedničku cjelinu.`,
      bio2: `Izvan sveučilišta radio sam na financijskim tržištima i u algoritamskom trgovanju te surađivao na primijenjenim istraživanjima iz ekonometrije vremenskih serija i financijske ekonometrije, strojnog učenja, praćenja medija i analize narativa temeljenih na obradi prirodnog jezika te društvene i digitalne analitike. Najveći dio moje trenutne pažnje ide na <strong>umjetnu inteligenciju u ekonomskim istraživanjima</strong>. Zanima me kako veliki jezični modeli i agentski sustavi mijenjaju način na koji se empirijski rad zapravo radi i koje dijelove tog zanata ne mogu zamijeniti. O tome sam <a href="https://lusiki.github.io/AI_workshop_wiiw/" target="_blank" rel="noopener">nedavno održao seminar</a>, a cijeli je sustav iza njega otvorenog koda.`,
      metaRole: "Docent",
      metaRoleSub: "Hrvatsko katoličko sveučilište, Zagreb",

      selectedWork: "01 — Trenutno",
      selectedWorkTitle: "Odabrani aktualni rad",

      research: "02 — Istraživanje",
      researchTitle: "Nedavne publikacije",
      allPubs: "Sve publikacije →",

      background: "03 — Pozadina",
      backgroundTitle: "Put",
      backgroundBody: `Doktorat iz ekonomije, Sveučilište u Zagrebu i Sveučilište u Beču. Magisterij iz međunarodne ekonomije (Kiel Institute) i magisterij iz financija (Zagreb). Otprilike osam godina kao istraživač na Institutu društvenih znanosti Ivo Pilar i Fakultetu hrvatskih studija prije prelaska na Hrvatsko katoličko sveučilište. Objavljujem u međunarodnim i hrvatskim časopisima te redovito predajem o naprednoj analitici i odlučivanju temeljenom na podacima.`,

      contact: "04 — Kontakt",
      contactTitle: "Radionice, konzultacije, suradnje",
      contactBody: `Ako imate podatke koje želite pretvoriti u jasne odgovore, ili biste željeli radionicu za svoj tim, javite se — <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a>.`,
      btnEmail: "E-pošta",
      btnGithub: "GitHub",
      btnScholar: "Google Scholar",
      btnLinkedin: "LinkedIn",
    },

    pubs: {
      title: "Publikacije — Luka Šikić",
      eyebrow: "02 — Istraživanje",
      heroTitle: "Publikacije",
      hero: "Recenzirani članci, poglavlja u knjigama i radni materijali, obrnutim kronološkim redom.",
      sectionLabel: (n: number) => `${n} stavki`,
      sectionTitle: "Sve publikacije",
      back: "← Sve publikacije",
      abstract: "Sažetak",
      bibtex: "BibTeX",
    },

    projects: {
      title: "Projekti — Luka Šikić",
      eyebrow: "03 — Projekti",
      heroTitle: "Otvoreni istraživački projekti",
      hero: "Kod, podaci i tekstovi objavljeni u otvorenom kodu.",
      sectionLabel: (n: number) => `${n} stavki`,
      sectionTitle: "Aktivno",
      back: "← Svi projekti",
      visit: "Posjeti projekt →",
    },

    teaching: {
      title: "Nastava — Luka Šikić",
      eyebrow: "04 — Nastava",
      heroTitle: "Kolegiji",
      hero: 'Statistika, znanost o podacima i digitalni mediji. Svi nastavni materijali javni su — kod i vježbe na <a href="https://github.com/lusiki" target="_blank" rel="noopener">GitHubu</a>.',
      currentLabel: "Aktualno",
      currentTitle: "2024./25. — 2025./26.",
      previousLabel: "Prethodno",
      previousTitle: "2020./21. — 2021./22.",
      materials: "Materijali →",
      workshopsLabel: "—",
      workshopsTitle: "Radionice i pozvana predavanja",
      workshopsBody: `Vodim radionice iz primijenjene analitike i, sve više, o <strong>umjetnoj inteligenciji u istraživačkom radu</strong> — za sveučilišta, institute i organizacije. Svi su materijali javni. Javite se na <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a> za dogovor o radionici za vaš tim.`,
    },
  },
} as const;

export function t(lang: Lang) {
  return strings[lang];
}

export function altLang(lang: Lang): Lang {
  return lang === "en" ? "hr" : "en";
}
export function altPath(pathname: string, lang: Lang): string {
  if (lang === "hr") {
    // currently on /hr/..., switch to EN by stripping /hr prefix
    const stripped = pathname.replace(/^\/hr(\/|$)/, "/");
    return stripped || "/";
  } else {
    // currently on /..., switch to HR by prepending /hr
    return "/hr" + (pathname === "/" ? "/" : pathname);
  }
}
