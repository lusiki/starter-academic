import type { Lang } from "../i18n/strings";

export type LocalizedText = Record<Lang, string>;

export function localize(value: LocalizedText, lang: Lang): string {
  return value[lang];
}

export interface CurrentWorkItem {
  year: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  href?: string;
  featured: boolean;
}

export const currentWork: CurrentWorkItem[] = [
  {
    year: { en: "2026", hr: "2026." },
    title: {
      en: "How Economics Absorbed AI",
      hr: "Kako je ekonomija usvojila umjetnu inteligenciju",
    },
    body: {
      en: "A field map built from a corpus of 661 sources, read through the formats the discipline argues in — papers, guides, tools, podcasts — with falsifiable predictions about what comes next.",
      hr: "Karta područja utemeljena na korpusu od 661 izvora, čitana kroz formate u kojima disciplina raspravlja — radove, vodiče, alate i podcaste — s provjerljivim predviđanjima o tome što slijedi. Sadržaj je na engleskom.",
    },
    href: "/ai/",
    featured: true,
  },
  {
    year: { en: "2026", hr: "2026." },
    title: {
      en: "AI in Economics Research — seminar at wiiw, Vienna",
      hr: "Umjetna inteligencija u ekonomskim istraživanjima — seminar na wiiw-u, Beč",
    },
    body: {
      en: "From frontier ideas to a functioning agentic pipeline: slides, a working paper rendered live from Eurostat data, and the full open-source repository.",
      hr: "Od novih ideja do funkcionalnog agentskog sustava: prezentacija, radni tekst generiran uživo iz Eurostatovih podataka i cijeli repozitorij otvorenog koda.",
    },
    href: "https://lusiki.github.io/AI_workshop_wiiw/",
    featured: true,
  },
  {
    year: { en: "2026", hr: "2026." },
    title: {
      en: "DigiKat — seminar at the Complexity Science Hub, Vienna",
      hr: "DigiKat — seminar u Complexity Science Hubu, Beč",
    },
    body: {
      en: "Executive overview of the project: 710,307 posts across nine platforms, 2021–2026, read through five layers — publisher archetypes, thematic streams, tone and conflict, event spikes, and how influence disperses over time.",
      hr: "Izvršni pregled projekta: 710.307 objava na devet platformi, 2021.–2026., čitanih kroz pet slojeva — arhetipove objavljivača, tematske tokove, ton i konfliktnost, skokove oko događaja te raspršivanje utjecaja kroz vrijeme.",
    },
    href: "https://lusiki.github.io/DigiKat/pages/pregled/izvrsni-pregled.html",
    featured: true,
  },
  {
    year: { en: "2026", hr: "2026." },
    title: {
      en: "Everything You Want to Know About the State and Public Policies in Croatia",
      hr: "Sve što želite znati o državi i javnim politikama u Hrvatskoj",
    },
    body: {
      en: "University textbook on public choice and public-sector economics, applied to the Croatian context. With Milan Deskar-Škrbić and Petra Palić. CC BY 4.0.",
      hr: "Sveučilišni udžbenik o teoriji javnog izbora i ekonomici javnog sektora, primijenjen na hrvatski kontekst. S Milanom Deskar-Škrbićem i Petrom Palić. CC BY 4.0.",
    },
    href: "https://lusiki.github.io/Javne-politike/",
    featured: true,
  },
  {
    year: { en: "2026", hr: "2026." },
    title: {
      en: "Connected but Divided — affective publics on Croatian Reddit",
      hr: "Povezani, ali podijeljeni — afektivne javnosti na hrvatskom Redditu",
    },
    body: {
      en: "Network, sentiment, and topic analysis of 11,503 Reddit comments around the 2024 elections. With Tamara Kunić. Medijska istraživanja (2026).",
      hr: "Mrežna analiza, analiza sentimenta i tema na 11.503 komentara u kontekstu izbora 2024. S Tamarom Kunić. Medijska istraživanja (2026.).",
    },
    href: "/publications/2026-connected-but-divided-croatian-reddit/",
    featured: true,
  },
  {
    year: { en: "2025", hr: "2025." },
    title: {
      en: "Forecasting returns in thin markets — ML on the Zagreb Stock Exchange",
      hr: "Predviđanje prinosa na tankim tržištima — strojno učenje na Zagrebačkoj burzi",
    },
    body: {
      en: "Machine-learning forecasts of weekly returns from 1,100+ features on 2000–2024 data. With Mislav Šagovac and Petra Palić.",
      hr: "Strojno učenje za predviđanje tjednih prinosa iz više od 1.100 značajki na podacima 2000.–2024. S Mislavom Šagovcem i Petrom Palić.",
    },
    href: "https://lusiki.github.io/zseML/",
    featured: true,
  },
  {
    year: { en: "2025–27", hr: "2025.–27." },
    title: {
      en: "Catholic themes in Croatian digital media",
      hr: "Katoličke teme u hrvatskim digitalnim medijima",
    },
    body: {
      en: "Structured database and NLP-driven thematic analysis. Project lead.",
      hr: "Strukturirana baza podataka i tematska analiza temeljena na obradi prirodnog jezika. Voditelj projekta.",
    },
    href: "/projects/digikat/",
    featured: false,
  },
  {
    year: { en: "2024", hr: "2024." },
    title: {
      en: "Mapping the Croatian National Bank across digital media",
      hr: "Mapiranje Hrvatske narodne banke u digitalnom medijskom prostoru",
    },
    body: {
      en: "Coverage analysis of the Croatian National Bank's presence in digital media.",
      hr: "Analiza prisutnosti HNB-a u hrvatskom medijskom prostoru.",
    },
    href: "https://raw.githack.com/lusiki/HNB-Media-Map/main/presentation.html#/title-slide",
    featured: false,
  },
  {
    year: { en: "2025", hr: "2025." },
    title: {
      en: "Stock–bond hedge breakdown, 2022–23 inflation shock",
      hr: "Slom klasičnog dionica–obveznice hedža tijekom inflacijskog šoka 2022.–23.",
    },
    body: {
      en: "Markov-switching analysis of how the classic 60/40 portfolio hedge broke down.",
      hr: "Markov-switching analiza neuspjeha klasičnog 60/40 portfelja.",
    },
    href: "/publications/2025-breakdown-portfolio-hedge-markov-switching/",
    featured: false,
  },
  {
    year: { en: "2024", hr: "2024." },
    title: {
      en: "Income convergence in Croatia, 2000–2024",
      hr: "Konvergencija dohotka u Hrvatskoj, 2000.–2024.",
    },
    body: {
      en: "Fractional integration and long-memory time-series methods. Open source.",
      hr: "Frakcionalna integracija i metode dugog pamćenja u vremenskim serijama. Otvoreni kod.",
    },
    href: "/publications/2025-income-convergence-croatia-eu-fractional-integration/",
    featured: false,
  },
  {
    year: { en: "2023", hr: "2023." },
    title: {
      en: "ESG effects on tourism, EU country panel",
      hr: "ESG učinci na turizam, panel zemalja EU-a",
    },
    body: {
      en: "Panel-data study of ESG indicators in EU tourism economies.",
      hr: "Studija ESG pokazatelja u turističkim ekonomijama EU-a metodom panel podataka.",
    },
    featured: false,
  },
];

