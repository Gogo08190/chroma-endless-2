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
        }

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
