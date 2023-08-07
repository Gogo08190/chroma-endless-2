onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mininggadget/shaped/';
    const recipes = [
        {
            output: 'mininggadgets:mininggadget',
            pattern: ['DSB', 'DAV', 'DCS'],
            key: {
                D: '#forge:gems/diamond',
                S: '#forge:ingots/steel',
                B: '#forge:ingots/brass',
                A: Item.of('immersiveengineering:capacitor_hv').ignoreNBT(),
                V: '#blue_skies:ingots/ventium',
                C: '#forge:circuits/basic'
            },
            id: 'mininggadgets:mininggadget'
        },
        {
            output: 'mininggadgets:upgrade_empty',
            pattern: ['AEA', 'EPE', 'AEA'],
            key: {
                A: '#mekanism:alloys/infused',
                E: 'powah:steel_energized',
                P: '#forge:plates/aluminum'
            },
            id: 'mininggadgets:upgrade_empty'
        },
        {
            output: 'mininggadgets:modificationtable',
            pattern: ['SSS', 'ABA', 'SSS'],
            key: {
                A: '#forge:circuits/advanced',
                B: 'mininggadgets:upgrade_empty',
                S: '#forge:ingots/steel'
            },
            id: 'mininggadgets:modificationtable'
        },
        {
            output: 'mininggadgets:upgrade_fortune_1',
            pattern: ['SLS', 'LBL', 'SLS'],
            key: {
                L: '#forge:storage_blocks/lapis',
                B: 'mininggadgets:upgrade_empty',
                S: '#forge:storage_blocks/steel'
            },
            id: 'mininggadgets:upgrade_fortune_1'
        },
        {
            output: 'mininggadgets:upgrade_fortune_2',
            pattern: ['EGE', 'GBG', 'EGE'],
            key: {
                G: '#forge:storage_blocks/rose_gold',
                B: 'mininggadgets:upgrade_fortune_1',
                S: 'powah:energized_steel_block'
            },
            id: 'mininggadgets:upgrade_fortune_2'
        },
        {
            output: 'mininggadgets:upgrade_fortune_3',
            pattern: ['CDC', 'CBC', 'CDC'],
            key: {
                D: 'rftoolsbase:infused_diamond',
                B: 'mininggadgets:upgrade_fortune_2',
                C: 'powah:blazing_crystal_block'
            },
            id: 'mininggadgets:upgrade_fortune_3'
        },
        {
            output: 'mininggadgets:upgrade_battery_1',
            pattern: ['SAS', 'ABA', 'SAS'],
            key: {
                S: '#forge:ingots/steel',
                B: 'mininggadgets:upgrade_empty',
                A: '#forge:alloys/advanced'
            },
            id: 'mininggadgets:upgrade_battery_1'
        },
        {
            output: 'mininggadgets:upgrade_battery_2',
            pattern: ['SHS', 'HBH', 'SHS'],
            key: {
                S: '#forge:ingots/steel',
                B: 'mininggadgets:upgrade_battery_1',
                H: 'powah:capacitor_hardened'
            },
            id: 'mininggadgets:upgrade_battery_2'
        },
        {
            output: 'mininggadgets:upgrade_battery_3',
            pattern: ['STS', 'TBT', 'STS'],
            key: {
                S: '#forge:ingots/steel',
                B: 'mininggadgets:upgrade_battery_2',
                T: '#forge:ingots/terrasteel'
            },
            id: 'mininggadgets:upgrade_battery_3'
        },
        {
            output: 'mininggadgets:upgrade_silk',
            pattern: ['SGS', 'CBC', 'SSS'],
            key: {
                S: '#forge:slimeballs',
                B: 'mininggadgets:upgrade_empty',
                G: 'minecraft:golden_apple',
                C: 'tconstruct:silky_cloth'
            },
            id: 'mininggadgets:upgrade_silk'
        },
        {
            output: 'mininggadgets:upgrade_magnet',
            pattern: ['AEA', 'FBM', 'AEA'],
            key: {
                F: 'chroma:fluxo_core',
                B: 'mininggadgets:upgrade_empty',
                M: 'chroma:magnet_core',
                E: '#forge:ingots/electrum',
                A: '#forge:alloys/advanced'
            },
            id: 'mininggadgets:upgrade_magnet'
        },
        {
            output: 'mininggadgets:upgrade_efficiency_1',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                B: 'mininggadgets:upgrade_empty',
                A: '#forge:alloys/advanced'
            },
            id: 'mininggadgets:upgrade_efficiency_1'
        },
        {
            output: 'mininggadgets:upgrade_efficiency_2',
            pattern: ['FFF', 'FBF', 'FFF'],
            key: {
                B: 'mininggadgets:upgrade_efficiency_1',
                F: '#blue_skies:ingots/falsite'
            },
            id: 'mininggadgets:upgrade_efficiency_2'
        },
        {
            output: 'mininggadgets:upgrade_efficiency_3',
            pattern: ['EEE', 'EBE', 'EEE'],
            key: {
                B: 'mininggadgets:upgrade_efficiency_2',
                E: 'powah:steel_energized'
            },
            id: 'mininggadgets:upgrade_efficiency_3'
        },
        {
            output: 'mininggadgets:upgrade_efficiency_4',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                B: 'mininggadgets:upgrade_efficiency_3',
                A: '#forge:alloys/elite'
            },
            id: 'mininggadgets:upgrade_efficiency_4'
        },
        {
            output: 'mininggadgets:upgrade_efficiency_5',
            pattern: ['CCC', 'CAC', 'CCC'],
            key: {
                B: 'mininggadgets:upgrade_efficiency_4',
                C: '#forge:ingots/cloggrum'
            },
            id: 'mininggadgets:upgrade_efficiency_5'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
