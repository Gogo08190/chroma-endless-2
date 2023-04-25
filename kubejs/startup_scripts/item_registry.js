onEvent('item.registry', (event) => {
    const items = [
      'mana_diamond_plate',
      'andesite_alloy_with_iron',
      'andesite_alloy_with_zinc'
    ];

    items.forEach((item) => {
        event.create('chroma:' + item).texture(`chroma:item/${item}`);
    });
});
