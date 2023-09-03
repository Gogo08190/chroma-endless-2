onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/metallurgic_infusing/';

    const recipes = [
      {
        output: 'powah:dielectric_paste',
        input: 'chroma:silicon_paste',
        infusionInput: 'mekanism:carbon',
        infusionAmount: 10,
        id: 'powah:crafting/dielectric_paste'
      },
      {
        output: 'powah:thermoelectric_plate',
        input: 'immersiveengineering:generator',
        infusionInput: 'mekanism:redstone',
        infusionAmount: 40,
        id: 'powah:crafting/thermoelectric_plate'
      },
      {
        output: 'extendedcrafting:luminessence',
        input: 'chroma:inert_luminessence',
        infusionInput: 'chroma:refined_glowstone',
        infusionAmount: 10,
        id: 'extendedcrafting:luminessence'
      },
      {
        output: 'extendedcrafting:black_iron_ingot',
        input: 'immersiveengineering:ingot_steel',
        infusionInput: 'chroma:essence_of_darkness',
        infusionAmount: 10,
        id: 'extendedcrafting:black_iron_ingot'
      },
      {
        output: 'extendedcrafting:redstone_ingot',
        input: 'pneumaticcraft:ingot_iron_compressed',
        infusionInput: 'mekanism:redstone',
        infusionAmount: 20,
        id: 'extendedcrafting:redstone_ingot'
      },
      {
        output: 'mekanism:advanced_control_circuit',
        input: 'mekanism:basic_control_circuit',
        infusionInput: 'mekanism:redstone',
        infusionAmount: 40,
        id: 'mekanism:control_circuit/advanced'
      },
      {
        output: 'mekanism:elite_control_circuit',
        input: 'mekanism:advanced_control_circuit',
        infusionInput: 'chroma:compressed_steel',
        infusionAmount: 40,
        id: 'mekanism:control_circuit/elite'
      },
      {
        output: 'mekanism:alloy_reinforced',
        input: 'mekanism:alloy_infused',
        infusionInput: 'chroma:compressed_steel',
        infusionAmount: 20,
        id: 'mekanism:metallurgic_infusing/alloy/reinforced'
      },
      {
        output: 'mekanism:ultimate_control_circuit',
        input: 'mekanism:elite_control_circuit',
        infusionInput: 'mekanism:refined_obsidian',
        infusionAmount: 40,
        id: 'mekanism:control_circuit/ultimate'
      },
      {
        output: 'mekaevolution:absolute_control_circuit',
        input: 'mekanism:ultimate_control_circuit',
        infusionInput: 'chroma:lunaris_nova',
        infusionAmount: 40,
        id: 'mekaevolution:absolute_control_circuit'
      },
      {
        output: 'chroma:absolute_alloy',
        input: 'mekanism:alloy_atomic',
        infusionInput: 'chroma:lunaris_nova',
        infusionAmount: 40,
        id: `${id_prefix}absolute_alloy`
      },
      {
        output: 'mekanism:dust_refined_obsidian',
        input: 'mekanism:dust_obsidian',
        infusionInput: 'chroma:niotic',
        infusionAmount: 10,
        id: 'mekanism:processing/refined_obsidian/dust/from_obsidian_dust'
      },
      {
        output: 'chroma:supreme_alloy',
        input: 'chroma:absolute_alloy',
        infusionInput: 'chroma:marsova_ignis',
        infusionAmount: 40,
        id: `${id_prefix}supreme_alloy`
      },
      {
        output: 'mekaevolution:supreme_control_circuit',
        input: 'mekaevolution:absolute_control_circuit',
        infusionInput: 'chroma:marsova_ignis',
        infusionAmount: 40,
        id: 'mekaevolution:supreme_control_circuit'
      },
      {
        output: 'chroma:cosmic_alloy',
        input: 'chroma:supreme_alloy',
        infusionInput: 'chroma:venustar_luminae',
        infusionAmount: 40,
        id: `${id_prefix}cosmic_alloy`
      },
      {
        output: 'mekaevolution:cosmic_control_circuit',
        input: 'mekaevolution:supreme_control_circuit',
        infusionInput: 'chroma:venustar_luminae',
        infusionAmount: 40,
        id: 'mekaevolution:cosmic_control_circuit'
      },
      {
        output: 'fluxnetworks:flux_dust',
        input: 'lazierae2:carbonic_fluix_dust',
        infusionInput: 'chroma:marsova_ignis',
        infusionAmount: 10,
        id: `${id_prefix}flux_dust`
      },
      {
        output: 'mysticalagriculture:prudentium_essence',
        input: '4x mysticalagriculture:inferium_essence',
        infusionInput: 'mekanism:bio',
        infusionAmount: 10,
        id: 'mysticalagriculture:prudentium_essence'
      },
      {
        output: 'mekaevolution:infinite_control_circuit',
        input: '4x mekaevolution:cosmic_control_circuit',
        infusionInput: 'chroma:eternal_cryostella_polaris',
        infusionAmount: 40,
        id: 'mekaevolution:infinite_control_circuit'
      },
      {
        output: 'chroma:infinite_alloy',
        input: '4x chroma:cosmic_alloy',
        infusionInput: 'chroma:eternal_cryostella_polaris',
        infusionAmount: 40,
        id: `${id_prefix}infinite_alloy`
      },
      {
        output: 'draconicevolution:energy_core_stabilizer',
        input: 'draconicevolution:particle_generator',
        infusionInput: 'chroma:eternal_cryostella_polaris',
        infusionAmount: 40,
        id: 'draconicevolution:energy_core_stabilizer'
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismMetallurgicInfusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount).id(recipe.id);
    });
});
