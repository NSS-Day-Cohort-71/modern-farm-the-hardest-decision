console.log('Welcome to the main module');
import { Catalog } from './catalog.js';
import { usePlants } from './field.js';
import { harvestPlants } from './harvester.js';
import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';
import { plantSeeds } from './tractor.js';

const yearlyPlan = createPlan();

const plantedSeeds = plantSeeds(yearlyPlan);

const harvestedPlants = harvestPlants(plantedSeeds)

const plantsForSale = Catalog(harvestedPlants)

const plantSale = document.querySelector(".container")

plantSale.innerHTML = plantsForSale
