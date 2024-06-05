export let storageBarn = [];

export const barn = () => {
  return {
    push: (plant) => {
      storageBarn.push(plant);
    },
    pop: () => {
      return storageBarn.pop();
    },
    peek: () => {
      return storageBarn[storageBarn.length - 1].type;
    },
    isEmpty: () => {
      if (storageBarn.length === 0) {
        return true;
      } else {
        return false;
      }
    },
  };
};
