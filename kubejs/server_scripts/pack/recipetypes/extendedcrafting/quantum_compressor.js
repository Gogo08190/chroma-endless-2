onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/quantum_compressor/';

    const recipes = [
      {
          powerCost: 500000,
          inputCount: 256,
          ingredient: { item: 'undergarden:utherium_crystal' },
          catalyst: { item: 'mekanism:teleportation_core' },
          result: { item: 'chroma:miner_core' },
          id: `${id_prefix}miner_core`
      },
      {
          powerCost: 500000,
          inputCount: 512,
          ingredient: { item: 'chemlib:carbon' },
          catalyst: { item: 'beyond_earth_giselle_addon:mold_compressing' },
          result: { item: 'chroma:carbon_fiber' },
          id: `${id_prefix}carbon_fiber`
      },
      {
          powerCost: 5000000,
          inputCount: 7500,
          ingredient: { item: 'minecraft:gold_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}'),
          id: 'chroma:gold_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 5000,
          ingredient: { item: 'thermal:enderium_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:enderium"}'),
          id: 'chroma:enderium_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 4000,
          ingredient: { item: 'industrialforegoing:plastic' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:plastic"}'),
          id: 'chroma:plastic_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7500,
          ingredient: { item: 'immersiveengineering:ingot_aluminum' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'),
          id: 'chroma:aluminum_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 4000,
          ingredient: { item: 'thermal:bronze_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bronze"}'),
          id: 'chroma:bronze_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 5000,
          ingredient: { item: 'mekanism:ingot_refined_obsidian' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:refined_obsidian"}'),
          id: 'chroma:refined_obsidian_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7500,
          ingredient: { item: 'thermal:silver_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'),
          id: 'chroma:silver_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 4000,
          ingredient: { item: 'thermal:invar_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:invar"}'),
          id: 'chroma:invar_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7000,
          ingredient: { item: 'minecraft:diamond' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'),
          id: 'chroma:diamond_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 4000,
          ingredient: { item: 'immersiveengineering:ingot_steel' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel"}'),
          id: 'chroma:steel_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 10000,
          ingredient: { item: 'minecraft:clay_ball' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:clay"}'),
          id: 'chroma:clay_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7500,
          ingredient: { item: 'minecraft:copper_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'),
          id: 'chroma:copper_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 6000,
          ingredient: { item: 'rftoolsbase:dimensionalshard' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:dimensional_shard"}'),
          id: 'chroma:dimensional_shard_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7500,
          ingredient: { item: 'thermal:nickel_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'),
          id: 'chroma:nickel_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 10000,
          ingredient: { item: 'minecraft:lapis_lazuli' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'),
          id: 'chroma:lapis_lazuli_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7500,
          ingredient: { item: 'thermal:tin_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}'),
          id: 'chroma:tin_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 5000,
          ingredient: { item: 'thermal:lumium_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lumium"}'),
          id: 'chroma:lumium_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 2000,
          ingredient: { item: 'industrialforegoing:pink_slime' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:pink_slime"}'),
          id: 'chroma:pink_slime_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 5000,
          ingredient: { item: 'thermal:electrum_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electrum"}'),
          id: 'chroma:electrum_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7500,
          ingredient: { item: 'thermal:lead_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'),
          id: 'chroma:lead_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7000,
          ingredient: { item: 'minecraft:emerald' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'),
          id: 'chroma:emerald_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 8000,
          ingredient: { item: 'minecraft:iron_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'),
          id: 'chroma:iron_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 9000,
          ingredient: { item: 'minecraft:coal' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'),
          id: 'chroma:coal_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 5000,
          ingredient: { item: 'tconstruct:cobalt_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:cobalt"}'),
          id: 'chroma:cobalt_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7500,
          ingredient: { item: 'biggerreactors:uranium_ingot' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:uranium"}'),
          id: 'chroma:uranium_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7500,
          ingredient: { item: 'mekanism:ingot_osmium' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:osmium"}'),
          id: 'chroma:osmium_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 10000,
          ingredient: { item: 'minecraft:redstone' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
          id: 'chroma:redstone_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 8000,
          ingredient: { item: 'minecraft:glowstone_dust' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'),
          id: 'chroma:glowstone_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 5000,
          ingredient: { item: 'draconicevolution:draconium_ingot' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:draconium"}'),
          id: 'chroma:draconium_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 5000,
          ingredient: { item: 'blue_skies:ventium_ingot' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:ventium"}'),
          id: 'chroma:ventium_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 6500,
          ingredient: { item: 'mekanism:hdpe_pellet' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:hdpe"}'),
          id: 'chroma:hdpe_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 6500,
          ingredient: { item: 'fluxnetworks:flux_dust' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:flux_dust"}'),
          id: 'chroma:flux_dust_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 4000,
          ingredient: { item: 'mob_grinding_utils:solid_xp_baby' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:experience"}'),
          id: 'chroma:experience_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 1000,
          ingredient: { item: 'mysticalagradditions:insanium_coal' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:insanium_coal"}'),
          id: 'chroma:insanium_coal_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 10000,
          ingredient: { tag: 'minecraft:oak_logs' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:wood"}'),
          id: 'chroma:wood_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 7500,
          ingredient: { item: 'ae2:certus_quartz_crystal' },
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:certus_quartz"}'),
          id: 'chroma:certus_quartz_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 5000,
          ingredient: { item: 'mna:vinteum_ingot' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:vinteum"}'),
          id: 'chroma:vinteum_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 3000,
          ingredient: { item: 'beyond_earth:calorite_ingot' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:calorite"}'),
          id: 'chroma:calorite_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 4000,
          ingredient: { item: 'botania:manasteel_ingot' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:manasteel"}'),
          id: 'chroma:manasteel_singularity'
      },
      {
          powerCost: 5000000,
          inputCount: 4000,
          ingredient: { item: 'evilcraft:dark_gem' },
          catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
          result: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:dark_gem"}'),
          id: 'chroma:dark_gem_singularity'
      },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'extendedcrafting:compressor',
                powerCost: recipe.powerCost,
                inputCount: recipe.inputCount,
                ingredient: recipe.ingredient,
                catalyst: recipe.catalyst,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
