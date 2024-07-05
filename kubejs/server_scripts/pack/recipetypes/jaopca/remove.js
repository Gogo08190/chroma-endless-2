// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'jaopca:storage_blocks.to_storage_block.wood',
      'jaopca:mekanism.dust_to_material.sulfur'
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
