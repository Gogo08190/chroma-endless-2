// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'beyond_earth:steel_block',
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
