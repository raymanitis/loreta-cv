/** @typedef {'en' | 'lv'} Lang */

export const STORAGE_KEY = "loreta-lang";

export const translations = {
  meta: {
    title: {
      en: "Loreta Lujāne · CV",
      lv: "Loreta Lujāne · CV",
    },
  },
  nav: {
    about: { en: "About", lv: "Par mani" },
    works: { en: "Works", lv: "Darbs" },
    contact: { en: "Contact", lv: "Kontakti" },
  },
  about: {
    title: {
      en: "Who am I?",
      lv: "Kas es esmu?",
    },
    paragraphs: {
      en: [
        "I am a motivated and reliable professional with 3–4 years of experience working with international clients. I have a strong command of English and communicate confidently with people from different countries on a daily basis.",
        "I am known for being punctual, dependable, and adaptable in fast-paced environments. My ability to think creatively helps me find effective solutions to customer issues, while maintaining a positive and professional attitude.",
        "At 21, I bring both energy and practical experience to my work, along with a strong commitment to delivering high-quality support and ensuring customer satisfaction.",
      ],
      lv: [
        "Esmu motivēta un uzticama profesionāle ar 3–4 gadu pieredzi darbā ar starptautiskiem klientiem. Man ir labas angļu valodas zināšanas, un es ikdienā pārliecinoši komunicēju ar cilvēkiem no dažādām valstīm.",
        "Esmu pazīstama ar savu punktualitāti, uzticamību un spēju pielāgoties strauji mainīgā vidē. Mana spēja radoši domāt palīdz man atrast efektīvus risinājumus klientu problēmām, vienlaikus saglabājot pozitīvu un profesionālu attieksmi.",
        "21 gada vecumā es savā darbā ienesu gan enerģiju, gan praktisku pieredzi, kā arī stingru apņemšanos sniegt augstas kvalitātes atbalstu un nodrošināt klientu apmierinātību.",
      ],
    },
  },
  skills: {
    heading: { en: "Skills", lv: "Prasmes" },
    items: [
      {
        id: 1,
        percentage: "95%",
        en: "English language & confident communication",
        lv: "Angļu valoda un pārliecinoša komunikācija",
      },
      {
        id: 2,
        percentage: "92%",
        en: "Working with international clients",
        lv: "Darbs ar starptautiskiem klientiem",
      },
      {
        id: 3,
        percentage: "95%",
        en: "Customer service, support & satisfaction",
        lv: "Klientu apkalpošana, atbalsts un apmierinātība",
      },
      {
        id: 4,
        percentage: "94%",
        en: "Reliability, punctuality & adapting to fast-paced work",
        lv: "Uzticamība, punktualitāte un pielāgošanās dinamiskai videi",
      },
      {
        id: 5,
        percentage: "90%",
        en: "Creative problem-solving for customer issues",
        lv: "Radošas problēmu risināšanas pieeja klientu jautājumiem",
      },
      {
        id: 6,
        percentage: "96%",
        en: "Positive, professional approach",
        lv: "Pozitīva un profesionāla attieksme",
      },
    ],
  },
  work: {
    heading: { en: "Work experience", lv: "Darba pieredze" },
    subheading: {
      en: "Places I’ve worked — company, role, and how long I was there.",
      lv: "Manas darba vietas — uzņēmums, amats un laika periods.",
    },
    jobs: [
      {
        id: 1,
        en: {
          company: 'Tortilla (café & shop)',
          role: "Café serving & counter",
          period: "~2 months",
          summary:
            "Worked at Tortilla café / shop serving customers daily: greetings, orders, cash register and handing over takeaway, cooperating with teammates during peaks.",
        },
        lv: {
          company: "Tortilla (kafejnīcas veikals)",
          role: "Apkalpošana pie letes",
          period: "~2 mēneši",
          summary:
            "Darbs Tortilla kafejnīcas veikalā: klientu apkalpošana, pasūtījumu pieņemšana, kases darbs un sadarbība ar kolektīvu arī ļoti saspringtākajās maiņās.",
        },
      },
      {
        id: 2,
        en: {
          company: "Night club",
          role: "Front-of-house · guest-facing",
          period: "2022 – 2026",
          summary:
            "Night shifts interacting with diverse guests/clients throughout the venue: welcoming people, coordinating with bartenders and security, handling questions politely, and teamwork in fast-paced nighttime conditions.",
        },
        lv: {
          company: "Nakts klubs",
          role: "Darbs klientorientētā naktsvietnes vietā",
          period: "2022 – 2026",
          summary:
            "Nakts maiņās būtiska komunikācija un sadarbība ar dažādiem viesiem un klientiem, jautājumu risināšana, kolektīva darbs ar baru un drošības komandām dinamiski mainīgās jebkurās situācijas režīmu.",
        },
      },
    ],
  },
  contact: {
    heading: { en: "Contact", lv: "Kontakti" },
    intro: {
      en: "Here are the best ways to reach me — tap phone or email to connect.",
      lv: "Visērtāk man sazināties pa tālruni vai e-pastu — pieskarieties, lai atvērtu.",
    },
    phone: { en: "Phone", lv: "Tālrunis" },
    email: { en: "Email", lv: "E-pasts" },
  },
  sidebar: {
    roleBeforeLink: {
      en: "Grade 10 student at ",
      lv: "10. klases skolniece iekš ",
    },
    roleLinkLabel: {
      en: "VSK.LV",
      lv: "VSK.LV",
    },
    roleAfterLink: {
      en: " — VSK distance-learning secondary school",
      lv: " jeb VSK tālmācības vidusskola",
    },
    schoolHref: "https://www.vsk.lv/",
    downloadResume: { en: "Download Resume", lv: "Lejupielādēt CV" },
    profileAlt: { en: "Loreta Lujāne", lv: "Loreta Lujāne" },
  },
};

/**
 * @param {Lang} lang
 * @param {{ en: string; lv: string }} t
 */
export function pick(lang, t) {
  return t[lang] ?? t.en;
}
