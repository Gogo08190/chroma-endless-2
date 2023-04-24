onEvent('item.registry', (event) => {
    const items = [
      'mana_diamond_plate'
    ];

    items.forEach((item) => {
        event.create('chroma:' + item).texture(`chroma:item/${item}`);
    });
});
