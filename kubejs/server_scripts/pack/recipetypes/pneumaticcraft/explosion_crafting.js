onEvent('recipes', (event) => {
    /*
          input : {item : ''} ou {tag: ''}
          results : {item: ''} ou {tag: ''}
          loss_rate : nb
          id : `${id_prefix}id`
    */

    const id_prefix = 'chroma:pack/pneumaticcraft/explosion_crafting/';
    const recipes = [
        //Compressed Iron Ingot
        {
            input : {tag: '#forge:ingots/steel'},
            results : {tag: '#forge:ingots/compressed_iron'},
            loss_rate : 20,
            id : `${id_prefix}compressed_iron_ingot`
        },
        //Compressed Iron Block
        {
            input : {tag: '#forge:storage_blocks/steel'},
            results : {tag: '#forge:storage_blocks/compressed_iron'},
            loss_rate : 20,
            id : `${id_prefix}compressed_iron_block`
        }
          
    ];

    recipes.forEach((recipe) => {
        event.custom({
                type: "pneumaticcraft:explosion_crafting",
                input: recipe.input,
                results:recipe.results,
                loss_rate: recipe.loss_rate
        })
    });
});
