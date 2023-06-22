onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/multiblocker/shaped/';
    const recipes = [
        {
            output: 'chroma:brass_create_input',
            pattern: ['BBB', 'MGB', 'BBB'],
            key: {
                B: 'create:brass_casing',
                M: 'create:rotation_speed_controller',
                G: 'create:large_cogwheel'
            },
            id: `${id_prefix}brass_create_input`
        },
        {
            output: 'chroma:brass_create_output',
            pattern: ['BBB', 'BGM', 'BBB'],
            key: {
                B: 'create:brass_casing',
                M: 'create:rotation_speed_controller',
                G: 'create:large_cogwheel'
            },
            id: `${id_prefix}brass_create_output`
        },
        {
            output: 'chroma:create_item_output',
            pattern: ['BBB', 'MGB', 'BBB'],
            key: {
                B: 'create:brass_casing',
                M: 'chroma:brass_create_output',
                G: 'create:precision_mechanism'
            },
            id: `${id_prefix}create_item_output`
        },
        {
            output: 'chroma:create_item_input',
            pattern: ['BBB', 'BGM', 'BBB'],
            key: {
                B: 'create:brass_casing',
                M: 'chroma:brass_create_output',
                G: 'create:precision_mechanism'
            },
            id: `${id_prefix}create_item_input`
        },
        {
            output: 'chroma:energy_coke_input',
            pattern: ['CHC', 'HAH', 'CHC'],
            key: {
                C: 'immersiveengineering:coil_hv',
                H: '#forge:ingots/hop_graphite',
                A: 'immersiveengineering:capacitor_hv'
            },
            id: `${id_prefix}energy_coke_input`
        },
        {
            output: 'chroma:coke_item_input',
            pattern: ['CHC', 'SAS', 'CHC'],
            key: {
                C: 'immersiveengineering:radiator',
                H: '#forge:ingots/steel',
                A: 'immersiveengineering:crate',
                S: 'immersiveengineering:component_steel'
            },
            id: `${id_prefix}coke_item_input`
        },
        {
            output: 'chroma:coke_item_output',
            pattern: ['CSC', 'HAH', 'CSC'],
            key: {
                C: 'immersiveengineering:radiator',
                H: '#forge:ingots/steel',
                A: 'immersiveengineering:crate',
                S: 'immersiveengineering:component_steel'
            },
            id: `${id_prefix}coke_item_output`
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
