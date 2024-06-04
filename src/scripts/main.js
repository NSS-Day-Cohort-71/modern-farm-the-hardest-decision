console.log('Welcome to the main module');
import { usePlants } from './field.js';
import { harvestPlants } from './harvester.js';
import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';
import { plantSeeds } from './tractor.js';

const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);
const plants = usePlants();
console.log(plants);
