onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/functionalstorage/shaped/';
    const recipes = [
      {
        output: 'functionalstorage:storage_controller',
          pattern: ['PQP', 'DED', 'PQP'],
          key: {
              P: '#forge:plates/iron',
              Q: '#forge:storage_blocks/quartz',
              E: 'create:electron_tube',
              D: '#functionalstorage:drawer'
          },
          id: 'functionalstorage:storage_controller'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
