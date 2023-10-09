onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/immersiveengineering/arc_furnace/';
    const recipes = [
        {
            input: 'ae2:printed_logic_processor',
            secondaries: ['ae2:printed_silicon','minecraft:redstone'],
            outputs: [Item.of('ae2:logic_processor')],
            id: `${id_prefix}logic_processor`
        },
        {
            input: 'ae2:printed_calculation_processor',
            secondaries: ['ae2:printed_silicon','minecraft:redstone'],
            outputs: [Item.of('ae2:calculation_processor')],
            id: `${id_prefix}calculation_processor`
        },
        {
            input: 'ae2:printed_engineering_processor',
            secondaries: ['ae2:printed_silicon','minecraft:redstone'],
            outputs: [Item.of('ae2:engineering_processor')],
            id: `${id_prefix}engineering_processor`
        },
        {
            input: 'chroma:imperium_seed_base',
            secondaries: [Ingredient.of('#forge:ingots/hop_graphite', 6), Ingredient.of('mysticalagriculture:imperium_essence', 4)],
            outputs: [Item.of('mysticalagriculture:hop_graphite_seeds')],
            id: 'mysticalagriculture:seed/infusion/hop_graphite'
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineeringArcFurnace(recipe.outputs, recipe.input, recipe.secondaries).id(recipe.id);
    });
});
