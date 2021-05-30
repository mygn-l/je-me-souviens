const quiz_config = [];

const question_answer = require("../models/question-answer-class");

quiz_config.push(
  new question_answer(
    "Quel est le 2eme nom du British Party?",
    ["Le Parti Patriotes", "Le Tory Party", "Le Tony Party", "Il n'y en a pas"],
    "b"
  )
);

quiz_config.push(
  new question_answer("Combien de batailles y avait-il en tout?", ["3", "5", "8", "9"], "d")
);

quiz_config.push(
  new question_answer(
    "En quelle année le Parti Canadien a-t-il changé de nom?",
    ["1826 ", "1836", "1869", "1829"],
    "a"
  )
);

quiz_config.push(
  new question_answer(
    "Lequel de ces journaux-ci est faux?",
    ["La Minnerve", "Le Canadien", "L’Echo du pays", "Le Townchips Reformer"],
    "d"
  )
);

quiz_config.push(
  new question_answer(
    "Pourquoi y avait-il des tensions aux secteurs politiques?",
    [
      "Après la révolution Russe de 1805, les députés élus, décidèrent que c’est assez, le capitalisme n’est plus l’idéologie parfaite et, sous l’influence du communisme et Rasputin en cœur, les gens veulent changer le capitalisme du Bas-Canada. Le gouvernement, très riche et ne voulant pas s’appauvrir, décide de ne rien changer, ce qui fâchera la Chambre d’assemblée",
      "Le gouverneur et ses conseillers sont plus riche et chantent vraiment mieux que les députés élus, les intimident les élus moins populaires, organisent des “partés” sans inviter aucun français et créent des rumeurs fausses, ce qui fâche la chambre d’assemblée.",
      "Le gouverneur était connu pour son droit de véto, il l’ utilisait pour exécuter des civiliens innocents, pour passer premier dans les longues lignes et prenait les chocolats des enfants, ce qui fâche la chambre d’assemblée",
      "Puisque l’autorité anglaise limite le pouvoir de la chambre d’assemblée et  le gouverneur a le droit de véto, le pouvoir de la chambre d’assemblée est peu importante, ce qui fâche la Chambre d’assemblée.",
    ],
    "d"
  )
);

quiz_config.push(
  new question_answer(
    "Lequel des énoncés viennent de l’acte constitutionnel?",
    [
      "Le Haut-Canada est sous l'administration d'un lieutenant gouverneur nommé par le gouverneur général alors que le Bas-Canada est sous l'administration directe d'un représentant du gouverneur général.",
      "Le territoire du Danemark appartient maintenant à l’empire Ottaman",
      "Le Bas Canada serait majoritairement anglophone tandis que le Haut-Canada serait francophone.",
      "Le Groenland est donné aux Martiens comme signe de paix et tous qui met pied sur ses terre vont être enlevés de cette planète et deviendra des spécimen d’étude pour les martiens.",
    ],
    "a"
  )
);

quiz_config.push(
  new question_answer(
    "Lord Durham a consulté la majorité française pour son enquête.",
    ["Vrai", "Faux"],
    "b"
  )
);

quiz_config.push(
  new question_answer(
    "La révolution des patriotes a été un succès au long terme.",
    ["Vrai", "Faux"],
    "a"
  )
);

quiz_config.push(
  new question_answer(
    "Combien de prisoniers ont été éxiles en Australie?",
    ["114", "141", "114", "69"],
    "b"
  )
);

quiz_config.push(
  new question_answer(
    "En quelle année l’acte d’union à été proclamé?",
    ["1840", "1843", "1841", "1842"],
    "c"
  )
);

module.exports = quiz_config;
