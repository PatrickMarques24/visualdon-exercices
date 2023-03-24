// import * as d3 from "../node_modules/d3";

document.querySelector("body").textContent = "Coucou";

// Pour importer les données
import populationData from "../data/population_total.csv";

// Récupère toutes les années
const annees = Object.keys(populationData[0]);

console.log(annees);
