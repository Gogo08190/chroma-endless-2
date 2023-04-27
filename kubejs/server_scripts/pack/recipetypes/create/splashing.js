onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/splashing/';
    const recipes = [
        {
            outputs: [
                'create:andesite_alloy',
                Item.of('create:andesite_alloy').chance(0.5)
            ],
            input: 'chroma:andesite_with_zinc',
            id: `${id_prefix}andesite_alloy_from_andesite_with_zinc`
        },
        {
            outputs: [
                'create:andesite_alloy',
                Item.of('create:andesite_alloy').chance(0.5)
            ],
            input: 'chroma:andesite_with_iron',
            id: `${id_prefix}andesite_alloy_from_andesite_with_iron`
        }
    ];
    
    const rusty_items = [
        'quark:rusty_iron_plate_slab',
        'quark:rusty_iron_plate_stairs',
        'quark:rusty_iron_plate_vertical_slab',
        'dustrial_decor:rusty_sheet_metal',
        'dustrial_decor:rusty_sheet_metal_plating',
        'dustrial_decor:rusty_sheet_metal_plating_slab',
        'dustrial_decor:rusty_sheet_metal_plating_stairs',
        'dustrial_decor:rusty_sheet_metal_paneling',
        'dustrial_decor:rusty_sheet_metal_siding',
        'dustrial_decor:rusty_sheet_metal_walling',
        'dustrial_decor:rusty_sheet_metal_treading',
        'dustrial_decor:rusty_sheet_metal_treading_slab',
        'dustrial_decor:rusty_sheet_metal_treading_stairs',
        'dustrial_decor:rusty_sheet_metal_trapdoor',
        'dustrial_decor:rusty_sheet_metal_door'
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.outputs, recipe.input).id(recipe.id);
    });

    rusty_items.forEach((item) => {
        event.recipes.create.splashing([item], item.replace('rusty_', '')).id(`${id_prefix}${item.split(':')[1]}`);
    });
});
