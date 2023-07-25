onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/industrialforegoing/shaped/';
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
      {
        output: 'industrialforegoing:laser_drill',
          pattern: ['PLP', 'IFI', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              L: 'lazierae2:logic_unit',
              I: '#forge:ingots/ludicrite',
              F: '#industrialforegoing:machine_frame/advanced',
              C: '#forge:gems/resonating',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:laser_drill'
      },
      {
        output: 'industrialforegoing:fluid_sieving_machine',
          pattern: ['PLP', 'IFI', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              L: 'industrialforegoing:pink_slime',
              I: 'minecraft:iron_bars',
              F: '#industrialforegoing:machine_frame/advanced',
              C: '#forge:gears/constantan',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:fluid_sieving_machine'
      },
      {
        output: 'industrialforegoing:infinity_charger',
          pattern: ['PPP', 'IFI', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              I: 'mekanism:ultimate_induction_provider',
              F: '#industrialforegoing:machine_frame/advanced',
              C: '#beyond_earth:compresseds/desh',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:infinity_charger'
      },
      {
        output: 'industrialforegoing:material_stonework_factory',
          pattern: ['PLP', 'JFI', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              L: 'rftoolsutility:crafter3',
              I: 'industrialforegoing:resourceful_furnace',
              F: '#industrialforegoing:machine_frame/advanced',
              C: '#forge:ingots/pink_slime',
              J: Item.of('mekaevolution:plasma_pickaxe').ignoreNBT(),
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:material_stonework_factory'
      },
      {
        output: 'industrialforegoing:stasis_chamber',
          pattern: ['PLP', 'IFI', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              L: 'rftoolsbuilder:shield_block4',
              I: '#beyond_earth:compresseds/desh',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'chroma:supra_catalyst',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:stasis_chamber'
      },
      {
        output: 'industrialforegoing:washing_factory',
          pattern: ['PLP', 'IFI', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              L: 'industrialforegoing:meat_feeder',
              I: 'industrialforegoing:pity_black_hole_tank',
              F: '#industrialforegoing:machine_frame/advanced',
              C: '#forge:ingots/pink_slime',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:washing_factory'
      },
      {
        output: 'industrialforegoing:mob_duplicator',
          pattern: ['PLP', 'IFI', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              L: 'pneumaticcraft:spawner_core',
              I: 'forbidden_arcanus:quantum_catcher',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'botanicalmachinery:mana_emerald',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:mob_duplicator'
      },
      {
        output: 'industrialforegoing:potion_brewer',
          pattern: ['PLP', 'IFI', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              L: 'create:mechanical_mixer',
              I: 'botania:brewery',
              F: '#industrialforegoing:machine_frame/advanced',
              C: '#forge:gears/lumium',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:potion_brewer'
      },
      {
        output: 'industrialforegoing:enchantment_applicator',
          pattern: ['PPP', 'IFI', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              I: 'minecraft:anvil',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'forbidden_arcanus:xpetrified_orb',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:enchantment_applicator'
      },
      {
        output: 'industrialforegoing:enchantment_extractor',
          pattern: ['PLP', 'IFI', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              L: 'mna:disenchanter',
              I: 'tombstone:book_of_disenchantment',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'forbidden_arcanus:xpetrified_orb',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:enchantment_extractor'
      },
      {
        output: 'industrialforegoing:enchantment_sorter',
          pattern: ['PLP', 'IFJ', 'CTC'],
          key: {
              P: 'industrialforegoing:plastic',
              L: 'forbidden_arcanus:xpetrified_orb',
              I: 'minecraft:book',
              J: Item.of('minecraft:enchanted_book').ignoreNBT(),
              F: '#industrialforegoing:machine_frame/advanced',
              C: '#mekanism:alloys/reinforced',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:enchantment_sorter'
      },
      {
        output: 'industrialforegoing:mycelial_slimey',
          pattern: ['SSS', 'SFS', 'CTC'],
          key: {
              S: 'minecraft:slime_block',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'chroma:netherite_flux_coil',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:mycelial_slimey'
      },
      {
        output: 'industrialforegoing:mycelial_explosive',
          pattern: ['SSS', 'SFS', 'CTC'],
          key: {
              S: 'minecraft:tnt',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'chroma:netherite_flux_coil',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:mycelial_explosive'
      },
      {
        output: 'industrialforegoing:mycelial_death',
          pattern: ['ABA', 'SFS', 'CTC'],
          key: {
              S: 'minecraft:bone_block',
              A: 'minecraft:rotten_flesh',
              B: 'minecraft:wither_skeleton_skull',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'chroma:netherite_flux_coil',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:mycelial_death'
      },
      {
        output: 'industrialforegoing:mycelial_magma',
          pattern: ['SBS', 'SFS', 'CTC'],
          key: {
              S: 'minecraft:lava_bucket',
              B: '#forge:storage_blocks/redstone',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'chroma:netherite_flux_coil',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:mycelial_magma'
      },
      {
        output: 'industrialforegoing:mycelial_disenchantment',
          pattern: ['SBS', 'SFS', 'CTC'],
          key: {
              S: 'minecraft:book',
              B: 'minecraft:grindstone',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'chroma:netherite_flux_coil',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:mycelial_disenchantment'
      },
      {
        output: 'industrialforegoing:mycelial_ender',
          pattern: ['SBS', 'SFS', 'CTC'],
          key: {
              S: 'minecraft:ender_pearl',
              B: 'minecraft:ender_eye',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'chroma:netherite_flux_coil',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:mycelial_ender'
      },
      {
        output: 'industrialforegoing:mycelial_rocket',
          pattern: ['SBS', 'SFS', 'CTC'],
          key: {
              S: 'minecraft:gunpowder',
              B: 'minecraft:paper',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'chroma:netherite_flux_coil',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:mycelial_rocket'
      },
      {
        output: 'industrialforegoing:mycelial_potion',
          pattern: ['SBS', 'AFA', 'CTC'],
          key: {
              S: 'minecraft:nether_wart',
              A: 'minecraft:blaze_powder',
              B: 'minecraft:brewing_stand',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'chroma:netherite_flux_coil',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:mycelial_potion'
      },
      {
        output: 'industrialforegoing:mycelial_crimed',
          pattern: ['SBD', 'AFA', 'CTC'],
          key: {
              S: 'minecraft:crimson_fungus',
              A: 'minecraft:nether_wart_block',
              B: 'minecraft:shroomlight',
              D: 'minecraft:warped_fungus',
              F: '#industrialforegoing:machine_frame/advanced',
              C: 'chroma:netherite_flux_coil',
              T: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: 'industrialforegoing:mycelial_crimed'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
