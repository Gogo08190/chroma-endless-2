onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/draconicevolution/shaped/';
    const recipes = [
      {
        output: 'draconicevolution:draconium_core',
          pattern: ['DCD', 'CNC', 'DCD'],
          key: {
              D: '#forge:ingots/draconium',
              C: '#forge:ingots/calorite',
              N: 'powah:crystal_niotic'
          },
          id: 'draconicevolution:components/draconium_core'
      },
      {
        output: 'draconicevolution:wyvern_energy_core',
          pattern: ['DCD', 'CNC', 'DCD'],
          key: {
              D: '#forge:ingots/draconium',
              C: 'chroma:supreme_alloy',
              N: 'draconicevolution:draconium_core'
          },
          id: 'draconicevolution:components/wyvern_energy_core'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
