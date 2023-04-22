onEvent('item.registry', (event) => {
    const items = [];

    items.forEach((item) => {
        event.create('chroma:' + item).texture(`kubejs:item/${item}`);
    });
});
