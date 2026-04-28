export type Theme = {
  slug: string;
  name: string;
  tagline: string;
  emoji: string;
  color: string;
  price: string;
  ageRange: string;
  duration: string;
  shortDescription: string;
  longDescription: string[];
  highlights: string[];
  ingredients?: string[]; // ingrédients à fournir (uniquement Le meilleur gâteau)
  testimonial?: {
    author: string;
    text: string[];
  };
  /**
   * Galerie photos pour la page détail.
   * Laissez vide ; l'interface affichera des emplacements prêts à recevoir
   * les images. Pour ajouter une photo : importez-la depuis src/assets/themes
   * et ajoutez l'URL dans ce tableau.
   */
  gallery: string[];
};

export const themes: Theme[] = [
  {
    slug: "le-meilleur-gateau",
    name: "Le meilleur gâteau",
    tagline: "Pour les apprentis pâtissiers en herbe",
    emoji: "🧁",
    color: "from-pink-300/30 to-amber-300/30",
    price: "60 €",
    ageRange: "Dès 3-4 ans (pâte préparée à l'avance) — dès 6-7 ans en autonomie supervisée",
    duration: "Adaptable selon l'âge",
    shortDescription:
      "Votre enfant adore pâtisser ou suit avec assiduité « Le Meilleur Pâtissier » ? Proposez-lui la malle Le meilleur gâteau !",
    longDescription: [
      "Par groupe de 2 ou 3 suivant le nombre d'invités, les enfants réalisent une pâte de base pour leur cupcake et l'agrémentent à leur goût.",
      "Après la cuisson, ils le décorent : crème, glaçage, décorations de pâtisserie…",
      "Qui aura réalisé le meilleur cupcake ? À goûter sur place, à emporter, ou les deux !",
    ],
    highlights: [
      "Activité originale clé en main",
      "Adaptable de 3 à 10+ ans",
      "Cupcakes à déguster ou emporter",
      "Déroulé et explications détaillés",
    ],
    ingredients: [
      "Beurre, sucre, farine, œufs et levure chimique",
      "Chocolat, pépites de chocolat, fruits frais ou surgelés, extrait de vanille",
      "Papier cuisson ou caissettes à muffins",
    ],
    testimonial: {
      author: "Fanja",
      text: [
        "J'ai essayé la mallette « Le meilleur gâteau » de Magic Soazic pour les 7 ans de ma fille.",
        "J'ai été très satisfaite sur plusieurs points : idée d'activité très originale, déguisements soignés et chouettes, matériel complet et de qualité, feuilles d'explications très claires et rédigées avec de jolis clins d'œil aux parents.",
        "Ayant été très en retard dans l'organisation de cet anniversaire, j'ai été ravie de me retrouver avec cette mallette « prête à l'emploi » me déchargeant des conséquences de ce retard, et qui plus est avec une qualité exceptionnelle.",
        "Plusieurs parents m'ont fait un retour très positif sur l'originalité du concept et bien entendu sur l'enthousiasme de leur enfant. En résumé : les 8 petites pâtissières se sont régalées, et moi aussi !",
      ],
    },
    gallery: [],
  },
  {
    slug: "ecole-de-magie",
    name: "À l'école de magie",
    tagline: "Bienvenue dans l'univers du célèbre sorcier à la cicatrice",
    emoji: "🪄",
    color: "from-violet-300/30 to-indigo-300/30",
    price: "80 €",
    ageRange: "Dès 6 ans",
    duration: "Une après-midi entière",
    shortDescription:
      "Plongez dans l'univers du célèbre sorcier à la cicatrice et vivez une année à l'école de magie le temps d'un anniversaire.",
    longDescription: [
      "Après avoir pris le temps de vous équiper, saurez-vous accéder au quai du train vous menant à l'école ?",
      "Dans quelle maison allez-vous être répartis ?",
      "Survivrez-vous aux cours de l'école ? Aux rencontres avec des êtres improbables ?",
      "Arriverez-vous à la fin de l'année ?",
      "Transformez votre salon et plongez-le dans l'ambiance grâce à de nombreux décors.",
    ],
    highlights: [
      "Décor immersif pour transformer votre salon",
      "Cérémonie de répartition dans les maisons",
      "Cours, créatures et potions",
      "Bougies volantes, sticker de Mimi Geignarde, chouette Edwige…",
    ],
    testimonial: {
      author: "Laurianne",
      text: [
        "J'ai utilisé la malle À l'école de Magie pour les 10 ans de mon fils.",
        "J'ai été agréablement surprise de voir tous les ustensiles et détails proposés dans cette malle (bougies volantes, sticker de Mimi Geignarde, potions magiques, la chouette Edwige dans sa cage…).",
        "Il y a même un mode d'emploi pour faciliter la mise en place du décor et le déroulé de l'événement.",
      ],
    },
    gallery: [],
  },
  {
    slug: "pirates",
    name: "Pirates",
    tagline: "À l'abordage, moussaillons !",
    emoji: "🏴‍☠️",
    color: "from-amber-300/30 to-red-300/30",
    price: "Sur demande",
    ageRange: "Dès 5 ans",
    duration: "Activités intérieures ou extérieures",
    shortDescription:
      "Vos invités ont-ils tout ce qu'il faut pour être de vrais pirates ? Faites-les entrer directement dans l'univers de la flibuste avec le contrat de piraterie.",
    longDescription: [
      "Vont-ils réussir les épreuves pour passer de moussaillon à pirate aguerri ?",
      "Sauront-ils affronter les dangers de la mer ? Manier les canons ? Sortir des sables mouvants ? Sauver le rhum ?",
      "Arriveront-ils à trouver la carte aux trésors et la suivre jusqu'au bout ?",
      "Prêts à chanter des chansons de pirate ?",
      "Plongez les enfants dans l'univers des pirates avec des activités intérieures ou extérieures.",
    ],
    highlights: [
      "Contrat de piraterie pour entrer dans le rôle",
      "Épreuves de moussaillon à pirate aguerri",
      "Carte au trésor et coffre à découvrir",
      "Activités modulables intérieur / extérieur",
    ],
    gallery: [],
  },
  {
    slug: "princesses",
    name: "Princesses",
    tagline: "Princesses & chevaliers, bienvenue au château",
    emoji: "👑",
    color: "from-pink-300/30 to-purple-300/30",
    price: "60 €",
    ageRange: "Dès 4 ans",
    duration: "Une après-midi enchantée",
    shortDescription:
      "Accueillez les princesses et chevaliers dans le château pour une fête royale : créations, défilé et construction du château de leurs rêves.",
    longDescription: [
      "Qu'ils confectionnent couronnes et boucliers à leur goût.",
      "Qu'ils défilent dans leurs plus beaux habits.",
      "Et qu'ils construisent ensemble le château de leur rêve.",
    ],
    highlights: [
      "Atelier création couronnes & boucliers",
      "Défilé costumé",
      "Construction collective du château",
      "Univers princesses ET chevaliers",
    ],
    gallery: [],
  },
];
