onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/draconicevolution/fusion/';

    const recipes = [
      {
          inputs: [
            { item: 'beyond_earth:ice_shard' },
            { item: 'beyond_earth:ice_shard' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'industrialforegoing:machine_frame_supreme' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'ironjetpacks:ultimate_coil' },
          total_energy: 25000,
          result: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:ethereal"}'),
          id: `${id_prefix}ethereal_cell`
      },
      {
          inputs: [
            { item: 'industrialforegoing:machine_frame_supreme' },
            { item: 'industrialforegoing:machine_frame_supreme' },
            { item: 'ironjetpacks:ultimate_coil' },
            { item: 'ironjetpacks:ultimate_coil' },
            Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:ethereal"}').weakNBT().toJson(),
            Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:ethereal"}').weakNBT().toJson(),
            Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:ethereal"}').weakNBT().toJson(),
          ],
          tier: "WYVERN",
          catalyst: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:calorite"}').weakNBT().toJson(),
          total_energy: 75000,
          result: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:ethereal"}'),
          id: `${id_prefix}ethereal_jetpack`
      },
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });

        event
            .custom({
                type: 'draconicevolution:fusion_crafting',
                tier: recipe.tier,
                catalyst: recipe.catalyst,
                total_energy: recipe.total_energy,
                ingredients: ingredient,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
