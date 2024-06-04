export const Catalog = (arr) => {
  // Sort the harvested plants array by the plant type property.
  let plantCounts = [];

  for (const plant of arr) {
    //Check if plant is already in the array.
    let plantEntry = plantCounts.find((entry) => entry.type === plant.type);

    //If plant is in [], increment its count.
    if (plantEntry) {
      plantEntry.count++;
    } else {
      //If plant is not in [], add new entry.
      plantCounts.push({ type: plant.type, count: 1, icon: plant.icon });
    }
  }

  let catalogHTML = "<section class='plant-catalog'>";
  for (const plantEntry of plantCounts) {
    catalogHTML += `
        <section class="plant plant-item">
            ${plantEntry.icon} ${plantEntry.type}: ${plantEntry.count}
        </section>
        `;
  }
  catalogHTML += "</section>";

  return catalogHTML;
};
