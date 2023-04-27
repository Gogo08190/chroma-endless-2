onEvent('recipes', (event) => {
    /*
        ,
        {
            output: '',
            inputs: [''],
            id: ''
        }
    */

    const recipes = [
        {
            output: 'createdeco:andesite_trapdoor',
            inputs: ['4x create:andesite_alloy'],
            id: 'createdeco:andesite_trapdoor'
        },
        {
            output: 'chroma:andesite_alloy_block',
            inputs: [
                '9x create:andesite_alloy'
            ],
            id: 'chroma:block_from_ingot/andesite_alloy'
        },
        {
            output: Item.of('create:andesite_alloy', 9),
            inputs: [
                'chroma:andesite_alloy_block'
            ],
            id: 'chroma:ingot_from_block/andesite_alloy'
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
