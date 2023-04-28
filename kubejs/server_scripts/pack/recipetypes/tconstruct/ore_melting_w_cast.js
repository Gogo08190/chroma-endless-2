onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tconstruct/ore_melting/';
    const recipes = [
        {
            ingredient: { item: 'mna:vinteum_dust' },
            result: { fluid: 'chroma:molten_mana', amount: 50 },
            temperature: 700,
            time: 58,
            id: `${id_prefix}molten_mana_from_vinteum_dust`
        },
        {
            ingredient: { tag: 'mna:ingots/vinteum' },
            result: { fluid: 'chroma:molten_mana', amount: 200 },
            temperature: 800,
            time: 99,
            id: `${id_prefix}molten_mana_from_vinteum`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
