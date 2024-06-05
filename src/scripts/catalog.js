let plantCounts = [];

export const addPlantCounter = (arr) => {
  for (const plant of arr) {
    let plantEntry = plantCounts.find((entry) => entry.type === plant.type);

    if (plantEntry) {
      plantEntry.count++;
    } else {
      plantCounts.push({ type: plant.type, count: 1, icon: plant.icon });
    }
  }
  return plantCounts;
};

export const Catalog = (arr) => {
  let catalogHTML = "<section class='plant-catalog'>";
  for (const plantEntry of arr) {
    catalogHTML += `
        <section class="plant plant-item">
            ${plantEntry.icon} ${plantEntry.type}: ${plantEntry.count}
        </section>
        `;
  }
  catalogHTML += "</section>";

  return catalogHTML;
};
