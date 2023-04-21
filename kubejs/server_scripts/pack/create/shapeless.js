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
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
