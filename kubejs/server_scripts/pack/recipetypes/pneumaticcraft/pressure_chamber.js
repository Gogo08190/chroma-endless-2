onEvent('recipes', (event) => {
    /*
          input : [{item : ''}] ou [{tag: ''}],
          results : [{item : ''}] ou [{tag: ''}],
          pressure : nb,
          id : `${id_prefix}id`

          Pour plusieurs fois le même item :
          input : [
            {
            type : 'pneumaticcraft:stacked_item',
            item : '',
            count : nb
            }
          ]
    */

    const id_prefix = 'chroma:pack/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            inputs: [
                { item: 'powah:steel_energized', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            inputs: [
                { item: 'powah:energized_steel_block', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:compressed_iron_block', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:plastic', count: 1 },
                { item: 'mekanism:alloy_infused', count: 1 },
                { item: 'thermal:electrum_nugget', count: 3 },
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:transistor', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/transistor'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:plastic', count: 1 },
                { item: 'powah:capacitor_basic', count: 1 },
                { item: 'thermal:electrum_nugget', count: 3 },
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:capacitor', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/capacitor'
        },
        {
            inputs: [
                { item: 'extendedcrafting:basic_component', count: 4 },
                { item: 'powah:capacitor_basic_large', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'extendedcrafting:basic_catalyst', count: 1 }],
            id: 'extendedcrafting:basic_catalyst'
        },
        {
            inputs: [
                { item: 'extendedcrafting:advanced_component', count: 4 },
                { item: 'powah:capacitor_hardened', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'extendedcrafting:advanced_catalyst', count: 1 }],
            id: 'extendedcrafting:advanced_catalyst'
        },
        {
            inputs: [
                { item: 'extendedcrafting:redstone_component', count: 4 },
                { item: 'pneumaticcraft:capacitor', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'extendedcrafting:redstone_catalyst', count: 1 }],
            id: 'extendedcrafting:redstone_catalyst'
        },
        {
            inputs: [
                { item: 'ae2:cell_component_4k', count: 3 },
                { item: 'ae2:calculation_processor', count: 1 },
                { item: 'pneumaticcraft:transistor', count: 2 }
            ],
            pressure: 3.0,
            results: [{ item: 'ae2:cell_component_16k', count: 1 }],
            id: 'ae2:network/cells/item_storage_components_cell_16k_part'
        },
        {
            inputs: [
                { item: 'ae2:spatial_cell_component_2', count: 4 },
                { item: 'ae2:engineering_processor', count: 1 },
                { item: 'powah:capacitor_blazing', count: 4 }
            ],
            pressure: 3.0,
            results: [{ item: 'ae2:spatial_cell_component_16', count: 1 }],
            id: 'ae2:network/cells/spatial_components_0'
        },
        {
            inputs: [
                { item: 'chemlib:phosphoric_acid', count: 2 },
                { item: 'chemlib:nitric_acid', count: 2 },
                { item: 'chemlib:acetic_acid', count: 2 },
                { item: 'pneumaticcraft:plastic_bucket', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:etching_acid_bucket', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/etching_acid'
        },
        {
            inputs: [
                { item: 'mekanism:ingot_refined_obsidian', count: 4 },
                { item: 'mekanism:alloy_atomic', count: 2 },
                { item: 'mekanism:ultimate_control_circuit', count: 2 },
                { item: 'mekanism:teleportation_core', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'mekanism:quantum_entangloporter', count: 1 }],
            id: 'mekanism:quantum_entangloporter'
        },
        {
            inputs: [
                { item: 'thermal:redstone_servo', count: 1 },
                { item: 'chroma:resin_plate', count: 1 },
                { item: 'thermal:electrum_nugget', count: 3 }
            ],
            pressure: 1.5,
            results: [{ item: 'pneumaticcraft:empty_pcb', count: 3 }],
            id: 'pneumaticcraft:pressure_chamber/empty_pcb'
        },
        {
            inputs: [
                { item: 'extendedcrafting:elite_component', count: 4 },
                { item: 'powah:capacitor_blazing', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'extendedcrafting:elite_catalyst', count: 1 }],
            id: 'extendedcrafting:elite_catalyst'
        },
        {
            inputs: [
                { item: 'chroma:supra_component', count: 4 },
                { item: 'powah:capacitor_niotic', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'chroma:supra_catalyst', count: 1 }],
            id: `${id_prefix}supra_catalyst`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:speed_upgrade', count: 2 },
                { item: 'ironjetpacks:basic_coil', count: 1 },
                { item: 'pneumaticcraft:ingot_iron_compressed', count: 2 }
            ],
            pressure: 3.0,
            results: [Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:compressed_gas"}')],
            id: `${id_prefix}compressed_cell`
        },
        {
            inputs: [
                { item: 'extendedcrafting:ultimate_component', count: 4 },
                { item: 'draconicevolution:wyvern_core', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'extendedcrafting:ultimate_catalyst', count: 1 }],
            id: 'extendedcrafting:ultimate_catalyst'
        },
        {
            inputs: [
                { item: 'extendedcrafting:crystaltine_component', count: 4 },
                { item: 'mekanism:pellet_polonium', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'extendedcrafting:crystaltine_catalyst', count: 1 }],
            id: 'extendedcrafting:crystaltine_catalyst'
        },
        {
            inputs: [
                { item: 'extendedcrafting:enhanced_ender_component', count: 4 },
                { item: 'powah:ender_core', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'extendedcrafting:enhanced_ender_catalyst', count: 1 }],
            id: 'extendedcrafting:enhanced_ender_catalyst'
        },
        {
            inputs: [
                { item: 'extendedcrafting:ender_component', count: 4 },
                { item: 'rftoolsbase:infused_enderpearl', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'extendedcrafting:ender_catalyst', count: 1 }],
            id: 'extendedcrafting:ender_catalyst'
        },
        {
            inputs: [
                { item: 'mysticalagriculture:dye_agglomeratio', count: 4 },
                { item: 'mysticalagriculture:inferium_essence', count: 4 },
                { item: 'chroma:inferium_seed_base', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'mysticalagriculture:dye_seeds', count: 1 }],
            id: 'mysticalagriculture:seed/infusion/dye'
        },
        {
            inputs: [
                { item: 'mysticalagriculture:coral_agglomeratio', count: 4 },
                { item: 'mysticalagriculture:inferium_essence', count: 4 },
                { item: 'chroma:inferium_seed_base', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'mysticalagriculture:coral_seeds', count: 1 }],
            id: 'mysticalagriculture:seed/infusion/coral'
        },
        {
            inputs: [
                { item: 'mysticalagriculture:nature_agglomeratio', count: 4 },
                { item: 'mysticalagriculture:prudentium_essence', count: 4 },
                { item: 'chroma:prudentium_seed_base', count: 1 }
            ],
            pressure: 2.5,
            results: [{ item: 'mysticalagriculture:nature_seeds', count: 1 }],
            id: 'mysticalagriculture:seed/infusion/nature'
        },
        {
            inputs: [
                { item: 'mysticalagriculture:nether_agglomeratio', count: 4 },
                { item: 'mysticalagriculture:prudentium_essence', count: 4 },
                { item: 'chroma:prudentium_seed_base', count: 1 }
            ],
            pressure: 2.5,
            results: [{ item: 'mysticalagriculture:nether_seeds', count: 1 }],
            id: 'mysticalagriculture:seed/infusion/nether'
        },
        {
            inputs: [
                { item: 'mysticalagriculture:end_agglomeratio', count: 4 },
                { item: 'mysticalagriculture:prudentium_essence', count: 4 },
                { item: 'chroma:prudentium_seed_base', count: 1 }
            ],
            pressure: 2.5,
            results: [{ item: 'mysticalagriculture:end_seeds', count: 1 }],
            id: 'mysticalagriculture:seed/infusion/end'
        },
        {
            inputs: [
                { item: 'mysticalagradditions:creative_essence', count: 12 },
                { item: 'extendedcrafting:the_ultimate_catalyst', count: 4 },
                { item: 'pneumaticcraft:flux_compressor', count: 8 },
                { item: 'pneumaticcraft:electrostatic_compressor', count: 8 },
                { item: 'pneumaticcraft:advanced_liquid_compressor', count: 8 },
                { item: 'extendedcrafting:crystaltine_block', count: 12 },
                { item: 'mekanism:pellet_antimatter', count: 2 },
                { item: 'pneumaticcraft:advanced_pressure_tube', count: 32 },
                { item: 'extendedcrafting:ultimate_singularity', count: 1 }
            ],
            pressure: 3.5,
            results: [{ item: 'pneumaticcraft:creative_compressor', count: 1 }],
            id: `${id_prefix}creative_compressor`
        },
        {
            inputs: [
                { item: 'mekanism:ultimate_tier_installer', count: 1 },
                { item: 'mysticalagradditions:creative_essence', count: 1 },
                { item: 'extendedcrafting:enhanced_ender_catalyst', count: 3 },
                { item: 'extendedcrafting:luminessence', count: 4 },
                { item: 'mekanism:pellet_antimatter', count: 2 }
            ],
            pressure: 4.5,
            results: [{ item: 'chroma:shard_of_the_greater_good', count: 1 }],
            id: `${id_prefix}shard_of_the_greater_good`
        },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
