onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/angelring/shaped/';
    const recipes = [
        {
            output: 'angelring:itemring',
            pattern: ['FEF', 'ARA', 'NAN'],
            key: {
                F: 'forbidden_arcanus:golden_feather',
                E: 'create:experience_block',
                A: '#forge:storage_blocks/arcane_gold',
                R: 'angelring:itemdiamondring',
                N: 'forbidden_arcanus:dark_nether_star'
            },
            id: 'angelring:itemring'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