export interface Course {
  term: string;
  code: LocalizedText;
  title: LocalizedText;
  institution: LocalizedText;
  description: LocalizedText;
  href: string;
}

export const currentCourses: Course[] = [
  {
    term: "2025/26",
    code: { en: "UG · 5 ECTS", hr: "PD · 5 ECTS" },
    title: {
      en: "New Media and Web Technologies",
      hr: "Novi mediji i web tehnologije",
    },
    institution: {
      en: "Croatian Catholic University",
      hr: "Hrvatsko katoličko sveučilište",
    },
    description: {
      en: "Web infrastructure, content management systems, strategic communication, how AI changes online content and discovery, and digital analytics.",
      hr: "Web infrastruktura, sustavi za upravljanje sadržajem, strateško planiranje komunikacije, implikacije umjetne inteligencije i digitalna analitika. Studenti uče kritički procjenjivati i provoditi web-komunikacijske strategije.",
    },
    href: "https://lusiki.github.io/Novi-mediji-i-web-tehnologije/",
  },
  {
    term: "2024/25",
    code: { en: "UG · 6 ECTS", hr: "PD · 6 ECTS" },
    title: { en: "Fundamentals of Statistics", hr: "Osnove statistike" },
    institution: {
      en: "Croatian Catholic University",
      hr: "Hrvatsko katoličko sveučilište",
    },
    description: {
      en: "Statistical foundations for communication students. Descriptive statistics, probability theory, hypothesis testing, and inferential statistics in R (tidyverse, ggplot2), with examples from media and communications.",
      hr: "Statistički temelji za studente komunikologije. Deskriptivna statistika, teorija vjerojatnosti, testiranje hipoteza i inferencijalna statistika u R-u (tidyverse, ggplot2), s primjerima iz medija i komunikacija.",
    },
    href: "https://lusiki.github.io/Osnove-statistike/",
  },
];

