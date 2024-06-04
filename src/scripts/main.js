console.log('Welcome to the main module');
import { Catalog } from './catalog.js';
import { usePlants } from './field.js';
import { harvestPlants } from './harvester.js';
import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';
import { plantSeeds } from './tractor.js';

const yearlyPlan = createPlan();

const plantedSeeds = plantSeeds(yearlyPlan);

const harvestedPlants = harvestPlants(plantedSeeds);
harvestedPlants.sort((a, b) => {
  if (a.type < b.type) {
    return -1;
  } else if (a.type > b.type) {
    return 1;
  }
  return 0;
});
const plantsForSale = Catalog(harvestedPlants);

const plantSale = document.querySelector('.container');

plantSale.innerHTML = plantsForSale;
