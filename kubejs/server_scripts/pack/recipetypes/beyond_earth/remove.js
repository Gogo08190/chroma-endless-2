// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'beyond_earth:steel_block',
      'jaopca:immersiveengineering.material_to_plate_hammer.desh'
    ];

    const outputRemovals = [

    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
