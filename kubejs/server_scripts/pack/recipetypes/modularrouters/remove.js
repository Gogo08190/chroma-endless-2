onEvent('recipes', (event) => {
    const idRemovals = [
      'modularrouters:fluid_module_2_x4',
      'modularrouters:sender_module_2_x4',
      'modularrouters:puller_module_2_x4',
      'modularrouters:sender_module_1_alt',
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
