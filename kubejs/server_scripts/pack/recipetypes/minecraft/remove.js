// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'blue_skies:furnace_compat',
      'tconstruct:common/basalt_blast_furnace',
      'blue_skies:enchanting_table_compat',
      'blue_skies:stonecutter_compat',
      'tconstruct:common/glass/vanilla/beacon',
      'quark:building/crafting/furnaces/cobblestone_furnace',
      'quark:building/crafting/furnaces/mixed_furnace',
      'minecraft:comparator'
    ];

    const outputRemovals = [
      'quark:blackstone_furnace',
      'quark:deepslate_furnace'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
