onEvent('item.tags', (event) => {
    event.add("chroma:andesite/processing", "chroma:andesite_with_iron");
    event.add("chroma:andesite/processing", "chroma:andesite_with_zinc");
    event.add("forge:plates/mana_diamond", "chroma:mana_diamond_plate");


    powahTiers.forEach(function (tier) {
        powahBlocks.forEach(function (block) {
            event.get('powah:' + block).add('powah:' + block + '_' + tier);
        });
    });
});
