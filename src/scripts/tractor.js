import { createPotato } from './seeds/potato.js';
import { usePlants } from './field.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createSoybean } from './seeds/soybean.js';
import { createWheat } from './seeds/wheat.js';
import { createCorn } from './seeds/corn.js';
import { createSunflower } from './seeds/sunflower.js';
const plantArr = usePlants();
export const plantSeeds = (plan) => {
  for (let i = 0; i < plan.length; i++) {
    for (let j = 0; j < plan[i].length; j++) {
      if (plan[i][j] === 'Potato') {
        let potatoSeed = createPotato();
        plantArr.push(potatoSeed);
      } else if (plan[i][j] === 'Asparagus') {
        let asparagusSeed = createAsparagus();
        plantArr.push(asparagusSeed);
      } else if (plan[i][j] === 'Soybean') {
        let soybeanSeed = createSoybean();
        plantArr.push(soybeanSeed);
      } else if (plan[i][j] === 'Wheat') {
        let wheatSeed = createWheat();
        plantArr.push(wheatSeed);
      } else if (plan[i][j] === 'Corn') {
        let cornSeed = createCorn();
        plantArr.push(cornSeed);
      } else if (plan[i][j] === 'Sunflower') {
        let sunflowerSeed = createSunflower();
        plantArr.push(sunflowerSeed);
      }
    }
  }
  return plantArr;
};
