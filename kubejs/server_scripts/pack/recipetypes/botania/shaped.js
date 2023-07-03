onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/shaped/';
    const recipes = [
        {
            output: 'botania:apothecary_default',
            pattern: ['SPS', ' S ', 'SSS'],
            key: {
                S: 'blue_skies:lunar_stone',
                P: '#botania:petals'
            },
            id: 'botania:apothecary_default'
        },
        {
            output: 'botania:apothecary_mossy',
            pattern: ['MPM', ' M ', 'MMM'],
            key: {
                M: 'blue_skies:mossy_lunar_stonebrick',
                P: '#botania:petals'
            },
            id: 'botania:apothecary_mossy'
        },
        {
            output: 'botania:mana_distributor',
            pattern: ['LSL', 'SMS', 'LSL'],
            key: {
                M: 'botania:lens_normal',
                S: 'botania:mana_spreader',
                L: 'botania:livingrock'
            },
            id: 'botania:mana_distributor'
        },
        {
            output: 'botania:mana_pool',
            pattern: ['   ', 'SMS', 'SSS'],
            key: {
                M: 'botania:diluted_pool',
                S: 'blue_skies:lunar_stone'
            },
            id: 'botania:mana_pool'
        },
        {
            output: 'botania:alchemy_catalyst',
            pattern: ['LGL', 'BRB', 'LGL'],
            key: {
                L: 'botania:livingrock',
                G: 'botania:gaia_ingot',
                B: 'botania:brewery',
                R: 'botania:rune_autumn'
            },
            id: 'botania:alchemy_catalyst'
        },
        {
            output: 'botania:alfheim_portal',
            pattern: ['LML', 'LTL', 'LBL'],
            key: {
                L: 'botania:glimmering_livingwood_log',
                M: 'botania:mana_glass',
                T: 'botania:terrasteel_ingot',
                B: 'botania:ender_air_bottle'
            },
            id: 'botania:alfheim_portal'
        },
        {
            output: 'chroma:runic_core',
            pattern: [' A ', 'FQE', ' W '],
            key: {
                A: 'botania:rune_air',
                F: 'botania:rune_fire',
                W: 'botania:rune_water',
                E: 'botania:rune_earth',
                Q: 'blue_skies:aquite'
            },
            id: `${id_prefix}runic_core`
        },
        {
            output: 'botania:runic_altar',
            pattern: ['   ', 'LLL', 'LCL'],
            key: {
                L: 'botania:livingrock',
                C: 'chroma:runic_core'
            },
            id: 'botania:runic_altar'
        },
        {
            output: 'botania:mana_pylon',
            pattern: [' G ', 'IDI', ' G '],
            key: {
                G: '#forge:plates/gold',
                I: 'botania:manasteel_ingot',
                D: 'botania:mana_diamond'
            },
            id: 'botania:mana_pylon'
        },
        {
            output: 'botania:hourglass',
            pattern: ['GAG', 'RMR', 'GAG'],
            key: {
                G: '#forge:plates/gold',
                A: 'botania:elf_glass',
                R: 'minecraft:redstone',
                M: 'botania:manasteel_ingot'
            },
            id: 'botania:hourglass'
        },
        {
            output: 'botania:mana_tablet',
            pattern: ['LLL', 'LPL', 'LLL'],
            key: {
                L: 'botania:livingrock',
                P: 'blue_skies:pyrope_gem'
            },
            id: 'botania:mana_tablet'
        },
        {
            output: 'chroma:empty_mana_pearl',
            pattern: [' M ', 'MEM', ' M '],
            key: {
                M: 'botania:mana_glass',
                E: 'evilcraft:blood_orb_empty'
            },
            id: `${id_prefix}empty_mana_pearl`
        },
        {
            output: 'chroma:redstone_spreader_core',
            pattern: [' B ', 'BRB', ' B '],
            key: {
                R: 'minecraft:redstone',
                B: 'create:brass_ingot'
            },
            id: `${id_prefix}redstone_spreader_core`
        },
        {
            output: 'chroma:mana_spreader_core',
            pattern: [' B ', 'BEB', ' B '],
            key: {
                E: 'minecraft:emerald',
                B: 'create:brass_ingot'
            },
            id: `${id_prefix}mana_spreader_core`
        },
        {
            output: 'chroma:gaia_spreader_core',
            pattern: [' S ', 'SPS', ' S '],
            key: {
                P: 'botania:pixie_dust',
                S: 'mna:superheated_vinteum_ingot'
            },
            id: `${id_prefix}gaia_spreader_core`
        },
        {
            output: 'chroma:elven_spreader_core',
            pattern: [' E ', 'EDE', ' E '],
            key: {
                D: 'botania:dragonstone',
                E: 'botania:elementium_ingot'
            },
            id: `${id_prefix}elven_spreader_core`
        },
        {
            output: 'botania:mana_spreader',
            pattern: ['LLL', 'MP ', 'LLL'],
            key: {
                M: 'chroma:mana_spreader_core',
                P: '#botania:petals',
                L: 'botania:livingwood'
            },
            id: 'botania:mana_spreader'
        },
        {
            output: 'botania:redstone_spreader',
            pattern: ['LLL', 'RP ', 'LLL'],
            key: {
                R: 'chroma:redstone_spreader_core',
                P: '#botania:petals',
                L: 'botania:livingwood'
            },
            id: 'botania:redstone_spreader'
        },
        {
            output: 'botania:elven_spreader',
            pattern: ['DDD', 'EP ', 'DDD'],
            key: {
                E: 'chroma:elven_spreader_core',
                P: '#botania:petals',
                D: 'botania:dreamwood_log'
            },
            id: 'botania:elven_spreader'
        },

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
