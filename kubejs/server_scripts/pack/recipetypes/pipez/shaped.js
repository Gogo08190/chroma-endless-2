onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pipez/shaped/';
    const recipes = [
        {
            output: Item.of('pipez:item_pipe', 8),
            pattern: ['PPP', 'CRC', 'PPP'],
            key: {
                P: '#forge:plates/iron',
                C: 'immersiveengineering:component_iron',
                R: '#forge:dusts/redstone'
            },
            id: 'pipez:item_pipe'
        },
        {
            output: Item.of('pipez:fluid_pipe', 8),
            pattern: ['PPP', 'CRC', 'PPP'],
            key: {
                P: '#forge:plates/copper',
                C: 'immersiveengineering:fluid_pipe',
                R: '#forge:dusts/redstone'
            },
            id: 'pipez:fluid_pipe'
        },
        {
            output: Item.of('pipez:energy_pipe', 8),
            pattern: ['PPP', 'CRC', 'PPP'],
            key: {
                P: '#forge:plates/electrum',
                C: 'create:electron_tube',
                R: '#forge:dusts/redstone'
            },
            id: 'pipez:energy_pipe'
        },
        {
            output: Item.of('pipez:gas_pipe', 8),
            pattern: ['PPP', 'CRC', 'PPP'],
            key: {
                P: '#forge:plates/lead',
                C: 'mekanism:alloy_infused',
                R: '#forge:dusts/redstone'
            },
            id: 'pipez:gas_pipe'
        },
        {
            output: Item.of('pipez:universal_pipe', 6),
            pattern: ['IEF', 'GLG', 'IEF'],
            key: {
                I: 'pipez:item_pipe',
                E: 'pipez:energy_pipe',
                F: 'pipez:fluid_pipe',
                G: 'pipez:gas_pipe',
                L: 'ae2:logic_processor'
            },
            id: 'pipez:universal_pipe'
        },
        {
            output: 'pipez:basic_upgrade',
            pattern: ['PRP', 'RIR', 'PRP'],
            key: {
                P: '#forge:plates/steel',
                R: '#forge:dusts/redstone',
                I: 'immersiveengineering:insulating_glass'
            },
            id: 'pipez:basic_upgrade'
        },
        {
            output: 'pipez:improved_upgrade',
            pattern: ['PRP', 'RIR', 'PRP'],
            key: {
                P: '#forge:plates/constantan',
                R: 'create:polished_rose_quartz',
                I: 'pipez:basic_upgrade'
            },
            id: 'pipez:improved_upgrade'
        },
        {
            output: 'pipez:advanced_upgrade',
            pattern: ['PRP', 'RIR', 'PRP'],
            key: {
                P: '#forge:plates/mana_diamond',
                R: 'mekanism:basic_control_circuit',
                I: 'pipez:improved_upgrade'
            },
            id: 'pipez:advanced_upgrade'
        },
        {
            output: 'pipez:ultimate_upgrade',
            pattern: ['PRP', 'RIR', 'PRP'],
            key: {
                P: '#forge:plates/netherite',
                R: 'mekanism:alloy_atomic',
                I: 'pipez:advanced_upgrade'
            },
            id: 'pipez:ultimate_upgrade'
        },
        {
            output: 'pipez:wrench',
            pattern: [' F ', ' IF', 'I  '],
            key: {
                I: '#forge:rods/iron',
                F: 'minecraft:flint'
            },
            id: 'pipez:wrench'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
