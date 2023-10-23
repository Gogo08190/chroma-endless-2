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
            pattern: ['BBB', 'CEC'],
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
                S: 'ae2:sky_stone_tank',
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
                S: 'ae2:sky_stone_tank',
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
        {
            output: 'pneumaticcraft:fluid_mixer',
            pattern: ['CSC', 'SRS', 'CTC'],
            key: {
                T: 'pneumaticcraft:pressure_tube',
                C: '#forge:ingots/compressed_iron',
                R: 'pneumaticcraft:turbine_rotor',
                S: 'pneumaticcraft:small_tank',
            },
            id: 'pneumaticcraft:fluid_mixer'
        },
        {
            output: 'pneumaticcraft:air_compressor',
            pattern: ['CCC', 'CDT', 'BFB'],
            key: {
                T: 'pneumaticcraft:pressure_tube',
                C: '#forge:ingots/compressed_iron',
                D: 'powah:dielectric_casing',
                F: 'ironfurnaces:emerald_furnace',
                B: 'pneumaticcraft:reinforced_bricks'
            },
            id: 'pneumaticcraft:air_compressor'
        },
        {
            output: 'pneumaticcraft:liquid_compressor',
            pattern: ['CSC', 'TIT', 'DAD'],
            key: {
                T: 'pneumaticcraft:pressure_tube',
                C: '#forge:ingots/compressed_iron',
                D: 'powah:dielectric_rod',
                I: 'mekanism:alloy_infused',
                A: 'pneumaticcraft:air_compressor',
                S: 'pneumaticcraft:small_tank'
            },
            id: 'pneumaticcraft:liquid_compressor'
        },
        {
            output: 'pneumaticcraft:spawner_agitator',
            pattern: ['DDD', 'TIT', 'DDD'],
            key: {
                D: 'powah:dielectric_rod_horizontal',
                T: '#forge:rods/iron',
                I: 'minecraft:ghast_tear'
            },
            id: 'pneumaticcraft:spawner_agitator'
        },
        {
            output: 'pneumaticcraft:uv_light_box',
            pattern: ['RLR', 'CPT', 'CCC'],
            key: {
                P: 'pneumaticcraft:pcb_blueprint',
                C: '#forge:ingots/compressed_iron',
                T: 'pneumaticcraft:reinforced_pressure_tube',
                R: '#forge:glass/red',
                L: 'extendedcrafting:luminessence_block'
            },
            id: 'pneumaticcraft:uv_light_box'
        },
        {
            output: 'pneumaticcraft:assembly_controller',
            pattern: [' I ', 'TMT', 'CEC'],
            key: {
                M: 'pneumaticcraft:module_expansion_card',
                E: 'mekanism:elite_control_circuit',
                C: '#forge:ingots/compressed_iron',
                T: 'pneumaticcraft:reinforced_pressure_tube',
                I: 'rftoolsbase:information_screen'
            },
            id: 'pneumaticcraft:assembly_controller'
        },
        {
            output: 'pneumaticcraft:advanced_air_compressor',
            pattern: ['CCC', 'CPT', 'CAC'],
            key: {
                P: 'pneumaticcraft:printed_circuit_board',
                A: 'pneumaticcraft:air_compressor',
                T: 'pneumaticcraft:advanced_pressure_tube',
                C: '#forge:ingots/compressed_iron'
            },
            id: 'pneumaticcraft:advanced_air_compressor'
        },
        {
            output: 'pneumaticcraft:advanced_liquid_compressor',
            pattern: ['CCC', 'CPT', 'CLC'],
            key: {
                P: 'pneumaticcraft:printed_circuit_board',
                L: 'pneumaticcraft:liquid_compressor',
                T: 'pneumaticcraft:advanced_pressure_tube',
                C: '#forge:ingots/compressed_iron'
            },
            id: 'pneumaticcraft:advanced_liquid_compressor'
        },
        {
            output: 'pneumaticcraft:small_tank',
            pattern: ['ICI', 'CTC', 'ICI'],
            key: {
                I: 'minecraft:iron_bars',
                C: '#forge:ingots/compressed_iron',
                T: 'thermal:fluid_cell_frame'
            },
            id: 'pneumaticcraft:small_tank'
        },
        {
            output: 'pneumaticcraft:medium_tank',
            pattern: ['ITI', 'PAP', 'ICI'],
            key: {
                I: 'pneumaticcraft:plastic',
                C: '#industrialforegoing:machine_frame/pity',
                A: 'pneumaticcraft:pressure_tube',
                P: '#forge:plates/gold',
                T: 'pneumaticcraft:small_tank'
            },
            id: 'pneumaticcraft:medium_tank'
        },
        {
            output: 'pneumaticcraft:large_tank',
            pattern: ['ICI', 'PTP', 'ICI'],
            key: {
                I: 'pneumaticcraft:plastic',
                C: 'pneumaticcraft:advanced_pressure_tube',
                P: '#forge:ingots/scandium',
                T: 'pneumaticcraft:medium_tank'
            },
            id: 'pneumaticcraft:large_tank'
        },
        {
            output: 'pneumaticcraft:huge_tank',
            pattern: ['ICI', 'PTP', 'ICI'],
            key: {
                I: '#forge:ingots/desh',
                C: 'beyond_earth:ice_shard',
                P: 'pneumaticcraft:volume_upgrade',
                T: 'pneumaticcraft:large_tank'
            },
            id: 'pneumaticcraft:huge_tank'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
