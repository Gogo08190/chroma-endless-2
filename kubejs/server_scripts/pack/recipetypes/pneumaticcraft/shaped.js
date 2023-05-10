onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/shaped/';
    const recipes = [
        {
            output: 'pneumaticcraft:pressure_chamber_interface',
            pattern: [' W ', 'WIW', ' W '],
            key: {
                W: 'pneumaticcraft:pressure_chamber_wall',
                I: 'create:portable_storage_interface'
            },
            id: 'pneumaticcraft:pressure_chamber_interface'
        },
        {
            output: 'pneumaticcraft:heat_frame',
            pattern: ['CCC', 'RHR', 'CDC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                R: 'powah:dielectric_rod',
                H: 'pneumaticcraft:heat_sink',
                D: 'powah:dielectric_paste'
            },
            id: 'pneumaticcraft:heat_frame'
        },
        {
            output: 'pneumaticcraft:heat_sink',
            pattern: ['  ', 'BBB', 'CEC'],
            key: {
                B: 'minecraft:iron_bars',
                C: '#forge:ingots/compressed_iron',
                E: 'powah:steel_energized'
            },
            id: 'pneumaticcraft:heat_sink'
        },
        {
            output: 'pneumaticcraft:vortex_tube',
            pattern: ['CTC', 'ETE', 'CCC'],
            key: {
                T: 'pneumaticcraft:pressure_tube',
                C: '#forge:ingots/compressed_iron',
                E: 'powah:steel_energized'
            },
            id: 'pneumaticcraft:vortex_tube'
        },
        {
            output: 'pneumaticcraft:refinery',
            pattern: ['CHC', 'ISI', 'CTC'],
            key: {
                T: 'pneumaticcraft:pressure_tube',
                C: '#forge:ingots/compressed_iron',
                I: 'mekanism:alloy_infused',
                S: 'pneumaticcraft:small_tank',
                H: 'powah:capacitor_hardened'         
            },
            id: 'pneumaticcraft:refinery'
        },
        {
            output: 'pneumaticcraft:refinery_output',
            pattern: ['CDC', 'DSD', 'CMC'],
            key: {
                D: 'powah:dielectric_paste',
                C: '#forge:ingots/compressed_iron',
                M: 'botania:mana_diamond',
                S: 'pneumaticcraft:small_tank',
            },
            id: 'pneumaticcraft:refinery_output'
        },
        {
            output: 'pneumaticcraft:thermopneumatic_processing_plant',
            pattern: ['CHC', 'SPS', 'CTC'],
            key: {
                T: 'pneumaticcraft:pressure_tube',
                C: '#forge:ingots/compressed_iron',
                P: 'powah:thermoelectric_plate',
                S: 'pneumaticcraft:small_tank',
                H: 'powah:capacitor_hardened' 
            },
            id: 'pneumaticcraft:thermopneumatic_processing_plant'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
