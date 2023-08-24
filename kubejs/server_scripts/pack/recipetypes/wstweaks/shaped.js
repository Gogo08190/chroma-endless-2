onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/wstweaks/shaped/';
    const recipes = [
        {
            output: 'wstweaks:blaze_blade',
            pattern: [' BS', 'BSB', 'RB '],
            key: {
                B: 'powah:crystal_blazing',
                S: 'forbidden_arcanus:dark_nether_star',
                R: '#forge:rods/netherite'
            },
            id: 'wstweaks:blaze_blade'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
