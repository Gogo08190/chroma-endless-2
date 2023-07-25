onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mythicbotany/shaped/';
    const recipes = [
        {
            output: 'mythicbotany:central_rune_holder',
            pattern: [' E ', 'EGE'],
            key: {
                E: 'botanicalmachinery:mana_emerald',
                G: 'chroma:skin_of_gaia'
            },
            id: 'mythicbotany:central_rune_holder'
        },
        {
            output: 'mythicbotany:yggdrasil_branch',
            pattern: ['LLL' ,'AGA', 'LLL'],
            key: {
                A: '#forge:nuggets/alfsteel',
                L: 'botania:glimmering_livingwood',
                G: 'chroma:skin_of_gaia'
            },
            id: 'mythicbotany:yggdrasil_branch'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
