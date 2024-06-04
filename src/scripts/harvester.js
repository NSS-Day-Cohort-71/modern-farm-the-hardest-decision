export const harvestPlants = (plants) => {
    let seedOutput = []
    for (const plant of plants) {
        if (plant.type === "corn") {
            const cornOutput = plant.output / 2
            for (let i = 0; i < cornOutput; i++) {
                seedOutput.push(plant)
            }
        } else {

            for (let i = 0; i < plant.output; i++) {
                seedOutput.push(plant)
            }
        }
    }
    return seedOutput
}