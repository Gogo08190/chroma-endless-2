onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/beyond_earth/rolling/';
    const recipes = [
        {
            input: {
              tag: 'forge:gems/mana_diamond'
            },
            cookTime: 200,
            output: {
                item: 'chroma:mana_diamond_plate',
                count: 1
            },
            id: `${id_prefix}mana_diamond_plate`
        },
        {
            input: {
              item: 'chroma:raw_resin'
            },
            cookTime: 200,
            output: {
                item: 'chroma:resin_plate',
                count: 1
            },
            id: `${id_prefix}resin_plate`
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'beyond_earth_giselle_addon:rolling';
        event.custom(recipe).id(recipe.id);
    });
});
