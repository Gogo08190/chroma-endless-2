/* Items to add to tags
** (It's ["<tag>", "<item>"]) */
const TAGS_ITEMS = [
    ["chroma:andesite/processing", "chroma:andesite_with_iron"],
    ["chroma:andesite/processing", "chroma:andesite_with_zinc"],
    ["forge:plates/mana_diamond", "chroma:mana_diamond_plate"],
    // Waxes / Honeycomb
    ["forge:wax", "forbidden_arcanus:wax"],
    ["forge:wax", "minecraft:honeycomb"]
]

onEvent('item.tags', (event) => {
    TAGS_ITEMS.forEach((tag) => {
        event.add(tag[0], tag[1]);
    });

    powahTiers.forEach(function (tier) {
        powahBlocks.forEach(function (block) {
            event.get('powah:' + block).add('powah:' + block + '_' + tier);
        });
    });
});
