onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/ender_crafter/';
    const recipes = [
      {
          pattern: ['CRC', 'BTB', 'CNC'],
          key: {
            C: { item: 'extendedcrafting:redstone_component' },
            R: { item: 'extendedcrafting:redstone_catalyst' },
            B: { item: 'powah:capacitor_hardened' },
            T: { item: 'extendedcrafting:basic_table' },
            N: { item: 'pneumaticcraft:transistor' }
          },
          result: { item: 'extendedcrafting:basic_auto_table', count: 1 },
          id: 'extendedcrafting:basic_auto_table'
      },
      {
          pattern: ['CRC', 'BTB', 'CNC'],
          key: {
            C: { item: 'extendedcrafting:redstone_component' },
            R: { item: 'extendedcrafting:redstone_catalyst' },
            B: { item: 'powah:capacitor_hardened' },
            T: { item: 'extendedcrafting:advanced_table' },
            N: { item: 'pneumaticcraft:transistor' }
          },
          result: { item: 'extendedcrafting:advanced_auto_table', count: 1 },
          id: 'extendedcrafting:advanced_auto_table'
      },
      {
          pattern: ['CRC', 'BTB', 'CNC'],
          key: {
            C: { item: 'extendedcrafting:redstone_component' },
            R: { item: 'extendedcrafting:redstone_catalyst' },
            B: { item: 'powah:capacitor_niotic' },
            T: { item: 'extendedcrafting:elite_table' },
            N: { item: 'pneumaticcraft:transistor' }
          },
          result: { item: 'extendedcrafting:elite_auto_table', count: 1 },
          id: 'extendedcrafting:elite_auto_table'
      },
      {
          pattern: ['ISI', 'SBS', 'ISI'],
          key: {
            I: { tag: 'forge:ingots/tungsten' },
            S: { tag: 'forge:plates/steel' },
            B: { tag: 'forge:ingots/chromium' }
          },
          result: { item: 'beyond_earth:rocket_launch_pad', count: 9 },
          id: 'beyond_earth:rocket_launch_pad'
      },
      {
          pattern: ['SSS', 'CFC', 'SSS'],
          key: {
            S: { tag: 'beyond_earth:compresseds/steel' },
            C: { item: 'chroma:carbon_fiber' },
            F: { item: 'beyond_earth:fuel_bucket' }
          },
          result: { item: 'beyond_earth_giselle_addon:fuel_loader', count: 1 },
          id: 'beyond_earth_giselle_addon:crafting/fuel_loader'
      },
      {
          pattern: ['CRC', 'BTB', 'CNC'],
          key: {
            C: { item: 'extendedcrafting:redstone_component' },
            R: { item: 'extendedcrafting:redstone_catalyst' },
            B: { item: 'powah:capacitor_nitro' },
            T: { item: 'extendedcrafting:ultimate_table' },
            N: { item: 'pneumaticcraft:transistor' }
          },
          result: { item: 'extendedcrafting:ultimate_auto_table', count: 1 },
          id: 'extendedcrafting:ultimate_auto_table'
      },
      {
          pattern: ['PGP', 'CFC', 'PGP'],
          key: {
            P: { item: 'chroma:mana_diamond_plate' },
            G: { item: 'thermal:diamond_gear' },
            C: { item: 'botania:rune_water' },
            F: { item: 'functionalstorage:gold_upgrade' }
          },
          result: { item: 'functionalstorage:diamond_upgrade', count: 1 },
          id: 'functionalstorage:diamond_upgrade'
      },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'extendedcrafting:shaped_ender_crafter',
                pattern: recipe.pattern,
                key: recipe.key,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
