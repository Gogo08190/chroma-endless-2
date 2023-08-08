onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/sophisticatedbackpacks/shaped/';
    const recipes = [
        {
            output: 'sophisticatedbackpacks:upgrade_base',
            pattern: ['SPS', 'PLP', 'SPS'],
            key: {
                S: 'botania:mana_string',
                P: '#forge:plates/iron',
                L: 'immersiveengineering:ersatz_leather'
            },
            id: 'sophisticatedbackpacks:upgrade_base'
        },
        {
            output: 'sophisticatedbackpacks:void_upgrade',
            pattern: [' E ', 'OBO', 'ROR'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                E: 'rftoolsbase:infused_enderpearl',
                R: '#forge:dusts/redstone',              
                O: 'forbidden_arcanus:processed_obsidian_block'
            },
            id: 'sophisticatedbackpacks:void_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:compacting_upgrade',
            pattern: ['IPI', 'PBP', 'RPR'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                I: '#forge:plates/iron',
                R: '#forge:dusts/redstone',              
                P: 'minecraft:piston'
            },
            id: 'sophisticatedbackpacks:compacting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:compacting_upgrade',
            pattern: ['RIR', 'IBI', 'RFR'],
            key: {
                B: 'sophisticatedbackpacks:smelting_upgrade',
                I: '#forge:plates/iron',
                R: '#forge:dusts/redstone',              
                F: 'minecraft:furnace'
            },
            id: 'sophisticatedbackpacks:smelting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:smoking_upgrade',
            pattern: ['RIR', 'IBI', 'RSR'],
            key: {
                B: 'sophisticatedbackpacks:smelting_upgrade',
                I: '#forge:plates/iron',
                R: '#forge:dusts/redstone',              
                S: 'minecraft:smoker'
            },
            id: 'sophisticatedbackpacks:smoking_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:blasting_upgrade',
            pattern: ['RIR', 'IBI', 'RFR'],
            key: {
                B: 'sophisticatedbackpacks:smelting_upgrade',
                I: '#forge:plates/iron',
                R: '#forge:dusts/redstone',              
                F: 'minecraft:blast_furnace'
            },
            id: 'sophisticatedbackpacks:blasting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:filter_upgrade',
            pattern: ['RSR', 'SBS', 'RSR'],
            key: {
                B: 'sophisticatedbackpacks:smelting_upgrade',
                R: '#forge:dusts/redstone',              
                S: 'botania:mana_string'
            },
            id: 'sophisticatedbackpacks:filter_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:deposit_upgrade',
            pattern: [' P ', 'IBI', 'RCR'],
            key: {
                B: 'sophisticatedbackpacks:smelting_upgrade',
                C: '#forge:chests/wooden',
                P: 'minecraft:piston',
                R: '#forge:dusts/redstone',              
                I: '#forge:plates/iron'
            },
            id: 'sophisticatedbackpacks:deposit_upgrade'
        },
        
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
