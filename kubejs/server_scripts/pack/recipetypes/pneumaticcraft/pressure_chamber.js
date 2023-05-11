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
        ///Transistor
        {
            inputs : [
                {
                    item : 'pneumaticcraft:plastic'
                },
                {
                    item : 'mekanism:alloy_infused'
                },
                {
                type : 'pneumaticcraft:stacked_item',
                tag : 'forge:nuggets/electrum',
                count : 2
                }
            ],
            results : [
                {
                    item : 'pneumaticcraft:transistor'
                }
            ],
            pressure : 1.0,
            id : `pneumaticcraft:pressure_chamber/transistor`
        },
        //Capacitor
        {
            inputs : [
                {
                    item : 'pneumaticcraft:plastic'
                },
                {
                    item : 'powah:capacitor_basic'
                },
                {
                type : 'pneumaticcraft:stacked_item',
                tag : 'forge:nuggets/electrum',
                count : 2
                }
            ],
            results : [
                {
                    item : 'pneumaticcraft:capacitor'
                }
            ],
            pressure : 1.0,
            id : `pneumaticcraft:pressure_chamber/capacitor`
        },

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

    ];

    recipes.forEach((recipe) => {
        event.custom({
                type: "pneumaticcraft:pressure_chamber",
                inputs: recipe.inputs,
                results:recipe.results,
                pressure: recipe.pressure,
                id : recipe.id
        })
    });
});
