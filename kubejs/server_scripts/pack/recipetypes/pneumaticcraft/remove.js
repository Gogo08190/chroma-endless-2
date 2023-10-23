onEvent('recipes', (event) => {
    const idRemovals = [
      'pneumaticcraft:speed_upgrade',
      'pneumaticcraft:pressure_chamber_valve'
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
