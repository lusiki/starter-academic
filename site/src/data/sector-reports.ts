/** Add sectors and editions here; the bilingual library and filters build from this catalogue. */
export type ReportLanguage = "en" | "hr";
type Translation = Record<ReportLanguage, string>;

export const sectorNames = {
  energy: { en: "Energy", hr: "Energetika" },
  construction: {
    en: "Construction & real estate",
    hr: "Građevinarstvo i nekretnine",
  },
  "food-beverages": { en: "Food & beverages", hr: "Hrana i piće" },
  telecommunications: { en: "Telecommunications", hr: "Telekomunikacije" },
  retail: { en: "Retail", hr: "Trgovina na malo" },
  tourism: { en: "Tourism", hr: "Turizam" },
} satisfies Record<string, Translation>;

export const reportEditions = {
  "autumn-2026": {
    name: { en: "Autumn 2026", hr: "Jesen 2026." },
    period: {
      en: "September 2025 – August 2026",
      hr: "Rujan 2025. – kolovoz 2026.",
    },
  },
} satisfies Record<string, { name: Translation; period: Translation }>;

interface SectorReport {
  sector: keyof typeof sectorNames;
  edition: keyof typeof reportEditions;
  articles: number;
  percentage: number;
  pages: number;
  summaryPage: number;
  companies: Translation;
  deck: Translation;
  metric: Translation;
  overview: Translation;
  question: Translation;
}

