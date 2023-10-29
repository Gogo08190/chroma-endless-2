// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'apotheosis:potion_charm'
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
