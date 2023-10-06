// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [

    ];

    const outputRemovals = [
      'chipped:mason_table',
      'chipped:loom_table',
      'chipped:carpenters_table',
      'chipped:glassblower',
      'chipped:botanist_workbench',
      'chipped:mechanist_workbench',
      'chipped:alchemy_bench'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
