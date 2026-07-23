// ─────────────────────────────────────────────────────────────────────────
// Contenu bilingue du site Trust Services.
// Une seule source de vérité : chaque clé porte sa valeur FR et EN.
// Les composants .astro reçoivent le bloc `t` correspondant à la langue.
// ─────────────────────────────────────────────────────────────────────────

export type Lang = 'fr' | 'en';

export const LANGS: Lang[] = ['fr', 'en'];

/** Préfixe de route selon la langue (FR à la racine, EN sous /en). */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '');
  const base = lang === 'fr' ? '/' : '/en/';
  return (base + clean).replace(/\/{2,}/g, '/');
}

export type GalleryItem = {
  /** Chemin relatif dans /public. */
  src: string;
  /** Légende localisée. */
  caption: string;
  /** Texte alternatif localisé. */
  alt: string;
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { vehicle: string; services: string; quote: string; quoteCta: string };
  hero: {
    kicker: string;
    h1: string;
    sub: string;
    cta1: string;
    cta2: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
  };
  strip: string[];
  vehicle: {
    kicker: string;
    h2: string;
    p: string;
    gallery: string;
    specs: { label: string; value: string }[];
  };
  services: {
    kicker: string;
    h2: string;
    items: { num: string; title: string; desc: string }[];
  };
  band: { kicker: string; line: string };
  faq: {
    kicker: string;
    h2: string;
    items: { q: string; a: string }[];
  };
  quote: {
    kicker: string;
    h2Html: string;
    meta1: string;
    meta2: string;
    email: string;
    submit: string;
    note: string;
    success: string;
    fields: {
      name: string;
      email: string;
      missionPlaceholder: string;
      missionOptions: string[];
      dates: string;
      place: string;
      paxPlaceholder: string;
      paxOptions: string[];
      message: string;
    };
    mail: { subject: string; labels: string[] };
  };
  gallery: GalleryItem[];
  footer: { mid: string; rights: string };
};

// Chemins des photos (à déposer dans /public/assets — voir assets/README.txt)
const PHOTOS = [
  '/assets/ext-front.jpg',
  '/assets/ext-side.jpg',
  '/assets/ext-rear3q.jpg',
  '/assets/ext-rear.jpg',
  '/assets/int-dash.jpg',
  '/assets/det-door.jpg',
  '/assets/det-armor.jpg',
  '/assets/det-speaker.jpg',
] as const;

const GALLERY_CAPTIONS: Record<Lang, string[]> = {
  fr: [
    'Trois-quarts avant',
    'Profil',
    'Trois-quarts arrière',
    'Face arrière',
    'Poste de conduite',
    'Habitacle arrière',
    'Vitrage blindé',
    'Audio Burmester',
  ],
  en: [
    'Front three-quarter',
    'Side profile',
    'Rear three-quarter',
    'Rear',
    'Cockpit',
    'Rear cabin',
    'Armored glazing',
    'Burmester audio',
  ],
};

function buildGallery(lang: Lang): GalleryItem[] {
  return PHOTOS.map((src, i) => ({
    src,
    caption: GALLERY_CAPTIONS[lang][i],
    alt:
      (lang === 'fr' ? 'Mercedes-Benz Classe S 580 blindée — ' : 'Armored Mercedes-Benz S 580 — ') +
      GALLERY_CAPTIONS[lang][i],
  }));
}

