onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/shaped/';
    const recipes = [
        {
            output: 'mekanism:metallurgic_infuser',
            pattern: ['SES', 'FCA', 'SGS'],
            key: {
                S: '#forge:ingots/steel',
                E: 'immersiveengineering:furnace_heater',
                F: 'ae2:formation_core',
                C: 'mekanism:steel_casing',
                A: 'ae2:annihilation_core',
                G: 'immersiveengineering:component_electronic_adv'
            },
            id: 'mekanism:metallurgic_infuser'
        },
        {
            output: 'mekanism:energized_smelter',
            pattern: ['SES', 'FCF', 'SES'],
            key: {
                S: '#forge:ingots/steel',
                E: 'mekanism:basic_control_circuit',
                F: 'ironfurnaces:netherite_furnace',
                C: 'mekanism:steel_casing'
            },
            id: 'mekanism:energized_smelter'
        },
        {
            output: 'mekanism:crusher',
            pattern: ['SES', 'FCF', 'SAS'],
            key: {
                S: '#forge:ingots/steel',
                F: 'mekanism:basic_control_circuit',
                E: 'create:crushing_wheel',
                C: 'mekanism:steel_casing',
                A: 'immersiveengineering:component_electronic_adv'
            },
            id: 'mekanism:crusher'
        },
        {
            output: 'mekanism:combiner',
            pattern: ['SES', 'FCF', 'SAS'],
            key: {
                S: 'mekanism:alloy_infused',
                F: 'mekanism:basic_control_circuit',
                E: 'create:mechanical_press',
                C: 'mekanism:steel_casing',
                A: 'immersiveengineering:component_electronic_adv'
            },
            id: 'mekanism:combiner'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
