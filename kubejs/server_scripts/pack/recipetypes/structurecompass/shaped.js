onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/structurecompass/shaped/';
    const recipes = [
        {
            output: 'structurecompass:structure_compass',
            pattern: ['CHC', 'ABD', 'CPC'],
            key: {
                C: 'minecraft:dead_fire_coral',
                H: 'minecraft:hay_block',
                A: 'minecraft:crimson_fungus',
                B: 'ae2:sky_compass',
                D: 'minecraft:warped_fungus',
                P: 'minecraft:carved_pumpkin'
            },
            id: 'structurecompass:structure_compass'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
