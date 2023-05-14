onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/enriching/';
    const recipes = [
      {
        input: 'botania:mana_diamond',
        output: 'mekanism:enriched_diamond',
        id: 'mekanism:enriching/enriched/diamond'
      },
      {
        input: 'mekanism:ingot_refined_glowstone',
        output: 'chroma:enriched_refined_glowstone',
        id: `${id_prefix}enriched_refined_glowstone`
      },
      {
        input: 'chroma:essence_of_darkness',
        output: 'chroma:enriched_essence_of_darkness',
        id: `${id_prefix}enriched_essence_of_darkness`
      },

    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});