onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/crucible/';
    const recipes = [
      {
          output: Fluid.of('materialis:molten_forgotten_metal', 1296),
          input: '#forge:storage_blocks/forgotten_metal',
          energy: 40000,
          id: `${id_prefix}forgotten_block`
      },
      {
          output: Fluid.of('materialis:molten_forgotten_metal', 144),
          input: '#forge:ingots/forgotten_metal',
          energy: 5000,
          id: `${id_prefix}forgotten_ingot`
      },
      {
          output: Fluid.of('materialis:molten_forgotten_metal', 16),
          input: '#forge:nuggets/forgotten_metal',
          energy: 555,
          id: `${id_prefix}forgotten_nugget`
      },
      {
          output: Fluid.of('materialis:molten_utherium', 1296),
          input: '#forge:storage_blocks/utherium',
          energy: 40000,
          id: `${id_prefix}utherium_block`
      },
      {
          output: Fluid.of('materialis:molten_utherium', 144),
          input: '#forge:ingots/utherium',
          energy: 5000,
          id: `${id_prefix}utherium_ingot`
      },
      {
          output: Fluid.of('materialis:molten_utherium', 16),
          input: 'undergarden:utheric_shard',
          energy: 555,
          id: `${id_prefix}utherium_nugget`
      },
      {
          output: Fluid.of('materialis:molten_froststeel', 1296),
          input: '#forge:storage_blocks/froststeel',
          energy: 40000,
          id: `${id_prefix}froststeel_block`
      },
      {
          output: Fluid.of('materialis:molten_froststeel', 144),
          input: '#forge:ingots/froststeel',
          energy: 5000,
          id: `${id_prefix}froststeel_ingot`
      },
      {
          output: Fluid.of('materialis:molten_froststeel', 16),
          input: '#forge:nuggets/froststeel',
          energy: 555,
          id: `${id_prefix}froststeel_nugget`
      },
      {
          output: Fluid.of('materialis:molten_cloggrum', 1296),
          input: '#forge:storage_blocks/cloggrum',
          energy: 40000,
          id: `${id_prefix}cloggrum_block`
      },
      {
          output: Fluid.of('materialis:molten_cloggrum', 144),
          input: '#forge:ingots/cloggrum',
          energy: 5000,
          id: `${id_prefix}cloggrum_ingot`
      },
      {
          output: Fluid.of('materialis:molten_cloggrum', 16),
          input: '#forge:nuggets/cloggrum',
          energy: 555,
          id: `${id_prefix}cloggrum_nugget`
      },
      {
          output: Fluid.of('materialis:molten_regalium', 1296),
          input: '#forge:storage_blocks/regalium',
          energy: 40000,
          id: `${id_prefix}regalium_block`
      },
      {
          output: Fluid.of('materialis:molten_regalium', 144),
          input: '#forge:ingots/regalium',
          energy: 5000,
          id: `${id_prefix}regalium_ingot`
      },
      {
          output: Fluid.of('materialis:molten_regalium', 16),
          input: '#forge:nuggets/regalium',
          energy: 555,
          id: `${id_prefix}regalium_nugget`
      },
      {
          output: Fluid.of('tconstruct:molten_copper', 1296),
          input: '#forge:storage_blocks/copper',
          energy: 40000,
          id: `${id_prefix}copper_block`
      },
      {
          output: Fluid.of('tconstruct:molten_copper', 144),
          input: '#forge:ingots/copper',
          energy: 5000,
          id: `${id_prefix}copper_ingot`
      },
      {
          output: Fluid.of('tconstruct:molten_copper', 16),
          input: '#forge:nuggets/copper',
          energy: 555,
          id: `${id_prefix}copper_nugget`
      },
      {
          output: Fluid.of('tconstruct:molten_netherite', 1296),
          input: '#forge:storage_blocks/netherite',
          energy: 40000,
          id: `${id_prefix}netherite_block`
      },
      {
          output: Fluid.of('tconstruct:molten_netherite', 144),
          input: '#forge:ingots/netherite',
          energy: 5000,
          id: `${id_prefix}netherite_ingot`
      },
      {
          output: Fluid.of('tconstruct:molten_netherite', 16),
          input: '#forge:nuggets/netherite',
          energy: 555,
          id: `${id_prefix}netherite_nugget`
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.crucible(recipe.output, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
