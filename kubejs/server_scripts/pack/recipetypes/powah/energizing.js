onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/powah/energizing/';
    const recipes = [
        {
            ingredients: [
                { item: 'immersiveengineering:ingot_steel' },
                { item: 'thermal:electrum_ingot' }
            ],
            energy: 10000,
            result: {
                item: 'powah:steel_energized',
                count: 1
            },
            id: 'powah:energizing/energized_steel'
        },
        {
            ingredients: [
                { item: 'minecraft:ender_eye' },
                { item: 'powah:dielectric_casing' },
                { item: 'powah:capacitor_basic_large' }
            ],
            energy: 50000,
            result: {
                item: 'powah:ender_core',
                count: 1
            },
            id: 'powah:energizing/ender_core'
        },
        {
            ingredients: [
                { item: 'immersiveengineering:plate_steel' },
                { item: 'immersiveengineering:plate_steel' },
                { item: 'powah:dielectric_rod' },
                { item: 'powah:dielectric_rod' },
                { item: 'powah:dielectric_rod_horizontal' },
                { item: 'powah:dielectric_rod_horizontal' }
            ],
            energy: 10000,
            result: {
                item: 'powah:dielectric_casing',
                count: 1
            },
            id: 'powah:crafting/dielectric_casing_2'
        },
        {
            ingredients: [
                { item: 'spirit:soul_steel_ingot' },
                { item: 'minecraft:ender_pearl' }
            ],
            energy: 5000,
            result: {
                item: 'extendedcrafting:ender_ingot',
                count: 1
            },
            id: 'extendedcrafting:ender_ingot'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:black_iron_slate' },
                { item: 'extendedcrafting:luminessence' },
                { item: 'pneumaticcraft:ingot_iron_compressed' },
                { item: 'pneumaticcraft:ingot_iron_compressed' }
            ],
            energy: 10000,
            result: {
                item: 'extendedcrafting:basic_component',
                count: 1
            },
            id: 'extendedcrafting:basic_component'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:black_iron_slate' },
                { item: 'extendedcrafting:luminessence' },
                { item: 'powah:steel_energized' },
                { item: 'powah:steel_energized' }
            ],
            energy: 20000,
            result: {
                item: 'extendedcrafting:advanced_component',
                count: 1
            },
            id: 'extendedcrafting:advanced_component'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:black_iron_slate' },
                { item: 'extendedcrafting:luminessence' },
                { item: 'extendedcrafting:redstone_ingot' },
                { item: 'extendedcrafting:redstone_ingot' }
            ],
            energy: 25000,
            result: {
                item: 'extendedcrafting:redstone_component',
                count: 1
            },
            id: 'extendedcrafting:redstone_component'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:basic_catalyst' },
                { item: 'extendedcrafting:basic_catalyst' },
                { item: 'extendedcrafting:basic_catalyst' },
                { item: 'extendedcrafting:basic_catalyst' },
                { item: 'pneumaticcraft:compressed_iron_block' },
                { item: 'immersiveengineering:craftingtable' }
            ],
            energy: 25000,
            result: {
                item: 'extendedcrafting:basic_table',
                count: 1
            },
            id: 'extendedcrafting:basic_table'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:advanced_catalyst' },
                { item: 'extendedcrafting:advanced_catalyst' },
                { item: 'extendedcrafting:advanced_catalyst' },
                { item: 'extendedcrafting:basic_table' },
                { item: 'extendedcrafting:basic_table' },
                { item: 'powah:energized_steel_block' }
            ],
            energy: 25000,
            result: {
                item: 'extendedcrafting:advanced_table',
                count: 1
            },
            id: 'extendedcrafting:advanced_table'
        },
        {
            ingredients: [
                { item: 'ae2:cell_component_1k' },
                { item: 'ae2:cell_component_1k' },
                { item: 'ae2:cell_component_1k' },
                { item: 'ae2:calculation_processor' },
                { item: 'powah:capacitor_basic_large' },
                { item: 'powah:capacitor_basic_large' }
            ],
            energy: 30000,
            result: {
                item: 'ae2:cell_component_4k',
                count: 1
            },
            id: 'ae2:network/cells/item_storage_components_cell_4k_part'
        },
        {
            ingredients: [
                { item: 'powah:dielectric_rod' },
                { item: 'powah:dielectric_rod' },
                { item: 'pneumaticcraft:reinforced_bricks' },
                { item: 'pneumaticcraft:reinforced_bricks' },
                { item: 'powah:dielectric_rod_horizontal' },
                { item: 'powah:dielectric_rod_horizontal' }
            ],
            energy: 2500,
            result: {
                item: 'pneumaticcraft:pressure_chamber_wall',
                count: 2
            },
            id: 'pneumaticcraft:pressure_chamber_wall'
        },
        {
            ingredients: [
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'rftoolspower:power_core1' },
                { item: 'powah:capacitor_hardened' }
            ],
            energy: 200000,
            result: {
                item: 'rftoolspower:power_core2',
                count: 1
            },
            id: 'rftoolspower:power_core2'
        },
        {
            ingredients: [
                { item: 'pneumaticcraft:printed_circuit_board' },
                { item: 'pneumaticcraft:plastic' },
                { item: 'pneumaticcraft:plastic' },
                { item: 'pneumaticcraft:plastic' },
                { item: 'mekanism:alloy_infused' },
                { item: 'mekanism:alloy_infused' }
            ],
            energy: 25000,
            result: {
                item: 'pneumaticcraft:module_expansion_card',
                count: 2
            },
            id: 'pneumaticcraft:module_expansion_card'
        },
        {
            ingredients: [
                { item: 'undergarden:regalium_crystal' }
            ],
            energy: 90000,
            result: {
                item: 'powah:crystal_blazing',
                count: 1
            },
            id: 'powah:energizing/blazing_crystal'
        },
        {
            ingredients: [
                { item: 'undergarden:forgotten_ingot' }
            ],
            energy: 300000,
            result: {
                item: 'powah:crystal_niotic',
                count: 1
            },
            id: 'powah:energizing/niotic_crystal'
        },
        {
            ingredients: [
                { tag: 'ae2:illuminated_panel' },
                { tag: 'ae2:pattern_provider' },
                { item: 'ae2:engineering_processor' }
            ],
            energy: 70000,
            result: {
                item: 'ae2:pattern_access_terminal',
                count: 1
            },
            id: 'ae2:network/parts/terminals_pattern_access'
        },
        {
            ingredients: [
                { item: 'ae2:blank_pattern' },
                { item: 'ae2:crafting_terminal' },
                { item: 'ae2:engineering_processor' }
            ],
            energy: 70000,
            result: {
                item: 'ae2:pattern_encoding_terminal',
                count: 1
            },
            id: 'ae2:network/parts/terminals_pattern_encoding'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:luminessence' },
                { item: 'extendedcrafting:black_iron_slate' },
                { item: 'undergarden:forgotten_ingot' },
                { item: 'undergarden:forgotten_ingot' }
            ],
            energy: 30000,
            result: {
                item: 'extendedcrafting:elite_component',
                count: 1
            },
            id: 'extendedcrafting:elite_component'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:luminessence' },
                { item: 'extendedcrafting:black_iron_slate' },
                { item: 'undergarden:utherium_crystal' },
                { item: 'undergarden:utherium_crystal' }
            ],
            energy: 40000,
            result: {
                item: 'chroma:supra_component',
                count: 1
            },
            id: `${id_prefix}supra_component`
        },
        {
            ingredients: [
                { item: 'biggerreactors:graphite_block' },
                { item: 'biggerreactors:graphite_block' },
                { item: 'biggerreactors:uranium_block' },
                { item: 'biggerreactors:uranium_block' },
                { item: 'powah:energized_steel_block' },
                { item: 'extendedcrafting:redstone_ingot_block' }
            ],
            energy: 10000,
            result: {
                item: 'biggerreactors:reactor_casing',
                count: 8
            },
            id: 'biggerreactors:crafting/reactor/reactor_casing'
        },
        {
            ingredients: [
                { item: 'chemlib:praseodymium_ingot' }
            ],
            energy: 1000000,
            result: {
                item: 'powah:crystal_spirited',
                count: 2
            },
            id: 'powah:energizing/spirited_crystal'
        },
        {
            ingredients: [
                { item: 'biggerreactors:cyanite_block' },
                { item: 'biggerreactors:graphite_block' },
                { item: 'chemlib:rhodium' },
                { item: 'chemlib:rhodium' },
                { item: 'chemlib:rhodium' },
                { item: 'chemlib:rhodium' }
            ],
            energy: 10000,
            result: {
                item: 'biggerreactors:turbine_casing',
                count: 4
            },
            id: 'biggerreactors:crafting/turbine/turbine_casing'
        },
        {
            ingredients: [
                { item: 'powah:crystal_niotic' },
                { item: 'powah:crystal_niotic' },
                { item: 'ironjetpacks:advanced_coil' },
                { item: 'powah:charged_snowball' },
                { item: 'powah:charged_snowball' }
            ],
            energy: 8000,
            result: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:niotic"}'),
            id: `${id_prefix}niotic_cell`
        },
        {
            ingredients: [
                Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:compressed_gas"}').weakNBT().toJson(),
                Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:niotic"}').weakNBT().toJson(),
                Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:niotic"}').weakNBT().toJson(),
                Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:niotic"}').weakNBT().toJson(),
                { item: 'ironjetpacks:elite_coil' },
                { item: 'ironjetpacks:elite_coil' }
            ],
            energy: 16000,
            result: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:niotic",Throttle:1.0d}'),
            id: `${id_prefix}niotic_jetpack`
        },
        {
            ingredients: [
                { item: 'mekanism:pellet_plutonium' },
                { item: 'chemlib:lutetium_metal_block' },
                { item: 'fluxnetworks:flux_block' },
                { item: 'fluxnetworks:flux_block' }
            ],
            energy: 20000000,
            result: {
                item: 'powah:crystal_nitro',
                count: 16
            },
            id: 'powah:energizing/nitro_crystal'
        },
        {
            ingredients: [
                { item: 'powah:crystal_spirited' },
                { item: 'beyond_earth:calorite_ingot' },
                { item: 'undergarden:froststeel_ingot' }
            ],
            energy: 100000,
            result: {
                item: 'chroma:thermospiritium',
                count: 1
            },
            id: `${id_prefix}thermospiritium`
        },
        {
            ingredients: [
                { item: 'chroma:crystaltine_clump' },
                { item: 'chroma:crystaltine_clump' },
                { item: 'chroma:crystaltine_clump' },
                { item: 'chroma:crystaltine_clump' },
                { item: 'chemlib:actinium_ingot' },
                { item: 'extendedcrafting:ender_star' }
            ],
            energy: 6000000,
            result: {
                item: 'extendedcrafting:crystaltine_ingot',
                count: 1
            },
            id: 'extendedcrafting:crystaltine_ingot'
        },
        {
            ingredients: [
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:imperium_essence' }
            ],
            energy: 5000,
            result: {
                item: 'mysticalagriculture:supremium_essence',
                count: 1
            },
            id: 'mysticalagriculture:supremium_essence'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:black_iron_slate' },
                { item: 'extendedcrafting:luminessence' },
                { item: 'chemlib:cesium_ingot' },
                { item: 'chemlib:cesium_ingot' }
            ],
            energy: 60000,
            result: {
                item: 'extendedcrafting:ultimate_component',
                count: 1
            },
            id: 'extendedcrafting:ultimate_component'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:black_iron_slate' },
                { item: 'extendedcrafting:luminessence' },
                { item: 'extendedcrafting:crystaltine_ingot' },
                { item: 'extendedcrafting:crystaltine_ingot' }
            ],
            energy: 100000,
            result: {
                item: 'extendedcrafting:crystaltine_component',
                count: 1
            },
            id: 'extendedcrafting:crystaltine_component'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:black_iron_slate' },
                { item: 'extendedcrafting:luminessence' },
                { item: 'extendedcrafting:enhanced_ender_ingot' },
                { item: 'extendedcrafting:enhanced_ender_ingot' }
            ],
            energy: 25000,
            result: {
                item: 'extendedcrafting:enhanced_ender_component',
                count: 1
            },
            id: 'extendedcrafting:enhanced_ender_component'
        },
        {
            ingredients: [
                { item: 'functionalstorage:copper_upgrade' },
                { item: 'thermal:gold_gear' },
                { item: 'thermal:gold_plate' },
                { item: 'thermal:gold_plate' },
                { item: 'thermal:gold_plate' },
                { item: 'thermal:gold_plate' }
            ],
            energy: 2000,
            result: {
                item: 'functionalstorage:gold_upgrade',
                count: 1
            },
            id: 'functionalstorage:gold_upgrade'
        },
        {
            ingredients: [
                { item: 'chroma:tertium_seed_base' },
                { item: 'chroma:mixed_tier_3_essence' },
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:imperium_essence' }
            ],
            energy: 5000,
            result: {
                item: 'chroma:imperium_seed_base',
                count: 1
            },
            id: `${id_prefix}imperium_seed_base`
        },
        {
            ingredients: [
                { item: 'extendedcrafting:black_iron_slate' },
                { item: 'extendedcrafting:luminessence' },
                { item: 'extendedcrafting:the_ultimate_ingot' },
                { item: 'extendedcrafting:the_ultimate_ingot' }
            ],
            energy: 30000000,
            result: {
                item: 'extendedcrafting:the_ultimate_component',
                count: 1
            },
            id: 'extendedcrafting:the_ultimate_component'
        },
        {
            ingredients: [
                { item: 'extendedcrafting:black_iron_slate' },
                { item: 'extendedcrafting:luminessence' },
                { item: 'extendedcrafting:ender_ingot' },
                { item: 'extendedcrafting:ender_ingot' }
            ],
            energy: 250000,
            result: {
                item: 'extendedcrafting:ender_component',
                count: 1
            },
            id: 'extendedcrafting:ender_component'
        },
        {
            ingredients: [
                { item: 'mysticalagriculture:inferium_gemstone' },
                { item: 'mysticalagriculture:inferium_gemstone' },
                { item: 'mysticalagriculture:inferium_block' },
                { item: 'mysticalagriculture:inferium_block' },
                { item: 'chroma:inferium_seed_base' }
            ],
            energy: 25000,
            result: {
                item: 'mysticalagriculture:inferium_seeds',
                count: 1
            },
            id: 'mysticalagriculture:inferium_seeds'
        },
        {
            ingredients: [
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:electrum_seeds' },
                { item: 'mysticalagriculture:steel_seeds' },
                { item: 'powah:energized_steel_block' }
            ],
            energy: 100000,
            result: {
                item: 'mysticalagriculture:energized_steel_seeds',
                count: 1
            },
            id: 'mysticalagriculture:seed/infusion/energized_steel'
        },
        {
            ingredients: [
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'mysticalagriculture:imperium_essence' },
                { item: 'chroma:imperium_seed_base' },
                { item: 'mysticalagriculture:energized_steel_seeds' },
                { item: 'powah:blazing_crystal_block' }
            ],
            energy: 900000,
            result: {
                item: 'mysticalagriculture:blazing_crystal_seeds',
                count: 1
            },
            id: 'mysticalagriculture:seed/infusion/blazing_crystal'
        },
        {
            ingredients: [
                { item: 'mysticalagriculture:supremium_essence' },
                { item: 'mysticalagriculture:supremium_essence' },
                { item: 'mysticalagriculture:supremium_essence' },
                { item: 'chroma:supremium_seed_base' },
                { item: 'chemlib:praseodymium_metal_block' },
                { item: 'powah:spirited_crystal_block' }
            ],
            energy: 10000000,
            result: {
                item: 'mysticalagriculture:spirited_crystal_seeds',
                count: 1
            },
            id: 'mysticalagriculture:seed/infusion/spirited_crystal'
        },
        {
            ingredients: [
                { item: 'mysticalagriculture:supremium_essence' },
                { item: 'mysticalagriculture:supremium_essence' },
                { item: 'mysticalagriculture:supremium_essence' },
                { item: 'chroma:supremium_seed_base' },
                { item: 'mysticalagriculture:forgotten_seeds' },
                { item: 'powah:niotic_crystal_block' }
            ],
            energy: 3000000,
            result: {
                item: 'mysticalagriculture:niotic_crystal_seeds',
                count: 1
            },
            id: 'mysticalagriculture:seed/infusion/niotic_crystal'
        },
        {
            ingredients: [
                { item: 'minecraft:lily_pad' },
                { item: 'mysticalagradditions:insanium_essence' },
                { item: 'mysticalagradditions:insanium_essence' },
                { item: 'reliquary:fertile_essence' },
                { item: 'reliquary:fertile_essence' },
                { item: 'reliquary:fertile_essence' }
            ],
            energy: 1000000000,
            result: {
                item: 'reliquary:fertile_lily_pad',
                count: 1
            },
            id: 'reliquary:fertile_lily_pad'
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
