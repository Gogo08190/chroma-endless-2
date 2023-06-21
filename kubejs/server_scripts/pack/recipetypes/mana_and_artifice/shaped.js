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
                P: 'mna:vinteum_dust',
                R: 'mna:chimerite_gem',
                A: 'minecraft:anvil',
                D: 'botania:manasteel_ingot',
                B: '#botania:livingwood_logs'
            },
            id: 'mna:runeforging/runic_anvil'
        },
        {
            output: 'mna:occulus',
            pattern: [' G ', 'VQV', ' D '],
            key: {
                G: 'tconstruct:clear_glass',
                V: 'mna:vinteum_dust',
                Q: 'tconstruct:queens_slime_ingot',
                D: 'mna:ornate_table'
            },
            id: 'mna:occulus'
        },
        {
            output: 'mna:runescribing_table',
            pattern: ['TRM', 'LPV', 'TAM'],
            key: {
                T: 'mna:basic_table',
                R: 'botania:mana_pearl',
                M: '#forge:ingots/manasteel',
                L: 'botania:livingwood_log',
                P: 'mna:rune_pattern',
                V: 'mna:superheated_vinteum_ingot',
                A: 'mna:transmuted_silver'
            },
            id: 'mna:runescribing/runescribing_table'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
