onEvent('worldgen.add', event => {
  const { anchors } = event

  event.addOre(ore => {
    ore.id = 'chroma:crystaltine_ore'
    ore.biomes = /^beyond_earth:glacio.*/

    ore.addTarget('beyond_earth:glacio_stone', 'chroma:glacio_crystaltine_ore')

    ore.count([15, 30])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(32),
        anchors.absolute(96)
      )

    ore.size = 5
    ore.noSurface = 0.5
    ore.worldgenLayer = 'underground_ores'
    ore.chance = 0
  })
})
