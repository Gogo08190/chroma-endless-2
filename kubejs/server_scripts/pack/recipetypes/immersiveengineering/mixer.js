onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/immersiveengineering/mixer/';
    const recipes = [
        {
        inputs:[{tag:"forge:dusts/redstone"}],
        result:{fluid:"immersiveengineering:redstone_acid",amount:250},
        fluid:{tag:"mantle:water",amount:250},
        energy:1600,
        id: "immersiveengineering:mixer/redstone_acid"
    }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type:"immersiveengineering:mixer",
            inputs : recipe.inputs,
            result : recipe.result,
            fluid : recipe.fluid,
            energy : recipe.energy
        }).id(recipe.id)
    });
});
