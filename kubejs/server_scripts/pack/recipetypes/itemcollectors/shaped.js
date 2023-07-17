onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/itemcollectors/shaped/';
    const recipes = [
      {
          output: 'itemcollectors:basic_collector',
          pattern: [' M ', ' O ', 'OOO'],
          key: {
              M: 'botania:lens_magnet',
              O: '#forge:obsidian'
          },
          id: 'itemcollectors:basic_collector'
      },
      {
          output: 'itemcollectors:advanced_collector',
          pattern: [' M ', ' U ', 'OOO'],
          key: {
              M: 'itemcollectors:basic_collector',
              O: '#forge:obsidian',
              U: 'sophisticatedstorage:advanced_pickup_upgrade'
          },
          id: 'itemcollectors:advanced_collector'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
