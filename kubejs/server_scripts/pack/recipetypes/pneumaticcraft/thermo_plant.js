onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/thermo_plant/';

    const recipes = [
      {
          fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:biodiesel', amount: 100 },
          item_input: { item: 'mysticalagriculture:inferium_essence', count: 1 },
          item_output: { item: 'chroma:inert_luminessence', count: 1 },
          pressure: 2.0,
          speed: 0.8,
          id: `${id_prefix}inert_luminessence`
      },
      {
          fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:redstone', amount: 100 },
          item_input: { item: 'pneumaticcraft:reinforced_stone', count: 4 },
          item_output: { item: 'rftoolsbase:machine_base', count: 1 },
          pressure: 2.0,
          speed: 0.8,
          id: 'rftoolsbase:machine_base'
      },
      {
        fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:redstone', amount: 100 },
        item_input: { item: 'rftoolsbase:machine_base', count: 1 },
        item_output: { item: 'rftoolspower:power_core1', count: 1 },
        pressure: 2.0,
        speed: 0.8,
        id: 'rftoolspower:power_core1'
    },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
