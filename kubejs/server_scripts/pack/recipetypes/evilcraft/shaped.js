onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/evilcraft/shaped/';
    const recipes = [
      {
        output: 'evilcraft:sanguinary_environmental_accumulator',
          pattern: ['CEC', 'SGS', 'CIC'],
          key: {
              C: 'evilcraft:bloody_cobblestone',
              E: 'evilcraft:bloody_cobblestone',
              S: '#forge:sheetmetals/iron',
              G: 'evilcraft:garmonbozia',
              I: 'evilcraft:blood_infusion_core'
          },
          id: 'evilcraft:crafting/sanguinary_environmental_accumulator'
      },
      {
        output: 'evilcraft:sanguinary_pedestal_1',
          pattern: [' B ', 'DSD', 'GGG'],
          key: {
              B: '#evilcraft:gems/dark_power',
              D: 'powah:dielectric_rod',
              S: 'evilcraft:sanguinary_pedestal_0',
              G: 'evilcraft:dark_power_gem_block'
          },
          id: 'evilcraft:crafting/sanguinary_pedestal_1'
      },
      {
        output: 'evilcraft:sanguinary_pedestal_0',
          pattern: ['DDD', 'RPR', 'DDD'],
          key: {
              D: 'evilcraft:dark_block',
              R: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}').ignoreNBT(),
              P: 'forbidden_arcanus:darkstone_pedestal'
          },
          id: 'evilcraft:crafting/sanguinary_pedestal_0'
      },
      {
        output: 'evilcraft:purifier',
          pattern: ['GSG', 'DCD', 'DPD'],
          key: {
              D: 'evilcraft:dark_block',
              G: 'evilcraft:dark_power_gem_block',
              S: 'evilcraft:blood_infusion_core',
              C: 'minecraft:cauldron',
              P: 'mekanism:basic_mechanical_pipe'
          },
          id: 'evilcraft:crafting/purifier'
      },
      {
        output: 'evilcraft:blood_chest',
          pattern: ['DDD', 'DSD', 'DDD'],
          key: {
              D: 'evilcraft:reinforced_undead_planks',
              S: 'evilcraft:blood_infusion_core'
          },
          id: 'evilcraft:crafting/blood_chest'
      },
      {
        output: 'evilcraft:blood_extractor',
          pattern: ['SSS', ' G ', ' D '],
          key: {
              D: '#evilcraft:gems/dark',
              S: 'evilcraft:dark_spike',
              G: 'evilcraft:obscured_glass'
          },
          id: 'evilcraft:crafting/blood_extractor'
      },
      {
        output: 'evilcraft:vengeance_focus',
          pattern: ['DPD', 'PRP', 'DPD'],
          key: {
              R: 'evilcraft:vengeance_ring',
              D: '#evilcraft:gems/dark_crushed',
              P: '#forge:plates/iron'
          },
          id: 'evilcraft:crafting/vengeance_focus'
      },
      {
        output: 'evilcraft:vengeance_ring',
          pattern: ['DPD', 'P P', 'DPD'],
          key: {
              D: '#evilcraft:gems/dark_crushed',
              P: '#forge:plates/iron'
          },
          id: 'evilcraft:crafting/vengeance_ring'
      },
      {
        output: 'evilcraft:exalted_crafter_wooden',
          pattern: ['PTP', 'DCD', 'PIP'],
          key: {
              D: '#evilcraft:gems/dark_crushed',
              I: '#forge:plates/iron',
              P: '#forge:plates/gold',
              T: '#forge:workbenches',
              C: '#forge:chests/wooden'
          },
          id: 'evilcraft:crafting/exalted_crafter_wooden'
      },
      {
        output: 'evilcraft:exalted_crafter',
          pattern: ['PTP', 'DCD', 'PIP'],
          key: {
              D: '#evilcraft:gems/dark_crushed',
              I: '#forge:plates/iron',
              P: '#forge:plates/gold',
              T: '#forge:workbenches',
              C: '#forge:chests/ender'
          },
          id: 'evilcraft:crafting/exalted_crafter'
      },
      {
        output: 'evilcraft:spikey_claws',
          pattern: ['SSS', ' P ', 'P P'],
          key: {
              S: 'evilcraft:dark_spike',
              P: '#forge:plates/iron'
          },
          id: 'evilcraft:crafting/spikey_claws'
      },
      {
        output: Item.of('evilcraft:dark_spike', 8),
          pattern: ['S', 'P'],
          key: {
              S: '#evilcraft:gems/dark',
              P: '#forge:plates/iron'
          },
          id: 'evilcraft:crafting/dark_spike'
      },
      {
        output: 'evilcraft:necromancer_staff',
          pattern: ['DZD', 'SES', ' R '],
          key: {
              S: 'evilcraft:dark_spike',
              D: '#evilcraft:gems/dark_power',
              Z: 'minecraft:zombie_head',
              R: 'evilcraft:dark_stick',
              R: 'evilcraft:inverted_potentia_empowered'
          },
          id: 'evilcraft:crafting/necromancer_staff'
      },
      {
        output: 'evilcraft:necromancer_staff',
          pattern: ['VG ', 'IPI', ' G '],
          key: {
              V: 'evilcraft:promise_speed_0',
              G: '#forge:plates/gold',
              I: '#forge:plates/iron',
              P: 'evilcraft:promise_efficiency_0'
          },
          id: 'evilcraft:crafting/necromancer_staff'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
