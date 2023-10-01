onEvent('recipes', (event) => {
  const id_prefix = 'chroma:pack/immersiveengineering/cloche/';
  const soils = ['minecraft:dirt', 'farmersdelight:rich_soil', 'thermal:phytosoil', 'mysticalagriculture:inferium_farmland', 'mysticalagriculture:prudentium_farmland', 'mysticalagriculture:tertium_farmland', 'mysticalagriculture:imperium_farmland', 'mysticalagriculture:supremium_farmland', 'mysticalagradditions:insanium_farmland'];
  const seedsTier1 = ['mysticalagriculture:dirt_seeds', 'mysticalagriculture:deepslate_seeds', 'mysticalagriculture:dye_seeds', 'mysticalagriculture:coral_seeds', 'mysticalagriculture:mystical_flower_seeds', 'mysticalagriculture:ice_seeds', 'mysticalagriculture:air_seeds', 'mysticalagriculture:earth_seeds', 'mysticalagriculture:water_seeds', 'mysticalagriculture:fire_seeds', 'mysticalagriculture:inferium_seeds', 'mysticalagriculture:wood_seeds', 'mysticalagriculture:stone_seeds', 'mysticalagriculture:sky_stone_seeds', 'mysticalagriculture:limestone_seeds'];
  const seedsTier2 = ['mysticalagriculture:sulfur_seeds', 'mysticalagriculture:saltpeter_seeds', 'mysticalagriculture:obsidian_seeds', 'mysticalagriculture:nether_seeds', 'mysticalagriculture:nature_seeds', 'mysticalagriculture:honey_seeds', 'mysticalagriculture:end_seeds', 'mysticalagriculture:amethyst_seeds'];
  const seedsTier3 = ['mysticalagriculture:pig_iron_seeds', 'mysticalagriculture:amethyst_bronze_seeds', 'mysticalagriculture:brass_seeds', 'mysticalagriculture:bronze_seeds', 'mysticalagriculture:slimesteel_seeds', 'mysticalagriculture:silicon_seeds'];
  const seedsTier4 = ['mysticalagriculture:cloggrum_seeds', 'mysticalagriculture:invar_seeds', 'mysticalagriculture:forgotten_seeds', 'mysticalagriculture:steel_seeds', 'mysticalagriculture:utherium_seeds', 'mysticalagriculture:froststeel_seeds', 'mysticalagriculture:lumium_seeds', 'mysticalagriculture:regalium_seeds', 'mysticalagriculture:blazing_crystal_seeds', 'mysticalagriculture:fluix_seeds', 'mysticalagriculture:experience_seeds', 'mysticalagriculture:energized_steel_seeds', 'mysticalagriculture:elementium_seeds', 'mysticalagriculture:electrum_seeds', 'mysticalagriculture:constantan_seeds', 'mysticalagriculture:compressed_iron_seeds', 'mysticalagriculture:rose_gold_seeds', 'mysticalagriculture:hop_graphite_seeds', 'mysticalagriculture:refined_glowstone_seeds', 'mysticalagriculture:desh_seeds', 'mysticalagriculture:manasteel_seeds', 'mysticalagriculture:refined_obsidian_seeds', 'mysticalagriculture:signalum_seeds'];
  const seedsTier5 = ['mysticalagriculture:enderium_seeds', 'mysticalagriculture:spirited_crystal_seeds', 'mysticalagriculture:niotic_crystal_seeds', 'mysticalagriculture:ostrum_seeds', 'mysticalagriculture:terrasteel_seeds', 'mysticalagriculture:queens_slime_seeds', 'mysticalagriculture:netherite_seeds', 'mysticalagriculture:manyullyn_seeds', 'mysticalagriculture:hepatizon_seeds'];
  const seedsTier6 = ['mysticalagriculture:nitro_crystal_seeds', 'mysticalagriculture:draconium_seeds', 'mysticalagriculture:awakened_draconium_seeds', 'mysticalagriculture:alfsteel_seeds', 'mysticalagriculture:calorite_seeds'];
  const mysticalSoils = ['mysticalagriculture:inferium_farmland', 'mysticalagriculture:prudentium_farmland', 'mysticalagriculture:tertium_farmland', 'mysticalagriculture:imperium_farmland', 'mysticalagriculture:supremium_farmland', 'mysticalagradditions:insanium_farmland'];


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
    {
      item: 'blue_skies:winter_leaves',
      render: 'blue_skies:winter_leaves',
      seed: 'blue_skies:winter_leaf_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/winter_leaves',
      secondary: true,
    },
    {
      item: 'blue_skies:fiery_beans',
      render: 'blue_skies:fiery_beans',
      seed: 'blue_skies:fiery_bean_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/fiery_beans',
      secondary: true,
    },
    {
      item: 'blue_skies:scalefruit',
      render: 'blue_skies:scalefruits',
      seed: 'blue_skies:scalefruit_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/scalefruit',
      secondary: true,
    },
    {
      item: 'blue_skies:pine_fruit',
      render: 'blue_skies:pine_fruits',
      seed: 'blue_skies:pine_fruit_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/pine_fruit',
      secondary: true,
    },
    {
      item: 'farmersdelight:cabbage',
      render: 'farmersdelight:cabbages',
      seed: 'farmersdelight:cabbage_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/cabbage',
      secondary: true,
    },
    {
      item: 'farmersdelight:tomato',
      render: 'farmersdelight:budding_tomatoes',
      seed: 'farmersdelight:tomato_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/tomato',
      secondary: true,
    },
    {
      item: 'sushigocrafting:cucumber',
      render: 'sushigocrafting:cucumber_crop',
      seed: 'sushigocrafting:cucumber_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/cucumber',
      secondary: true,
    },
    {
      item: 'pizzacraft:broccoli',
      render: 'pizzacraft:broccoli',
      seed: 'pizzacraft:broccoli_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/broccoli',
      secondary: true,
    },
    {
      item: 'pizzacraft:cucumber',
      render: 'pizzacraft:cucumbers',
      seed: 'pizzacraft:cucumber_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/cucumber2',
      secondary: true,
    },
    {
      item: 'pizzacraft:pepper',
      render: 'pizzacraft:peppers',
      seed: 'pizzacraft:pepper_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/pepper',
      secondary: true,
    },
    {
      item: 'pizzacraft:pineapple',
      render: 'pizzacraft:pineapple',
      seed: 'pizzacraft:pineapple_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/pineapple',
      secondary: true,
    },
    {
      item: 'pizzacraft:tomato',
      render: 'pizzacraft:tomatoes',
      seed: 'pizzacraft:tomato_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/tomato2',
      secondary: true,
    },
    {
      item: 'supplementaries:flax',
      render: 'supplementaries:flax',
      seed: 'supplementaries:flax_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/flax',
      secondary: true,
    },
    {
      item: 'sushigocrafting:soy_bean',
      render: 'sushigocrafting:soy_crop',
      seed: 'sushigocrafting:soy_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/soy_bean',
      secondary: true,
    },
    {
      item: 'sushigocrafting:wasabi_root',
      render: 'sushigocrafting:wasabi_crop',
      seed: 'sushigocrafting:wasabi_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/wasabi_root',
      secondary: true,
    },
    {
      item: 'undergarden:gloomgourd',
      render: 'undergarden:gloomgourd',
      seed: 'undergarden:gloomgourd_seeds',
      type: 'stem',
      baseId: 'immersiveengineering:cloche/gloomgourd',
      secondary: false,
    },
    {
      item: 'thermal:amaranth',
      render: 'thermal:amaranth',
      seed: 'thermal:amaranth_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/amaranth',
      secondary: true,
    },
    {
      item: 'thermal:barley',
      render: 'thermal:barley',
      seed: 'thermal:barley_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/barley',
      secondary: true,
    },
    {
      item: 'thermal:corn',
      render: 'thermal:corn',
      seed: 'thermal:corn_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/corn',
      secondary: true,
    },
    {
      item: 'thermal:flax',
      render: 'thermal:flax',
      seed: 'thermal:flax_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/flax2',
      secondary: true,
    },
    {
      item: 'thermal:onion',
      render: 'thermal:onion',
      seed: 'thermal:onion_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/onion',
      secondary: true,
    },
    {
      item: 'thermal:radish',
      render: 'thermal:radish',
      seed: 'thermal:radish_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/radish',
      secondary: true,
    },
    {
      item: 'thermal:rice',
      render: 'thermal:rice',
      seed: 'thermal:rice_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/rice',
      secondary: true,
    },
    {
      item: 'thermal:sadiroot',
      render: 'thermal:sadiroot',
      seed: 'thermal:sadiroot_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/sadiroot',
      secondary: true,
    },
    {
      item: 'thermal:spinach',
      render: 'thermal:spinach',
      seed: 'thermal:spinach_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/spinach',
      secondary: true,
    },
    {
      item: 'thermal:bell_pepper',
      render: 'thermal:bell_pepper',
      seed: 'thermal:bell_pepper_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/bell_pepper',
      secondary: true,
    },
    {
      item: 'thermal:eggplant',
      render: 'thermal:eggplant',
      seed: 'thermal:eggplant_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/eggplant',
      secondary: true,
    },
    {
      item: 'thermal:green_bean',
      render: 'thermal:green_bean',
      seed: 'thermal:green_bean_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/green_bean',
      secondary: true,
    },
    {
      item: 'thermal:tea',
      render: 'thermal:tea',
      seed: 'thermal:tea_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/tea',
      secondary: true,
    },
    {
      item: 'thermal:peanut',
      render: 'thermal:peanut',
      seed: 'thermal:peanut_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/peanut',
      secondary: true,
    },
    {
      item: 'thermal:strawberry',
      render: 'thermal:strawberry',
      seed: 'thermal:strawberry_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/strawberry',
      secondary: true,
    },
    {
      item: 'thermal:tomato',
      render: 'thermal:tomato',
      seed: 'thermal:tomato_seeds',
      type: 'crop',
      baseId: 'immersiveengineering:cloche/tomato3',
      secondary: true,
    },
    {
      item: 'thermal:frost_melon',
      render: 'thermal:frost_melon',
      seed: 'thermal:frost_melon_seeds',
      type: 'stem',
      baseId: 'immersiveengineering:cloche/frost_melon',
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

  function convertSeedToEssence(seed) {
      return seed.replace('_seeds', '_essence');
  }

  function convertSeedToCrop(seed) {
      return seed.replace('_seeds', '_crop');
  }

  const allSeeds = [seedsTier1, seedsTier2, seedsTier3, seedsTier4, seedsTier5];

  allSeeds.forEach((seedTier, index) => {
      seedTier.forEach(seed => {
          let essence = convertSeedToEssence(seed);
          let crop = convertSeedToCrop(seed);

          let applicableSoils = mysticalSoils.slice(index);

          applicableSoils.forEach((soil, soilIndex) => {
              const id = `${essence}_${soil.replace(':', '_')}`;
              const outputs = [{ item: essence, count: soilIndex + 1 }];

              const recipe = {
                  outputs: outputs,
                  input: seed,
                  soil: soil,
                  type: 'crop',
                  block: crop,
                  id: id
              };

              event.recipes.immersiveengineeringCloche(recipe.outputs, recipe.input, recipe.soil, {type: recipe.type, block: recipe.block}).id(recipe.id);
          });
      });
  });

  const seedCrux = [
    {
      outputs: 'mysticalagriculture:draconium_essence',
      input: 'mysticalagriculture:draconium_seeds',
      soil: 'chroma:draconium_crux',
      type: 'crop',
      block: 'mysticalagriculture:draconium_crop',
      id: 'mysticalagriculture:draconium_seeds_crux'
    },
    {
      outputs: 'mysticalagriculture:awakened_draconium_essence',
      input: 'mysticalagriculture:awakened_draconium_seeds',
      soil: 'mysticalagradditions:awakened_draconium_crux',
      type: 'crop',
      block: 'mysticalagriculture:awakened_draconium_crop',
      id: 'mysticalagriculture:awakened_draconium_from_crux'
    },
    {
      outputs: 'mysticalagriculture:calorite_essence',
      input: 'mysticalagriculture:calorite_seeds',
      soil: 'chroma:calorite_crux',
      type: 'crop',
      block: 'mysticalagriculture:calorite_crop',
      id: 'mysticalagriculture:calorite_seeds_from_crux'
    },
    {
      outputs: 'mysticalagriculture:alfsteel_essence',
      input: 'mysticalagriculture:alfsteel_seeds',
      soil: 'chroma:alfsteel_crux',
      type: 'crop',
      block: 'mysticalagriculture:alfsteel_crop',
      id: 'mysticalagriculture:alfsteel_seeds_from_crux'
    },
    {
      outputs: 'mysticalagriculture:nitro_crystal_essence',
      input: 'mysticalagriculture:nitro_crystal_seeds',
      soil: 'mysticalagradditions:nitro_crystal_crux',
      type: 'crop',
      block: 'mysticalagriculture:nitro_crystal_crop',
      id: 'mysticalagriculture:nitro_crystal_seeds_from_crux'
    }
  ]

  seedCrux.forEach((recipe) => {
    event.recipes.immersiveengineeringCloche(recipe.outputs, recipe.input, recipe.soil, {type: recipe.type, block: recipe.block}).id(recipe.id);
  });
});
