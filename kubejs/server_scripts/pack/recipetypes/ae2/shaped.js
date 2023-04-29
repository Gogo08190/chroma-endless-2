onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'ae2:charger',
            pattern: ['STS', 'S  ', 'SCS'],
            key: {
                S: '#forge:ingots/steel',
                T: 'create:electron_tube',
                C: 'immersiveengineering:tesla_coil'
            },
            id: 'ae2:network/blocks/crystal_processing_charger'
        },
        {
            output: 'ae2:quartz_growth_accelerator',
            pattern: ['SCS', 'EFE', 'SCS'],
            key: {
                S: '#forge:ingots/steel',
                E: 'immersiveengineering:component_electronic',
                C: '#ae2:glass_cable',
                F: 'ae2:fluix_block'
            },
            id: 'ae2:network/blocks/crystal_processing_quartz_growth_accelerator'
        },
        {
            output: 'ae2:crafting_terminal',
            pattern: [' CG', ' PT', ' CG'],
            key: {
                C: 'immersiveengineering:craftingtable',
                G: 'ae2:quartz_glass',
                P: 'ae2:calculation_processor',
                T: 'ae2:terminal'
            },
            id: 'ae2:network/parts/terminals_crafting'
        },
        {
            output: 'ae2:terminal',
            pattern: [' CG', ' PT', ' DG'],
            key: {
                C: 'ae2:annihilation_core',
                G: 'ae2:quartz_glass',
                P: 'ae2:logic_processor',
                T: 'ae2:semi_dark_monitor',
                D: 'ae2:formation_core'
            },
            id: 'ae2:network/parts/terminals'
        },
        {
            output: 'ae2:storage_bus',
            pattern: ['GIG', 'PTP'],
            key: {
                G: 'ae2:quartz_glass',
                I: '#ae2:interface',
                P: '#forge:plates/lead',
                T: 'create:electron_tube'
            },
            id: 'ae2:network/parts/storage_bus'
        },
        {
            output: 'ae2:interface',
            pattern: ['SGS', 'ALF', 'SGS'],
            key: {
                S: '#forge:ingots/steel',
                G: 'ae2:quartz_glass',
                A: 'ae2:annihilation_core',
                L: 'immersiveengineering:light_engineering',
                F: 'ae2:formation_core'
            },
            id: 'ae2:network/blocks/interfaces_interface'
        },
        {
            output: 'ae2:semi_dark_monitor',
            pattern: [' DG', 'BRG', ' DG'],
            key: {
                D: '#forge:dusts/glowstone',
                G: 'ae2:quartz_vibrant_glass',
                B: '#forge:ingots/brass',
                R: '#forge:dusts/redstone'
            },
            id: 'ae2:network/parts/panels_semi_dark_monitor'
        },
        {
            output: 'ae2:formation_core',
            pattern: ['QFP'],
            key: {
                Q: '#forge:gems/certus_quartz',
                F: '#forge:dusts/fluix',
                P: 'ae2:logic_processor'
            },
            id: 'ae2:materials/formationcore'
        },
        {
            output: 'ae2:annihilation_core',
            pattern: ['QFP'],
            key: {
                Q: '#forge:gems/quartz',
                F: '#forge:dusts/fluix',
                P: 'ae2:logic_processor'
            },
            id: 'ae2:materials/annihilationcore'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
