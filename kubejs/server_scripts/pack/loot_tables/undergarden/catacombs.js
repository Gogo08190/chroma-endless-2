onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [
            {
                item: 'placebo_code_pool_15',
                rolls: {
                    min: 1.0,
                    max: 1.0,
                    type: 'minecraft:uniform'
                },
                entries: [
                    {
                        type: 'placebo:stack_entry',
                        weight: 10,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:weapon_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 20,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:pickaxe_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 20,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:scrap_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 20,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:bow_tome', count: 1 }
                    }
                ]
            }
        ]
    };

    event.addJson(`undergarden:loot_tables/chests/catacombs.json`, loot_table);
});

onEvent('generic.loot_tables', (event) => {
    const pools = [
        {
            // Incense oddities.
            rolls: { min: 0, max: 1 },
            entries: [
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:bloodthirst"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:regen"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:strength"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:resistance"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:soul_cross"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:emptiness"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:allure"}'),
                    weight: 50
                }
            ]
        },
        {
            // Magic oddities.
            rolls: { min: 6, max: 9 },
            entries: [
                {
                    item: 'botania:blacker_lotus',
                    count: [2, 4],
                    weight: 50
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"undergarden:forgotten_guardian"}'),
                    weight: 50
                },
                {
                    item: 'undergarden:music_disc_mammoth',
                    weight: 20
                },
                {
                    item: 'undergarden:music_disc_limax_maximus',
                    weight: 20
                },
                {
                    item: 'undergarden:music_disc_gloomper_anthem',
                    weight: 20
                },
                {
                    item: 'undergarden:music_disc_relict',
                    weight: 20
                }
            ]
        }
    ];

    event.modify('undergarden:chests/catacombs', (table) => {
        pools.forEach((pool) => {
            table.addPool((newPool) => {
                newPool.setUniformRolls(pool.rolls.min, pool.rolls.max);
                pool.entries.forEach((entry) => {
                    let count = entry.count ? entry.count : 1,
                        weight = entry.weight ? entry.weight : 1;

                    newPool.addItem(entry.item, weight, count);
                });
            });
        });
    });
});
