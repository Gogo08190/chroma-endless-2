onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/milling/';
    const recipes = [
        {
            input: 'evilcraft:dark_gem',
            outputs: ['evilcraft:dark_gem_crushed'],
            processingTime: 30,
            id: `${id_prefix}dark_gem_crushed`
        },
        {
            input: 'minecraft:charcoal',
            outputs: ['mekanism:dust_charcoal'],
            processingTime: 30,
            id: `${id_prefix}dust_charcoal`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.milling(recipe.outputs, recipe.input).processingTime(recipe.processingTime).id(recipe.id);
    });
});
