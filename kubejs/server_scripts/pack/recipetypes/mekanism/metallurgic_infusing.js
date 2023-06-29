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
        infusionInput: 'mekanism:diamond',
        infusionAmount: 40,
        id: 'mekanism:control_circuit/elite'
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
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismMetallurgicInfusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount).id(recipe.id);
    });
});
