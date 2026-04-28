export type Theme = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  ageRange: string;
  duration: string;
  includes: string[];
  emoji: string;
  color: string;
};

export const themes: Theme[] = [
  {
    slug: "princesses",
    name: "Princesses & Châteaux",
    tagline: "Un bal royal pour petites altesses",
    description:
      "Tiares, baguettes magiques, robe de bal et chasse aux bijoux du royaume. Une après-midi digne d'un conte de fées.",
    ageRange: "4 – 8 ans",
    duration: "2h30 d'animation",
    includes: ["Décoration complète", "10 déguisements", "Activités guidées", "Déroulé pas à pas"],
    emoji: "👑",
    color: "from-pink-300/30 to-purple-300/30",
  },
  {
    slug: "pirates",
    name: "Chasse aux Pirates",
    tagline: "À l'abordage, moussaillons !",
    description:
      "Carte au trésor, bandeaux, sabres en mousse et énigmes pour retrouver le coffre caché par le Capitaine Crochet.",
    ageRange: "5 – 10 ans",
    duration: "3h d'aventure",
    includes: ["Décoration pirate", "10 panoplies", "Carte & énigmes", "Trésor à découvrir"],
    emoji: "🏴‍☠️",
    color: "from-amber-300/30 to-red-300/30",
  },
  {
    slug: "magie",
    name: "Apprentis Sorciers",
    tagline: "Bienvenue à l'école de magie",
    description:
      "Capes, baguettes, potions colorées et grimoire d'apprenti. Vos enfants deviennent les héros de leur saga préférée.",
    ageRange: "6 – 11 ans",
    duration: "3h de magie",
    includes: ["Grand chapeau magique", "10 capes", "Potions à préparer", "Diplôme de sorcier"],
    emoji: "🪄",
    color: "from-violet-300/30 to-indigo-300/30",
  },
  {
    slug: "licornes",
    name: "Pays des Licornes",
    tagline: "Un anniversaire pailleté & arc-en-ciel",
    description:
      "Cornes scintillantes, ailes pastel, cup-cakes magiques et atelier création de bracelets aux couleurs de l'arc-en-ciel.",
    ageRange: "3 – 7 ans",
    duration: "2h pailletées",
    includes: ["Déco arc-en-ciel", "10 cornes & ailes", "Atelier créatif", "Souvenirs à emporter"],
    emoji: "🦄",
    color: "from-pink-300/30 to-cyan-300/30",
  },
  {
    slug: "explorateurs",
    name: "Explorateurs de la Jungle",
    tagline: "Aventure en terre inconnue",
    description:
      "Jumelles, casques d'explorateur, parcours sensoriel et mission de sauvetage des animaux de la savane.",
    ageRange: "5 – 9 ans",
    duration: "2h30 d'expédition",
    includes: ["Décor jungle", "10 panoplies", "Mission guidée", "Animaux à découvrir"],
    emoji: "🦁",
    color: "from-green-300/30 to-amber-300/30",
  },
  {
    slug: "espace",
    name: "Mission Spatiale",
    tagline: "Décollage immédiat vers les étoiles",
    description:
      "Combinaisons d'astronautes, fusée à construire, planètes à explorer et atterrissage en douceur sur la Lune.",
    ageRange: "6 – 10 ans",
    duration: "3h cosmiques",
    includes: ["Décor galactique", "10 combinaisons", "Atelier construction", "Mission à accomplir"],
    emoji: "🚀",
    color: "from-blue-300/30 to-violet-300/30",
  },
];
