//priority: 1000

// Items added here will get recipes for Pedestals & Cobblegen Randomizer cobblegens.
const generatableCobblestone = [
    'create:andesite_cobblestone',
    'create:diorite_cobblestone',
    'create:granite_cobblestone',
    'quark:cobbedstone',
    'undergarden:depthrock',
    'undergarden:shiverstone',
    'undergarden:tremblecrust',
    'create:dark_scoria_cobblestone',
    'create:scoria_cobblestone',
    'create:gabbro_cobblestone',
    'create:dolomite_cobblestone',
    'create:weathered_limestone_cobblestone',
    'create:limestone_cobblestone',
];
// Items added here will get recipes for Cobblegen Randomizer stonegens.
const generatableStone = [
    'minecraft:andesite',
    'minecraft:diorite',
    'minecraft:granite',
    'minecraft:red_sandstone',
    'minecraft:sandstone',
    'create:dark_scoria',
    'create:scoria',
    'create:gabbro',
    'create:dolomite',
    'create:weathered_limestone',
    'create:limestone'
];
const generatableBasalt = [];

const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

const itemsToHide = [

    /chiselsandbits:block_bit$/,
    /powah:\w+_starter/,
    'immersivepetroleum:crudeoil_bucket',
    'thermal:crude_oil_bucket',
    'thermal:creosote_bucket',
    'powah:capacitor_basic_tiny',
    'tconstruct:honey_bucket',
    'hostilenetworks:twilight_prediction',
    'draconicevolution:end_draconium_ore',
    'draconicevolution:nether_draconium_ore',
    'draconicevolution:deepslate_draconium_ore'
];

const recipesToHide = [
    {
        category: 'minecraft:crafting',
        recipes_by_id: [

        ]
    },
];

