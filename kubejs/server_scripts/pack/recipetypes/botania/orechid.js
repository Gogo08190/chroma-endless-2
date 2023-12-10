onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/orechid/';
    const recipes = [
      {
        input: 'blue_skies:turquoise_stone',
        output: {
          type: 'block',
          block: 'blue_skies:everbright_diopside_ore'
        },
        weight: 50,
        id: `${id_prefix}everbright_diopside_ore`
      },
      {
        input: 'blue_skies:turquoise_stone',
        output: {
          type: 'block',
          block: 'blue_skies:everbright_pyrope_ore'
        },
        weight: 125,
        id: `${id_prefix}everbright_pyrope_ore`
      },
      {
        input: 'blue_skies:turquoise_stone',
        output: {
          type: 'block',
          block: 'blue_skies:everbright_aquite_ore'
        },
        weight: 150,
        id: `${id_prefix}everbright_aquite_ore`
      },
      {
        input: 'blue_skies:turquoise_stone',
        output: {
          type: 'block',
          block: 'blue_skies:everbright_charoite_ore'
        },
        weight: 100,
        id: `${id_prefix}everbright_charoite_ore`
      },
      {
        input: 'blue_skies:turquoise_stone',
        output: {
          type: 'block',
          block: 'blue_skies:everbright_moonstone_ore'
        },
        weight: 29371,
        id: `${id_prefix}everbright_moonstone_ore`
      },
      {
        input: 'blue_skies:turquoise_stone',
        output: {
          type: 'block',
          block: 'blue_skies:falsite_ore'
        },
        weight: 29371,
        id: `${id_prefix}falsite_ore`
      },
      {
        input: 'blue_skies:turquoise_stone',
        output: {
          type: 'block',
          block: 'blue_skies:ventium_ore'
        },
        weight: 67415,
        id: `${id_prefix}ventium_ore`
      },
      {
        input: 'blue_skies:lunar_stone',
        output: {
          type: 'block',
          block: 'blue_skies:everdawn_diopside_ore'
        },
        weight: 50,
        id: `${id_prefix}everdawn_diopside_ore`
      },
      {
        input: 'blue_skies:lunar_stone',
        output: {
          type: 'block',
          block: 'blue_skies:everdawn_pyrope_ore'
        },
        weight: 125,
        id: `${id_prefix}everdawn_pyrope_ore`
      },
      {
        input: 'blue_skies:lunar_stone',
        output: {
          type: 'block',
          block: 'blue_skies:everdawn_aquite_ore'
        },
        weight: 150,
        id: `${id_prefix}everdawn_aquite_ore`
      },
      {
        input: 'blue_skies:lunar_stone',
        output: {
          type: 'block',
          block: 'blue_skies:everdawn_charoite_ore'
        },
        weight: 100,
        id: `${id_prefix}everdawn_charoite_ore`
      },
      {
        input: 'blue_skies:lunar_stone',
        output: {
          type: 'block',
          block: 'blue_skies:everdawn_moonstone_ore'
        },
        weight: 560,
        id: `${id_prefix}everdawn_moonstone_ore`
      },
      {
        input: 'blue_skies:lunar_stone',
        output: {
          type: 'block',
          block: 'blue_skies:horizonite_ore'
        },
        weight: 250,
        id: `${id_prefix}horizonite_ore`
      },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:orechid',
                input: recipe.input,
                output: recipe.output,
                weight: recipe.weight
            })
            .id(recipe.id);
    });
});
