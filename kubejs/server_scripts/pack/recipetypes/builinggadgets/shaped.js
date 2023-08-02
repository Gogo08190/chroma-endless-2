onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/buildinggadgets/shaped/';
    const recipes = [
      {
        output: 'buildinggadgets:gadget_building',
          pattern: ['PAP', 'DAD', 'PLP'],
          key: {
              P: '#forge:plates/iron',
              D: '#forge:plates/mana_diamond',
              A: '#mekanism:alloys/infused',
              L: '#forge:gems/lapis'
          },
          id: 'buildinggadgets:gadget_building'
      },
      {
        output: 'buildinggadgets:gadget_exchanging',
          pattern: ['PAP', 'DAD', 'PLP'],
          key: {
              P: '#forge:plates/iron',
              D: '#forge:plates/mana_diamond',
              A: '#forge:gems/lapis',
              L: 'create:electron_tube'
          },
          id: 'buildinggadgets:gadget_exchanging'
      },
      {
        output: 'buildinggadgets:gadget_copy_paste',
          pattern: ['PAP', 'DAD', 'PLP'],
          key: {
              P: '#forge:plates/iron',
              D: 'botanicalmachinery:mana_emerald',
              A: '#mekanism:alloys/infused',
              L: '#forge:gems/lapis'
          },
          id: 'buildinggadgets:gadget_copy_paste'
      },
      {
        output: 'buildinggadgets:gadget_destruction',
          pattern: ['PAP', 'DAD', 'PLP'],
          key: {
              P: '#forge:plates/iron',
              D: 'rftoolsbase:infused_enderpearl',
              A: 'create:electron_tube',
              L: '#forge:gems/lapis'
          },
          id: 'buildinggadgets:gadget_destruction'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
