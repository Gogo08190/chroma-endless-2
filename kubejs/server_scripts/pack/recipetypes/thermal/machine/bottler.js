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
        {
            input: 'modularrouters:blank_module',
            fluid: Fluid.of('minecraft:water', 1000),
            output: 'modularrouters:fluid_module',
            energy: 1000,
            id: 'modularrouters:fluid_module'
        },
        {
            input: 'mysticalagriculture:prosperity_gemstone',
            fluid: Fluid.of('mysticalagradditions:molten_inferium', 144),
            output: 'mysticalagriculture:inferium_gemstone',
            energy: 1000,
            id: `${id_prefix}inferium_gemstone`
        },
        {
            input: 'mysticalagriculture:inferium_gemstone',
            fluid: Fluid.of('mysticalagradditions:molten_prudentium', 144),
            output: 'mysticalagriculture:prudentium_gemstone',
            energy: 1000,
            id: `${id_prefix}prudentium_gemstone`
        },
        {
            input: 'mysticalagriculture:prudentium_gemstone',
            fluid: Fluid.of('mysticalagradditions:molten_tertium', 144),
            output: 'mysticalagriculture:tertium_gemstone',
            energy: 1000,
            id: `${id_prefix}tertium_gemstone`
        },
        {
            input: 'mysticalagriculture:tertium_gemstone',
            fluid: Fluid.of('mysticalagradditions:molten_imperium', 144),
            output: 'mysticalagriculture:imperium_gemstone',
            energy: 1000,
            id: `${id_prefix}imperium_gemstone`
        },
        {
            input: 'mysticalagriculture:imperium_gemstone',
            fluid: Fluid.of('mysticalagradditions:molten_supremium', 144),
            output: 'mysticalagriculture:supremium_gemstone',
            energy: 1000,
            id: `${id_prefix}supremium_gemstone`
        },
        {
            input: 'mysticalagriculture:supremium_gemstone',
            fluid: Fluid.of('chroma:molten_insanium', 144),
            output: 'mysticalagradditions:insanium_gemstone',
            energy: 1000,
            id: `${id_prefix}insanium_gemstone`
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).energy(recipe.energy).id(recipe.id);
    });
});
