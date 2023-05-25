onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'modularrouters:detector_module',
            inputs: ['modularrouters:blank_module', 'rsgauges:industrial_entity_detector'],
            id: 'modularrouters:detector_module'
        },
        {
            output: 'modularrouters:distributor_module',
            inputs: [Item.of('modularrouters:puller_module_2').ignoreNBT(), 'modularrouters:filter_round_robin_augment', Item.of('modularrouters:sender_module_2').ignoreNBT()],
            id: 'modularrouters:distributor_module'
        },
        {
            output: 'modularrouters:energy_distributor_module',
            inputs: [Item.of('modularrouters:energy_output_module').ignoreNBT(), Item.of('modularrouters:sender_module_2').ignoreNBT()],
            id: 'modularrouters:energy_distributor_module'
        },
        {
            output: 'modularrouters:extruder_module_2',
            inputs: [Item.of('modularrouters:extruder_module_1').ignoreNBT(), 'modularrouters:blank_module', Item.of('modularrouters:extruder_module_1').ignoreNBT()],
            id: 'modularrouters:extruder_module_2'
        },
        {
            output: 'modularrouters:fluid_module_2',
            inputs: [Item.of('modularrouters:fluid_module').ignoreNBT(), 'modularrouters:blank_module', Item.of('modularrouters:fluid_module').ignoreNBT()],
            id: 'modularrouters:fluid_module_2'
        },
        {
            output: 'modularrouters:flinger_module',
            inputs: ['create:schematicannon', 'modularrouters:blank_module'],
            id: 'modularrouters:flinger_module'
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
