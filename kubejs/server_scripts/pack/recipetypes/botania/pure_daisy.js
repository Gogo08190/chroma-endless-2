onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/pure_daisy/';
    const recipes = [
      {
        input: 'blue_skies:lunar_stone',
        output: 'botania:livingrock',
        id: 'botania:pure_daisy/livingrock'
      },
      {
        input: 'blue_skies:maple_log',
        output: 'botania:livingwood_log',
        id: 'botania:pure_daisy/livingwood'
      },

    ];

    recipes.forEach((recipe) => {
        let ingredient =
            recipe.input.charAt(0) == '#'
                ? { type: 'tag', tag: recipe.input.slice(1) }
                : { type: 'block', block: recipe.input };

        const re = event.custom({
            type: 'botania:pure_daisy',
            input: ingredient,
            output: { name: recipe.output }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
