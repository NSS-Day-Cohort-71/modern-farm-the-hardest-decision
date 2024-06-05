console.log("Welcome to the main module");
import { Catalog } from "./catalog.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";


const yearlyPlan = createPlan();

const plantedSeeds = plantSeeds(yearlyPlan);

const harvestedPlants = harvestPlants(plantedSeeds);

const plantsForSale = Catalog(harvestedPlants);

const plantSale = document.querySelector(".container");

plantSale.innerHTML = plantsForSale;

