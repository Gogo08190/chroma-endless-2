onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lazierae2/infuser/';
    const recipes = [
      {
        output: { item: 'create:andesite_alloy', count: 4 },
        inputs: [
          { tag: 'chroma:andesite/processing', count: 1 },
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
          { item: 'immersiveengineering:plate_steel', count: 4 },
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
          { item: 'thermal:lead_plate', count: 4 },
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
          { item: 'thermal:copper_plate', count: 4 },
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
          { item: 'immersiveengineering:plate_aluminum', count: 4 },
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
          { item: 'thermal:lead_plate', count: 4 },
        ],
        process_time: 80,
        energy_cost: 1500,
        id: `${id_prefix}wooden_frame`
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
