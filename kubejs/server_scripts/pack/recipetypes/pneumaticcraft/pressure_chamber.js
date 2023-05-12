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
                { item: 'immersiveengineering:ingot_steel', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            inputs: [
                { item: 'immersiveengineering:storage_steel', count: 1 }
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
            pressure: 3.5,
            results: [{ item: 'extendedcrafting:redstone_catalyst', count: 1 }],
            id: 'extendedcrafting:redstone_catalyst'
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
