onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/immersiveengineering/shaped/';
    const recipes = [
        {
            output: 'immersiveengineering:capacitor_lv',
            pattern: ['TPT', 'LRL', 'TPT'],
            key: {
                T: 'immersiveengineering:treated_wood_horizontal',
                P: '#forge:plates/lead',
                L: 'immersiveengineering:connector_lv',
                R: 'immersiveengineering:redstone_acid_bucket'
            },
            id: 'immersiveengineering:crafting/capacitor_lv'
        },
        {
            output: 'immersiveengineering:capacitor_mv',
            pattern: ['TPT', 'LRL', 'TIT'],
            key: {
                T: 'immersiveengineering:treated_wood_horizontal',
                P: '#forge:plates/nickel',
                I: '#forge:plates/iron',
                L: '#forge:ingots/steel',
                R: 'immersiveengineering:capacitor_lv'
            },
            id: 'immersiveengineering:crafting/capacitor_mv'
        },
        {
            output: 'immersiveengineering:capacitor_hv',
            pattern: ['TPT', 'LRL', 'TIT'],
            key: {
                T: 'immersiveengineering:treated_wood_horizontal',
                P: '#forge:plates/aluminum',
                I: '#forge:ingots/hop_graphite',
                L: '#forge:ingots/steel',
                R: 'immersiveengineering:capacitor_mv'
            },
            id: 'immersiveengineering:crafting/capacitor_hv'
        },
        {
            output: 'immersiveengineering:windmill',
            pattern: ['WWW', 'WSW', 'WWW'],
            key: {
                W: 'immersiveengineering:windmill_blade',
                S: '#forge:ingots/steel'
            },
            id: 'immersiveengineering:crafting/windmill'
        },
        {
            output: 'immersiveengineering:watermill',
            pattern: ['WWW', 'WSW', 'WWW'],
            key: {
                W: 'immersiveengineering:waterwheel_segment',
                S: '#forge:ingots/steel'
            },
            id: 'immersiveengineering:crafting/watermill'
        },
        {
            output: 'immersiveengineering:dynamo',
            pattern: ['WWW', 'RCS', 'WWW'],
            key: {
                W: '#forge:ingots/steel',
                R: '#forge:dusts/redstone',
                C: 'immersiveengineering:coil_lv',
                S: 'immersiveengineering:component_iron'
            },
            id: 'immersiveengineering:crafting/dynamo'
        },
        {
            output: 'immersiveengineering:coil_lv',
            pattern: ['WWW', 'WSW', 'WWW'],
            key: {
                W: 'immersiveengineering:wirecoil_copper',
                S: '#forge:ingots/steel'
            },
            id: 'immersiveengineering:crafting/coil_lv'
        },
        {
            output: 'immersiveengineering:coil_mv',
            pattern: ['WWW', 'WSW', 'WWW'],
            key: {
                W: 'immersiveengineering:wirecoil_electrum',
                S: '#forge:ingots/steel'
            },
            id: 'immersiveengineering:crafting/coil_mv'
        },
        {
            output: 'immersiveengineering:coil_hv',
            pattern: ['WWW', 'WSW', 'WWW'],
            key: {
                W: 'immersiveengineering:wirecoil_steel',
                S: '#forge:ingots/steel'
            },
            id: 'immersiveengineering:crafting/coil_hv'
        },
        {
            output: Item.of('immersiveengineering:rs_engineering', 2),
            pattern: ['STS', 'TRT', 'STS'],
            key: {
                S: '#forge:sheetmetals/iron',
                T: 'create:electron_tube',
                R: '#forge:storage_blocks/redstone'
            },
            id: 'immersiveengineering:crafting/rs_engineering'
        },
        {
            output: Item.of('immersiveengineering:heavy_engineering', 2),
            pattern: ['STS', 'CRC', 'STS'],
            key: {
                S: '#forge:sheetmetals/steel',
                T: '#forge:plates/electrum',
                C: 'immersiveengineering:component_steel',
                R: 'create:electron_tube'
            },
            id: 'immersiveengineering:crafting/heavy_engineering'
        },
        {
            output: Item.of('immersiveengineering:light_engineering', 2),
            pattern: ['STS', 'CRC', 'STS'],
            key: {
                S: '#forge:sheetmetals/iron',
                T: '#forge:plates/copper',
                C: 'immersiveengineering:component_iron',
                R: 'create:electron_tube'
            },
            id: 'immersiveengineering:crafting/light_engineering'
        },
        {
            output: Item.of('immersiveengineering:generator', 2),
            pattern: ['SCS', 'CTC', 'SCS'],
            key: {
                S: '#forge:sheetmetals/steel',
                C: 'immersiveengineering:coil_mv',
                T: 'create:electron_tube'
            },
            id: 'immersiveengineering:crafting/generator'
        },
        {
            output: Item.of('immersiveengineering:radiator', 2),
            pattern: ['SCS', 'CTC', 'SCS'],
            key: {
                S: '#forge:sheetmetals/steel',
                C: '#forge:plates/copper',
                T: 'create:propeller'
            },
            id: 'immersiveengineering:crafting/radiator'
        },
        {
            output: 'immersiveengineering:workbench',
            pattern: ['STT', 'C F'],
            key: {
                S: '#forge:ingots/steel',
                T: 'immersiveengineering:slab_treated_wood_horizontal',
                C: 'immersiveengineering:craftingtable',
                F: 'immersiveengineering:treated_fence'
            },
            id: 'immersiveengineering:crafting/workbench'
        },
        {
            output: 'immersiveengineering:cloche',
            pattern: ['GLG', 'GBG', 'TCT'],
            key: {
                G: '#forge:glass',
                L: 'immersiveengineering:light_bulb',
                B: '#botanypots:hopper_botany_pots',
                T: 'immersiveengineering:treated_wood_horizontal',
                C: 'immersiveengineering:component_steel'
            },
            id: 'immersiveengineering:crafting/cloche'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