export const previousCourses: Course[] = [
  {
    term: "2021/22",
    code: { en: "Graduate", hr: "Diplomski" },
    title: { en: "Data Processing", hr: "Obrada podataka" },
    institution: {
      en: "Faculty of Croatian Studies, Zagreb",
      hr: "Fakultet hrvatskih studija, Zagreb",
    },
    description: {
      en: "Data types and sources, R programming, data visualization, web scraping, machine learning, text analysis, and reproducible reporting. For graduate sociology and social science students.",
      hr: "Vrste i izvori podataka, programiranje u R-u, vizualizacija podataka, web scraping, strojno učenje, analiza teksta i reproducibilno izvještavanje. Za studente diplomske razine sociologije i društvenih znanosti.",
    },
    href: "https://lusiki.github.io/WebObradaPodataka/",
  },
  {
    term: "2021/22",
    code: { en: "Graduate", hr: "Diplomski" },
    title: {
      en: "Social Media Analytics",
      hr: "Analitika društvenih mreža",
    },
    institution: {
      en: "Faculty of Croatian Studies, Zagreb",
      hr: "Fakultet hrvatskih studija, Zagreb",
    },
    description: {
      en: "Computational approaches to social media data. Platform-specific analysis (Twitter, Facebook, Instagram, LinkedIn), data infrastructure, statistical methods, and open-source analytics tools.",
      hr: "Računalni pristupi podacima društvenih mreža. Analiza specifična za platforme (Twitter, Facebook, Instagram, LinkedIn), podatkovna infrastruktura, statističke metode i otvoreni analitički alati.",
    },
    href: "https://lusiki.github.io/Learning-Social-Media-Analytics/",
  },
  {
    term: "2021/22",
    code: { en: "Graduate", hr: "Diplomski" },
    title: { en: "Computational Text Analysis", hr: "Strojna obrada teksta" },
    institution: {
      en: "Faculty of Croatian Studies, Zagreb",
      hr: "Fakultet hrvatskih studija, Zagreb",
    },
    description: {
      en: "Computational text analysis in R: data preparation, dictionary methods, supervised and unsupervised machine learning, topic modeling, and text clustering.",
      hr: "Računalna analiza teksta od pripreme podataka do obrade prirodnog jezika. Rječničke metode, nadgledano i nenadgledano strojno učenje, modeliranje tema i grupiranje teksta u R-u.",
    },
    href: "https://github.com/lusiki/Analiza-teksta",
  },
  {
    term: "2020/21",
    code: { en: "UG", hr: "PD" },
    title: {
      en: "Application of Statistics in Social Research",
      hr: "Primjena statistike u društvenim istraživanjima",
    },
    institution: {
      en: "Faculty of Croatian Studies, Zagreb",
      hr: "Fakultet hrvatskih studija, Zagreb",
    },
    description: {
      en: "R programming, descriptive statistics, data visualization, hypothesis testing, categorical analysis, ANOVA, and linear regression for undergraduate social science students.",
      hr: "Programiranje u R-u, deskriptivna statistika, vizualizacija podataka, testiranje hipoteza, analiza kategorijskih varijabli, ANOVA i linearna regresija za studente preddiplomske razine društvenih znanosti.",
    },
    href: "https://lusiki.github.io/WebStatistika/",
  },
];

export interface Workshop {
  term: LocalizedText;
  code: LocalizedText;
  marker?: LocalizedText;
  title: LocalizedText;
  institution: LocalizedText;
  description: LocalizedText;
  links: Array<{
    label: LocalizedText;
    href: string;
  }>;
}

