const menu_title_class = require("../models/menu-title-class");
const menu_link_class = require("../models/menu-link-class");
const menu_description_class = require("../models/menu-description-class");
const menu_intertitle_class = require("../models/menu-intertitle-class");

const menu_config = {};

menu_config.list = [new menu_title_class("LES PATRIOTES"), new menu_link_class("Introduction", "les_patriotes_introduction"), new menu_title_class("CAUSES"), new menu_link_class("Des rebellions", "causes_des_rebellions"), new menu_intertitle_class("Cause de la bataille"), new menu_intertitle_class("Crise agricole"), new menu_link_class("Hommage aux morts", "causes_hommage_aux_morts")];
menu_config.pages = {};

menu_config.pages = {
  les_patriotes_introduction: `
    Le Parti patriotes: Avant nommé le partie canadien, le partie patriote est fondé au début XIXe siècle. Actif dans le bas Canada jusqu’en 1837, ce parti était au cœur de la rébelion. Composé majoritairement de Canadien français et d’Irlandais, leur seul opposant était le parti britannique, aussi appelé le Tory Party. 
    En 1806, le Parti canadien imite ses adversaires politiques, la Clique du Châteaux, en fondant un journal nommé Le Canadien. En 1810, le gouverneur Craig fit arrêter Bédard et certains de ses collègues du journal et les emprisonner sans procès pour un commentaire publié dans Le Canadien. 
    Sous la direction de Pierre-Stanislas Bédard, élu en 1806, le parti canadien a fait campagne pour un gouvernement responsable et la responsabilité ministérielle, donc ils voulaient que les membres du Conseil législatif du Bas-Canada seraient nommés par le parti majoritaire de l'Assemblée législative. Bien que le parti contrôlait l'assemblée du Bas-Canada, à cette époque, le conseil, qui détenait l'essentiel du pouvoir, fut choisi par un gouverneur britannique nommé, que le Parti canadien considérait comme gravement corrompu et hostile aux intérêts de la majorité de la population. 
    En 1811, James Stuart devint chef du Parti canadien à l'Assemblée et, en 1815, le réformateur Louis-Joseph Papineau fut élu président de l'Assemblée. Les idées réformistes de Papineau gagnèrent en autorité et en popularité alors qu'il dirigeait le parti dans sa lutte contre l'union de la proposition du Canada en 1822, jusqu'à la suspension de l'Acte constitutionnel en 1837. En 1826, le parti prend le nom de Parti patriote, reflétant un sentiment beaucoup plus fort de nationalisme canadien-français et un changement de stratégie. Les Patriotes ont largement préféré l'agriculture au mercantilisme et ont bloqué de nombreux projets économiques menés par leurs adversaires. Le parti a réussi à retarder le développement du capitalisme britannique au sein de la colonie, mais leurs positions étaient souvent considérées comme peu claires, et la nouvelle stratégie a été jugée trop radicale même par certains de ses membres, notamment John Neilson, qui a finalement quitté le parti en 1830.
    En 1834, Papineau et le Parti patriote ont créé les quatre-vingt-douze résolutions; une longue liste de demandes de réforme politique qui a été envoyée au gouvernement britannique pour résoudre leur problème politiques. Le gouvernement britannique a ignoré les résolutions pendant plus de trois ans jusqu'à ce qu'en 1837, il réponde aux demandes du Parti patriote avec dix résolutions de son cru, appelées les résolutions Russel, tout en rejetant toutes les quatre-vingt-douze résolutions proposées par Papineau et son parti. Ces résolutions ont permis au gouverneur de la colonie d'obtenir des estimations budgétaires sans vote de l'assemblée, ce qui a provoqué des violences verbales et physiques, et a finalement conduit aux rébellions de 1837. Après les rébellions, de nombreux patriotes ont été exilés, pendus ou incendiés. , qui a marqué la fin de la fête. Cependant, de nombreux membres du parti sont devenus des membres actifs de la politique de la nouvelle province du Canada.
  `,
};

module.exports = menu_config;
