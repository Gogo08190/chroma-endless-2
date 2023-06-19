onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mna/shaped/';
    const recipes = [
        {
            output: 'mna:guide_book',
            pattern: ['IVI', 'VCV', 'IVI'],
            key: {
                V: 'mna:vellum',
                I: '#mna:ingots/vinteum',
                C: 'create:precision_mechanism'
            },
            id: `${id_prefix}guide_book`
        },
        {
            output: 'mna:inscription_table',
            pattern: [' C ', 'FBV', ' T '],
            key: {
                V: 'mna:vellum',
                C: '#chipped:blue_carpet',
                F: 'mna:animated_quill',
                B: 'mna:guide_book',
                T: 'mna:ornate_table'
            },
            id: 'mna:inscription_table'
        },
        {
            output: 'mna:manaweaving_altar',
            pattern: ['CVC', 'VSV', 'CDC'],
            key: {
                C: '#mna:gems/chimerite',
                V: '#mna:ingots/vinteum',
                S: Item.of('tconstruct:large_plate', '{Material:"tconstruct:hepatizon"}'),
                D: 'minecraft:polished_deepslate_slab'
            },
            id: 'mna:manaweaving_altar'
        },
        {
            output: 'mna:runeforge',
            pattern: ['S S', 'RAR', 'DBD'],
            key: {
                S: 'mna:transmuted_silver',
                R: '#mna:stone_runes',
                A: 'mna:decoration/arcane_sandstone',
                D: 'mna:decoration/arcane_stone',
                B: 'tconstruct:scorched_bricks'
            },
            id: 'mna:runeforge'
        },
        {
            output: 'mna:runic_anvil',
            pattern: ['PPP', 'RAR', 'DBD'],
            key: {
                D: 'mna:transmuted_silver',
                R: '#mna:gems/chimerite',
                A: 'minecraft:anvil',
                B: 'create:brass_casing'
            },
            id: 'mna:runic_anvil'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
