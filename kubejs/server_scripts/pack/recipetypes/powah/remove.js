onEvent('recipes', (event) => {
    const idRemovals = [

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
