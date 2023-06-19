// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'mna:runeforge_alt'
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
