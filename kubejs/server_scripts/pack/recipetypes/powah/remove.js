onEvent('recipes', (event) => {
    const idRemovals = [
        'powah:crafting/cable_basic_2',
        'powah:crafting/energy_cell_basic_2'
    ];

    const outputRemovals = [

    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });

    event.remove({
        output: '/powah:\\w+_starter/',
        mod: 'powah'
    });
});
