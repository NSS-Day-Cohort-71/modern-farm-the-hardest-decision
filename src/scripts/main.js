console.log('Welcome to the main module');
import { Catalog, addPlantCounter } from './catalog.js';
import { harvestPlants, ourGoodBarn } from './harvester.js';
import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';
import {
  conveyorBelt,
  farmStore,
  processedFoods,
} from './processingFacility.js';

const yearlyPlan = createPlan();

const plantedSeeds = plantSeeds(yearlyPlan);

const harvestedPlants = harvestPlants(plantedSeeds);

// const countedPlants = addPlantCounter(harvestedPlants);

processedFoods();

// const plantsForSale = Catalog(countedPlants);

const processedFoodsForSale = addPlantCounter(farmStore)

const processedCatalog = Catalog(processedFoodsForSale)

const plantSale = document.querySelector('.container');

plantSale.innerHTML = processedCatalog;



console.log(harvestedPlants)

// console.log(storageBarn);

// console.log(ourGoodBarn.peek());
// console.log(ourGoodBarn.isEmpty());
// console.log(ourGoodBarn.pop());
