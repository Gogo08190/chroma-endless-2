onEvent('recipes', (event) => {
  const id_prefix = 'chroma:pack/alchemistry/compactor/';
	const recipes = [
    {
      input: { ingredient: { item: 'chroma:diglycidyl_ether_of_bisphenol_a' }, count: 8 },
      result: { item: 'chroma:raw_resin', count: 2 },
      id: `${id_prefix}raw_resin`
    }
  ];

  recipes.forEach((recipe) => {
      recipe.type = 'alchemistry:compactor';
      recipe.group = 'alchemistry:compactor';
      event.custom(recipe).id(recipe.id);
  });
})
