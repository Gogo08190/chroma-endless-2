// Listen to player login event
onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
    event.player.give('waystones:waystone')
    event.player.give('8x minecraft:apple')
    event.player.give(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{alexsmobs:{0:{Count:1,id:"alexsmobs:animal_dictionary"}},apotheosis:{0:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},doom:{0:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"doom:doom"}}},engineersdecor:{0:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"engineersdecor:engineersdecor_manual"}}},ftbquests:{0:{Count:1,id:"ftbquests:book"}},immersiveengineering:{0:{Count:1,id:"immersiveengineering:manual"}},industrialforegoing:{0:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}}},modularrouters:{0:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"modularrouters:book"}}},pneumaticcraft:{0:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}}},powah:{0:{Count:1,id:"powah:book"}},rftoolsbase:{0:{Count:1,id:"rftoolsbase:manual"}},sushigocrafting:{0:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"sushigocrafting:sushigocrafting"}}},tconstruct:{0:{Count:1,id:"tconstruct:puny_smelting"},1:{Count:1,id:"tconstruct:tinkers_gadgetry"},2:{Count:1,id:"tconstruct:fantastic_foundry"},3:{Count:1,id:"tconstruct:encyclopedia"},4:{Count:1,id:"tconstruct:materials_and_you"},5:{Count:1,id:"tconstruct:mighty_smelting"}},timber_frames:{0:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"timber_frames:timberframesguide"}}}}}'))
  }
})
