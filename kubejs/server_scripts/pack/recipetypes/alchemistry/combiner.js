onEvent('recipes', (event) => {
  const id_prefix = 'chroma:pack/alchemistry/combiner/';
	const recipes = [
    {
      input: [
        { ingredient: { item: 'chemlib:carbon' }, count: 21 },
        { ingredient: { item: 'chemlib:hydrogen' }, count: 24 },
        { ingredient: { item: 'chemlib:oxygen' }, count: 4 }
      ],
      result: {
        item: 'chroma:diglycidyl_ether_of_bisphenol_a'
      },
      id: `${id_prefix}diglycidyl_ether_of_bisphenol_a`
    },
    {
      input: [
        { ingredient: { item: 'chemlib:nickel_chloride' }, count: 8 },
        { ingredient: { item: 'chroma:diglycidyl_ether_of_bisphenol_a' }, count: 8 }
      ],
      result: { item: 'chroma:raw_resin', count: 2 },
      id: `${id_prefix}raw_resin`
    },
    {
      input: [
        { ingredient: { item: 'mysticalagriculture:tertium_essence' }, count: 4 },
      ],
      result: { item: 'mysticalagriculture:imperium_essence', count: 1 },
      id: 'mysticalagriculture:imperium_essence'
    },
  ];

  recipes.forEach((recipe) => {
      recipe.type = 'alchemistry:combiner';
      recipe.group = 'alchemistry:combiner';
      event.custom(recipe).id(recipe.id);
  });
})
