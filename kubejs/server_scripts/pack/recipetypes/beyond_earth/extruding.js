onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/beyond_earth/extruding/';
    const recipes = [
        {
            input: {
              tag: 'forge:ingots/manasteel'
            },
            cookTime: 50,
            output: {
                item: 'chroma:manasteel_rod',
                count: 2
            },
            id: `${id_prefix}manasteel_rod`
        },
        {
            input: {
              tag: 'forge:ingots/netherite'
            },
            cookTime: 50,
            output: {
                item: 'chroma:netherite_rod',
                count: 2
            },
            id: `${id_prefix}netherite_rod`
        },
        {
            input: {
              tag: 'forge:ingots/electrum'
            },
            cookTime: 50,
            output: {
                item: 'chroma:electrum_rod',
                count: 2
            },
            id: `${id_prefix}electrum_rod`
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'beyond_earth_giselle_addon:extruding';
        event.custom(recipe).id(recipe.id);
    });
});