const fr: Dictionary = {
  meta: {
    title: 'Trust Services — Berline blindée B6/B7 avec chauffeur formé · Paris',
    description:
      "Mise à disposition d'une Mercedes-Benz Classe S 580 blindée B6/B7 avec chauffeur formé (permis poids lourd & sécurité). Basés à Paris, opérationnels en France et à l'international. Forfait sur mesure, devis confidentiel sous 24 h.",
  },
  nav: { vehicle: 'Le véhicule', services: 'Services', quote: 'Devis', quoteCta: 'Devis' },
  hero: {
    kicker: 'MERCEDES-BENZ · S 580 4MATIC · BLINDAGE B6/B7',
    h1: 'La discrétion est la meilleure des protections.',
    sub: "Mise à disposition d'une berline blindée B6/B7 avec chauffeur formé — permis poids lourd et sécurité. Basés à Paris, opérationnels partout.",
    cta1: 'Demander un devis',
    cta2: 'Découvrir le véhicule',
    stat1Label: 'DISPONIBILITÉ',
    stat1Value: 'Paris & international',
    stat2Label: 'RÉPONSE DEVIS',
    stat2Value: '< 24 heures',
  },
  strip: [
    'Blindage B6 / B7',
    'Look strictement série',
    'Vitres teintées',
    'Chauffeur formé',
    'Confidentialité totale',
  ],
  vehicle: {
    kicker: '01 — LE VÉHICULE',
    h2: 'Une berline de représentation. Une protection invisible.',
    p: "La Mercedes-Benz Classe S 580 conserve l'apparence exacte d'une berline de série. Rien ne la distingue — c'est précisément l'objectif.",
    gallery: 'Voir toutes les photos — 8',
    specs: [
      { label: 'MODÈLE', value: 'S 580 4MATIC' },
      { label: 'COULEUR', value: 'Noir obsidienne' },
      { label: 'BLINDAGE', value: 'Certifié B6 / B7' },
      { label: 'PASSAGERS', value: '1 – 4' },
      { label: 'CHAUFFEUR', value: 'Formé — poids lourd & sécurité' },
    ],
  },
  services: {
    kicker: '02 — LES MISSIONS',
    h2: 'Une mise à disposition sur forfait, adaptée à chaque besoin.',
    items: [
      {
        num: '01 — TRANSFERT',
        title: 'Transfert ponctuel',
        desc: "Aéroports, gares, rendez-vous sensibles. Prise en charge ponctuelle, d'un point à un autre, en toute discrétion.",
      },
      {
        num: '02 — JOURNÉE',
        title: 'Mise à disposition journée',
        desc: 'Véhicule et chauffeur à votre disposition pour la journée. Itinéraire libre, arrêts multiples, attente sur place.',
      },
      {
        num: '03 — LONGUE DURÉE',
        title: 'Longue durée',
        desc: "Déplacements, tournées, séjours prolongés en France ou à l'étranger. Un dispositif dédié, sur la durée.",
      },
    ],
  },
  band: {
    kicker: 'PARIS · FRANCE · INTERNATIONAL',
    line: 'Là où vous allez, la discrétion vous précède.',
  },
  faq: {
    kicker: '04 — QUESTIONS FRÉQUENTES',
    h2: 'Questions fréquentes',
    items: [
      {
        q: 'Le service est-il toujours avec chauffeur ?',
        a: "Oui, exclusivement. Nos chauffeurs sont formés à la conduite (permis poids lourd) et à la sécurité, parlent français et anglais, et se présentent en tenue sobre et élégante.",
      },
      {
        q: 'Où intervenez-vous ?',
        a: "Basés à Paris, nous nous déplaçons dans toute la France ainsi que dans les pays limitrophes — Suisse, Italie et frontières proches. Précisez votre destination dans la demande de devis.",
      },
      {
        q: 'Le véhicule est-il reconnaissable comme blindé ?',
        a: "Non. La Mercedes-Benz Classe S conserve l'apparence exacte d'une berline de série : rien ne laisse deviner son blindage. Aucune information sur nos clients ou leurs trajets n'est communiquée — la confidentialité est totale.",
      },
      {
        q: 'Quel est le niveau de blindage, et contre quoi protège-t-il ?',
        a: "Le véhicule est certifié B6/B7, un niveau de protection élevé. Le blindage résiste aux armes de poing ainsi qu'aux armes longues telles que les fusils d'assaut de calibre 5,56 mm et 7,62 mm ; le niveau B7 protège en outre contre certaines munitions perforantes. Le détail des protections est communiqué sur demande, dans un cadre confidentiel.",
      },
      {
        q: 'Comment réserver, et à quel tarif ?',
        a: "La réservation à l'avance est recommandée. Chaque mise à disposition est un forfait établi selon votre demande ; le tarif est communiqué sur devis. Nous répondons à chaque demande sous 24 heures.",
      },
    ],
  },
  quote: {
    kicker: '03 — DEMANDE DE DEVIS',
    h2Html: "Chaque mission est unique.<br>Chaque devis l'est aussi.",
    meta1: 'RÉPONSE SOUS 24 H',
    meta2: 'CONFIDENTIALITÉ GARANTIE',
    email: 'contact@trust-services.fr',
    submit: 'Envoyer la demande →',
    note: 'Aucun engagement · réponse personnalisée sous 24 h',
    success:
      "✓ Votre demande est prête dans votre messagerie — il ne reste qu'à l'envoyer. Nous vous répondons sous 24 h.",
    fields: {
      name: 'Nom complet *',
      email: 'Email *',
      missionPlaceholder: 'Type de mission…',
      missionOptions: ['Transfert ponctuel', 'Mise à disposition journée', 'Longue durée'],
      dates: 'Dates (du — au)',
      place: 'Lieu de prise en charge',
      paxPlaceholder: 'Nombre de passagers…',
      paxOptions: ['1 passager', '2 passagers', '3 passagers', '4 passagers'],
      message: 'Votre message — précisez votre besoin, contraintes de sécurité, horaires…',
    },
    mail: {
      subject: 'Demande de devis — Trust Services',
      labels: ['Nom', 'Email', 'Mission', 'Dates', 'Lieu de prise en charge', 'Passagers', 'Message'],
    },
  },
  gallery: buildGallery('fr'),
  footer: {
    mid: 'TRUST SERVICES · PARIS · MISE À DISPOSITION DE VÉHICULE BLINDÉ',
    rights: '© 2026 · FR / EN',
  },
};