export const workshops: Workshop[] = [
  {
    term: { en: "2026", hr: "2026." },
    code: { en: "Seminar", hr: "Seminar" },
    title: {
      en: "DigiKat — Catholic themes in Croatian digital media",
      hr: "DigiKat — katoličke teme u hrvatskim digitalnim medijima",
    },
    institution: {
      en: "Complexity Science Hub, Vienna",
      hr: "Complexity Science Hub, Beč",
    },
    description: {
      en: "Executive overview of the project, presented as a seminar: 710,307 posts across nine platforms filtered on 95 Croatian religious terms, 2021–2026. Five analytical layers — publisher archetypes, sixteen thematic streams, tone and conflict intensity, event-driven spikes, and how influence disperses across the ecosystem over time.",
      hr: "Izvršni pregled projekta, predstavljen na seminaru: 710.307 objava na devet platformi filtriranih prema 95 hrvatskih religijskih pojmova, 2021.–2026. Pet analitičkih slojeva — arhetipovi objavljivača, šesnaest tematskih tokova, ton i intenzitet konflikta, skokovi oko događaja te raspršivanje utjecaja u ekosustavu kroz vrijeme.",
    },
    links: [
      {
        label: { en: "Executive overview →", hr: "Izvršni pregled →" },
        href: "https://lusiki.github.io/DigiKat/pages/pregled/izvrsni-pregled.html",
      },
      {
        label: { en: "Project →", hr: "Projekt →" },
        href: "https://lusiki.github.io/DigiKat/",
      },
      {
        label: { en: "GitHub →", hr: "GitHub →" },
        href: "https://github.com/lusiki/DigiKat",
      },
    ],
  },
  {
    term: { en: "2026", hr: "2026." },
    code: { en: "Seminar", hr: "Seminar" },
    title: {
      en: "AI in Economics Research",
      hr: "Umjetna inteligencija u ekonomskim istraživanjima",
    },
    institution: {
      en: "Vienna Institute for International Economic Studies (wiiw), Vienna",
      hr: "Bečki institut za međunarodne ekonomske studije (wiiw), Beč",
    },
    description: {
      en: "From frontier ideas to a functioning agentic pipeline: a working paper rendered live from Eurostat data and a fully reproducible open-source repository you can clone and run.",
      hr: "Od novih ideja do funkcionalnog agentskog sustava: radni tekst generiran uživo iz Eurostatovih podataka i potpuno reproducibilan repozitorij otvorenog koda koji možete klonirati i pokrenuti.",
    },
    links: [
      {
        label: { en: "Slides →", hr: "Prezentacija →" },
        href: "https://lusiki.github.io/AI_workshop_wiiw/",
      },
      {
        label: { en: "GitHub →", hr: "GitHub →" },
        href: "https://github.com/lusiki/AI_workshop_wiiw",
      },
    ],
  },
  {
    term: { en: "2026", hr: "2026." },
    code: { en: "Workshop", hr: "Radionica" },
    title: {
      en: "AI for researchers — from chat to delegation",
      hr: "AI radionica za istraživače — od chata do delegiranja",
    },
    institution: {
      en: "Croatian Catholic University, Zagreb",
      hr: "Hrvatsko katoličko sveučilište, Zagreb",
    },
    description: {
      en: "Agentic AI for methodological research: moving from chat prompting to delegating a whole task that the model plans, executes, and verifies before returning for approval. The repository is itself a worked example of the framework.",
      hr: "Agentska AI za metodološka istraživanja: prijelaz s chat-promptanja na delegiranje cijelog zadatka koji model planira, izvršava i provjerava prije nego što se vrati na odobrenje. Sam je repozitorij radni primjer tog okvira.",
    },
    links: [
      {
        label: { en: "Slides →", hr: "Prezentacija →" },
        href: "https://lusiki.github.io/AI-radionica-za-istra-iva-e/",
      },
      {
        label: { en: "GitHub →", hr: "GitHub →" },
        href: "https://github.com/lusiki/AI-radionica-za-istra-iva-e",
      },
    ],
  },
  {
    term: { en: "2025", hr: "2025." },
    code: { en: "2 days · 7h", hr: "2 dana · 7 h" },
    marker: {
      en: "Funded — NextGenerationEU",
      hr: "Financirano — NextGenerationEU",
    },
    title: {
      en: "Using AI tools in student research",
      hr: "Upotreba AI alata u studentskom istraživanju",
    },
    institution: {
      en: "The Institute of Economics, Zagreb · for graduate economics students",
      hr: "Ekonomski institut Zagreb · za diplomske studente ekonomije",
    },
    description: {
      en: "Day 1 — transformers and RAG, academic integrity and APA 7, Perplexity for sourcing, Gemini Deep Research, structuring a research proposal with Claude. Day 2 — agentic coding with Claude Code, IDE integration, LLM notebooks for exploratory analysis, and AI-assisted academic writing in Croatian. Funded under the National Recovery and Resilience Plan (NextGenerationEU).",
      hr: "Dan 1 — transformerska arhitektura i RAG, akademska čestitost i APA 7, Perplexity za pretraživanje izvora, Gemini Deep Research, strukturiranje istraživačkog nacrta s Claudeom. Dan 2 — agentsko kodiranje s Claude Codeom, integracija u IDE, LLM bilježnice za eksplorativnu analizu i pisanje akademskog teksta uz AI na hrvatskom. Financirano iz Nacionalnog plana oporavka i otpornosti (NextGenerationEU).",
    },
    links: [
      {
        label: { en: "Day 1 →", hr: "Dan 1 →" },
        href: "https://raw.githack.com/lusiki/EIZ-radionica/refs/heads/main/slides/day1.html",
      },
      {
        label: { en: "Day 2 →", hr: "Dan 2 →" },
        href: "https://raw.githack.com/lusiki/EIZ-radionica/refs/heads/main/slides/day2.html",
      },
      {
        label: { en: "GitHub →", hr: "GitHub →" },
        href: "https://github.com/lusiki/EIZ-radionica",
      },
    ],
  },
];
