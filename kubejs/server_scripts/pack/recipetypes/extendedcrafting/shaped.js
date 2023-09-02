onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/shaped/';
    const recipes = [
      {
        output: 'extendedcrafting:frame',
          pattern: ['BGB', 'GFG', 'BGB'],
          key: {
              B: 'extendedcrafting:black_iron_ingot',
              G: 'industrialforegoing:dark_glass',
              F: 'industrialforegoing:machine_frame_simple'
          },
          id: 'extendedcrafting:frame'
      },
      {
        output: 'packagedauto:me_package_component',
          pattern: ['SGS', 'ABC', 'SGS'],
          key: {
              S: '#forge:ingots/fluix_steel',
              G: 'ae2:quartz_glass',
              A: 'ae2:annihilation_core',
              B: 'packagedauto:package_component',
              C: 'ae2:formation_core'
          },
          id: 'packagedauto:me_package_component'
      },
      {
        output: 'packagedauto:package_component',
          pattern: ['SGS', 'GCG', 'SGS'],
          key: {
              S: 'powah:steel_energized',
              G: '#minecraft:planks',
              C: 'powah:ender_core'
          },
          id: 'packagedauto:package_component'
      },
      {
        output: 'packagedexcrafting:marked_pedestal',
          pattern: [' A ', 'BCB', ' A '],
          key: {
              A: 'chroma:supra_catalyst',
              B: 'extendedcrafting:enhanced_ender_catalyst',
              C: 'extendedcrafting:pedestal'
          },
          id: 'packagedexcrafting:marked_pedestal'
      },
      {
        output: Item.of('packagedauto:recipe_holder', 2),
          pattern: ['GFG', 'FPF', 'SCS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              F: '#forge:gems/fluix',
              P: 'ae2:blank_pattern',
              S: '#forge:ingots/fluix_steel',
              C: 'packagedauto:package_component'
          },
          id: 'packagedauto:recipe_holder'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
