export const Catalog = (arr) => {
  let Catalog = '';

  for (const harvest of arr) {
    Catalog += `
        <section class="plant">${harvest.type}</section>
        `;
  }

  return Catalog;
};
