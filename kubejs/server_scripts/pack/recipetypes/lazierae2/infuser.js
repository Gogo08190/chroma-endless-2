onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lazierae2/infuser/';
    const recipes = [
      {
        output: { item: 'create:andesite_alloy', count: 4 },
        inputs: [
          { tag: 'chroma:andesite/processing', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'lazierae2:compat/create/infuser/andesite_alloy'
      },
      {
        output: { item: 'thermal:machine_frame', count: 1 },
        inputs: [
          { item: 'thermal:tin_gear', count: 2 },
          { item: 'powah:dielectric_casing', count: 1 },
          { item: 'immersiveengineering:plate_steel', count: 4 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'thermal:machine_frame'
      },
      {
        output: { item: 'thermal:energy_cell_frame', count: 1 },
        inputs: [
          { item: 'thermal:electrum_gear', count: 2 },
          { item: 'powah:dielectric_casing', count: 1 },
          { item: 'thermal:lead_plate', count: 4 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'thermal:energy_cell_frame'
      },
      {
        output: { item: 'thermal:fluid_cell_frame', count: 1 },
        inputs: [
          { item: 'thermal:iron_gear', count: 2 },
          { item: 'powah:dielectric_casing', count: 1 },
          { item: 'thermal:copper_plate', count: 4 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'thermal:fluid_cell_frame'
      },
      {
        output: { item: 'chroma:device_frame', count: 1 },
        inputs: [
          { item: 'thermal:lead_gear', count: 2 },
          { item: 'powah:dielectric_casing', count: 1 },
          { item: 'immersiveengineering:plate_aluminum', count: 4 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: `${id_prefix}device_frame`
      },
      {
        output: { item: 'chroma:wooden_frame', count: 1 },
        inputs: [
          { item: 'immersiveengineering:treated_wood_horizontal', count: 4 },
          { item: 'powah:dielectric_casing', count: 1 },
          { item: 'thermal:lead_plate', count: 4 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: `${id_prefix}wooden_frame`
      },
      {
        output: { item: 'mekanism:steel_casing', count: 1 },
        inputs: [
          { item: 'immersiveengineering:plate_steel', count: 4 },
          { item: 'powah:dielectric_casing', count: 1 },
          { item: 'mekanism:elite_control_circuit', count: 4 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: `${id_prefix}steel_casing`
      },
      {
        output: { item: 'rftoolsbase:machine_frame', count: 1 },
        inputs: [
          { item: 'thermal:redstone_servo', count: 1 },
          { item: 'mekanism:elite_control_circuit', count: 2 },
          { item: 'rftoolsbase:machine_base', count: 2 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'rftoolsbase:machine_frame'
      },
      {
        output: { item: 'pneumaticcraft:printed_circuit_board', count: 1 },
        inputs: [
          { item: 'pneumaticcraft:unassembled_pcb', count: 1 },
          { item: 'pneumaticcraft:capacitor', count: 4 },
          { item: 'pneumaticcraft:transistor', count: 4 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'pneumaticcraft:printed_circuit_board'
      },
      {
        output: { item: 'ae2:crafting_accelerator', count: 1 },
        inputs: [
          { item: 'ae2:calculation_processor', count: 2 },
          { item: 'mekanism:ultimate_control_circuit', count: 4 },
          { item: 'ae2:crafting_unit', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'ae2:network/crafting/cpu_crafting_accelerator'
      },
      {
        output: { item: 'mekanism:boiler_casing', count: 4 },
        inputs: [
          { item: 'beyond_earth:compressed_steel', count: 4 },
          { item: 'minecraft:iron_ingot', count: 2 },
          { item: 'beyond_earth:ostrum_ingot', count: 2 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'mekanism:boiler_casing'
      },
      {
        output: { item: 'mekanismgenerators:turbine_casing', count: 4 },
        inputs: [
          { item: 'beyond_earth:compressed_steel', count: 4 },
          { item: 'mekanism:ingot_osmium', count: 2 },
          { item: 'beyond_earth:ostrum_ingot', count: 2 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'mekanismgenerators:turbine/casing'
      },
      {
        output: { item: 'mekanismgenerators:fission_reactor_casing', count: 4 },
        inputs: [
          { item: 'jaopca:beyond_earth_compresseds.lead', count: 4 },
          { item: 'mekanism:steel_casing', count: 1 },
          { item: 'beyond_earth:ostrum_ingot', count: 2 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'mekanismgenerators:fission_reactor/casing'
      },
      {
        output: { item: 'chroma:void_miner_frame_tier1', count: 1 },
        inputs: [
          { item: 'powah:crystal_niotic', count: 2 },
          { item: 'powah:capacitor_spirited', count: 1 },
          { item: 'chroma:structure_frame', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: `${id_prefix}void_miner_frame_tier1`
      },
      {
        output: { item: 'megacells:cell_component_1m', count: 1 },
        inputs: [
          { item: 'ae2:calculation_processor', count: 1 },
          { item: 'ae2:cell_component_256k', count: 3 },
          { item: 'lazierae2:carbonic_fluix_dust', count: 4 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'megacells:cell_component_1m'
      },
      {
        output: { item: 'chroma:void_miner_frame_tier2', count: 1 },
        inputs: [
          { item: 'powah:crystal_nitro', count: 2 },
          { item: 'powah:capacitor_nitro', count: 1 },
          { item: 'chroma:void_miner_frame_tier1', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: `${id_prefix}void_miner_frame_tier2`
      },
      {
        output: { item: 'chroma:accelerator_frame', count: 4 },
        inputs: [
          { item: 'chemlib:lanthanum_ingot', count: 2 },
          { item: 'draconicevolution:small_chaos_frag', count: 1 },
          { item: 'mekanism:hdpe_sheet', count: 4 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: `${id_prefix}accelerator_frame`
      },
      {
        output: { item: 'mysticalagriculture:saltpeter_seeds', count: 1 },
        inputs: [
          { item: 'chemlib:potassium_nitrate_dust', count: 4 },
          { item: 'mysticalagriculture:prudentium_essence', count: 4 },
          { item: 'chroma:prudentium_seed_base', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/saltpeter'
      },
      {
        output: { item: 'mysticalagriculture:slimesteel_seeds', count: 1 },
        inputs: [
          { item: 'tconstruct:slimesteel_block', count: 4 },
          { item: 'mysticalagriculture:tertium_essence', count: 4 },
          { item: 'chroma:tertium_seed_base', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/slimesteel'
      },
      {
        output: { item: 'mysticalagriculture:bronze_seeds', count: 1 },
        inputs: [
          { item: 'thermal:bronze_block', count: 4 },
          { item: 'mysticalagriculture:tertium_essence', count: 4 },
          { item: 'chroma:tertium_seed_base', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/bronze'
      },
      {
        output: { item: 'mysticalagriculture:brass_seeds', count: 1 },
        inputs: [
          { item: 'create:brass_block', count: 4 },
          { item: 'mysticalagriculture:tertium_essence', count: 4 },
          { item: 'chroma:tertium_seed_base', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/brass'
      },
      {
        output: { item: 'mysticalagriculture:amethyst_bronze_seeds', count: 1 },
        inputs: [
          { item: 'tconstruct:amethyst_bronze_block', count: 4 },
          { item: 'mysticalagriculture:tertium_essence', count: 4 },
          { item: 'chroma:tertium_seed_base', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/amethyst_bronze'
      },
      {
        output: { item: 'mysticalagriculture:pig_iron_seeds', count: 1 },
        inputs: [
          { item: 'tconstruct:pig_iron_block', count: 4 },
          { item: 'mysticalagriculture:tertium_essence', count: 4 },
          { item: 'chroma:tertium_seed_base', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/pig_iron'
      },
      {
        output: { item: 'mysticalagriculture:silicon_seeds', count: 1 },
        inputs: [
          { item: 'ae2:printed_silicon', count: 4 },
          { item: 'mysticalagriculture:tertium_essence', count: 4 },
          { item: 'chroma:tertium_seed_base', count: 1 }
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/silicon'
      },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event.custom({
            type: 'lazierae2:infuser',
            output: recipe.output,
            input: ingredients,
            process_time: recipe.process_time,
            energy_cost: recipe.energy_cost,
        }).id(recipe.id);
    });
});
