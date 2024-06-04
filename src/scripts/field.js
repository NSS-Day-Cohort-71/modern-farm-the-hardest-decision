const growingPlants = [];

// use the Array.isArray method to see if corn gets passed in.
// most seed objs will be fine, but I need to make a forof loop likely

export const addPlant = (seedObj) => {
  if (Array.isArray(obj) === true) {
    growingPlants.push(seedObj);
  } else if (Array.isArray(obj) === false) {
    for (const corn of seedObj) {
      growingPlants.push(corn);
    }
  }
};

//map the growingPlants array below using the .Map method and export it

export const usePlants = () => {
  const growingPlantsCopy = growingPlants.map((obj) => ({ ...obj }));
  return growingPlantsCopy;
};
