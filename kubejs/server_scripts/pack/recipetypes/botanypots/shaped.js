onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'botanypots:terracotta_botany_pot',
            pattern: ['T T', 'TPT', ' T '],
            key: {
                T: 'minecraft:terracotta',
                P: 'supplementaries:planter'
            },
            id: 'botanypots:botanypots/crafting/terracotta_botany_pot'
        },
        {
            output: 'botanypots:terracotta_hopper_botany_pot',
            pattern: ['THT', 'TPT', ' T '],
            key: {
                T: 'minecraft:terracotta',
                P: 'supplementaries:planter',
                H: 'create:chute'
            },
            id: 'botanypots:botanypots/crafting/terracotta_compact_hopper_botany_pot'
        },
        {
            output: 'botanypots:terracotta_hopper_botany_pot',
            pattern: ['P', 'C'],
            key: {
                P: 'botanypots:terracotta_botany_pot',
                C: 'create:chute'
            },
            id: 'botanypots:botanypots/crafting/terracotta_hopper_botany_pot'
        }
    ];

    let coloredPots = [
      'white',
      'orange',
      'magenta',
      'light_blue',
      'yellow',
      'lime',
      'pink',
      'gray',
      'light_gray',
      'cyan',
      'purple',
      'blue',
      'brown',
      'green',
      'red',
      'black'
    ];

    coloredPots.forEach((coloredPot) => {
      recipes.push(
        // Terracotta
        {
          output: `botanypots:${coloredPot}_terracotta_botany_pot`,
          pattern: ['T T', 'TPT', ' T '],
          key: {
              T: `minecraft:${coloredPot}_terracotta`,
              P: 'supplementaries:planter'
          },
          id: `botanypots:botanypots/crafting/${coloredPot}_terracotta_botany_pot`
        },
        {
          output: `botanypots:${coloredPot}_terracotta_hopper_botany_pot`,
          pattern: ['THT', 'TPT', ' T '],
          key: {
              T: `minecraft:${coloredPot}_terracotta`,
              P: 'supplementaries:planter',
              H: 'create:chute'
          },
          id: `botanypots:botanypots/crafting/${coloredPot}_terracotta_compact_hopper_botany_pot`
        },
        {
          output: `botanypots:${coloredPot}_terracotta_hopper_botany_pot`,
          pattern: ['T', 'H'],
          key: {
              T: `botanypots:${coloredPot}_terracotta_botany_pot`,
              H: 'create:chute'
          },
          id: `botanypots:botanypots/crafting/${coloredPot}_terracotta_hopper_botany_pot`
        },

        // Concrete
        {
          output: `botanypots:${coloredPot}_concrete_botany_pot`,
          pattern: ['T T', 'TPT', ' T '],
          key: {
              T: `minecraft:${coloredPot}_concrete`,
              P: 'supplementaries:planter'
          },
          id: `botanypots:botanypots/crafting/${coloredPot}_concrete_botany_pot`
        },
        {
          output: `botanypots:${coloredPot}_concrete_hopper_botany_pot`,
          pattern: ['THT', 'TPT', ' T '],
          key: {
              T: `minecraft:${coloredPot}_concrete`,
              P: 'supplementaries:planter',
              H: 'create:chute'
          },
          id: `botanypots:botanypots/crafting/${coloredPot}_concrete_compact_hopper_botany_pot`
        },
        {
          output: `botanypots:${coloredPot}_concrete_hopper_botany_pot`,
          pattern: ['T', 'H'],
          key: {
              T: `botanypots:${coloredPot}_concrete_botany_pot`,
              H: 'create:chute'
          },
          id: `botanypots:botanypots/crafting/${coloredPot}_concrete_hopper_botany_pot`
        },

        // Glazed Terracotta
        {
          output: `botanypots:${coloredPot}_glazed_terracotta_botany_pot`,
          pattern: ['T T', 'TPT', ' T '],
          key: {
              T: `minecraft:${coloredPot}_glazed_terracotta`,
              P: 'supplementaries:planter'
          },
          id: `botanypots:botanypots/crafting/${coloredPot}_glazed_terracotta_botany_pot`
        },
        {
          output: `botanypots:${coloredPot}_glazed_terracotta_hopper_botany_pot`,
          pattern: ['THT', 'TPT', ' T '],
          key: {
              T: `minecraft:${coloredPot}_glazed_terracotta`,
              P: 'supplementaries:planter',
              H: 'create:chute'
          },
          id: `botanypots:botanypots/crafting/${coloredPot}_glazed_terracotta_compact_hopper_botany_pot`
        },
        {
          output: `botanypots:${coloredPot}_glazed_terracotta_hopper_botany_pot`,
          pattern: ['T', 'H'],
          key: {
              T: `botanypots:${coloredPot}_glazed_terracotta_botany_pot`,
              H: 'create:chute'
          },
          id: `botanypots:botanypots/crafting/${coloredPot}_glazed_terracotta_hopper_botany_pot`
        }
      );
    });


    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
