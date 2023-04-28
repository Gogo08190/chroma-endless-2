// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'immersiveengineering:crafting/redstone_acid',
      'immersiveengineering:crafting/component_iron',
      'immersiveengineering:crafting/component_steel',
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
