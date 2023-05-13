onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/enriching/';
    const recipes = [

      {
        input: 'botania:mana_diamond',
        output: 'mekanism:enriched_diamond',
        id: 'mekanism:enriching/enriched/diamond'
      },

    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
