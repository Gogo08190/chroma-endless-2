onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/powah/energizing/';
    const recipes = [
        {
            ingredients: [
                { item: 'immersiveengineering:ingot_steel' },
                { item: 'thermal:electrum_ingot' }
            ],
            energy: 10000,
            result: {
                item: 'powah:steel_energized',
                count: 1
            },
            id: 'powah:energizing/energized_steel'
        },
        {
            ingredients: [
                { item: 'immersiveengineering:plate_steel' },
                { item: 'immersiveengineering:plate_steel' },
                { item: 'powah:dielectric_rod' },
                { item: 'powah:dielectric_rod' },
                { item: 'powah:dielectric_rod_horizontal' },
                { item: 'powah:dielectric_rod_horizontal' }
            ],
            energy: 10000,
            result: {
                item: 'powah:dielectric_casing',
                count: 1
            },
            id: 'powah:crafting/dielectric_casing_2'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});