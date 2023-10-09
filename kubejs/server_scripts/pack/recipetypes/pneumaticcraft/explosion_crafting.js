onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/assembly/';

    /*{
        input: { item: ''},
        results: { item: '', count: nb },
        loss_rate: nb,
        id: ``
    }*/

    const recipes = [
      // compressed iron ingot
      {
        input: { item: 'powah:steel_energized' },
        results: [{ item: 'pneumaticcraft:ingot_iron_compressed' }],
        loss_rate: 10,
        id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'
      },
      {
        input: { item: 'powah:energized_steel_block' },
        results: [{ item: 'pneumaticcraft:compressed_iron_block' }],
        loss_rate: 10,
        id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'
      },
      {
        input: { item: 'mysticalagriculture:energized_steel_seeds' },
        results: [{ item: 'mysticalagriculture:compressed_iron_seeds' }],
        loss_rate: 20,
        id: 'mysticalagriculture:seed/infusion/compressed_iron'
      }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:explosion_crafting',
                loss_rate: recipe.loss_rate,
                input: recipe.input,
                results: recipe.results,
            })
            .id(recipe.id);
    });
});
