let plantId = 1; //Initialize a var to keep track of the unique IDs.

export const harvestPlants = (plants) => {
  let seedOutput = []; //Initialize empty array to store harvested plants.
  for (const plant of plants) {
    if (plant.type === "corn") {
      // check if `corn`.
      const cornOutput = plant.output / 2; //If `corn` then only harvest half.
      for (let i = 0; i < cornOutput; i++) {
        //Push each `corn` plant into seedOutput[] + unique ID.
        seedOutput.push({ ...plant, id: plantId++ });
      }
    } else {
      //Push each plant into seedOutput[] + unique IDs.
      for (let i = 0; i < plant.output; i++) {
        seedOutput.push({ ...plant, id: plantId++ });
      }
    }
  }
  return seedOutput; //Return [] harvested plants + unique IDs.
};
