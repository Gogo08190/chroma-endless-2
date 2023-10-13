onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/shapeless/';

    const recipes = [
        {
            output: 'createdeco:andesite_trapdoor',
            inputs: ['4x create:andesite_alloy'],
            id: 'createdeco:andesite_trapdoor'
        },
        {
            output: 'chroma:brass_create_output',
            inputs: ['chroma:brass_create_input'],
            id: `${id_prefix}brass_create_output_from_input`
        },
        {
            output: 'chroma:brass_create_input',
            inputs: ['chroma:brass_create_output'],
            id: `${id_prefix}brass_create_input_from_output`
        },
        {
            output: 'chroma:create_item_output',
            inputs: ['chroma:create_item_input'],
            id: `${id_prefix}create_item_output_from_input`
        },
        {
            output: 'chroma:create_item_input',
            inputs: ['chroma:create_item_output'],
            id: `${id_prefix}create_item_input_from_output`
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
