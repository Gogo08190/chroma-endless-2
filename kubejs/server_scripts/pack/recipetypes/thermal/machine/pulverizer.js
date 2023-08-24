onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/pulverizer/';
    const recipes = [
        {
            input: 'minecraft:obsidian',
            experience: 0,
            outputs: [Item.of('create:powdered_obsidian', 2)],
            id: `${id_prefix}powdered_obsidian`
        },
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience).id(recipe.id);
    });
});