const en: Dictionary = {
  meta: {
    title: 'Trust Services — B6/B7 armored sedan with a trained chauffeur · Paris',
    description:
      'A B6/B7 armored Mercedes-Benz S 580 with a trained chauffeur (HGV licence & security training), at your disposal. Based in Paris, operating across France and worldwide. Bespoke package, confidential quote within 24 h.',
  },
  nav: { vehicle: 'The vehicle', services: 'Services', quote: 'Quote', quoteCta: 'Quote' },
  hero: {
    kicker: 'MERCEDES-BENZ · S 580 4MATIC · B6/B7 ARMORED',
    h1: 'Discretion is the finest form of protection.',
    sub: 'A B6/B7 armored sedan with a trained chauffeur — HGV licence and security training. Based in Paris, available anywhere.',
    cta1: 'Request a quote',
    cta2: 'Discover the vehicle',
    stat1Label: 'AVAILABILITY',
    stat1Value: 'Paris & worldwide',
    stat2Label: 'QUOTE RESPONSE',
    stat2Value: '< 24 hours',
  },
  strip: [
    'B6 / B7 armoring',
    'Strictly factory appearance',
    'Tinted windows',
    'Trained chauffeur',
    'Complete confidentiality',
  ],
  vehicle: {
    kicker: '01 — THE VEHICLE',
    h2: 'An executive sedan. Invisible protection.',
    p: 'The Mercedes-Benz S 580 keeps the exact appearance of a factory sedan. Nothing sets it apart — that is precisely the point.',
    gallery: 'View all photos — 8',
    specs: [
      { label: 'MODEL', value: 'S 580 4MATIC' },
      { label: 'COLOUR', value: 'Obsidian black' },
      { label: 'ARMORING', value: 'Certified B6 / B7' },
      { label: 'PASSENGERS', value: '1 – 4' },
      { label: 'CHAUFFEUR', value: 'Trained — HGV & security' },
    ],
  },
  services: {
    kicker: '02 — MISSIONS',
    h2: 'A bespoke, package-based service for every need.',
    items: [
      {
        num: '01 — TRANSFER',
        title: 'One-off transfer',
        desc: 'Airports, stations, sensitive meetings. Point-to-point pickup, handled with full discretion.',
      },
      {
        num: '02 — DAILY',
        title: 'Daily hire',
        desc: 'Vehicle and chauffeur at your disposal for the day. Free itinerary, multiple stops, standby on site.',
      },
      {
        num: '03 — LONG TERM',
        title: 'Long term',
        desc: 'Trips, tours, extended stays in France or abroad. A dedicated arrangement, over time.',
      },
    ],
  },
  band: {
    kicker: 'PARIS · FRANCE · WORLDWIDE',
    line: 'Wherever you go, discretion goes first.',
  },
  faq: {
    kicker: '04 — FREQUENTLY ASKED QUESTIONS',
    h2: 'Frequently asked questions',
    items: [
      {
        q: 'Is the service always with a chauffeur?',
        a: 'Yes, exclusively. Our chauffeurs are trained in both driving (HGV licence) and security, speak French and English, and present themselves in understated, elegant attire.',
      },
      {
        q: 'Where do you operate?',
        a: 'Based in Paris, we travel throughout France and to neighbouring countries — Switzerland, Italy and nearby borders. Simply mention your destination in the quote request.',
      },
      {
        q: 'Can the vehicle be identified as armored?',
        a: 'No. The Mercedes-Benz S-Class keeps the exact appearance of a factory sedan: nothing reveals its armoring. No information about our clients or their journeys is ever shared — confidentiality is absolute.',
      },
      {
        q: 'What is the armoring level, and what does it protect against?',
        a: 'The vehicle is certified B6/B7, a high level of protection. The armoring withstands handguns as well as long guns such as 5.56 mm and 7.62 mm assault rifles; the B7 level also protects against certain armour-piercing rounds. Full protection details are provided on request, within a confidential discussion.',
      },
      {
        q: 'How do I book, and at what price?',
        a: 'Booking in advance is recommended. Each assignment is a package tailored to your request; pricing is provided by quote. We reply to every enquiry within 24 hours.',
      },
    ],
  },
  quote: {
    kicker: '03 — REQUEST A QUOTE',
    h2Html: 'Every mission is unique.<br>So is every quote.',
    meta1: 'RESPONSE WITHIN 24 H',
    meta2: 'CONFIDENTIALITY GUARANTEED',
    email: 'contact@trust-services.fr',
    submit: 'Send request →',
    note: 'No commitment · personalised reply within 24 h',
    success: '✓ Your request is ready in your mail app — just hit send. We reply within 24 h.',
    fields: {
      name: 'Full name *',
      email: 'Email *',
      missionPlaceholder: 'Type of mission…',
      missionOptions: ['One-off transfer', 'Daily hire', 'Long term'],
      dates: 'Dates (from — to)',
      place: 'Pickup location',
      paxPlaceholder: 'Number of passengers…',
      paxOptions: ['1 passenger', '2 passengers', '3 passengers', '4 passengers'],
      message: 'Your message — describe your needs, security constraints, timing…',
    },
    mail: {
      subject: 'Quote request — Trust Services',
      labels: ['Name', 'Email', 'Mission', 'Dates', 'Pickup location', 'Passengers', 'Message'],
    },
  },
  gallery: buildGallery('en'),
  footer: {
    mid: 'TRUST SERVICES · PARIS · ARMORED VEHICLE HIRE',
    rights: '© 2026 · FR / EN',
  },
};

const DICTIONARIES: Record<Lang, Dictionary> = { fr, en };

export function getDictionary(lang: Lang): Dictionary {
  return DICTIONARIES[lang];
}
