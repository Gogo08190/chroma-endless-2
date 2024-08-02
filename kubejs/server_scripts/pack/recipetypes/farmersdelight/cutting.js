onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/farmersdelight/cutting/';
    const recipes = [
        {
            ingredients: [
                { item: 'botania:cosmetic_four_leaf_clover' },
            ],
            tool: {
              tag: 'forge:tools/knives'
            },
            result: [
                { item: 'delightful:chopped_clover', count: 4 },
            ],
            id: `${id_prefix}chopped_clover`
        },
        {
            ingredients: [
                { item: 'farmersdelight:cooked_chicken_cuts' },
            ],
            tool: {
              tag: 'forge:tools/knives'
            },
            result: [
                { item: 'delightful:chunk_nugget', count: 1 },
            ],
            id: `${id_prefix}chunk_nugget`
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cutting';
        event.custom(recipe).id(recipe.id);
    });
});
