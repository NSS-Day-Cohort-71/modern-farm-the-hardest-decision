console.log("Welcome to the main module");
import { createPlan } from "./plan.js";
import { createCorn } from "./seeds/corn.js";

const yearlyPlan = createPlan();


const cornSeed = createCorn()

console.log(cornSeed)