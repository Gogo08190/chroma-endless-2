// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'ironfurnaces:furnaces/iron_furnace',
      'ironfurnaces:furnaces/silver_furnace2',
      'ironfurnaces:furnaces/gold_furnace2',
      'ironfurnaces:furnaces/obsidian_furnace2'
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
