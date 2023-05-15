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
                { item: 'botania:life_essence' },
                { item: 'botania:life_essence' },
                { item: 'botania:life_essence' },
                { item: 'botania:life_essence' },
                { item: 'botania:terrasteel_ingot' }
            ],
            energy: 40000,
            result: {
                item: 'botania:gaia_ingot',
                count: 1
            },
            id: 'botania:gaia_ingot'
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
