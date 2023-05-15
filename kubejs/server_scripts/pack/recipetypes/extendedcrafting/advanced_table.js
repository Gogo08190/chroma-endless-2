onEvent("recipes", (event) => {
  const id_prefix = 'chroma:pack/extendedcrafting/table/';

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CFGFC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "chroma:dielectric_paste_block"
        },
        "B": {
          "item": "ae2:smooth_sky_stone_block"
        },
        "C": {
          "item": "powah:capacitor_hardened"
        },
        "D": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "E": {
          "item": "pneumaticcraft:transistor"
        },
        "F": {
          "item": "pneumaticcraft:capacitor"
        },
        "G": {
          "item": "mekanism:alloy_reinforced"
        }
      },
      "result": {
        "item": "ae2:controller"
      }
    }
  ).id('ae2:network/blocks/controller')
});
