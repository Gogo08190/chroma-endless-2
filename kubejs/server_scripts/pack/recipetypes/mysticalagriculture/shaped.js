onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mysticalagriculture/shaped/';
    const recipes = [
        {
            output: 'mysticalagriculture:inferium_farmland',
            pattern: ['FEF', 'EDE', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagriculture:inferium_essence',
                D: 'thermal:phytosoil'
            },
            id: 'mysticalagriculture:inferium_farmland'
        },
        {
            output: 'mysticalagriculture:prudentium_farmland',
            pattern: ['FEF', 'EDE', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagriculture:prudentium_essence',
                D: 'mysticalagriculture:inferium_farmland'
            },
            id: 'mysticalagriculture:prudentium_farmland'
        },
        {
            output: 'mysticalagriculture:tertium_farmland',
            pattern: ['FEF', 'EDE', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagriculture:tertium_essence',
                D: 'mysticalagriculture:prudentium_farmland'
            },
            id: 'mysticalagriculture:tertium_farmland'
        },
        {
            output: 'mysticalagriculture:imperium_farmland',
            pattern: ['FEF', 'EDE', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagriculture:imperium_essence',
                D: 'mysticalagriculture:tertium_farmland'
            },
            id: 'mysticalagriculture:imperium_farmland'
        },
        {
            output: 'mysticalagriculture:supremium_farmland',
            pattern: ['FEF', 'EDE', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagriculture:supremium_essence',
                D: 'mysticalagriculture:imperium_farmland'
            },
            id: 'mysticalagriculture:supremium_farmland'
        },
        {
            output: 'mysticalagradditions:insanium_farmland',
            pattern: ['FEF', 'EDE', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagradditions:insanium_essence',
                D: 'mysticalagriculture:supremium_farmland'
            },
            id: 'mysticalagradditions:insanium_farmland'
        },
        {
            output: Item.of('mysticalagriculture:mystical_fertilizer', 4),
            pattern: ['FEF', 'EDE', 'FEF'],
            key: {
                F: 'industrialforegoing:fertilizer',
                E: 'mysticalagriculture:fertilized_essence',
                D: '#forge:gems/mana_diamond'
            },
            id: 'mysticalagriculture:mystical_fertilizer_better'
        },
        {
            output: 'mysticalagriculture:soulium_dagger',
            pattern: [' I ', 'GSG', ' I '],
            key: {
                I: 'mysticalagriculture:soulium_ingot',
                G: 'mysticalagriculture:soulium_gemstone',
                S: Item.of('evilcraft:vein_sword').weakNBT()
            },
            id: 'mysticalagriculture:soulium_dagger'
        },
        {
            output: 'mysticalagriculture:air_agglomeratio',
            pattern: ['RS', 'DM'],
            key: {
                R: 'botania:rune_air',
                S: 'engineersdecor:dense_grit_sand_block',
                D: 'minecraft:coarse_dirt',
                M: 'mna:mote_air'
            },
            id: 'mysticalagriculture:air_agglomeratio'
        },
        {
            output: 'mysticalagriculture:earth_agglomeratio',
            pattern: ['RS', 'DM'],
            key: {
                R: 'botania:rune_earth',
                S: 'engineersdecor:dense_grit_sand_block',
                D: 'minecraft:coarse_dirt',
                M: 'mna:mote_earth'
            },
            id: 'mysticalagriculture:earth_agglomeratio'
        },
        {
            output: 'mysticalagriculture:fire_agglomeratio',
            pattern: ['RS', 'DM'],
            key: {
                R: 'botania:rune_fire',
                S: 'engineersdecor:dense_grit_sand_block',
                D: 'minecraft:coarse_dirt',
                M: 'mna:mote_fire'
            },
            id: 'mysticalagriculture:fire_agglomeratio'
        },
        {
            output: Item.of('undergarden:utherium_crystal', 3),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'mysticalagriculture:utherium_essence'
            },
            id: `${id_prefix}utherium_crystal`
        },
        {
            output: Item.of('undergarden:regalium_crystal', 3),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'mysticalagriculture:regalium_essence'
            },
            id: `${id_prefix}regalium_crystal`
        },
        {
            output: Item.of('beyond_earth:desh_ingot', 3),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'mysticalagriculture:desh_essence'
            },
            id: `${id_prefix}desh_ingot`
        },
        {
            output: Item.of('undergarden:cloggrum_ingot', 3),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'mysticalagriculture:cloggrum_essence'
            },
            id: `${id_prefix}cloggrum_ingot`
        },
        {
            output: Item.of('undergarden:forgotten_ingot', 3),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'mysticalagriculture:forgotten_essence'
            },
            id: `${id_prefix}forgotten_ingot`
        },
        {
            output: Item.of('immersiveengineering:ingot_steel', 3),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'mysticalagriculture:steel_essence'
            },
            id: 'mysticalagriculture:essence/common/steel_ingot'
        },
        {
            output: Item.of('beyond_earth:ostrum_ingot', 3),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'mysticalagriculture:ostrum_essence'
            },
            id: `${id_prefix}ostrum_ingot`
        },
        {
            output: Item.of('mythicbotany:alfsteel_ingot', 2),
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'mysticalagriculture:alfsteel_essence'
            },
            id: `${id_prefix}alfsteel_ingot`
        },
        {
            output: Item.of('beyond_earth:calorite_ingot', 2),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'mysticalagriculture:calorite_essence'
            },
            id: `${id_prefix}calorite_ingot`
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
