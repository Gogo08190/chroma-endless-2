onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/sophisticatedstorage/shaped/';
    const recipes = [
        {
            output: 'sophisticatedstorage:upgrade_base',
            pattern: ['SPS', 'PSP', 'SPS'],
            key: {
                S: '#minecraft:planks',
                P: '#forge:plates/iron'
            },
            id: 'sophisticatedstorage:upgrade_base'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
