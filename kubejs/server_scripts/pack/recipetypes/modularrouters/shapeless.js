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
        {
            output: 'modularrouters:placer_module',
            inputs: ['minecraft:grass_block', 'modularrouters:blank_module', 'engineersdecor:factory_placer'],
            id: 'modularrouters:placer_module'
        },
        {
            output: 'modularrouters:puller_module_1',
            inputs: ['thermal:redstone_servo', 'modularrouters:blank_module', 'create:sticky_mechanical_piston'],
            id: 'modularrouters:puller_module_1'
        },
        {
            output: 'modularrouters:puller_module_2',
            inputs: [Item.of('modularrouters:puller_module_1').ignoreNBT(), 'modularrouters:blank_module', Item.of('modularrouters:puller_module_1').ignoreNBT()],
            id: 'modularrouters:puller_module_2'
        },
        {
            output: 'modularrouters:sender_module_1',
            inputs: ['thermal:redstone_servo', 'modularrouters:blank_module', 'create:mechanical_piston'],
            id: 'modularrouters:sender_module_1'
        },
        {
            output: 'modularrouters:sender_module_2',
            inputs: [Item.of('modularrouters:sender_module_1').ignoreNBT(), 'modularrouters:blank_module', Item.of('modularrouters:sender_module_1').ignoreNBT()],
            id: 'modularrouters:sender_module_2'
        },
        {
            output: 'modularrouters:vacuum_module',
            inputs: ['mob_grinding_utils:absorption_hopper', 'modularrouters:blank_module'],
            id: 'modularrouters:vacuum_module'
        },
        {
            output: 'modularrouters:void_module',
            inputs: ['trashcans:item_trash_can', 'modularrouters:blank_module'],
            id: 'modularrouters:void_module'
        },
        {
            output: 'modularrouters:energy_upgrade',
            inputs: [Item.of('thermal:rf_potato').ignoreNBT(), 'modularrouters:blank_upgrade'],
            id: 'modularrouters:energy_upgrade'
        },
        {
            output: Item.of('modularrouters:muffler_upgrade', 4),
            inputs: ['immersiveengineering:earmuffs', 'modularrouters:blank_upgrade'],
            id: 'modularrouters:muffler_upgrade'
        },
        {
            output: 'modularrouters:security_upgrade',
            inputs: ['thermal:lock', 'modularrouters:blank_upgrade', 'supplementaries:key'],
            id: 'modularrouters:security_upgrade'
        },
        {
            output: Item.of('modularrouters:speed_upgrade', 3),
            inputs: ['pneumaticcraft:speed_upgrade', 'modularrouters:blank_upgrade'],
            id: 'modularrouters:speed_upgrade'
        },
        {
            output: 'modularrouters:stack_upgrade',
            inputs: ['#forge:ingots/compressed_iron', 'modularrouters:blank_upgrade', '#pneumaticcraft:compressed_stone'],
            id: 'modularrouters:stack_upgrade'
        },
        {
            output: Item.of('modularrouters:sync_upgrade', 8),
            inputs: ['#forge:clocks', 'modularrouters:blank_upgrade'],
            id: 'modularrouters:sync_upgrade'
        },
        {
            output: 'modularrouters:filter_round_robin_augment',
            inputs: ['thermal:redstone_servo', 'modularrouters:augment_core'],
            id: 'modularrouters:filter_round_robin_augment'
        },
        {
            output: 'modularrouters:pushing_augment',
            inputs: ['create:deployer', 'modularrouters:augment_core'],
            id: 'modularrouters:pushing_augment'
        },
        {
            output: 'modularrouters:regulator_augment',
            inputs: [Item.of('jecalculation:item_calculator_craft').ignoreNBT(), 'modularrouters:augment_core'],
            id: 'modularrouters:regulator_augment'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
