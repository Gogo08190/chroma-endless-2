onEvent("recipes", (event) => {
  const id_prefix = 'chroma:pack/extendedcrafting/table/';

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A ",
        " B ",
        "BCB"
      ],
      "key": {
        "A": {
          "item": "minecraft:ender_eye"
        },
        "B": {
          "item": "extendedcrafting:ender_ingot"
        },
        "C": {
          "item": "mna:superheated_purified_vinteum_ingot"
        }
      },
      "result": {
        "item": "extendedcrafting:ender_alternator"
      }
    }
  ).id('extendedcrafting:ender_alternator')
});
