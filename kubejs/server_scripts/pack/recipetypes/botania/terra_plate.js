onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/terra_plate/';

    const recipes = [
      {
          inputs: [
              { item: 'extendedcrafting:basic_table' },
              { item: 'extendedcrafting:ender_ingot' },
              { item: 'extendedcrafting:ender_ingot' },
              { item: 'extendedcrafting:ender_ingot' },
              { item: 'extendedcrafting:ender_ingot' },
              { item: 'extendedcrafting:ender_ingot' },
              { item: 'mna:superheated_purified_vinteum_ingot' },
              { item: 'mna:superheated_purified_vinteum_ingot' },
              { item: 'mna:superheated_purified_vinteum_ingot' }
          ],
          output: { item: 'extendedcrafting:ender_crafter' },
          mana: 25000,
          id: 'extendedcrafting:ender_crafter'
      },
      {
        inputs: [
            { item: 'botania:glimmering_livingwood' },
            { item: 'botania:glimmering_livingwood' },
            { item: 'botania:glimmering_livingwood' },
            { item: 'botania:glimmering_livingwood' },
            { item: 'botania:mana_pylon' },
            { item: 'botania:terrasteel_ingot' }
        ],
        output: { item: 'botania:natura_pylon' },
        mana: 50000,
        id: 'botania:natura_pylon'
    },
    {
        inputs: [
            { item: 'botania:life_essence' },
            { item: 'botania:life_essence' },
            { item: 'botania:life_essence' },
            { item: 'chroma:gaia_spreader_core' },
            { item: 'botania:elven_spreader' }
        ],
        output: { item: 'botania:gaia_spreader' },
        mana: 25000,
        id: 'botania:gaia_spreader'
    },
    {
        inputs: [
            { item: 'botania:life_essence'},
            { item: 'botania:life_essence'},
            { item: 'botania:life_essence'},
            { item: 'botania:life_essence'},
            { item: 'botania:terrasteel_ingot' }
        ],
        output: { item: 'botania:gaia_ingot' },
        mana: 25000,
        id: 'botania:gaia_ingot'
    },
    {
        inputs: [
            { item: 'rftoolsbase:infused_enderpearl'},
            { item: 'rftoolsbase:infused_enderpearl'},
            { item: 'rftoolsbase:infused_diamond'},
            { item: 'rftoolsbase:infused_diamond'},
            { item: 'mekanism:alloy_reinforced' },
            { item: 'mekanism:alloy_reinforced' },
            { item: 'rftoolsbase:machine_frame' }
        ],
        output: { item: 'rftoolsbase:machine_infuser' },
        mana: 25000,
        id: 'rftoolsbase:machine_infuser'
    },

    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:terra_plate',
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            result: Item.of(recipe.output).toJson(),
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
