onEvent('block.tags', event => {
  event.add('minecraft:mineable/pickaxe', 'compactcrafting:field_projector')
  event.add('minecraft:mineable/pickaxe', 'compactcrafting:match_proxy')
  event.add('minecraft:mineable/pickaxe', 'compactcrafting:rescan_proxy')
})
