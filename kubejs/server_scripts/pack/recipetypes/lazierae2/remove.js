onEvent('recipes', (event) => {
    const idRemovals = [
        'lazierae2:carbonic_fluix_dust'
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
