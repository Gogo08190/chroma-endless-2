onEvent("recipes", (event) => {
  const id_prefix = 'chroma:pack/extendedcrafting/table/';

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEDCBA",
        "BCFGHGFCB",
        "CFGHIHGFC",
        "DGHIJIHGD",
        "EHIJKJIHE",
        "DGHIJIHGD",
        "CFGHIHGFC",
        "BCFGHGFCB",
        "ABCDEDCBA"
      ],
      "key": {
        "A": {
          "item": "draconicevolution:wyvern_energy_core"
        },
        "B": {
          "item": "mekanism:pellet_antimatter"
        },
        "C": {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        "D": {
          "item": "chemlib:tantalum_ingot"
        },
        "E": {
          "item": "solarpanels:photonic_energy_tablet"
        },
        "F": {
          "item": "extendedcrafting:enhanced_ender_catalyst"
        },
        "G": {
          "item": "mysticalagriculture:supremium_ingot"
        },
        "H": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "I": {
          "item": "chroma:infinite_alloy"
        },
        "J": {
          "item": "extendedcrafting:ultimate_catalyst"
        },
        "K": {
          "item": "mekaevolution:cosmic_energy_cube"
        }
      },
      "result": {
        "item": "mekaevolution:infinite_energy_cube"
      }
    }
  ).id('mekaevolution:infinite_energy_cube')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEFGHI",
        "JKLMNOPQR",
        "STUVWXYZa",
        "bcdefg   ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         "
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:prosperity_ingot"
        },
        "B": {
          "item": "mysticalagriculture:inferium_ingot"
        },
        "C": {
          "item": "mysticalagriculture:prudentium_ingot"
        },
        "D": {
          "item": "mysticalagriculture:tertium_ingot"
        },
        "E": {
          "item": "mysticalagriculture:imperium_ingot"
        },
        "F": {
          "item": "mysticalagriculture:supremium_ingot"
        },
        "G": {
          "item": "mysticalagradditions:insanium_ingot"
        },
        "H": {
          "item": "extendedcrafting:enhanced_ender_ingot"
        },
        "I": {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        "J": {
          "item": "biggerreactors:cyanite_ingot"
        },
        "K": {
          "item": "biggerreactors:blutonium_ingot"
        },
        "L": {
          "item": "biggerreactors:ludicrite_ingot"
        },
        "M": {
          "item": "minecraft:netherite_ingot"
        },
        "N": {
          "item": "create:brass_ingot"
        },
        "O": {
          "item": "create:zinc_ingot"
        },
        "P": {
          "item": "beyond_earth:ostrum_ingot"
        },
        "Q": {
          "item": "tconstruct:manyullyn_ingot"
        },
        "R": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "S": {
          "item": "thermal:constantan_ingot"
        },
        "T": {
          "item": "botania:elementium_ingot"
        },
        "U": {
          "item": "beyond_earth:desh_ingot"
        },
        "V": {
          "item": "extendedcrafting:black_iron_ingot"
        },
        "W": {
          "item": "tconstruct:amethyst_bronze_ingot"
        },
        "X": {
          "item": "mna:superheated_purified_vinteum_ingot"
        },
        "Y": {
          "item": "botania:terrasteel_ingot"
        },
        "Z": {
          "item": "mythicbotany:alfsteel_ingot"
        },
        "a": {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        "b": {
          "item": "mekanism:ingot_refined_glowstone"
        },
        "c": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "d": {
          "item": "tconstruct:hepatizon_ingot"
        },
        "e": {
          "item": "forbidden_arcanus:arcane_gold_ingot"
        },
        "f": {
          "item": "chemlib:francium_ingot"
        },
        "g": {
          "item": "tconstruct:queens_slime_ingot"
        }
      },
      "result": {
        "item": "extendedcrafting:the_ultimate_ingot"
      }
    }
  ).id('extendedcrafting:the_ultimate_ingot')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBBBBBA",
        "BCDEFEDCB",
        "BDDGHGDDB",
        "BEGIJIGEB",
        "BFHJKJHFB",
        "BEGIJIGEB",
        "BDDGHGDDB",
        "BCDEFEDCB",
        "ABBBBBBBA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:crystaltine_block"
        },
        "B": {
          "item": "minecraft:pink_terracotta"
        },
        "C": {
          "item": "mysticalagradditions:creative_essence"
        },
        "D": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "E": {
          "item": "draconicevolution:awakened_draconium_block"
        },
        "F": {
          "item": "chroma:infinite_alloy"
        },
        "G": {
          "item": "evilcraft:garmonbozia"
        },
        "H": {
          "item": "draconicevolution:large_chaos_frag"
        },
        "I": {
          "item": "mekanism:pellet_antimatter"
        },
        "J": {
          "item": "doom:argent_energy"
        },
        "K": {
          "item": "computercraft:monitor_advanced"
        }
      },
      "result": {
        "item": "chroma:piggy_bank"
      }
    }
  ).id(`${id_prefix}piggy_bank`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCDCBAA",
        "AECFGFCEA",
        "BCHIJIHCB",
        "CKILMLINC",
        "DGJMOMJGD",
        "CKILMLINC",
        "BCHIJIHCB",
        "AECPGPCEA",
        "AABCDCBAA"
      ],
      "key": {
        "A": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "B": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "C": {
          "item": "megacells:mega_energy_cell"
        },
        "D": {
          "item": "draconicevolution:chaotic_core"
        },
        "E": {
          "item": "chroma:infinite_alloy"
        },
        "F": {
          "item": "ae2:engineering_processor"
        },
        "G": {
          "item": "chroma:ultimate_prediction"
        },
        "H": {
          "item": "ae2:singularity"
        },
        "I": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "J": {
          "item": "mekanism:pellet_antimatter"
        },
        "K": {
          "item": "ae2:logic_processor"
        },
        "L": {
          "item": "mysticalagradditions:creative_essence"
        },
        "M": {
          "item": "draconicevolution:chaotic_energy_core"
        },
        "N": {
          "item": "ae2:calculation_processor"
        },
        "O": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "P": {
          "item": "lazierae2:parallel_processor"
        }
      },
      "result": {
        "item": "ae2:creative_energy_cell"
      }
    }
  ).id(`${id_prefix}creative_energy_cell`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAABCBAAA",
        "ADEFGHIJA",
        "AKLLLLLMA",
        "BNLOOOLPB",
        "CQLOROLSC",
        "BTLOOOLUB",
        "AVLLLLLWA",
        "AXYZabcdA",
        "AAABCBAAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:fertilized_essence"
        },
        "B": {
          "item": "botania:dragonstone_block"
        },
        "C": {
          "item": "botania:pixie_dust"
        },
        "D": {
          "item": "mythicbotany:alfheim_rune"
        },
        "E": {
          "item": "botania:rune_pride"
        },
        "F": {
          "item": "botania:rune_envy"
        },
        "G": {
          "item": "botania:rune_wrath"
        },
        "H": {
          "item": "botania:rune_sloth"
        },
        "I": {
          "item": "botania:rune_greed"
        },
        "J": {
          "item": "mythicbotany:vanaheim_rune"
        },
        "K": {
          "item": "mythicbotany:midgard_rune"
        },
        "L": {
          "item": "mythicbotany:alfsteel_ingot"
        },
        "M": {
          "item": "botania:rune_summer"
        },
        "N": {
          "item": "mythicbotany:joetunheim_rune"
        },
        "O": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "P": {
          "item": "botania:rune_spring"
        },
        "Q": {
          "item": "mythicbotany:muspelheim_rune"
        },
        "R": {
          "item": "chroma:insanium_seed_base"
        },
        "S": {
          "item": "botania:rune_earth"
        },
        "T": {
          "item": "mythicbotany:niflheim_rune"
        },
        "U": {
          "item": "botania:rune_fire"
        },
        "V": {
          "item": "mythicbotany:nidavellir_rune"
        },
        "W": {
          "item": "botania:rune_water"
        },
        "X": {
          "item": "mythicbotany:helheim_rune"
        },
        "Y": {
          "item": "botania:rune_gluttony"
        },
        "Z": {
          "item": "botania:rune_lust"
        },
        "a": {
          "item": "botania:rune_mana"
        },
        "b": {
          "item": "botania:rune_winter"
        },
        "c": {
          "item": "botania:rune_autumn"
        },
        "d": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "mysticalagriculture:alfsteel_seeds"
      }
    }
  ).id(`${id_prefix}alfsteel_seeds`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBCBBA",
        "BBDEDBB",
        "BDEDEDB",
        "CEDFDEC",
        "BDEDEDB",
        "BBDEDBB",
        "ABBCBBA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:fertilized_essence"
        },
        "B": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "C": {
          "item": "powah:nitro_crystal_block"
        },
        "D": {
          "item": "powah:crystal_nitro"
        },
        "E": {
          "item": "powah:charged_snowball"
        },
        "F": {
          "item": "chroma:insanium_seed_base"
        }
      },
      "result": {
        "item": "mysticalagriculture:nitro_crystal_seeds"
      }
    }
  ).id('mysticalagriculture:seed/infusion/nitro_crystal')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBCBBA",
        "BBDEDBB",
        "BDEDEDB",
        "CEDFDEC",
        "BDEDEDB",
        "BBDEDBB",
        "ABBCBBA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:fertilized_essence"
        },
        "B": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "C": {
          "item": "beyond_earth:calorite_block"
        },
        "D": {
          "item": "beyond_earth:calorite_ingot"
        },
        "E": {
          "item": "beyond_earth:ice_shard"
        },
        "F": {
          "item": "chroma:insanium_seed_base"
        }
      },
      "result": {
        "item": "mysticalagriculture:calorite_seeds"
      }
    }
  ).id(`${id_prefix}calorite_seeds`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABBCBBAA",
        "ADEEEEEDA",
        "BEEEEEEEB",
        "BEEFFFEEB",
        "CEEFGFEEC",
        "BEEFFFEEB",
        "BEEEEEEEB",
        "ADEEEEEDA",
        "AABBCBBAA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:heat_sink"
        },
        "B": {
          "item": "mysticalagradditions:creative_essence"
        },
        "C": {
          "item": "pneumaticcraft:vortex_tube"
        },
        "D": {
          "item": "pneumaticcraft:turbine_rotor"
        },
        "E": {
          "item": "pneumaticcraft:compressed_iron_block"
        },
        "F": {
          "item": "pneumaticcraft:heat_pipe"
        },
        "G": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        }
      },
      "result": {
        "item": "pneumaticcraft:creative_compressed_iron_block"
      }
    }
  ).id(`${id_prefix}creative_compressed_iron_block`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEDCBA",
        "BFGGHGGFB",
        "CGIJKJIGC",
        "DGJLILJGD",
        "EHKIMIKHE",
        "DGJLILJGD",
        "CGIJKJIGC",
        "BFGGHGGFB",
        "ABCDEDCBA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:creative_essence"
        },
        "B": {
          "item": "mekanism:pellet_antimatter"
        },
        "C": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "D": {
          "item": "chroma:absolute_alloy"
        },
        "E": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "F": {
          "item": "mekanism:block_refined_obsidian"
        },
        "G": {
          "item": "extendedcrafting:crystaltine_block"
        },
        "H": {
          "item": "megacells:chemical_storage_cell_256m"
        },
        "I": {
          "item": "mekanism:ultimate_chemical_tank"
        },
        "J": {
          "item": "mekanism:ultimate_pressurized_tube"
        },
        "K": {
          "item": "chroma:ultimate_prediction"
        },
        "L": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:hdpe\"}"
        },
        "M": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      },
      "result": {
        "item": "mekanism:creative_chemical_tank"
      }
    }
  ).id(`${id_prefix}creative_chemical_tank`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEDCBA",
        "BFGGHGGFB",
        "CGIJKJIGC",
        "DGJLILJGD",
        "EHKIMIKHE",
        "DGJLILJGD",
        "CGIJKJIGC",
        "BFGGHGGFB",
        "ABCDEDCBA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:creative_essence"
        },
        "B": {
          "item": "mekanism:pellet_antimatter"
        },
        "C": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "D": {
          "item": "chroma:absolute_alloy"
        },
        "E": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "F": {
          "item": "mekanism:block_refined_obsidian"
        },
        "G": {
          "item": "extendedcrafting:crystaltine_block"
        },
        "H": {
          "item": "megacells:fluid_storage_cell_256m"
        },
        "I": {
          "item": "mekanism:ultimate_fluid_tank"
        },
        "J": {
          "item": "mekaevolution:infinite_mechanical_pipe"
        },
        "K": {
          "item": "chroma:ultimate_prediction"
        },
        "L": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:hdpe\"}"
        },
        "M": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      },
      "result": {
        "item": "mekanism:creative_fluid_tank"
      }
    }
  ).id(`${id_prefix}creative_fluid_tank`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEFGBA",
        "BHIJJJIHB",
        "GIKLMLKIC",
        "FJNOPONJD",
        "EJMPQPMJE",
        "DJNOPONJF",
        "CIKLMLKIG",
        "BHIJJJIHB",
        "ABGFEDCBA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "B": {
          "item": "mysticalagradditions:creative_essence"
        },
        "C": {
          "item": "evilcraft:promise_speed_0"
        },
        "D": {
          "item": "evilcraft:promise_efficiency_0"
        },
        "E": {
          "item": "evilcraft:promise_tier_3"
        },
        "F": {
          "item": "evilcraft:promise_tier_2"
        },
        "G": {
          "item": "evilcraft:promise_tier_1"
        },
        "H": {
          "item": "chroma:ultimate_prediction"
        },
        "I": {
          "item": "extendedcrafting:crystaltine_block"
        },
        "J": {
          "item": "evilcraft:dark_power_gem_block"
        },
        "K": {
          "item": "evilcraft:garmonbozia"
        },
        "L": {
          "type": "forge:nbt",
          "item": "evilcraft:flesh_rejuvenated",
          "count": 1,
          "nbt": "{Fluid:{Amount:10000,FluidName:\"evilcraft:blood\"},capacity:10000}"
        },
        "M": {
          "item": "evilcraft:inverted_potentia_empowered"
        },
        "N": {
          "item": "evilcraft:lightning_bomb"
        },
        "O": {
          "type": "forge:nbt",
          "item": "evilcraft:dark_tank",
          "count": 1,
          "nbt": "{Fluid:{Amount:0,FluidName:\"minecraft:empty\"},capacity:16000}"
        },
        "P": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:dark_gem\"}"
        },
        "Q": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      },
      "result": Item.of('evilcraft:creative_blood_drop', '{Fluid:{Amount:500,FluidName:"evilcraft:blood"},capacity:1000}')
    }
  ).id(`${id_prefix}creative_blood_drop`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ",
        " A     A ",
        "ABA   ABA",
        "ACADEDACA",
        "AFGGHGGFA",
        "AIJJJJJIA",
        "AKIILIIKA",
        " AAAAAAA ",
        "         "
      ],
      "key": {
        "A": {
          "item": "botania:shimmerrock"
        },
        "B": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "C": {
          "item": "mekanism:pellet_antimatter"
        },
        "D": {
          "item": "industrialforegoing:supreme_black_hole_tank"
        },
        "E": {
          "item": "chroma:ultimate_prediction"
        },
        "F": {
          "item": "botania:fabulous_pool"
        },
        "G": {
          "item": "mysticalagradditions:creative_essence"
        },
        "H": {
          "type": "forge:nbt",
          "item": "botania:mana_tablet",
          "count": 1,
          "nbt": "{creative:1b,mana:500000}"
        },
        "I": {
          "item": "extendedcrafting:crystaltine_block"
        },
        "J": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:manasteel\"}"
        },
        "K": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "L": {
          "item": "draconicadditions:chaos_heart"
        }
      },
      "result": {
        "item": "botania:creative_pool"
      }
    }
  ).id(`${id_prefix}creative_pool`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "      A  ",
        "      B  ",
        "    CCBC ",
        "    CBBC ",
        "    DEEC ",
        "FFDDGHED ",
        "FIIGGDD  ",
        "FJIDD    ",
        "FFF      "
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:creative_essence"
        },
        "B": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "C": {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        "D": {
          "item": "chemlib:francium_ingot"
        },
        "E": {
          "item": "chroma:eternal_cryostella_polaris"
        },
        "F": {
          "item": "chemlib:bismuth_ingot"
        },
        "G": {
          "item": "mekanism:pellet_antimatter"
        },
        "H": {
          "item": "solarpanels:creative_energy_tablet"
        },
        "I": {
          "item": "draconicevolution:chaotic_core"
        },
        "J": {
          "item": "draconicadditions:chaos_heart"
        }
      },
      "result": {
        "item": "chroma:shard_of_perserevity"
      }
    }
  ).id(`${id_prefix}shard_of_perserevity`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCDCBAA",
        "ABEEFEEBA",
        "BEGGHGGEB",
        "CEGHIHGEC",
        "DFHIJIHFD",
        "CEGHIHGEC",
        "BEGGHGGEB",
        "ABEEFEEBA",
        "AABCDCBAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:creative_essence"
        },
        "B": {
          "item": "functionalstorage:netherite_upgrade"
        },
        "C": {
          "item": "functionalstorage:ender_drawer"
        },
        "D": {
          "item": "mekaevolution:qio_drive_infinite"
        },
        "E": {
          "item": "functionalstorage:diamond_upgrade"
        },
        "F": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "G": {
          "item": "functionalstorage:gold_upgrade"
        },
        "H": {
          "item": "functionalstorage:copper_upgrade"
        },
        "I": {
          "item": "megacells:item_storage_cell_256m"
        },
        "J": {
          "item": "chroma:endless"
        }
      },
      "result": {
        "item": "functionalstorage:creative_vending_upgrade"
      }
    }
  ).id(`${id_prefix}creative_vending_upgrade`)
});
