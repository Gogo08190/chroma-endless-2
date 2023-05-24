onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/shaped/';
    const recipes = [
        {
            output: 'thermal:machine_furnace',
            pattern: ['III', 'FMF', 'STS'],
            key: {
                S: '#forge:gears/signalum',
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
                G: '#forge:gears/signalum',
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
                S: '#forge:gears/signalum',
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
                S: '#forge:gears/signalum',
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
                S: '#forge:gears/signalum',
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
                S: '#forge:gears/signalum',
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
        {
            output: 'thermal:machine_brewer',
            pattern: ['III', 'HMH', 'RBG'],
            key: {
                I: '#forge:sheetmetals/iron',
                H: Item.of('minecraft:potion', '{Potion:"minecraft:healing"}'),
                M: 'thermal:machine_frame',
                R: 'thermal:rf_coil',
                B: 'minecraft:brewing_stand',
                G: '#forge:gears/lapis'
            },
            id: 'thermal:machine_brewer'
        },
        {
            output: 'thermal:machine_crystallizer',
            pattern: ['III', 'EME', 'CRC'],
            key: {
                I: '#forge:sheetmetals/iron',
                E: '#forge:dusts/emerald',
                M: 'thermal:machine_frame',
                C: 'pneumaticcraft:capacitor',
                R: 'thermal:redstone_servo'
            },
            id: 'thermal:machine_crystallizer'
        },
        {
            output: 'thermal:machine_crafter',
            pattern: ['IAI', 'IMI', 'CRC'],
            key: {
                I: '#forge:sheetmetals/iron',
                A: 'thermal:item_filter_augment',
                M: 'thermal:machine_frame',
                C: 'pneumaticcraft:capacitor',
                R: 'create:mechanical_crafter'
            },
            id: 'thermal:machine_crafter'
        },
        {
            output: 'thermal:dynamo_stirling',
            pattern: [' C ', 'TMT', 'SDS'],
            key: {
                C: 'chroma:excitation_coil',
                T: '#forge:storage_blocks/coal_coke',
                M: 'chroma:manasteel_flux_coil',
                S: '#forge:sheetmetals/steel',
                D: 'immersiveengineering:dynamo'

            },
            id: 'thermal:dynamo_stirling'
        },
        {
            output: 'thermal:dynamo_compression',
            pattern: [' C ', 'TMT', 'SDS'],
            key: {
                C: 'chroma:excitation_coil',
                T: 'immersiveengineering:creosote_bucket',
                M: 'chroma:manasteel_flux_coil',
                S: '#forge:sheetmetals/steel',
                D: 'immersiveengineering:dynamo'

            },
            id: 'thermal:dynamo_compression'
        },
        {
            output: 'thermal:dynamo_numismatic',
            pattern: [' C ', 'TMT', 'SDS'],
            key: {
                C: 'chroma:excitation_coil',
                T: 'createdeco:netherite_coin',
                M: 'chroma:manasteel_flux_coil',
                S: '#forge:sheetmetals/steel',
                D: 'immersiveengineering:dynamo'

            },
            id: 'thermal:dynamo_numismatic'
        },
        {
            output: 'thermal:dynamo_lapidary',
            pattern: [' C ', 'TMT', 'SDS'],
            key: {
                C: 'chroma:excitation_coil',
                T: '#forge:gems/mana_diamond',
                M: 'chroma:manasteel_flux_coil',
                S: '#forge:sheetmetals/steel',
                D: 'immersiveengineering:dynamo'

            },
            id: 'thermal:dynamo_lapidary'
        },
        {
            output: 'thermal:dynamo_disenchantment',
            pattern: [' C ', 'EMG', 'SDS'],
            key: {
                C: 'chroma:excitation_coil',
                E: 'minecraft:enchanting_table',
                G: 'minecraft:grindstone',
                M: 'chroma:manasteel_flux_coil',
                S: '#forge:sheetmetals/steel',
                D: 'immersiveengineering:dynamo'

            },
            id: 'thermal:dynamo_disenchantment'
        },
        {
            output: 'thermal:dynamo_gourmand',
            pattern: [' C ', 'PMP', 'SDS'],
            key: {
                C: 'chroma:excitation_coil',
                P: 'farmersdelight:stuffed_pumpkin_block',
                M: 'chroma:manasteel_flux_coil',
                S: '#forge:sheetmetals/steel',
                D: 'immersiveengineering:dynamo'

            },
            id: 'thermal:dynamo_gourmand'
        },
        {
            output: 'thermal:flux_drill',
            pattern: ['DB ', ' CP', 'F B'],
            key: {
                D: 'thermal:drill_head',
                B: '#forge:dyes/black',
                C: 'create:cogwheel',
                P: '#forge:plates/iron',
                F: 'thermal:flux_capacitor'

            },
            id: 'thermal:flux_drill'
        },
        {
            output: 'thermal:flux_saw',
            pattern: ['DB ', ' CP', 'F B'],
            key: {
                D: 'thermal:saw_blade',
                B: '#forge:dyes/black',
                C: 'create:cogwheel',
                P: '#forge:plates/iron',
                F: 'thermal:flux_capacitor'

            },
            id: 'thermal:flux_saw'
        },
        {
            output: 'thermal:flux_capacitor',
            pattern: ['RPC', 'PMP', 'PRP'],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                P: '#forge:plates/lead',
                C: '#minecraft:coals',
                M: '#forge:circuits/basic'

            },
            id: 'thermal:flux_capacitor'
        },
        {
            output: 'thermal:fluid_reservoir',
            pattern: ['PCP', 'GBG', ' R '],
            key: {
                P: '#forge:plates/bronze',
                C: 'thermal:cured_rubber',
                G: '#forge:glass',
                B: 'minecraft:bucket',
                R: 'thermal:redstone_servo'
            },
            id: 'thermal:fluid_reservoir'
        },
        {
            output: 'thermal:potion_infuser',
            pattern: ['CBC', 'PGP', ' P '],
            key: {
                P: '#forge:plates/bronze',
                C: 'thermal:cured_rubber',
                G: '#forge:gears/silver',
                B: 'minecraft:glass_bottle'
            },
            id: 'thermal:potion_infuser'
        },
        {
            output: 'thermal:potion_quiver',
            pattern: ['P P', 'BGM', 'CPC'],
            key: {
                P: '#forge:plates/bronze',
                C: 'thermal:cured_rubber',
                G: '#forge:gears/silver',
                B: 'minecraft:glass_bottle',
                M: 'botania:mana_string'
            },
            id: 'thermal:potion_quiver'
        },
        {
            output: 'thermal:device_hive_extractor',
            pattern: ['HSH', 'GWG', 'HRH'],
            key: {
                H: 'minecraft:honeycomb_block',
                S: Item.of('blue_skies:ventium_shears').ignoreNBT(),
                G: '#forge:gears/iron',
                R: 'thermal:redstone_servo',
                W: 'chroma:wooden_frame'
            },
            id: 'thermal:device_hive_extractor'
        },
        {
            output: 'thermal:device_tree_extractor',
            pattern: ['HSH', 'GWG', 'HRH'],
            key: {
                H: 'blue_skies:maple_log',
                S: 'ae2:sky_stone_tank',
                G: '#forge:gears/iron',
                R: 'thermal:redstone_servo',
                W: 'chroma:wooden_frame'
            },
            id: 'thermal:device_tree_extractor'
        },
        {
            output: 'thermal:device_fisher',
            pattern: ['BFB', 'GWG', 'BRB'],
            key: {
                G: '#forge:gears/iron',
                R: 'thermal:redstone_servo',
                W: 'chroma:wooden_frame',
                B: 'botania:livingwood_log',
                F: Item.of('aquaculture:neptunium_fishing_rod').ignoreNBT()
            },
            id: 'thermal:device_fisher'
        },
        {
            output: 'thermal:device_composter',
            pattern: ['OCO', 'GWG', 'ORO'],
            key: {
                G: '#forge:gears/iron',
                R: 'thermal:redstone_servo',
                W: 'chroma:wooden_frame',
                O: 'farmersdelight:organic_compost',
                C: 'minecraft:composter'
            },
            id: 'thermal:device_composter'
        },
        {
            output: 'thermal:device_soil_infuser',
            pattern: ['TTT', 'GWG', 'TRT'],
            key: {
                G: '#forge:gears/iron',
                R: 'thermal:rf_coil',
                W: 'chroma:wooden_frame',
                T: 'thermal:phytosoil',
            },
            id: 'thermal:device_soil_infuser'
        },
        {
            output: 'thermal:device_rock_gen',
            pattern: ['PBP', 'SDL', 'PRP'],
            key: {
                P: '#forge:plates/iron',
                B: '#forge:gears/constantan',
                S: 'minecraft:water_bucket',
                L: 'minecraft:lava_bucket',
                D: 'chroma:device_frame',
                R: 'thermal:redstone_servo'
            },
            id: 'thermal:device_rock_gen'
        },
        {
            output: 'thermal:device_water_gen',
            pattern: ['PBP', 'SDS', 'PRP'],
            key: {
                P: '#forge:plates/iron',
                B: 'minecraft:water_bucket',
                S: 'ae2:sky_stone_tank',
                D: 'chroma:device_frame',
                R: 'thermal:redstone_servo'
            },
            id: 'thermal:device_water_gen'
        },
        {
            output: 'thermal:device_collector',
            pattern: ['PCP', 'LDL', 'PRP'],
            key: {
                P: '#forge:plates/tin',
                D: 'chroma:device_frame',
                R: 'thermal:redstone_servo',
                L: '#forge:sheetmetals/lead',
                C: 'create:chute'
            },
            id: 'thermal:device_collector'
        },
        {
            output: 'thermal:machine_catalyst_augment',
            pattern: [' P ', 'PBP', ' N '],
            key: {
                P: '#forge:plates/lead',
                B: 'chroma:base_augment',
                N: 'chroma:netherite_flux_coil'
            },
            id: 'thermal:augments/machine_catalyst_augment'
        },
        {
            output: 'chroma:excitation_coil',
            pattern: ['RRR', 'RHR', 'TET'],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                H: 'immersiveengineering:coil_hv',
                T: 'pneumaticcraft:transistor',
                E: 'immersiveengineering:component_electronic'
            },
            id: `${id_prefix}excitation_coil`
        },
        {
            output: 'thermal:machine_cycle_augment',
            pattern: [' G ', 'GBG', ' N '],
            key: {
                G: '#forge:gears/lead',
                B: 'chroma:base_augment',
                N: 'chroma:netherite_flux_coil'
            },
            id: 'thermal:augments/machine_cycle_augment'
        },
        {
            output: 'thermal:machine_null_augment',
            pattern: [' C ', 'CBC', ' C '],
            key: {
                C: 'minecraft:cactus',
                B: 'chroma:base_augment'
            },
            id: 'thermal:augments/machine_null_augment'
        },
        {
            output: 'thermal:dynamo_output_augment',
            pattern: [' C ', 'CBC', ' N '],
            key: {
                C: 'powah:charged_snowball',
                B: 'chroma:base_augment',
                N: 'chroma:netherite_flux_coil'
            },
            id: 'thermal:augments/dynamo_output_augment'
        },
        {
            output: 'thermal:dynamo_fuel_augment',
            pattern: [' C ', 'CBC', ' N '],
            key: {
                C: '#forge:storage_blocks/coal_coke',
                B: 'chroma:base_augment',
                N: 'chroma:netherite_flux_coil'
            },
            id: 'thermal:augments/dynamo_fuel_augment'
        },
        {
            output: 'thermal:dynamo_throttle_augment',
            pattern: [' R ', 'GBG', ' N '],
            key: {
                G: '#forge:gears/iron',
                R: 'thermal:rf_coil_storage_augment',
                B: 'chroma:base_augment',
                N: 'chroma:netherite_flux_coil'
            },
            id: 'thermal:augments/dynamo_throttle_augment'
        },
        {
            output: 'thermal:area_radius_augment',
            pattern: ['G P', ' B ', 'PNG'],
            key: {
                G: '#forge:gears/iron',
                P: '#forge:plates/tin',
                B: 'chroma:base_augment',
                N: 'chroma:netherite_flux_coil'
            },
            id: 'thermal:augments/area_radius_augment'
        },
        {
            output: 'thermal:potion_amplifier_augment',
            pattern: [' I ', 'PBP', ' N '],
            key: {
                B: 'chroma:base_augment',
                N: 'chroma:netherite_flux_coil',
                P: Item.of('minecraft:potion', '{Potion:"minecraft:strength"}'),
                I: 'thermal:potion_infuser'
            },
            id: 'thermal:augments/potion_amplifier_augment'
        },
        {
            output: 'thermal:potion_duration_augment',
            pattern: [' I ', 'PBP', ' N '],
            key: {
                B: 'chroma:base_augment',
                N: 'chroma:netherite_flux_coil',
                P: Item.of('minecraft:potion', '{Potion:"minecraft:strong_strength"}'),
                I: 'thermal:potion_infuser'
            },
            id: 'thermal:augments/potion_duration_augment'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
