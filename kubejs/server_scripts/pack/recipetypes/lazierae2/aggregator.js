onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lazierae2/aggregator/';
    const recipes = [
      {
        output: { item: 'chroma:isolated_compressed_desh' },
        inputs: [
          { tag: 'beyond_earth:compresseds/desh' },
          { item: 'powah:crystal_spirited' },
          { item: 'chroma:carbon_fiber' }
        ],
        process_time: 120,
        energy_cost: 1500,
        id: `${id_prefix}isolated_compressed_desh`
      },
      {
        output: { item: 'mysticalagriculture:froststeel_seeds' },
        inputs: [
          { item: 'jaopca:mekanism_shards.froststeel', count: 64 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: `${id_prefix}froststeel_seeds`
      },
      {
        output: { item: 'mysticalagriculture:signalum_seeds' },
        inputs: [
          { item: 'thermal:signalum_ingot', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/signalum'
      },
      {
        output: { item: 'mysticalagriculture:steel_seeds' },
        inputs: [
          { item: 'immersiveengineering:ingot_steel', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/steel'
      },
      {
        output: { item: 'mysticalagriculture:forgotten_seeds' },
        inputs: [
          { item: 'undergarden:forgotten_ingot', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: `${id_prefix}forgotten_seeds`
      },
      {
        output: { item: 'mysticalagriculture:cloggrum_seeds' },
        inputs: [
          { item: 'jaopca:mekanism_shards.cloggrum', count: 64 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: `${id_prefix}cloggrum_seeds`
      },
      {
        output: { item: 'mysticalagriculture:desh_seeds' },
        inputs: [
          { item: 'jaopca:mekanism_shards.desh', count: 64 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: `${id_prefix}desh_seeds`
      },
      {
        output: { item: 'mysticalagriculture:invar_seeds' },
        inputs: [
          { item: 'thermal:invar_ingot', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/invar'
      },
      {
        output: { item: 'mysticalagriculture:rose_gold_seeds' },
        inputs: [
          { item: 'tconstruct:rose_gold_ingot', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/rose_gold'
      },
      {
        output: { item: 'mysticalagriculture:constantan_seeds' },
        inputs: [
          { item: 'thermal:constantan_ingot', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/constantan'
      },
      {
        output: { item: 'mysticalagriculture:electrum_seeds' },
        inputs: [
          { item: 'thermal:electrum_ingot', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/electrum'
      },
      {
        output: { item: 'mysticalagriculture:fluix_seeds' },
        inputs: [
          { item: 'ae2:fluix_block', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/fluix'
      },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event.custom({
            type: 'lazierae2:aggregator',
            output: recipe.output,
            input: ingredients,
            process_time: recipe.process_time,
            energy_cost: recipe.energy_cost,
        }).id(recipe.id);
    });
});
