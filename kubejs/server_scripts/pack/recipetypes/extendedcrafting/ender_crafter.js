onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/ender_crafter/';
    const recipes = [
      {
          pattern: ['CRC', 'BTB', 'CNC'],
          key: {
            C: { item: 'extendedcrafting:redstone_component' },
            R: { item: 'extendedcrafting:redstone_catalyst' },
            B: { item: 'powah:capacitor_hardened' },
            T: { item: 'extendedcrafting:basic_table' },
            N: { item: 'pneumaticcraft:transistor' }
          },
          result: { item: 'extendedcrafting:basic_auto_table', count: 1 },
          id: 'extendedcrafting:basic_auto_table'
      },
      {
          pattern: ['CRC', 'BTB', 'CNC'],
          key: {
            C: { item: 'extendedcrafting:redstone_component' },
            R: { item: 'extendedcrafting:redstone_catalyst' },
            B: { item: 'powah:capacitor_hardened' },
            T: { item: 'extendedcrafting:advanced_auto_table' },
            N: { item: 'pneumaticcraft:transistor' }
          },
          result: { item: 'extendedcrafting:advanced_auto_table', count: 1 },
          id: 'extendedcrafting:advanced_auto_table'
      },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'extendedcrafting:shaped_ender_crafter',
                pattern: recipe.pattern,
                key: recipe.key,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
