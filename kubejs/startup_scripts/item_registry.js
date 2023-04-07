onEvent('item.registry', (event) => {
    const items = [];

    const ritualDummies = [];

    const reusableItemTextures = [];

    items.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
});
