onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/shaped/';
    const recipes = [
        {
            output: 'thermal:machine_furnace',
            pattern: ['III', 'FMF', 'STS'],
            key: {
                S: 'thermal:signalum_gear',
                T: 'thermal:redstone_servo',
                F: 'ironfurnaces:crystal_furnace',
                M: 'thermal:machine_frame',
                I: 'immersiveengineering:sheetmetal_iron'
            },
            id: 'thermal:machine_furnace'
        },
        {
            output: 'thermal:machine_sawmill',
            pattern: ['ISI', 'DMD', 'GRG'],
            key: {
                I: 'immersiveengineering:sheetmetal_iron',
                D: 'thermal:sawdust',
                G: 'thermal:signalum_gear',
                M: 'thermal:machine_frame',
                S: Item.of('immersiveengineering:sawblade').ignoreNBT(),
                R: 'thermal:rf_coil'
            },
            id: 'thermal:machine_sawmill'
        },
        {
            output: 'thermal:machine_pulverizer',
            pattern: ['III', 'WMW', 'SRS'],
            key: {
                S: 'thermal:signalum_gear',
                R: 'thermal:rf_coil',
                W: 'create:crushing_wheel',
                M: 'thermal:machine_frame',
                I: 'immersiveengineering:sheetmetal_iron'
            },
            id: 'thermal:machine_pulverizer'
        },
        {
            output: 'thermal:machine_smelter',
            pattern: ['III', 'XMX', 'SRS'],
            key: {
                S: 'thermal:signalum_gear',
                R: 'thermal:rf_coil',
                X: 'create:mechanical_mixer',
                M: 'thermal:machine_frame',
                I: 'immersiveengineering:sheetmetal_iron'
            },
            id: 'thermal:machine_smelter'
        },
        {
            output: 'thermal:machine_insolator',
            pattern: ['III', 'YMY', 'SRS'],
            key: {
                S: 'thermal:signalum_gear',
                R: 'thermal:redstone_servo',
                Y: 'ae2:yellow_lumen_paint_ball',
                M: 'thermal:machine_frame',
                I: 'immersiveengineering:sheetmetal_iron'
            },
            id: 'thermal:machine_insolator'
        },
        {
            output: 'thermal:machine_centrifuge',
            pattern: ['III', 'SMS', 'CTR'],
            key: {
                C: 'pneumaticcraft:capacitor',
                T: 'pneumaticcraft:transistor',
                S: 'thermal:signalum_gear',
                M: 'thermal:machine_frame',
                I: 'immersiveengineering:sheetmetal_iron',
                R: 'thermal:rf_coil'
            },
            id: 'thermal:machine_centrifuge'
        },
        {
            output: 'thermal:machine_press',
            pattern: ['III', 'PMP', 'RTC'],
            key: {
                C: 'pneumaticcraft:capacitor',
                T: 'pneumaticcraft:transistor',
                P: 'create:mechanical_press',
                M: 'thermal:machine_frame',
                I: 'immersiveengineering:sheetmetal_iron',
                R: 'thermal:rf_coil'
            },
            id: 'thermal:machine_press'
        },
        {
            output: 'thermal:machine_crucible',
            pattern: ['CIP', 'CMP', 'CTP'],
            key: {
                C: 'create:fluid_tank',
                I: 'immersiveengineering:sheetmetal_iron',
                P: 'pneumaticcraft:small_tank',
                M: 'thermal:machine_frame',
                T: 'pneumaticcraft:transistor'
            },
            id: 'thermal:machine_crucible'
        },
        {
            output: 'thermal:machine_chiller',
            pattern: ['III', 'GMG', 'CTC'],
            key: {
                I: 'immersiveengineering:sheetmetal_iron',
                G: 'thermal:chiller_ingot_cast',
                C: 'pneumaticcraft:capacitor',
                T: 'pneumaticcraft:transistor',
                M: 'thermal:machine_frame'

            },
            id: 'thermal:machine_chiller'
        },
        {
            output: 'thermal:machine_refinery',
            pattern: ['III', 'BMR', 'LCL'],
            key: {
                I: 'immersiveengineering:sheetmetal_iron',
                B: 'immersivepetroleum:crudeoil_bucket',
                M: 'thermal:machine_frame',
                R: 'thermal:resin_bucket',
                L: '#forge:gears/lapis',
                C: 'pneumaticcraft:capacitor'

            },
            id: 'thermal:machine_refinery'
        },
        {
            output: 'thermal:machine_pyrolyzer',
            pattern: ['IRI', 'CMC', 'CRC'],
            key: {
                I: 'immersiveengineering:sheetmetal_iron',
                R: 'thermal:redstone_servo',
                C: '#forge:storage_blocks/coal',
                M: 'thermal:machine_frame'

            },
            id: 'thermal:machine_pyrolyzer'
        },
        {
            output: 'thermal:machine_bottler',
            pattern: ['III', 'SMS', 'NTN'],
            key: {
                I: 'immersiveengineering:sheetmetal_iron',
                S: 'create:spout',
                M: 'thermal:machine_frame',
                N: '#forge:gears/netherite',
                T: 'pneumaticcraft:transistor'

            },
            id: 'thermal:machine_bottler'
        },
        {
            output: 'thermal:slot_seal',
            pattern: ['S S', ' P ', 'S S'],
            key: {
                P: '#forge:plates/steel',
                S: 'immersiveengineering:nugget_steel'
            },
            id: 'thermal:slot_seal'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
