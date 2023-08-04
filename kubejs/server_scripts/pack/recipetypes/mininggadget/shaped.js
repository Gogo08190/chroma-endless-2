onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mininggadget/shaped/';
    const recipes = [
        {
            output: 'mininggadgets:mininggadget',
            pattern: ['DSB', 'DAV', 'DCS'],
            key: {
                D: '#forge:gems/diamond',
                S: '#forge:ingots/steel',
                B: '#forge:ingots/brass',
                A: Item.of('immersiveengineering:capacitor_hv').ignoreNBT(),
                V: '#blue_skies:ingots/ventium',
                C: '#forge:circuits/basic'
            },
            id: 'mininggadgets:mininggadget'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
