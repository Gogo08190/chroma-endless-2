onEvent('recipes', (event) => {
    const idRemovals = [
        'mysticalagradditions:insanium_block_combine',
        'mysticalagriculture:supremium_block_combine',
        'mysticalagriculture:imperium_block_combine',
        'mysticalagriculture:tertium_block_combine',
        'mysticalagriculture:prudentium_block_combine',
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
