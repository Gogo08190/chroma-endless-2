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

    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismMetallurgicInfusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount).id(recipe.id);
    });
});
