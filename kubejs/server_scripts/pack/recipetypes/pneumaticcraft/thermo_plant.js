onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/thermo_plant/';

    const recipes = [
      {
          fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'immersivepetroleum:naphtha', amount: 100 },
          item_input: { item: 'mysticalagriculture:inferium_essence', count: 1 },
          item_output: { item: 'chroma:inert_luminessence', count: 1 },
          pressure: 2.0,
          speed: 0.8,
          id: `${id_prefix}inert_luminessence`
      },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