export const sectorReports: SectorReport[] = [
  {
    sector: "energy",
    edition: "autumn-2026",
    articles: 40027,
    percentage: 51.1,
    pages: 16,
    summaryPage: 2,
    companies: {
      en: "16 companies & operators",
      hr: "16 kompanija i operatora",
    },
    deck: {
      en: "Prices, supply and the questions behind the headlines.",
      hr: "Cijene, opskrba i pitanja iza medijskih naslova.",
    },
    metric: { en: "mention prices & costs", hr: "spominje cijene i troškove" },
    overview: {
      en: "Prices and costs appear in 20,468 of 40,027 selected portal articles. The report examines how this attention intersects with supply, infrastructure and project communication.",
      hr: "Cijene i troškovi pojavljuju se u 20.468 od 40.027 odabranih objava na portalima. Izvještaj ispituje kako se ta pozornost povezuje s opskrbom, infrastrukturom i komunikacijom projekata.",
    },
    question: {
      en: "Which themes accompany a company’s name, and what is the next verifiable milestone in a project?",
      hr: "Koje se teme pojavljuju uz ime kompanije i koja je sljedeća provjerljiva etapa projekta?",
    },
  },
  {
    sector: "construction",
    edition: "autumn-2026",
    articles: 26249,
    percentage: 80.6,
    pages: 17,
    summaryPage: 2,
    companies: {
      en: "10 construction companies",
      hr: "10 građevinskih kompanija",
    },
    deck: {
      en: "Projects make the news. Headlines change the picture.",
      hr: "Projekti stvaraju vijesti. Naslovi mijenjaju sliku.",
    },
    metric: {
      en: "mention projects & investment",
      hr: "spominje projekte i ulaganja",
    },
    overview: {
      en: "Projects and investment appear in 21,165 of 26,249 selected portal articles. Overall mentions and headline appearances can give different pictures of company visibility; the report examines both, alongside housing affordability.",
      hr: "Projekti i ulaganja pojavljuju se u 21.165 od 26.249 odabranih objava na portalima. Ukupna spominjanja i pojavljivanja u naslovima mogu dati različitu sliku vidljivosti kompanije. Izvještaj ispituje oba pokazatelja te priuštivost stanovanja.",
    },
    question: {
      en: "Who appears in the headline, and how are project values, delivery stages and housing costs explained?",
      hr: "Tko se pojavljuje u naslovu i kako se objašnjavaju vrijednost projekta, faze izvedbe i troškovi stanovanja?",
    },
  },
  {
    sector: "food-beverages",
    edition: "autumn-2026",
    articles: 11782,
    percentage: 25.7,
    pages: 15,
    summaryPage: 2,
    companies: { en: "10 companies", hr: "10 kompanija" },
    deck: {
      en: "From price pressure to the story of the business.",
      hr: "Od cjenovnih pritisaka do poslovne priče.",
    },
    metric: { en: "mention prices & costs", hr: "spominje cijene i troškove" },
    overview: {
      en: "Prices and costs appear in 3,026 of 11,782 selected portal articles. The report follows company visibility, repeated coverage and the different emphases given to business results.",
      hr: "Cijene i troškovi pojavljuju se u 3.026 od 11.782 odabrane objave na portalima. Izvještaj prati vidljivost kompanija, prijenose istih priča i različite naglaske u izvještavanju o poslovnim rezultatima.",
    },
    question: {
      en: "When are several articles versions of the same story, and which part of a business result becomes the headline?",
      hr: "Kada je više objava zapravo ista priča i koji dio poslovnog rezultata postaje naslov?",
    },
  },
  {
    sector: "telecommunications",
    edition: "autumn-2026",
    articles: 2691,
    percentage: 20.4,
    pages: 16,
    summaryPage: 2,
    companies: { en: "5 companies", hr: "5 kompanija" },
    deck: {
      en: "Networks, AI and the customer’s point of view.",
      hr: "Mreže, umjetna inteligencija i perspektiva korisnika.",
    },
    metric: {
      en: "mention networks & coverage",
      hr: "spominje mrežu i pokrivenost",
    },
    overview: {
      en: "Networks and coverage appear in 549 of 2,691 selected portal articles, making them the most frequent tracked theme. The report also examines growing AI attention and recurring questions about prices and customer value.",
      hr: "Mreža i pokrivenost pojavljuju se u 549 od 2.691 odabrane objave na portalima i najčešća su praćena tema. Izvještaj ispituje i rast pozornosti prema umjetnoj inteligenciji te ponavljajuća pitanja o cijenama i vrijednosti za korisnika.",
    },
    question: {
      en: "How do operators and suppliers differ, and how does a technology announcement translate into a benefit for the user?",
      hr: "Kako se razlikuju operatori i dobavljači te kako tehnološku najavu povezati s konkretnom koristi za korisnika?",
    },
  },
  {
    sector: "retail",
    edition: "autumn-2026",
    articles: 14595,
    percentage: 24.3,
    pages: 15,
    summaryPage: 2,
    companies: { en: "10 retail chains", hr: "10 trgovačkih lanaca" },
    deck: {
      en: "The difference between being mentioned and being understood.",
      hr: "Što stoji iza spominjanja trgovačkog lanca?",
    },
    metric: { en: "mention prices & costs", hr: "spominje cijene i troškove" },
    overview: {
      en: "Prices and costs appear in 3,553 of 14,595 selected portal articles. The report distinguishes business stories and sensitive events from routine information such as store opening hours.",
      hr: "Cijene i troškovi pojavljuju se u 3.553 od 14.595 odabranih objava na portalima. Izvještaj razlikuje poslovne priče i osjetljive događaje od servisnih informacija poput radnog vremena trgovina.",
    },
    question: {
      en: "What creates visibility for a chain, and which price-related themes persist beyond a boycott?",
      hr: "Što stvara vidljivost lanca i koje cjenovne teme ostaju prisutne nakon bojkota?",
    },
  },
  {
    sector: "tourism",
    edition: "autumn-2026",
    articles: 13348,
    percentage: 30.2,
    pages: 15,
    summaryPage: 2,
    companies: { en: "10 hotel companies", hr: "10 hotelskih kompanija" },
    deck: {
      en: "Seasonal attention. A longer story about value.",
      hr: "Sezonska pozornost. Dugoročnija priča o vrijednosti.",
    },
    metric: {
      en: "mention season & demand",
      hr: "spominje sezonu i potražnju",
    },
    overview: {
      en: "Season and demand appear in 4,035 of 13,348 selected portal articles. The report places price attention and hotel-company visibility in their seasonal and business context.",
      hr: "Sezona i potražnja pojavljuju se u 4.035 od 13.348 odabranih objava na portalima. Izvještaj tumači pozornost prema cijenama i vidljivost hotelskih kompanija u njihovu sezonskom i poslovnom kontekstu.",
    },
    question: {
      en: "What changes between annual and summer comparisons, and what is missed when only corporate names are tracked?",
      hr: "Što se mijenja između godišnjih i ljetnih usporedbi te što izostaje kada pratimo samo korporativna imena?",
    },
  },
];

export const reportId = (report: SectorReport) =>
  `${report.sector}-${report.edition}`;
export const reportPdf = (report: SectorReport) =>
  `/media-intelligence/reports/${report.edition}/${report.sector}.pdf`;
