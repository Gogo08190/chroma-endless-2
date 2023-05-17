onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/immersiveengineering/metalpres/';
    const recipes = [
      {
          input: 'ae2:certus_quartz_crystal',
          output: 'ae2:printed_calculation_processor',
          mold : 'ae2:calculation_processor_press',
          energy : 2400,
          id: `${id_prefix}printed_calculation_processor`
      },
      {
          input: 'minecraft:diamond',
          output: 'ae2:printed_engineering_processor',
          mold : 'ae2:engineering_processor_press',
          energy : 2400,
          id: `${id_prefix}printed_engineering_processor`
      },
      {
          input: 'minecraft:gold_ingot',
          output: 'ae2:printed_logic_processor',
          mold : 'ae2:logic_processor_press',
          energy : 2400,
          id: `${id_prefix}printed_logic_processor`
      },
      {
          input: 'ae2:silicon',
          output: 'ae2:printed_silicon',
          mold : 'ae2:silicon_press',
          energy : 2400,
          id: `${id_prefix}printed_silicon`
      },
      {
          input: Item.of('minecraft:diamond', 4),
          output: 'thermal:diamond_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 2400,
          id: `${id_prefix}diamond_gear`
      },
      {
          input: Item.of('minecraft:emerald', 4),
          output: 'thermal:emerald_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 2400,
          id: `${id_prefix}emerald_gear`
      },
      {
          input: Item.of('minecraft:quartz', 4),
          output: 'thermal:quartz_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 2400,
          id: `${id_prefix}quartz_gear`
      },
      {
          input: Item.of('minecraft:lapis_lazuli', 4),
          output: 'thermal:lapis_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 2400,
          id: `${id_prefix}lapis_gear`
      },
      {
          input: 'botania:mana_diamond',
          output: 'chroma:mana_diamond_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}mana_diamond_plate`
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .metalPress(recipe.output, recipe.input, recipe.mold)
            .energy(recipe.energy)
            .id(recipe.id);
    });
});
