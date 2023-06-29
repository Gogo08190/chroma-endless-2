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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
