console.log('Welcome to the main module');
import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';
import { usePlants } from './field.js';
const yearlyPlan = createPlan();
const seeds = plantSeeds(yearlyPlan);
console.log(seeds);
