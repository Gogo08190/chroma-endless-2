onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/filling/';
    const recipes = [
        {
            input: 'mysticalagriculture:prosperity_gemstone',
            fluid: Fluid.of('mysticalagradditions:molten_inferium', 144),
            output: 'mysticalagriculture:inferium_gemstone',
            id: 'mysticalagriculture:inferium_gemstone'
        },
        {
            input: 'mysticalagriculture:inferium_gemstone',
            fluid: Fluid.of('mysticalagradditions:molten_prudentium', 144),
            output: 'mysticalagriculture:prudentium_gemstone',
            id: 'mysticalagriculture:prudentium_gemstone'
        },
        {
            input: 'mysticalagriculture:prudentium_gemstone',
            fluid: Fluid.of('mysticalagradditions:molten_tertium', 144),
            output: 'mysticalagriculture:tertium_gemstone',
            id: 'mysticalagriculture:tertium_gemstone'
        },
        {
            input: 'mysticalagriculture:tertium_gemstone',
            fluid: Fluid.of('mysticalagradditions:molten_imperium', 144),
            output: 'mysticalagriculture:imperium_gemstone',
            id: 'mysticalagriculture:imperium_gemstone'
        },
        {
            input: 'mysticalagriculture:imperium_gemstone',
            fluid: Fluid.of('mysticalagradditions:molten_supremium', 144),
            output: 'mysticalagriculture:supremium_gemstone',
            id: 'mysticalagriculture:supremium_gemstone'
        },
        {
            input: 'mysticalagriculture:supremium_gemstone',
            fluid: Fluid.of('chroma:molten_insanium', 144),
            output: 'mysticalagradditions:insanium_gemstone',
            id: 'mysticalagradditions:insanium_gemstone'
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
