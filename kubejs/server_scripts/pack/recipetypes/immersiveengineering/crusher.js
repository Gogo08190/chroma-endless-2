onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/immersiveengineering/crusher/';
    var data = {
        recipes: [
            {
                input: 'minecraft:charcoal',
                output: 'mekanism:dust_charcoal',
                secondary: [],
                id: `${id_prefix}dust_charcoal`
            },
            {
                input: 'evilcraft:dark_gem',
                output: 'evilcraft:dark_gem_crushed',
                secondary: [],
                id: `${id_prefix}dark_gem_crushed`
            },
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
