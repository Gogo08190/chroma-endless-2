onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/ironjetpacks/shaped/';
    const recipes = [
      {
          output: 'ironjetpacks:basic_coil',
          pattern: [' SP', 'STS', 'PS '],
          key: {
              P: 'create:polished_rose_quartz',
              S: '#forge:ingots/steel',
              T: 'create:electron_tube'
          },
          id: 'ironjetpacks:basic_coil'
      },
      {
          output: 'ironjetpacks:advanced_coil',
          pattern: [' SP', 'STS', 'PS '],
          key: {
              P: '#forge:alloys/advanced',
              S: 'powah:steel_energized',
              T: 'pneumaticcraft:printed_circuit_board'
          },
          id: 'ironjetpacks:advanced_coil'
      },
      {
          output: 'ironjetpacks:elite_coil',
          pattern: [' SP', 'STS', 'PS '],
          key: {
              P: '#forge:storage_blocks/utherium',
              S: 'powah:crystal_niotic',
              T: '#industrialforegoing:machine_frame/simple'
          },
          id: 'ironjetpacks:elite_coil'
      },
      {
          output: 'ironjetpacks:ultimate_coil',
          pattern: [' SP', 'STS', 'PS '],
          key: {
              P: '#forge:ingots/calorite',
              S: 'powah:crystal_spirited',
              T: '#forge:circuits/ultimate'
          },
          id: 'ironjetpacks:ultimate_coil'
      },
      {
          output: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:steel"}'),
          pattern: [' S ', 'SRS', 'PBP'],
          key: {
              S: '#forge:plates/steel',
              R: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}').ignoreNBT(),
              P: '#forge:plates/brass',
              B: 'create:blaze_burner'
          },
          id: `${id_prefix}steel_thruster`
      },
      {
          output: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:compressed_gas"}'),
          pattern: [' S ', 'SRS', 'PBP'],
          key: {
              S: 'pneumaticcraft:plastic',
              R: 'pneumaticcraft:module_expansion_card',
              P: 'powah:dielectric_paste',
              B: 'botania:life_essence'
          },
          id: `${id_prefix}compressed_thruster`
      },
      {
          output: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:niotic"}'),
          pattern: [' S ', 'SRS', 'PBP'],
          key: {
              S: 'extendedcrafting:elite_component',
              R: 'powah:capacitor_niotic',
              P: 'industrialforegoing:plastic',
              B: 'chemlib:hydroxylapatite'
          },
          id: `${id_prefix}niotic_thruster`
      },
      {
          output: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:calorite"}'),
          pattern: [' S ', 'SRS', 'PBP'],
          key: {
              S: '#beyond_earth:compresseds/calorite',
              R: '#forge:circuits/ultimate',
              P: 'fluxnetworks:flux_core',
              B: '#beyond_earth:engines/calorite'
          },
          id: `${id_prefix}calorite_thruster`
      },
      {
          output: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:ethereal"}'),
          pattern: [' S ', 'SRS', 'PBP'],
          key: {
              S: 'beyond_earth:ice_shard',
              R: '#industrialforegoing:machine_frame/supreme',
              P: 'draconicevolution:draconium_core',
              B: 'industrialforegoing:mycelial_netherstar'
          },
          id: `${id_prefix}ethereal_thruster`
      },
      {
          output: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:steel"}'),
          pattern: ['B B', 'SES', 'SAS'],
          key: {
              B: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:steel"}'),
              S: '#forge:plates/steel',
              E: 'immersiveengineering:component_electronic',
              A: Item.of('immersiveengineering:capacitor_hv').ignoreNBT()
          },
          id: `${id_prefix}steel_capacitor`
      },
      {
          output: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:compressed_gas"}'),
          pattern: ['B B', 'SES', 'SAS'],
          key: {
              B: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:compressed_gas"}'),
              S: 'pneumaticcraft:plastic',
              E: 'pneumaticcraft:printed_circuit_board',
              A: 'pneumaticcraft:air_canister'
          },
          id: `${id_prefix}compressed_capacitor`
      },
      {
          output: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:niotic"}'),
          pattern: ['B B', 'SES', 'CAC'],
          key: {
              B: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:niotic"}'),
              S: '#forge:ingots/cyanite',
              E: 'extendedcrafting:frame',
              A: 'powah:energy_cell_niotic',
              C: 'biggerreactors:blutonium_ingot'
          },
          id: `${id_prefix}niotic_capacitor`
      },
      {
          output: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:calorite"}'),
          pattern: ['B B', 'SES', 'SAS'],
          key: {
              B: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:calorite"}'),
              S: '#beyond_earth:compresseds/calorite',
              E: 'mekaevolution:absolute_control_circuit',
              A: Item.of('mekaevolution:absolute_energy_cube').ignoreNBT()
          },
          id: `${id_prefix}calorite_capacitor`
      },
      {
          output: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:ethereal"}'),
          pattern: ['B B', 'SES', 'SAS'],
          key: {
              B: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:ethereal"}'),
              S: 'beyond_earth:ice_shard',
              E: '#industrialforegoing:machine_frame/supreme',
              A: 'fluxnetworks:gargantuan_flux_storage'
          },
          id: `${id_prefix}ethereal_capacitor`
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
