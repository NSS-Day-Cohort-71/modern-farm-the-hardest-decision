console.log('Welcome to the main module');
import { addPlant, usePlants } from './field.js';
import { harvestPlants } from './harvester.js';
import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';

console.log('Welcome to the main module');
import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';
import { usePlants } from './field.js';
const yearlyPlan = createPlan();

const cornSeed = createCorn();

// test code for field.js below. Works!
addPlant(cornSeed);
const currentGrowingPlants = usePlants();
console.log(currentGrowingPlants);

const test = harvestPlants(currentGrowingPlants);

console.log(test);
const seeds = plantSeeds(yearlyPlan);
console.log(seeds);
