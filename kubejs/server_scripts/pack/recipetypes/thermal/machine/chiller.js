onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/chiller/';

    const recipes = [
        {
            inputs: [Fluid.of('materialis:molten_manasteel', 45), 'thermal:chiller_rod_cast'],
            output: Item.of('chroma:manasteel_rod', 1),
            energy: 2400,
            id: `${id_prefix}manasteel_rod`
        },
        {
            inputs: [Fluid.of('tconstruct:molten_netherite', 45), 'thermal:chiller_rod_cast'],
            output: Item.of('chroma:netherite_rod', 1),
            energy: 2400,
            id: `${id_prefix}netherite_rod`
        },
        {
            inputs: [Fluid.of('tconstruct:molten_electrum', 45), 'thermal:chiller_rod_cast'],
            output: Item.of('chroma:electrum_rod', 1),
            energy: 2400,
            id: `${id_prefix}electrum_rod`
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.chiller(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
