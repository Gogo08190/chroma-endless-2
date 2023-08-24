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
      {
          inputs: [
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:draconium_block' },
            { item: 'mekanism:pellet_polonium' },
            { item: 'mekanism:pellet_polonium' },
            { item: 'mekanism:pellet_polonium' },
            { item: 'mekanism:pellet_polonium' }
          ],
          tier: "DRACONIUM",
          catalyst: { item: 'draconicevolution:basic_crafting_injector' },
          total_energy: 32000,
          result: { item: 'draconicevolution:wyvern_crafting_injector' },
          id: 'draconicevolution:wyvern_crafting_injector'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'forbidden_arcanus:draco_arcanus_chestplate' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_chestpiece' },
          id: 'draconicevolution:tools/wyvern_chestpiece'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_bow' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_bow' },
          id: 'draconicevolution:tools/wyvern_bow'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_bow' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_bow' },
          id: 'draconicevolution:tools/wyvern_bow'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_sword' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_sword' },
          id: 'draconicevolution:tools/wyvern_sword'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_pickaxe' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_pickaxe' },
          id: 'draconicevolution:tools/wyvern_pickaxe'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_axe' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_axe' },
          id: 'draconicevolution:tools/wyvern_axe'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_shovel' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_shovel' },
          id: 'draconicevolution:tools/wyvern_shovel'
      },
      {
          inputs: [
            { item: 'alchemistry:reactor_casing' },
            { item: 'alchemistry:reactor_casing' },
            { item: 'alchemistry:reactor_casing' },
            { item: 'alchemistry:reactor_casing' },
            { item: 'chemlib:rhodium_ingot' },
            { item: 'chemlib:rhodium_ingot' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'chroma:thermospiritium' },
            { item: 'chroma:thermospiritium' },
            { item: 'chroma:thermospiritium' },
            { item: 'mekaevolution:cosmic_energy_cube' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'industrialforegoing:machine_frame_supreme' },
          total_energy: 100000000,
          result: { item: 'alchemistry:fusion_chamber_controller' },
          id: 'alchemistry:fusion_chamber_controller'
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
