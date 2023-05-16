onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/infusion_conversion/';
    const recipes = [
      {
        input: { ingredient: { item: 'botania:mana_diamond' } },
        output: { amount: 10, infuse_type: 'mekanism:diamond' },
        id: 'mekanism:infusion_conversion/diamond/from_dust'
      },
      {
        input: { ingredient: { item: 'botania:mana_diamond_block' } },
        output: { amount: 90, infuse_type: 'mekanism:diamond' },
        id: `${id_prefix}mana_diamond_from_block`
      },
      {
        input: { ingredient: { item: 'mekanism:ingot_refined_glowstone' } },
        output: { amount: 10, infuse_type: 'chroma:refined_glowstone' },
        id: `${id_prefix}refined_glowstone_from_ingot`
      },
      {
        input: { ingredient: { item: 'mekanism:block_refined_glowstone' } },
        output: { amount: 90, infuse_type: 'chroma:refined_glowstone' },
        id: `${id_prefix}refined_glowstone_from_block`
      },
      {
        input: { ingredient: { item: 'chroma:enriched_refined_glowstone' } },
        output: { amount: 80, infuse_type: 'chroma:refined_glowstone' },
        id: `${id_prefix}refined_glowstone_from_enriched`
      },
      {
        input: { ingredient: { item: 'chroma:essence_of_darkness' } },
        output: { amount: 10, infuse_type: 'chroma:essence_of_darkness' },
        id: `${id_prefix}essence_of_darkness`
      },
      {
        input: { ingredient: { item: 'chroma:enriched_essence_of_darkness' } },
        output: { amount: 80, infuse_type: 'chroma:essence_of_darkness' },
        id: `${id_prefix}essence_of_darkness_from_enriched`
      },
    ]

    recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:infusion_conversion',
            input: recipe.input,
            output: recipe.output
        }).id(recipe.id);
    });
});
