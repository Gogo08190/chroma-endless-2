onEvent('recipes', (event) => {
    const idRemovals = [
        'industrialforegoing:enchantment_factory',
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
