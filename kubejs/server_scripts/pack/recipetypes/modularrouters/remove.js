onEvent('recipes', (event) => {
    const idRemovals = [
      'modularrouters:fluid_module_2_x4',
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
