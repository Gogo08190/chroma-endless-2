onEvent('recipes', (event) => {
    const idRemovals = [
      'pneumaticcraft:speed_upgrade'
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
