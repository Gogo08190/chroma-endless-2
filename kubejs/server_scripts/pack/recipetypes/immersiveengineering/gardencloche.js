onEvent('recipes', (event) => {
  const id_prefix = 'chroma:pack/immersiveengineering/cloche/';
  const soils = ['minecraft:dirt', 'farmersdelight:rich_soil', 'thermal:phytosoil', 'mysticalagriculture:inferium_farmland', 'mysticalagriculture:prudentium_farmland', 'mysticalagriculture:tertium_farmland', 'mysticalagriculture:imperium_farmland', 'mysticalagriculture:supremium_farmland', 'mysticalagradditions:insanium_farmland'];

  const plants = [
    {
      item: 'minecraft:wheat',
      render: 'minecraft:wheat',
      seed: 'minecraft:wheat_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/wheat',
      secondary: true,
    },
    {
      item: 'minecraft:pumpkin',
      render: 'minecraft:pumpkin',
      seed: 'minecraft:pumpkin_seeds',
      type: 'stem',
      baseId: 'immersiveengineering:cloche/pumpkin',
      secondary: false,
    },
    {
      item: 'minecraft:melon',
      render: 'minecraft:melon',
      seed: 'minecraft:melon_seeds',
      type: 'stem',
      baseId: 'immersiveengineering:cloche/melon',
      secondary: false,
    },
    {
      item: 'minecraft:potato',
      render: 'minecraft:potatoes',
      seed: 'minecraft:potato',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/potato',
      secondary: false,
    },
    {
      item: 'minecraft:carrot',
      render: 'minecraft:carrots',
      seed: 'minecraft:carrot',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/carrot',
      secondary: false,
    },
    {
      item: 'minecraft:sweet_berries',
      render: 'minecraft:sweet_berry_bush',
      seed: 'minecraft:sweet_berries',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/sweet_berries',
      secondary: false,
    },
    {
      item: 'minecraft:glow_berries',
      render: 'minecraft:cave_vines',
      seed: 'minecraft:glow_berries',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/glow_berries',
      secondary: false,
    },
    {
      item: 'minecraft:beetroot',
      render: 'minecraft:beetroots',
      seed: 'minecraft:beetroot_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/beetroot',
      secondary: true,
    },
    {
      item: 'immersiveengineering:hemp_fiber',
      render: 'immersiveengineering:hemp',
      seed: 'immersiveengineering:seed',
      type: 'hemp',
      baseId: 'immersiveengineering:cloche/hemp',
      secondary: true,
    },
    {
      item: 'minecraft:bamboo',
      render: 'minecraft:bamboo',
      seed: 'minecraft:bamboo',
      type: 'stacking',
      baseId: 'immersiveengineering:cloche/bamboo',
      secondary: false,
    },
  ]

  plants.forEach((plant, plantIndex) => {
    soils.forEach((soil, soilIndex) => {
      const count = soilIndex + 1;
      const id = soil === 'minecraft:dirt' ? plant.baseId : `${id_prefix}${plant.item.replace(':', '_')}_${soil.replace(':', '_')}`;
      const outputs = [{ item: plant.item, count: count }];

      if (plant.secondary === true) {
        outputs.push({ item: plant.seed, count: count });
      }

      const recipe = {
        outputs: outputs,
        input: plant.seed,
        soil: soil,
        type: plant.type,
        block: plant.render,
        id: id,
      };

      event.recipes.immersiveengineeringCloche(recipe.outputs, recipe.input, recipe.soil, {type: recipe.type, block: recipe.block}).id(recipe.id);
    });
  });
});
