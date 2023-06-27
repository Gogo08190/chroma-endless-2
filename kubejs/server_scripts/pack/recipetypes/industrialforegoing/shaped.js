onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/ender_storage/shaped/';
    const recipes = [
      {
        output: 'industrialforegoing:latex_processing_unit',
          pattern: ['BLB', 'EWS', 'BMB'],
          key: {
              B: 'pneumaticcraft:plastic',
              L: 'ae2:formation_core',
              S: 'industrialforegoing:latex_bucket',
              E: 'minecraft:water_bucket',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
          },
          id: 'industrialforegoing:latex_processing_unit'
      },
      {
        output: 'industrialforegoing:fluid_extractor',
          pattern: ['BLB', 'EWS', 'BMB'],
          key: {
              B: 'pneumaticcraft:plastic',
              L: 'ae2:annihilation_core',
              S: 'create:mechanical_saw',
              E: 'create:fluid_tank',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
          },
          id: 'industrialforegoing:fluid_extractor'
      },
      {
        output: 'industrialforegoing:pitiful_generator',
          pattern: ['BLB', 'SWS', 'BMB'],
          key: {
              B: '#forge:cobblestone',
              L: 'powah:capacitor_hardened',
              S: '#chipped:iron_bars',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'minecraft:furnace',
          },
          id: 'industrialforegoing:pitiful_generator'
      },
      {
        output: 'industrialforegoing:fluid_placer',
          pattern: ['BLB', 'EWS', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'thermal:redstone_servo',
              S: 'engineersdecor:factory_placer',
              E: 'industrialforegoing:common_black_hole_tank',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/bronze',
          },
          id: 'industrialforegoing:fluid_placer'
      },
      {
        output: 'industrialforegoing:block_placer',
          pattern: ['BLB', 'EWS', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'thermal:redstone_servo',
              S: 'engineersdecor:factory_placer',
              E: 'industrialforegoing:common_black_hole_unit',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/invar',
          },
          id: 'industrialforegoing:block_placer'
      },
      {
        output: 'industrialforegoing:fluid_collector',
          pattern: ['BLB', 'EWS', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'thermal:redstone_servo',
              S: 'pneumaticcraft:vacuum_pump',
              E: 'industrialforegoing:common_black_hole_tank',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/bronze',
          },
          id: 'industrialforegoing:fluid_collector'
      },
      {
        output: 'industrialforegoing:block_breaker',
          pattern: ['BLB', 'EWS', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'thermal:redstone_servo',
              S: 'engineersdecor:small_block_breaker',
              E: 'industrialforegoing:common_black_hole_unit',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/invar',
          },
          id: 'industrialforegoing:block_breaker'
      },
      {
        output: 'industrialforegoing:resourceful_furnace',
          pattern: ['BLB', 'SWS', 'BMB'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'industrialforegoing:common_black_hole_tank',
              S: 'minecraft:furnace',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
          },
          id: 'industrialforegoing:resourceful_furnace'
      },
      {
        output: 'industrialforegoing:bioreactor',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'thermal:redstone_servo',
              E: 'minecraft:composter',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/diamond',
          },
          id: 'industrialforegoing:bioreactor'
      },
      {
        output: 'industrialforegoing:biofuel_generator',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'powah:capacitor_hardened',
              E: 'industrialforegoing:biofuel_bucket',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: 'mekanism:elite_control_circuit',
          },
          id: 'industrialforegoing:biofuel_generator'
      },
      {
        output: 'industrialforegoing:sewer',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'thermal:redstone_servo',
              E: 'industrialforegoing:common_black_hole_tank',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/iron',
          },
          id: 'industrialforegoing:sewer'
      },
      {
        output: 'industrialforegoing:spores_recreator',
          pattern: ['BLB', 'EWE', 'BMB'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'thermal:phytosoil',
              E: '#forge:mushrooms',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
          },
          id: 'industrialforegoing:spores_recreator'
      },
      {
        output: 'industrialforegoing:mob_slaughter_factory',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'mob_grinding_utils:saw',
              E: 'industrialforegoing:common_black_hole_tank',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: 'evilcraft:blood_orb_filled',
          },
          id: 'industrialforegoing:mob_slaughter_factory'
      },
      {
        output: 'industrialforegoing:animal_baby_separator',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'minecraft:golden_carrot',
              E: 'immersiveengineering:conveyor_basic',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: 'industrialforegoing:world_transporter_type',
          },
          id: 'industrialforegoing:animal_baby_separator'
      },
      {
        output: 'industrialforegoing:plant_gatherer',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'expandedstorage:iron_barrel',
              E: 'industrialforegoing:common_black_hole_tank',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: 'create:mechanical_harvester',
          },
          id: 'industrialforegoing:plant_gatherer'
      },
      {
        output: 'industrialforegoing:animal_feeder',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'farmingforblockheads:feeding_trough',
              E: 'farmersdelight:horse_feed',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/iron',
          },
          id: 'industrialforegoing:animal_feeder'
      },
      {
        output: 'industrialforegoing:plant_sower',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'create:attribute_filter',
              E: 'create:deployer',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/iron',
          },
          id: 'industrialforegoing:plant_sower'
      },
      {
        output: 'industrialforegoing:dye_mixer',
          pattern: ['BLB', 'EWD', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: '#forge:dyes/green',
              E: '#forge:dyes/red',
              D: '#forge:dyes/blue',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/iron',
          },
          id: 'industrialforegoing:dye_mixer'
      },
      {
        output: 'industrialforegoing:sewage_composter',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'create:mechanical_press',
              E: 'industrialforegoing:sewage_bucket',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/iron',
          },
          id: 'industrialforegoing:sewage_composter'
      },
      {
        output: 'industrialforegoing:water_condensator',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'industrialforegoing:common_black_hole_tank',
              E: 'create:mechanical_pump',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'thermal:redstone_servo',
              G: '#forge:gears/iron',
          },
          id: 'industrialforegoing:water_condensator'
      },
      {
        output: 'industrialforegoing:sludge_refiner',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'expandedstorage:iron_barrel',
              E: 'industrialforegoing:sludge_bucket',
              W: 'industrialforegoing:machine_frame_pity',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/iron',
          },
          id: 'industrialforegoing:sludge_refiner'
      },
      {
        output: 'industrialforegoing:mycelial_furnace',
          pattern: ['CCC', 'CSC', 'NEN'],
          key: {
              C: '#forge:storage_blocks/coal',
              S: 'industrialforegoing:machine_frame_simple',
              N: 'chroma:netherite_flux_coil',
              E: 'solarpanels:improved_energy_tablet'
          },
          id: 'industrialforegoing:mycelial_furnace'
      },
      {
        output: 'industrialforegoing:mycelial_culinary',
          pattern: ['CCC', 'CSC', 'NEN'],
          key: {
              C: '#forge:crops',
              S: 'industrialforegoing:machine_frame_simple',
              N: 'chroma:netherite_flux_coil',
              E: 'solarpanels:improved_energy_tablet'
          },
          id: 'industrialforegoing:mycelial_culinary'
      },
      {
        output: 'industrialforegoing:mycelial_frosty',
          pattern: ['CCC', 'CSC', 'NEN'],
          key: {
              C: 'minecraft:snowball',
              S: 'industrialforegoing:machine_frame_simple',
              N: 'chroma:netherite_flux_coil',
              E: 'solarpanels:improved_energy_tablet'
          },
          id: 'industrialforegoing:mycelial_frosty'
      },
      {
        output: 'industrialforegoing:mycelial_pink',
          pattern: ['CCC', 'CSC', 'NEN'],
          key: {
              C: '#forge:dyes/pink',
              S: 'industrialforegoing:machine_frame_simple',
              N: 'chroma:netherite_flux_coil',
              E: 'solarpanels:improved_energy_tablet'
          },
          id: 'industrialforegoing:mycelial_pink'
      },
      {
        output: 'industrialforegoing:plant_fertilizer',
          pattern: ['BLB', 'LWL', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'industrialforegoing:fertilizer',
              W: 'industrialforegoing:machine_frame_simple',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/copper',
          },
          id: 'industrialforegoing:plant_fertilizer'
      },
      {
        output: 'industrialforegoing:marine_fisher',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: Item.of('aquaculture:diamond_fishing_rod', '{Damage:0}').ignoreNBT(),
              E: 'thermal:deep_aquachow',
              W: 'industrialforegoing:machine_frame_simple',
              M: 'mekanism:energy_tablet',
              G: '#forge:gears/bronze',
          },
          id: 'industrialforegoing:marine_fisher'
      },
      {
        output: 'industrialforegoing:mob_detector',
          pattern: ['BLB', 'EWC', 'BMB'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'minecraft:observer',
              E: 'scannable:friendly_entity_module',
              C: 'scannable:hostile_entity_module',
              W: 'industrialforegoing:machine_frame_simple',
              M: 'mekanism:energy_tablet',
          },
          id: 'industrialforegoing:mob_detector'
      },
      {
        output: 'industrialforegoing:hydroponic_bed',
          pattern: ['BLB', 'EWE', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'thermal:phytosoil',
              E: 'industrialforegoing:common_black_hole_tank',
              W: 'industrialforegoing:machine_frame_simple',
              M: 'mekanism:energy_tablet',
              G: 'industrialforegoing:fertilizer',
          },
          id: 'industrialforegoing:hydroponic_bed'
      },
      {
        output: 'industrialforegoing:fermentation_station',
          pattern: ['BLB', 'LWL', 'GMG'],
          key: {
              B: 'industrialforegoing:plastic',
              L: 'industrialforegoing:common_black_hole_tank',
              W: 'industrialforegoing:machine_frame_simple',
              M: 'mekanism:energy_tablet',
              G: 'mekanism:alloy_reinforced',
          },
          id: 'industrialforegoing:fermentation_station'
      },


    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
