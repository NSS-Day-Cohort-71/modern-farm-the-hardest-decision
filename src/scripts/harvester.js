import { barn } from "./storage-barn.js";

export const ourGoodBarn = barn();

let plantId = 1; //Initialize a var to keep track of the unique IDs.

const sortSeeds = (a, b) => {
  if (a.type < b.type) {
    return -1;
  } else if (a.type > b.type) {
    return 1;
  }
  return 0;
};

export const harvestPlants = (plants) => {
  let seedOutput = []; //Initialize empty array to store harvested plants.
  for (const plant of plants) {
    if (plant.type === "Corn") {
      const cornOutput = plant.output / 2;
      for (let i = 0; i < cornOutput; i++) {
        //Push each `corn` plant into seedOutput[] + unique ID.
        seedOutput.push({ ...plant, id: plantId++ });
        ourGoodBarn.push(plant);
      }
    } else {
      //Push each plant into seedOutput[] + unique IDs.
      for (let i = 0; i < plant.output; i++) {
        seedOutput.push({ ...plant, id: plantId++ });
        ourGoodBarn.push(plant);
      }
    }
  }
  seedOutput.sort(sortSeeds);
  return seedOutput; //Return [] harvested plants + unique IDs.
 
};
