onEvent('item.registry', (event) => {
    const items = [];

    const ritualDummies = [];

    const reusableItemTextures = [];

    items.forEach((item) => {
        event.create(item).group('Chroma').setRegistryName('chroma', item).texture(`kubejs:item/${item}`);
    });
});
