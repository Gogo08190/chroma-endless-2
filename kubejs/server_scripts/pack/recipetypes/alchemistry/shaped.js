onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/alchemistry/shaped/';
    const recipes = [
      {
        output: 'alchemistry:fission_core',
          pattern: ['INI', 'INI', 'INI'],
          key: {
              I: '#forge:ingots/yttrium',
              N: '#forge:nuggets/alfsteel'
          },
          id: 'alchemistry:fission_core'
      },
      {
        output: 'alchemistry:reactor_energy',
          pattern: ['FFF', 'INI', 'FFF'],
          key: {
              I: '#forge:ingots/ludicrite',
              N: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT(),
              F: 'alchemistry:reactor_casing'
          },
          id: 'alchemistry:reactor_energy'
      },
      {
        output: 'alchemistry:reactor_input',
          pattern: ['FFF', 'INI', 'FFF'],
          key: {
              I: 'mekaevolution:absolute_control_circuit',
              N: 'minecraft:hopper',
              F: 'alchemistry:reactor_casing'
          },
          id: 'alchemistry:reactor_input'
      },
      {
        output: 'alchemistry:reactor_output',
          pattern: ['FFF', 'INI', 'FFF'],
          key: {
              I: 'mekaevolution:absolute_control_circuit',
              N: 'minecraft:dropper',
              F: 'alchemistry:reactor_casing'
          },
          id: 'alchemistry:reactor_output'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
