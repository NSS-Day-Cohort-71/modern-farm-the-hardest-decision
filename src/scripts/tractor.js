import { createPotato } from './seeds/potato.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createSoybean } from './seeds/soybean.js';
import { createWheat } from './seeds/wheat.js';
import { createCorn } from './seeds/corn.js';
import { createSunflower } from './seeds/sunflower.js';
import { addPlant, usePlants } from './field.js';

export const plantSeeds = (plan) => {
  for (let i = 0; i < plan.length; i++) {
    for (let j = 0; j < plan[i].length; j++) {
      if (plan[i][j] === 'Potato') {
        let potatoSeed = createPotato();
        addPlant(potatoSeed);
      } else if (plan[i][j] === 'Asparagus') {
        let asparagusSeed = createAsparagus();
        addPlant(asparagusSeed);
      } else if (plan[i][j] === 'Soybean') {
        let soybeanSeed = createSoybean();
        addPlant(soybeanSeed);
      } else if (plan[i][j] === 'Wheat') {
        let wheatSeed = createWheat();
        addPlant(wheatSeed);
      } else if (plan[i][j] === 'Corn') {
        let cornSeed = createCorn();
        addPlant(cornSeed);
      } else if (plan[i][j] === 'Sunflower') {
        let sunflowerSeed = createSunflower();
        addPlant(sunflowerSeed);
      }
    }
  }
  const output = usePlants();
  return output;
};
