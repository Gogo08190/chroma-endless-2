onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lychee/item_inside/';
    const recipes = [
        {
            input: 'ae2:fluix_pearl',
            block_in: {
                blocks: ['chroma:molten_mana']
            },
            // Only check the conditions once, then end. Next check happens after 1 second
            max_repeats: 1,
            post: [
                // If around noon, convert to charoite
                {
                    type: 'drop_item',
                    item: 'blue_skies:charoite',
                    contextual: [
                      {
                        type: 'time',
                        value: { min: 4000, max: 8000 },
                        period: 24000,
                        description: 'recipes.lychee.item_inside.charoite.condition.description'
                      }
                    ]
                },
                // If around midnight, convert to moonstone
                {
                    type: 'drop_item',
                    item: 'blue_skies:moonstone_shard',
                    contextual: [
                      {
                        type: 'time',
                        value: { min: 16000, max: 20000 },
                        period: 24000,
                        description: 'recipes.lychee.item_inside.moonstone.condition.description'
                      }
                    ]
                },
                // Otherwise do nothing (prevents the item from being destroyed)
                {
                    type: 'prevent_default',
                    contextual: [
                        {
                            type: 'and',
                            contextual: [
                                {
                                    type: 'not',
                                    contextual: { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 }
                                },
                                {
                                    type: 'not',
                                    contextual: { type: 'time', value: { min: 16000, max: 20000 }, period: 24000 }
                                }
                            ]
                        }
                    ]
                }
            ],
            id: `${id_prefix}fluix_pearl_to_moonstone_or_charoite`
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:item_inside';
        recipe.item_in = Item.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
