onEvent('recipes', (event) => {
    const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
    const types = ['terracotta', 'concrete', 'glazed_terracotta'];
    const planter = 'supplementaries:planter';
    const chute = 'create:chute';

    const createRecipe = (output, pattern, key, id) => {
      return {
          "output": output,
          "pattern": pattern,
          "key": key,
          "id": id
      };
    }


    let recipes = [
        createRecipe('botanypots:terracotta_botany_pot', ['T T', 'TPT', ' T '], {T: 'minecraft:terracotta', P: planter}, 'botanypots:botanypots/crafting/terracotta_botany_pot'),
        createRecipe('botanypots:terracotta_hopper_botany_pot', ['THT', 'TPT', ' T '], {T: 'minecraft:terracotta', P: planter, H: chute}, 'botanypots:botanypots/crafting/terracotta_compact_hopper_botany_pot'),
        createRecipe('botanypots:terracotta_hopper_botany_pot', ['P', 'C'], {P: 'botanypots:terracotta_botany_pot', C: chute}, 'botanypots:botanypots/crafting/terracotta_hopper_botany_pot')
    ];

    colors.forEach(color => {
        types.forEach(type => {
            const idPrefix = `botanypots:botanypots/crafting/${color}_${type}`;
            const outputPrefixHopper = `botanypots:${color}_${type}_hopper_botany_pot`;
            const outputPrefix = `botanypots:${color}_${type}_botany_pot`;
            const minecraftType = `minecraft:${color}_${type}`;
            recipes.push(
                createRecipe(`${outputPrefix}`, ['T T', 'TPT', ' T '], {T: minecraftType, P: planter}, `${idPrefix}_botany_pot`),
                createRecipe(`${outputPrefixHopper}`, ['THT', 'TPT', ' T '], {T: minecraftType, P: planter, H: chute}, `${idPrefix}_compact_hopper_botany_pot`),
                createRecipe(`${outputPrefixHopper}`, ['T', 'H'], {T: `${outputPrefix}`, H: chute}, `${idPrefix}_hopper_botany_pot`)
            );
        });
    });

    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
