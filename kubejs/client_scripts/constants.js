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

    'wstweaks:lava_blade'
];
