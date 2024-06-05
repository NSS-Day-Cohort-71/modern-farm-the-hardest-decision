import { ourGoodBarn } from './harvester.js';
import { storageBarn } from './storage-barn.js';

export const conveyorBelt = [];
export const farmStore = [];

export const processor = () => {
  return {
    enqueue: (crop) => {
      return conveyorBelt.push(crop);
    },
    dequeue: () => {
      return conveyorBelt.shift();
    },
    next: () => {
      return conveyorBelt[0].type;
    },
    last: () => {
      return conveyorBelt[conveyorBelt.length - 1].type;
    },
    isEmpty: () => {
      if (conveyorBelt.length === 0) {
        return true;
      } else {
        return false;
      }
    },
    size: () => {
      return conveyorBelt.length;
    },
  };
};

export const processedFoods = () => {
  let ourGoodProcessor = processor();

  while (storageBarn.length != 0) {
    if (conveyorBelt.length < 3) {
      let popped = storageBarn.pop();
      ourGoodProcessor.enqueue(popped);
    } else if (conveyorBelt.length === 3) {
      let removedCrop = ourGoodProcessor.dequeue();

      farmStore.push(removedCrop);
    }
  }
  while (storageBarn.length === 0) {
    let removedCrop = ourGoodProcessor.dequeue();

    farmStore.push(removedCrop);

    if (conveyorBelt.length === 0) {
      break;
    }
  }

  for (const crop of farmStore) {
    if (crop.type === 'Potato') {
      crop.type = 'Potato chips';
    } else if (crop.type === 'Soybean') {
      crop.type = 'Bean paste';
    } else if (crop.type === 'Corn') {
      crop.type = 'Corn meal';
    } else if (crop.type === 'Sunflower') {
      crop.type = 'Sunflower Oil';
    } else if (crop.type === 'Wheat') {
      crop.type = 'Flour';
    } else if (crop.type === 'Asparagus') {
      crop.type = 'Pickled asparagus';
    }
  }

  if (storageBarn.length === 0) {
    console.log('Storage Barn is ready for new crops');
  }
  if (conveyorBelt.length === 0) {
    console.log('Farm Store inventory is full and ready to open for business');
  }
};
