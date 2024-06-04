const growingPlants = [];

export const addPlant = (seedObj) => {
  if (Array.isArray(seedObj) === false) {
    growingPlants.push(seedObj);
  } else if (Array.isArray(seedObj) === true) {
    for (const corn of seedObj) {
      growingPlants.push(corn);
    }
  }
};

export const usePlants = () => {
  const growingPlantsCopy = growingPlants.map((obj) => ({ ...obj }));
  return growingPlantsCopy;
};
