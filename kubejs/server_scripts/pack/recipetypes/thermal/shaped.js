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
                I: '#forge:sheetmetals/iron'
            },
            id: 'thermal:machine_furnace'
        },
        {
            output: 'thermal:machine_sawmill',
            pattern: ['ISI', 'DMD', 'GRG'],
            key: {
                I: '#forge:sheetmetals/iron',
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
                I: '#forge:sheetmetals/iron'
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
                I: '#forge:sheetmetals/iron'
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
                I: '#forge:sheetmetals/iron'
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
                I: '#forge:sheetmetals/iron',
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
                I: '#forge:sheetmetals/iron',
                R: 'thermal:rf_coil'
            },
            id: 'thermal:machine_press'
        },
        {
            output: 'thermal:machine_crucible',
            pattern: ['CIP', 'CMP', 'CTP'],
            key: {
                C: 'create:fluid_tank',
                I: '#forge:sheetmetals/iron',
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
                I: '#forge:sheetmetals/iron',
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
                I: '#forge:sheetmetals/iron',
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
                I: '#forge:sheetmetals/iron',
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
                I: '#forge:sheetmetals/iron',
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
        },
        {
            output: 'thermal:fluid_cell',
            pattern: ['CSC', 'SFS', 'CSC'],
            key: {
                C: '#forge:sheetmetals/copper',
                S: '#forge:sheetmetals/silver',
                F: 'thermal:fluid_cell_frame'
            },
            id: 'thermal:fluid_cell'
        },
        {
            output: 'thermal:energy_cell',
            pattern: ['CSC', 'SFS', 'CSC'],
            key: {
                C: '#forge:sheetmetals/lead',
                S: '#forge:sheetmetals/electrum',
                F: 'thermal:energy_cell_frame'
            },
            id: 'thermal:energy_cell'
        },
        {
            output: 'thermal:charge_bench',
            pattern: ['EEE', 'NFM', 'LRL'],
            key: {
                E: '#forge:plates/electrum',
                N: 'chroma:netherite_flux_coil',
                F: 'chroma:device_frame',
                M: 'chroma:manasteel_flux_coil',
                L: '#forge:plates/lead',
                R: 'thermal:rf_coil'
            },
            id: 'thermal:charge_bench'
        },
        {
            output: 'thermal:tinker_bench',
            pattern: ['ITI', 'GFG', 'CRC'],
            key: {
                I: '#forge:plates/iron',
                T: 'immersiveengineering:workbench',
                G: '#forge:glass',
                F: 'chroma:wooden_frame',
                C: 'immersiveengineering:craftingtable',
                R: 'thermal:rf_coil'
            },
            id: 'thermal:tinker_bench'
        },
        {
            output: 'thermal:device_potion_diffuser',
            pattern: ['ICI', 'GFG', 'ISI'],
            key: {
                I: '#forge:plates/silver',
                C: '#forge:gears/constantan',
                F: 'chroma:device_frame',
                G: 'minecraft:glass_bottle',
                S: 'thermal:redstone_servo'
            },
            id: 'thermal:device_potion_diffuser'
        },
        {
            output: 'thermal:device_nullifier',
            pattern: ['ICI', 'GFG', 'ISI'],
            key: {
                I: '#forge:plates/tin',
                C: 'trashcans:ultimate_trash_can',
                F: 'chroma:device_frame',
                G: '#forge:sheetmetals/lead',
                S: 'thermal:redstone_servo'
            },
            id: 'thermal:device_nullifier'
        },
        {
            output: 'thermal:machine_efficiency_augment',
            pattern: [' U ', 'PBP', ' F '],
            key: {
                U: 'thermal:rf_coil_xfer_augment',
                P: '#forge:plates/lead',
                B: 'chroma:base_augment',
                F: 'chroma:netherite_flux_coil'
            },
            id: 'thermal:augments/machine_efficiency_augment'
        },
        {
            output: 'thermal:machine_speed_augment',
            pattern: ['PAP', 'GBG', 'PFP'],
            key: {
                G: '#forge:plates/gold',
                P: '#forge:plates/netherite',
                B: 'chroma:base_augment',
                F: 'chroma:netherite_flux_coil',
                A: '#forge:gears/bronze'
            },
            id: 'thermal:augments/machine_speed_augment'
        },
        {
            output: 'thermal:fluid_filter_augment',
            pattern: ['PTP', 'PBP', 'PTP'],
            key: {
                P: '#forge:plates/lead',
                T: 'mekanism:basic_fluid_tank',
                B: 'chroma:base_augment'
            },
            id: 'thermal:augments/fluid_filter_augment'
        },
        {
            output: 'thermal:item_filter_augment',
            pattern: ['PTP', 'PBP', 'PTP'],
            key: {
                P: '#forge:plates/lead',
                T: 'create:mechanical_crafter',
                B: 'chroma:base_augment'
            },
            id: 'thermal:augments/item_filter_augment'
        },
        {
            output: 'thermal:rf_coil_augment',
            pattern: ['PAP', 'PBP', 'PTP'],
            key: {
                P: '#forge:plates/lead',
                T: 'chroma:netherite_flux_coil',
                B: 'chroma:base_augment',
                A: Item.of('thermal:energy_cell').ignoreNBT()
            },
            id: 'thermal:augments/rf_coil_augment'
        },
        {
            output: 'thermal:xp_storage_augment',
            pattern: ['PIP', 'IBI', 'PIP'],
            key: {
                P: '#forge:plates/silver',
                I: 'thermal:xp_crystal',
                B: 'chroma:base_augment'
            },
            id: 'thermal:augments/xp_storage_augment'
        },
        {
            output: 'thermal:machine_output_augment',
            pattern: [' U ', 'PBP', ' F '],
            key: {
                U: '#forge:gears/bronze',
                P: '#forge:plates/constantan',
                B: 'chroma:base_augment',
                F: 'chroma:netherite_flux_coil'
            },
            id: 'thermal:augments/machine_output_augment'
        },
        {
            output: 'thermal:rf_coil_storage_augment',
            pattern: [' U ', 'PBP', ' F '],
            key: {
                U: Item.of('thermal:flux_capacitor').ignoreNBT(),
                P: '#forge:plates/constantan',
                B: 'chroma:base_augment',
                F: 'chroma:netherite_flux_coil'
            },
            id: 'thermal:augments/rf_coil_storage_augment'
        },
        {
            output: 'thermal:rf_coil_xfer_augment',
            pattern: [' U ', 'PBP', ' F '],
            key: {
                U: 'thermal:rf_coil_augment',
                P: '#forge:plates/signalum',
                B: 'chroma:base_augment',
                F: 'chroma:netherite_flux_coil'
            },
            id: 'thermal:augments/rf_coil_xfer_augment'
        },
        {
            output: 'chroma:magnetic_rode',
            pattern: ['R S', ' S ', 'S R'],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                S: '#forge:rods/steel'
            },
            id: `${id_prefix}magnetic_rode`
        },
        {
            output: 'chroma:fluxo_core',
            pattern: ['PPP', '  P', 'PPP'],
            key: {
                P: '#forge:plates/lead'
            },
            id: `${id_prefix}fluxo_core`
        },
        {
            output: 'chroma:magnet_core',
            pattern: [' R ', 'RCR', ' R '],
            key: {
                R: 'immersiveengineering:wirecoil_redstone',
                C: 'chroma:magnetic_rode'
            },
            id: `${id_prefix}magnet_core`
        },
        {
            output: 'thermal:watering_can',
            pattern: ['CP ', 'CTC', ' C '],
            key: {
                C: '#forge:ingots/bronze',
                P: 'thermal:phytogro',
                T: 'thermal:fluid_reservoir'
            },
            id: 'thermal:watering_can'
        },
        {
            output: 'thermal:fluid_tank_augment',
            pattern: ['PTP', 'PBP', 'PFP'],
            key: {
                P: '#forge:plates/iron',
                T: Item.of('thermal:fluid_cell').ignoreNBT(),
                B: 'chroma:base_augment',
                F: 'create:fluid_tank'
            },
            id: 'thermal:augments/fluid_tank_augment'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
