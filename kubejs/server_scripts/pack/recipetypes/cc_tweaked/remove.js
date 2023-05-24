onEvent('recipes', (event) => {
    const idRemovals = [
      'computercraft:computer_advanced_upgrade',
      'computercraft:turtle_advanced_upgrade',
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
