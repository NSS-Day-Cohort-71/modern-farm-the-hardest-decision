console.log("Welcome to the main module");
import { Catalog, addPlantCounter } from "./catalog.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan();

const plantedSeeds = plantSeeds(yearlyPlan);

const harvestedPlants = harvestPlants(plantedSeeds);

const countedPlants = addPlantCounter(harvestedPlants);

const plantsForSale = Catalog(countedPlants);

const plantSale = document.querySelector(".container");

plantSale.innerHTML = plantsForSale;
