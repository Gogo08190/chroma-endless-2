onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/entangled/shaped/';
    const recipes = [
      {
          output: 'entangled:block',
          pattern: ['ICI', 'GEG', 'ITI'],
          key: {
              I: 'rftoolsbase:infused_enderpearl',
              C: 'enderstorage:ender_chest',
              G: '#forge:gears/enderium',
              E: 'upgradednetherite:ender_upgraded_netherite_ingot',
              T: 'enderstorage:ender_tank'
          },
          id: 'entangled:block'
      },
      {
          output: 'entangled:item',
          pattern: [' EI', ' SE', 'S  '],
          key: {
              I: 'rftoolsbase:infused_diamond',
              E: 'upgradednetherite:ender_upgraded_netherite_ingot',
              S: '#forge:rods/treated_wood'
          },
          id: 'entangled:item'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
