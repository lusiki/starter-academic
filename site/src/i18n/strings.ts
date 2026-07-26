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
      teaching: "04 Teaching + workshops",
      ai: "05 AI study",
      theme: "Toggle color theme",
    },

    home: {
      title: "Luka Šikić — Data Science · Econometrics · Applied Statistics",
      description:
        "Luka Šikić is an Assistant Professor of Statistics and Data Science working in econometrics, finance, digital media, and the use of AI in economic research.",
      eyebrow: "Profile",
      bio1: `I'm an Assistant Professor of Statistics and Data Science at the <a href="https://www.unicath.hr/">Croatian Catholic University</a> in Zagreb. My work sits where quantitative methods meet finance, economics, and digital media. I teach statistics, data science, and digital media, and lead research that connects these fields.`,
      bio2: `Outside the university, I've worked in financial markets and algorithmic trading, and partnered with firms and research institutes on applied work — financial and time-series econometrics, machine learning, NLP-driven media monitoring, and digital analytics. Most of my current attention goes to <strong>AI in economic research</strong>: how large language models and agentic pipelines change the way empirical work actually gets done, and which parts of the craft they can't replace. Explore <a href="/ai/"><em>How Economics Absorbed AI</em></a>, my evidence-based retrospective and forecast, or the <a href="https://lusiki.github.io/AI_workshop_wiiw/" target="_blank" rel="noopener">open seminar and research pipeline</a> behind this work.`,
      metaRole: "Assistant Professor",
      metaRoleSub: "Croatian Catholic University, Zagreb",
      metaFocus: "Econometrics · Data science · AI research",
      metaCredentials: "PhD · Zagreb + Vienna · MSc · Kiel Institute",

      selectedWork: "A — Now",
      selectedWorkTitle: "What I'm working on",

      research: "B — Selected research",
      researchTitle: "Selected publications",
      allPubs: "All publications →",

      background: "C — Background",
      backgroundTitle: "How I got here",
      backgroundBody: `PhD in Economics, University of Zagreb and University of Vienna. MSc in International Economics from the Kiel Institute and MSc in Finance from the University of Zagreb. Before joining the Croatian Catholic University, I spent about eight years as a researcher at the Institute of Social Sciences Ivo Pilar and the Faculty of Croatian Studies. My work appears in international and Croatian journals, and I give invited seminars and hands-on workshops on econometrics, data science, and AI-assisted research.`,

      contact: "D — Get in touch",
      contactTitle: "Workshops, consulting, collaborations",
      contactBody: `I design hands-on workshops in AI for research, applied analytics, and reproducible workflows for universities, institutes, and teams. <a href="/teaching/#workshops">See previous workshops and public materials</a>, or write to <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a> to discuss a project.`,
      btnEmail: "Email",
      btnGithub: "GitHub",
      btnScholar: "Google Scholar",
      btnLinkedin: "LinkedIn",
      outputCaption: (from: number, to: number) =>
        `Cumulative publications · ${from}–${to}`,
      outputAlt: (total: number, from: number, to: number) =>
        `Step chart of cumulative peer-reviewed output, rising to ${total} publications between ${from} and ${to}.`,
      outputYear: "Year",
      outputTotal: "Cumulative total",
    },

    pubs: {
      title: "Publications — Luka Šikić",
      eyebrow: "02 — Research",
      heroTitle: "Publications",
      hero: "Peer-reviewed articles, book chapters, and working papers, newest first.",
      sectionLabel: (n: number) => `${n} items`,
      sectionTitle: "All publications",
      back: "← All publications",
      abstract: "Abstract",
      bibtex: "BibTeX",
      selectedMark: "Selected work",
    },

    projects: {
      title: "Projects — Luka Šikić",
      eyebrow: "03 — Projects",
      heroTitle: "Open research projects",
      hero: "Code, data, and writing released in the open.",
      sectionLabel: (n: number) => `${n} items`,
      sectionTitle: "All projects",
      back: "← All projects",
      visit: "Visit project →",
    },

    teaching: {
      title: "Teaching — Luka Šikić",
      eyebrow: "04 — Teaching",
      heroTitle: "Courses & workshops",
      hero: 'Statistics, data science, and digital media. All course materials are public — code and exercises on <a href="https://github.com/lusiki" target="_blank" rel="noopener">GitHub</a>.',
      currentLabel: "01 — Current",
      currentTitle: "2024/25 — 2025/26",
      previousLabel: "02 — Previous",
      previousTitle: "2020/21 — 2021/22",
      materials: "Materials →",
      workshopsLabel: "03 — Workshops",
      workshopsTitle: "Workshops & invited talks",
      workshopsBody: `I run hands-on workshops on applied analytics and <strong>AI in research work</strong> for universities, institutes, and organizations. Formats range from focused seminars to two-day workshops, and all materials below are public. Write to <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a> to discuss a workshop for your team.`,
      studentNote: `For consultations or thesis supervision, write to <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a>.`,
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
      teaching: "04 Nastava + radionice",
      ai: "05 AI studija (EN)",
      theme: "Promijeni temu boja",
    },

    home: {
      title:
        "Luka Šikić — Znanost o podacima · Ekonometrija · Primijenjena statistika",
      description:
        "Luka Šikić docent je statistike i znanosti o podacima, a bavi se ekonometrijom, financijama, digitalnim medijima i umjetnom inteligencijom u ekonomskim istraživanjima.",
      eyebrow: "Profil",
      bio1: `Docent sam statistike i znanosti o podacima na <a href="https://www.unicath.hr/">Hrvatskom katoličkom sveučilištu</a> u Zagrebu. Moj je rad na sjecištu kvantitativnih metoda, financija, ekonomije i digitalnih medija. Predajem statistiku, znanost o podacima i digitalne medije te vodim istraživanja koja povezuju ta područja.`,
      bio2: `Izvan sveučilišta radio sam na financijskim tržištima i u algoritamskom trgovanju te surađivao s tvrtkama i istraživačkim institutima na primijenjenim projektima iz financijske ekonometrije i ekonometrije vremenskih serija, strojnog učenja, praćenja medija temeljenog na obradi prirodnog jezika te digitalne analitike. Trenutačno sam najviše usmjeren na <strong>umjetnu inteligenciju u ekonomskim istraživanjima</strong>: kako veliki jezični modeli i agentski sustavi mijenjaju način na koji se empirijski rad zapravo provodi te koje dijelove istraživačkog zanata ne mogu zamijeniti. Pogledajte <a href="/ai/"><em>How Economics Absorbed AI</em></a>, moju retrospektivu i prognozu utemeljenu na dokazima, ili <a href="https://lusiki.github.io/AI_workshop_wiiw/" target="_blank" rel="noopener">otvoreni seminar i istraživački sustav</a> koji stoje iza tog rada.`,
      metaRole: "Docent",
      metaRoleSub: "Hrvatsko katoličko sveučilište, Zagreb",
      metaFocus: "Ekonometrija · Znanost o podacima · AI istraživanja",
      metaCredentials: "Doktorat · Zagreb + Beč · Magisterij · Kiel Institute",

      selectedWork: "A — Trenutačno",
      selectedWorkTitle: "Na čemu radim",

      research: "B — Odabrana istraživanja",
      researchTitle: "Odabrane publikacije",
      allPubs: "Sve publikacije →",

      background: "C — Pozadina",
      backgroundTitle: "Kako sam stigao dovde",
      backgroundBody: `Doktorat iz ekonomije, Sveučilište u Zagrebu i Sveučilište u Beču. Magisterij iz međunarodne ekonomije na Institutu za svjetsko gospodarstvo u Kielu i magisterij iz financija na Sveučilištu u Zagrebu. Prije dolaska na Hrvatsko katoličko sveučilište proveo sam otprilike osam godina kao istraživač na Institutu društvenih znanosti Ivo Pilar i Fakultetu hrvatskih studija. Objavljujem u međunarodnim i hrvatskim časopisima te održavam pozvane seminare i praktične radionice iz ekonometrije, znanosti o podacima i primjene umjetne inteligencije u istraživanju.`,

      contact: "D — Kontakt",
      contactTitle: "Radionice, konzultacije, suradnje",
      contactBody: `Osmišljavam praktične radionice o umjetnoj inteligenciji u istraživanju, primijenjenoj analitici i reproducibilnim postupcima za sveučilišta, institute i timove. <a href="/hr/teaching/#workshops">Pogledajte prethodne radionice i javne materijale</a> ili se javite na <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a> radi dogovora o projektu.`,
      btnEmail: "E-pošta",
      btnGithub: "GitHub",
      btnScholar: "Google Scholar",
      btnLinkedin: "LinkedIn",
      outputCaption: (from: number, to: number) =>
        `Kumulativno objavljeni radovi · ${from}.–${to}.`,
      outputAlt: (total: number, from: number, to: number) =>
        `Stepenasti prikaz kumulativnog broja recenziranih radova, koji od ${from}. do ${to}. raste na ${total}.`,
      outputYear: "Godina",
      outputTotal: "Ukupno",
    },

    pubs: {
      title: "Publikacije — Luka Šikić",
      eyebrow: "02 — Istraživanje",
      heroTitle: "Publikacije",
      hero: "Recenzirani članci, poglavlja u knjigama i radni materijali, od najnovijih.",
      sectionLabel: (n: number) => `${n} stavki`,
      sectionTitle: "Sve publikacije",
      back: "← Sve publikacije",
      abstract: "Sažetak",
      bibtex: "BibTeX",
      selectedMark: "Odabrani rad",
    },

    projects: {
      title: "Projekti — Luka Šikić",
      eyebrow: "03 — Projekti",
      heroTitle: "Otvoreni istraživački projekti",
      hero: "Kod, podaci i tekstovi — sve javno objavljeno.",
      sectionLabel: (n: number) => `${n} stavki`,
      sectionTitle: "Svi projekti",
      back: "← Svi projekti",
      visit: "Posjeti projekt →",
    },

    teaching: {
      title: "Nastava — Luka Šikić",
      eyebrow: "04 — Nastava",
      heroTitle: "Kolegiji i radionice",
      hero: 'Statistika, znanost o podacima i digitalni mediji. Svi nastavni materijali javni su — kod i vježbe na <a href="https://github.com/lusiki" target="_blank" rel="noopener">GitHubu</a>.',
      currentLabel: "01 — Aktualno",
      currentTitle: "2024./25. — 2025./26.",
      previousLabel: "02 — Prethodno",
      previousTitle: "2020./21. — 2021./22.",
      materials: "Materijali →",
      workshopsLabel: "03 — Radionice",
      workshopsTitle: "Radionice i pozvana predavanja",
      workshopsBody: `Vodim praktične radionice iz primijenjene analitike i <strong>umjetne inteligencije u istraživačkom radu</strong> za sveučilišta, institute i organizacije. Formati se kreću od usmjerenih seminara do dvodnevnih radionica, a svi su materijali u nastavku javni. Javite se na <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a> radi dogovora o radionici za vaš tim.`,
      studentNote: `Za konzultacije ili mentorstvo završnih i diplomskih radova javite se na <a href="mailto:luka.sikic@unicath.hr">luka.sikic@unicath.hr</a>.`,
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
