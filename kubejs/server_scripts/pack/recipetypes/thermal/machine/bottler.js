onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/bottler/';
    const recipes = [
        {
            input: '#forge:plates/iron',
            fluid: Fluid.of('thermal:redstone', 200),
            output: 'thermal:redstone_servo',
            energy: 1000,
            id: 'thermal:redstone_servo'
        },
        {
            input: '#forge:rods/electrum',
            fluid: Fluid.of('thermal:redstone', 200),
            output: 'thermal:rf_coil',
            energy: 1000,
            id: 'thermal:rf_coil'
        },
        {
            input: '#forge:rods/netherite',
            fluid: Fluid.of('thermal:redstone', 200),
            output: 'chroma:netherite_flux_coil',
            energy: 1500,
            id: `${id_prefix}netherite_flux_coil`
        },
        {
            input: '#forge:rods/manasteel',
            fluid: Fluid.of('thermal:redstone', 200),
            output: 'chroma:manasteel_flux_coil',
            energy: 2000,
            id: `${id_prefix}manasteel_flux_coil`
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).energy(recipe.energy).id(recipe.id);
    });
});
