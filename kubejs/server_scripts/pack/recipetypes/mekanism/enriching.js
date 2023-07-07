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
      {
        input: 'chroma:lunaris_nova',
        output: 'chroma:enriched_lunaris_nova',
        id: `${id_prefix}enriched_lunaris_nova`
      },
      {
        input: '#forge:ingots/compressed_iron',
        output: 'chroma:enriched_compressed_steel',
        id: `${id_prefix}enriched_compressed_steel`
      },
      {
        input: 'powah:crystal_niotic',
        output: 'chroma:enriched_niotic',
        id: `${id_prefix}enriched_niotic`
      },
      {
        input: 'chroma:marsova_ignis',
        output: 'chroma:enriched_marsova_ignis',
        id: `${id_prefix}enriched_marsova_ignis`
      },
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
