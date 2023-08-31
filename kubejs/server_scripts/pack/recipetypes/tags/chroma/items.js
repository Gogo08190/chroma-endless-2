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

    ["forge:rods/electrum", "chroma:electrum_rod"],
    ["forge:rods/manasteel", "chroma:manasteel_rod"],
    ["forge:rods/netherite", "chroma:netherite_rod"],

    ["forge:ores/crystaltine", "chroma:glacio_crystaltine_ore"],
    ["mekanism:crystals", "chroma:crystaltine_crystal"],
    ["mekanism:crystals/crystaltine", "chroma:crystaltine_crystal"],
    ["mekanism:shards", "chroma:crystaltine_shard"],
    ["mekanism:shards/crystaltine", "chroma:crystaltine_shard"],
    ["mekanism:clumps", "chroma:crystaltine_clump"],
    ["mekanism:clumps/crystaltine", "chroma:crystaltine_clump"],

    ["forge:ores/bitumen", "thermal:oil_sand"],
    ["forge:ores/bitumen", "thermal:oil_red_sand"],
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
