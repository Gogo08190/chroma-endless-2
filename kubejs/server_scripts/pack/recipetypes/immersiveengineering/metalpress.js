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
      {
          input: 'minecraft:netherite_ingot',
          output: Item.of('chroma:netherite_rod', 2),
          mold : 'immersiveengineering:mold_rod',
          energy : 2400,
          id: `${id_prefix}netherite_rod`
      },
      {
          input: 'botania:manasteel_ingot',
          output: Item.of('chroma:manasteel_rod', 2),
          mold : 'immersiveengineering:mold_rod',
          energy : 2400,
          id: `${id_prefix}manasteel_rod`
      },
      {
          input: 'chroma:base_augment',
          output: 'thermal:press_coin_die',
          mold : 'ae2:matter_ball',
          energy : 2400,
          id: 'thermal:press_coin_die'
      },
      {
          input: 'chroma:base_augment',
          output: 'thermal:press_gear_die',
          mold : 'immersiveengineering:mold_gear',
          energy : 2400,
          id: 'thermal:press_gear_die'
      },
      {
          input: 'chroma:base_augment',
          output: 'thermal:press_packing_2x2_die',
          mold : 'immersiveengineering:mold_packing_4',
          energy : 2400,
          id: 'thermal:press_packing_2x2_die'
      },
      {
          input: 'chroma:base_augment',
          output: 'thermal:press_packing_3x3_die',
          mold : 'immersiveengineering:mold_packing_9',
          energy : 2400,
          id: 'thermal:press_packing_3x3_die'
      },
      {
          input: 'chroma:base_augment',
          output: 'thermal:press_unpacking_die',
          mold : 'immersiveengineering:mold_unpacking',
          energy : 2400,
          id: 'thermal:press_unpacking_die'
      },
      {
          input: 'create:brass_sheet',
          output: 'thermal:chiller_ball_cast',
          mold : 'tconstruct:gem_cast',
          energy : 2400,
          id: 'thermal:chiller_ball_cast'
      },
      {
          input: 'create:brass_sheet',
          output: 'thermal:chiller_ingot_cast',
          mold : 'tconstruct:ingot_cast',
          energy : 2400,
          id: 'thermal:chiller_ingot_cast'
      },
      {
          input: 'create:brass_sheet',
          output: 'thermal:chiller_rod_cast',
          mold : 'tconstruct:rod_cast',
          energy : 2400,
          id: 'thermal:chiller_rod_cast'
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .metalPress(recipe.output, recipe.input, recipe.mold)
            .energy(recipe.energy)
            .id(recipe.id);
    });
});
