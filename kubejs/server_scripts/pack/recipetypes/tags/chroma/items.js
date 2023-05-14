/* Items to add to tags
** (It's ["<tag>", "<item>"]) */
const TAGS_ITEMS = [
    ["chroma:andesite/processing", "chroma:andesite_with_iron"],
    ["chroma:andesite/processing", "chroma:andesite_with_zinc"],
    ["forge:plates/mana_diamond", "chroma:mana_diamond_plate"],
    // Waxes / Honeycomb
    ["forge:wax", "forbidden_arcanus:wax"],
    ["forge:wax", "minecraft:honeycomb"],

    ["forge:storage_blocks/mana_diamond", "botania:mana_diamond_block"],
    ["forge:storage_blocks/dragonstone", "botania:dragonstone_block"],
    ["forge:storage_blocks/andesite_alloy", "chroma:andesite_alloy_block"],

    ["forge:rods/electrum", "chroma:electrum_rod"],
    ["forge:rods/manasteel", "chroma:manasteel_rod"],
    ["forge:rods/netherite", "chroma:netherite_rod"],
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
