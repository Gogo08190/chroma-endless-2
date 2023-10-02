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
              { item: 'botania:life_essence' },
              { item: 'botania:life_essence' },
              { item: 'botania:life_essence' },
              { item: 'botania:life_essence' },
              { item: 'botania:terrasteel_ingot' }
          ],
          output: { item: 'botania:gaia_ingot' },
          mana: 25000,
          id: 'botania:gaia_ingot'
      },
      {
          inputs: [
              { item: 'rftoolsbase:infused_enderpearl' },
              { item: 'rftoolsbase:infused_enderpearl' },
              { item: 'rftoolsbase:infused_diamond' },
              { item: 'rftoolsbase:infused_diamond' },
              { item: 'mekanism:alloy_reinforced' },
              { item: 'mekanism:alloy_reinforced' },
              { item: 'rftoolsbase:machine_frame' }
          ],
          output: { item: 'rftoolsbase:machine_infuser' },
          mana: 25000,
          id: 'rftoolsbase:machine_infuser'
      },
      {
          inputs: [
              { item: 'mythicbotany:muspelheim_rune' },
              { item: 'mythicbotany:muspelheim_rune' },
              { item: 'mythicbotany:muspelheim_rune' },
              { item: 'mythicbotany:muspelheim_rune' },
              { item: 'megacells:cell_component_4m' },
              { item: 'megacells:cell_component_4m' },
              { item: 'megacells:cell_component_4m' },
              { item: 'lazierae2:parallel_processor' }
          ],
          output: { item: 'megacells:cell_component_16m' },
          mana: 2500,
          id: 'megacells:cell_component_16m'
      },
      {
          inputs: [
              { item: 'botania:life_essence' },
              { item: 'mob_grinding_utils:nutritious_chicken_feed' },
              { item: 'mna:animus_dust' },
              { item: 'mna:animus_dust' },
              { item: 'mna:animus_dust' },
              { item: 'mna:animus_dust' }
          ],
          output: { item: 'mob_grinding_utils:gm_chicken_feed_cursed' },
          mana: 5000,
          id: 'mob_grinding_utils:recipe_cursed_feed'
      },
      {
          inputs: [
              { item: 'chroma:prudentium_seed_base' },
              { item: 'chroma:mixed_tier_2_essence' },
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_essence' }
          ],
          output: { item: 'chroma:tertium_seed_base' },
          mana: 5000,
          id: `${id_prefix}tertium_seed_base`
      },
      {
          inputs: [
              { item: 'angelring:itemdiamondring' },
              { item: 'botania:elementium_ingot' },
              { item: 'botania:elementium_ingot' },
              { item: 'botania:gaia_ingot' },
              { item: 'botania:gaia_ingot' },
              { item: 'botania:gaia_ingot' },
              { item: 'botania:gaia_ingot' },
              { item: 'botania:ender_air_bottle' },
              { item: 'botania:ender_air_bottle' }
          ],
          output: Item.of('botania:flight_tiara', '{variant:0}'),
          mana: 50000,
          id: 'botania:flighttiara_0'
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
