onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/combination/'
    const recipes = [
      {
          inputs: [
              { item: 'doom:argent_plate' },
              { item: 'chroma:absolute_alloy' },
              { item: 'doom:argent_plate' },
              { item: 'beyond_earth:compressed_desh' },
              { item: 'biggerreactors:ludicrite_block' },
              { item: 'beyond_earth:compressed_desh' },
              { item: 'doom:argent_plate' },
              { item: 'draconicevolution:dragon_heart' },
              { item: 'doom:argent_plate' },
              { item: 'beyond_earth:compressed_desh' },
              { item: 'biggerreactors:ludicrite_block' },
              { item: 'beyond_earth:compressed_desh' }
          ],
          catalyst: { item: 'evilcraft:piercing_vengeance_focus' },
          powerCost: 10000,
          powerRate: 1000,
          result: { item: 'chroma:gun_table_heart' },
          id: `${id_prefix}gun_table_heart`
      },
      {
          inputs: [
              { item: 'chroma:carbon_fiber' },
              { item: 'chroma:carbon_fiber' },
              { item: 'chroma:carbon_fiber' },
              { item: 'jaopca:beyond_earth_compresseds.utherium' },
              { item: 'mekanism:alloy_atomic' },
              { item: 'jaopca:beyond_earth_compresseds.utherium' },
              { item: 'beyond_earth:compressed_steel' },
              { item: 'pneumaticcraft:printed_circuit_board' },
              { item: 'beyond_earth:compressed_steel' },
              { item: 'jaopca:beyond_earth_compresseds.utherium' },
              { item: 'mekanism:alloy_atomic' },
              { item: 'jaopca:beyond_earth_compresseds.utherium' }
          ],
          catalyst: { item: 'extendedcrafting:advanced_table' },
          powerCost: 20000,
          powerRate: 1000,
          result: { item: 'beyond_earth:nasa_workbench' },
          id: 'beyond_earth:nasa_workbench'
      },
      {
          inputs: [
              { item: 'powah:capacitor_blazing' },
              { item: 'solarpanels:quantum_energy_tablet'},
              { item: 'powah:capacitor_blazing' },
              { item: 'graveyard:corruption' },
              { item: 'thermal:signalum_ingot' },
              { item: 'mekanism:elite_control_circuit' },
              { item: 'thermal:signalum_ingot' },
              { item: 'graveyard:corruption' },
              { item: 'ae2:matter_ball' },
              { item: 'powah:charged_snowball' },
              { item: 'ae2:matter_ball' },
              { item: 'graveyard:corruption' },
              { item: 'thermal:signalum_ingot' },
              { item: 'mekanism:elite_control_circuit' },
              { item: 'thermal:signalum_ingot' },
              { item: 'graveyard:corruption' }
          ],
          catalyst: { item: 'angelring:itemring' },
          powerCost: 1000000,
          powerRate: 1000,
          result: { item: 'angelring:energetic_angel_ring' },
          id: 'angelring:energetic_angel_ring'
      },
      {
          inputs: [
              { item: 'beyond_earth:compressed_calorite' },
              { item: 'beyond_earth:compressed_calorite' },
              { item: 'beyond_earth:compressed_calorite' },
              Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:calorite"}').weakNBT().toJson(),
              Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:calorite"}').weakNBT().toJson(),
              { item: 'beyond_earth:compressed_calorite' },
              { item: 'beyond_earth:compressed_calorite' },
              { item: 'beyond_earth:compressed_calorite' },
              { item: 'ironjetpacks:ultimate_coil' },
              { item: 'ironjetpacks:ultimate_coil' },
              Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:calorite"}').weakNBT().toJson()
          ],
          catalyst: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:niotic"}').weakNBT().toJson(),
          powerCost: 100000,
          powerRate: 1000,
          result: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:calorite",Throttle:1.0d}'),
          id: `${id_prefix}niotic_jetpack`
      },
      {
          inputs: [
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'powah:crystal_nitro' },
              { item: 'chroma:thermospiritium' },
              { item: 'minecraft:iron_block' },
              { item: 'minecraft:iron_block' },
              { item: 'minecraft:iron_block' },
              { item: 'minecraft:iron_block' },
              { item: 'minecraft:iron_block' },
              { item: 'chroma:thermospiritium' },
              { item: 'powah:crystal_nitro' }
          ],
          catalyst: { item: 'draconicevolution:draconium_core' },
          powerCost: 100000,
          powerRate: 1000,
          result: { item: 'draconicevolution:basic_crafting_injector' },
          id: 'draconicevolution:basic_crafting_injector'
      },
      {
          inputs: [
              { item: 'mysticalagriculture:inferium_essence' },
              { item: 'mysticalagriculture:inferium_block' },
              { item: 'mysticalagriculture:inferium_essence' },
              { item: 'mysticalagriculture:inferium_block' },
              { item: 'mysticalagriculture:inferium_essence' },
              { item: 'mysticalagriculture:inferium_block' },
              { item: 'mysticalagriculture:inferium_essence' },
              { item: 'mysticalagriculture:inferium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:prosperity_ingot' },
          powerCost: 10000,
          powerRate: 100,
          result: { item: 'mysticalagriculture:inferium_ingot' },
          id: `${id_prefix}inferium_ingot`
      },
      {
          inputs: [
              { item: 'mysticalagriculture:prudentium_essence' },
              { item: 'mysticalagriculture:prudentium_block' },
              { item: 'mysticalagriculture:prudentium_essence' },
              { item: 'mysticalagriculture:prudentium_block' },
              { item: 'mysticalagriculture:prudentium_essence' },
              { item: 'mysticalagriculture:prudentium_block' },
              { item: 'mysticalagriculture:prudentium_essence' },
              { item: 'mysticalagriculture:prudentium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:inferium_ingot' },
          powerCost: 10000,
          powerRate: 100,
          result: { item: 'mysticalagriculture:prudentium_ingot' },
          id: `${id_prefix}prudentium_ingot`
      },
      {
          inputs: [
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_block' },
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_block' },
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_block' },
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:prudentium_ingot' },
          powerCost: 10000,
          powerRate: 100,
          result: { item: 'mysticalagriculture:tertium_ingot' },
          id: `${id_prefix}tertium_ingot`
      },
      {
          inputs: [
              { item: 'mysticalagriculture:imperium_essence' },
              { item: 'mysticalagriculture:imperium_block' },
              { item: 'mysticalagriculture:imperium_essence' },
              { item: 'mysticalagriculture:imperium_block' },
              { item: 'mysticalagriculture:imperium_essence' },
              { item: 'mysticalagriculture:imperium_block' },
              { item: 'mysticalagriculture:imperium_essence' },
              { item: 'mysticalagriculture:imperium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:tertium_ingot' },
          powerCost: 10000,
          powerRate: 100,
          result: { item: 'mysticalagriculture:imperium_ingot' },
          id: `${id_prefix}imperium_ingot`
      },
      {
          inputs: [
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_block' },
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_block' },
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_block' },
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:imperium_ingot' },
          powerCost: 10000,
          powerRate: 100,
          result: { item: 'mysticalagriculture:supremium_ingot' },
          id: `${id_prefix}supremium_ingot`
      },
      {
          inputs: [
              { item: 'mysticalagradditions:insanium_essence' },
              { item: 'mysticalagradditions:insanium_block' },
              { item: 'mysticalagradditions:insanium_essence' },
              { item: 'mysticalagradditions:insanium_block' },
              { item: 'mysticalagradditions:insanium_essence' },
              { item: 'mysticalagradditions:insanium_block' },
              { item: 'mysticalagradditions:insanium_essence' },
              { item: 'mysticalagradditions:insanium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:supremium_ingot' },
          powerCost: 10000,
          powerRate: 100,
          result: { item: 'mysticalagradditions:insanium_ingot' },
          id: `${id_prefix}insanium_ingot`
      },
      {
          inputs: [
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:the_ultimate_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:the_ultimate_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:the_ultimate_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:the_ultimate_component' },
          ],
          catalyst: { item: 'draconicevolution:awakened_core' },
          powerCost: 10000000,
          powerRate: 100000,
          result: { item: 'extendedcrafting:the_ultimate_catalyst' },
          id: 'extendedcrafting:the_ultimate_catalyst'
      },
      {
          inputs: [
              Item.of('mysticalagriculture:experience_capsule', '{Experience:1200}'),
              { item: 'mysticalagriculture:imperium_essence' },
              Item.of('mysticalagriculture:experience_capsule', '{Experience:1200}'),
              { item: 'mysticalagriculture:imperium_essence' },
              Item.of('mysticalagriculture:experience_capsule', '{Experience:1200}'),
              { item: 'mysticalagriculture:imperium_essence' },
              Item.of('mysticalagriculture:experience_capsule', '{Experience:1200}'),
              { item: 'mysticalagriculture:imperium_essence' },
          ],
          catalyst: { item: 'chroma:imperium_seed_base' },
          powerCost: 100000,
          powerRate: 2000,
          result: { item: 'mysticalagriculture:experience_seeds' },
          id: 'mysticalagriculture:seed/infusion/experience'
      },
      {
          inputs: [
              { item: 'chroma:shard_of_knowledge' },
              { item: 'chroma:shard_of_the_greater_mana' },
              { item: 'chroma:shard_of_the_greater_good' },
              { item: 'chroma:shard_of_mankind' },
              { item: 'chroma:shard_of_nature' },
              { item: 'chroma:shard_of_imunity' },
              { item: 'chroma:shard_of_perserevity' },
              { item: 'chroma:shard_of_creativity' },
          ],
          catalyst: { item: 'forbidden_arcanus:eternal_stella' },
          powerCost: 100000000,
          powerRate: 1000000,
          result: { item: 'chroma:endless' },
          id: `${id_prefix}endless`
      },
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });
        event
            .custom({
                type: 'extendedcrafting:combination',
                powerCost: recipe.powerCost,
                powerRate: recipe.powerRate,
                input: recipe.catalyst,
                ingredients: ingredient,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