const disabledItems = [
    'create:dough',

    'mekanism:sawdust',
    'mekanism:dimensional_stabilizer',

    'pneumaticcraft:wheat_flour',

    'quark:pipe',
    'quark:potato_crate',
    'quark:beetroot_crate',
    'quark:carrot_crate',

    'thermal:beetroot_block',
    'thermal:carrot_block',
    'thermal:potato_block',
    'thermal:sugar_cane_block',
    'thermal:apple_block',
    'thermal:dynamo_magmatic',

    'rftoolsutility:tank',
    'rftoolspower:coalgenerator',

    'advancedperipherals:chunk_controller',

    'beyond_earth:water_pump',
    'beyond_earth:coal_generator',
    'beyond_earth:oxygen_loader',
    'beyond_earth_giselle_addon:electric_blast_furnace',

    'evilcraft:mace_of_destruction',

    'ironfurnaces:crystal_furnace',

    'ironfurnaces:upgrade_iron',
    'ironfurnaces:upgrade_gold',
    'ironfurnaces:upgrade_diamond',
    'ironfurnaces:upgrade_emerald',
    'ironfurnaces:upgrade_obsidian',
    'ironfurnaces:upgrade_crystal',
    'ironfurnaces:upgrade_netherite',
    'ironfurnaces:upgrade_copper',
    'ironfurnaces:upgrade_silver',
    'ironfurnaces:upgrade_obsidian2',
    'ironfurnaces:upgrade_iron2',
    'ironfurnaces:upgrade_gold2',
    'ironfurnaces:upgrade_silver2',

    'mininggadgets:mininggadget_simple',
    'mininggadgets:mininggadget_fancy',

    'angelring:leadstone_angel_ring',
    'angelring:hardened_angel_ring',
    'angelring:reinforced_angel_ring',
    'angelring:resonant_angel_ring',

    'mob_grinding_utils:spawner_upgrade_height',
    'mob_grinding_utils:spawner_upgrade_width',
    'mob_grinding_utils:entity_spawner',

    'mysticalagriculture:inferium_furnace',
    'mysticalagriculture:prudentium_furnace',
    'mysticalagriculture:tertium_furnace',
    'mysticalagriculture:imperium_furnace',
    'mysticalagriculture:supremium_furnace',
    'mysticaladaptations:insanium_furnace',

    'wstweaks:lava_blade',

    'ae2additions:1024k_crafting_storage',
    'ae2additions:4096k_crafting_storage',
    'ae2additions:16384k_crafting_storage',
    'ae2additions:65536k_crafting_storage',
    'ae2additions:super_cell_component_1k',
    'ae2additions:super_cell_component_4k',
    'ae2additions:super_cell_component_16k',
    'ae2additions:super_cell_component_64k',
    'ae2additions:super_cell_component_256k',
    'ae2additions:super_cell_component_1024k',
    'ae2additions:super_cell_component_4096k',
    'ae2additions:super_cell_component_16m',
    'ae2additions:super_cell_component_65m',
    'ae2additions:super_cell_housing',
    'ae2additions:super_cell_1k',
    'ae2additions:super_cell_4k',
    'ae2additions:super_cell_16k',
    'ae2additions:super_cell_64k',
    'ae2additions:super_cell_256k',
    'ae2additions:super_cell_1024k',
    'ae2additions:super_cell_4096k',
    'ae2additions:super_cell_16m',
    'ae2additions:super_cell_65m',

    'mysticalagriculture:sheep_seeds',
    'mysticalagriculture:cow_seeds',
    'mysticalagriculture:slime_seeds',
    'mysticalagriculture:chicken_seeds',
    'mysticalagriculture:aluminum_seeds',
    'mysticalagriculture:pig_seeds',
    'mysticalagriculture:fish_seeds',
    'mysticalagriculture:rubber_seeds',
    'mysticalagriculture:apatite_seeds',
    'mysticalagriculture:sapphire_seeds',
    'mysticalagriculture:ruby_seeds',
    'mysticalagriculture:enderman_seeds',
    'mysticalagriculture:lapis_lazuli_seeds',
    'mysticalagriculture:gold_seeds',
    'mysticalagriculture:creeper_seeds',
    'mysticalagriculture:graphite_seeds',
    'mysticalagriculture:blitz_seeds',
    'mysticalagriculture:zinc_seeds',
    'mysticalagriculture:rabbit_seeds',
    'mysticalagriculture:tin_seeds',
    'mysticalagriculture:prismarine_seeds',
    'mysticalagriculture:skeleton_seeds',
    'mysticalagriculture:copper_seeds',
    'mysticalagriculture:iron_seeds',
    'mysticalagriculture:nether_quartz_seeds',
    'mysticalagriculture:basalz_seeds',
    'mysticalagriculture:lead_seeds',
    'mysticalagriculture:redstone_seeds',
    'mysticalagriculture:blizz_seeds',
    'mysticalagriculture:silver_seeds',
    'mysticalagriculture:certus_quartz_seeds',
    'mysticalagriculture:zombie_seeds',
    'mysticalagriculture:spider_seeds',
    'mysticalagriculture:glowstone_seeds',
    'mysticalagriculture:coal_seeds',
    'mysticalagriculture:squid_seeds',
    'mysticalagriculture:mithril_seeds',
    'mysticalagriculture:cobalt_seeds',
    'mysticalagriculture:nickel_seeds',
    'mysticalagriculture:ghast_seeds',
    'mysticalagriculture:fluorite_seeds',
    'mysticalagriculture:chrome_seeds',
    'mysticalagriculture:tungsten_seeds',
    'mysticalagriculture:titanium_seeds',
    'mysticalagriculture:blaze_seeds',
    'mysticalagriculture:uranium_seeds',
    'mysticalagriculture:osmium_seeds',
    'mysticalagriculture:wither_skeleton_seeds',
    'mysticalagriculture:iridium_seeds',
    'mysticalagriculture:uraninite_seeds',
    'mysticalagriculture:diamond_seeds',
    'mysticalagriculture:emerald_seeds',
    'mysticalagriculture:platinum_seeds',
    'mysticalagriculture:gaia_spirit_seeds',
    'mysticalagriculture:dragon_egg_seeds',
    'mysticalagriculture:nether_star_seeds',
    'mysticalagriculture:turtle_seeds',
    'mysticalagriculture:aquamarine_seeds',
    'mysticalagriculture:marble_seeds',
    'mysticalagriculture:starmetal_seeds',
    'mysticalagriculture:rock_crystal_seeds',
    'mysticalagriculture:ironwood_seeds',
    'mysticalagriculture:yellorium_seeds',
    'mysticalagriculture:menril_seeds',
    'mysticalagriculture:fiery_ingot_seeds',

    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:slime_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:aluminum_essence',
    'mysticalagriculture:pig_essence',
    'mysticalagriculture:fish_essence',
    'mysticalagriculture:rubber_essence',
    'mysticalagriculture:apatite_essence',
    'mysticalagriculture:sapphire_essence',
    'mysticalagriculture:ruby_essence',
    'mysticalagriculture:enderman_essence',
    'mysticalagriculture:lapis_lazuli_essence',
    'mysticalagriculture:gold_essence',
    'mysticalagriculture:creeper_essence',
    'mysticalagriculture:graphite_essence',
    'mysticalagriculture:blitz_essence',
    'mysticalagriculture:zinc_essence',
    'mysticalagriculture:rabbit_essence',
    'mysticalagriculture:tin_essence',
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:skeleton_essence',
    'mysticalagriculture:copper_essence',
    'mysticalagriculture:iron_essence',
    'mysticalagriculture:nether_quartz_essence',
    'mysticalagriculture:basalz_essence',
    'mysticalagriculture:lead_essence',
    'mysticalagriculture:redstone_essence',
    'mysticalagriculture:blizz_essence',
    'mysticalagriculture:silver_essence',
    'mysticalagriculture:certus_quartz_essence',
    'mysticalagriculture:zombie_essence',
    'mysticalagriculture:spider_essence',
    'mysticalagriculture:glowstone_essence',
    'mysticalagriculture:coal_essence',
    'mysticalagriculture:squid_essence',
    'mysticalagriculture:mithril_essence',
    'mysticalagriculture:cobalt_essence',
    'mysticalagriculture:nickel_essence',
    'mysticalagriculture:ghast_essence',
    'mysticalagriculture:fluorite_essence',
    'mysticalagriculture:chrome_essence',
    'mysticalagriculture:tungsten_essence',
    'mysticalagriculture:titanium_essence',
    'mysticalagriculture:blaze_essence',
    'mysticalagriculture:uranium_essence',
    'mysticalagriculture:osmium_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:iridium_essence',
    'mysticalagriculture:uraninite_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:emerald_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:gaia_spirit_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:turtle_essence',
    'mysticalagriculture:aquamarine_essence',
    'mysticalagriculture:marble_essence',
    'mysticalagriculture:starmetal_essence',
    'mysticalagriculture:rock_crystal_essence',
    'mysticalagriculture:ironwood_essence',
    'mysticalagriculture:yellorium_essence',
    'mysticalagriculture:menril_essence',
    'mysticalagriculture:fiery_ingot_essence',
    'mysticalagriculture:honey_seeds',
    'mysticalagriculture:honey_essence',
    'mysticalagriculture:honey_agglomeratio',

    'mysticalagradditions:nether_star_shard',
    'mysticalagradditions:dragon_egg_chunk',
    'mysticalagradditions:neutronium_crux',
    'mysticalagradditions:gaia_spirit_crux',
    'mysticalagradditions:nether_star_crux',
    'mysticalagradditions:dragon_egg_crux',

    'functionalstorage:fluid_1',
    'functionalstorage:fluid_2',
    'functionalstorage:fluid_4'
];
