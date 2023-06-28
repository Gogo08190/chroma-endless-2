onEvent('recipes', (event) => {
    const idRemovals = [
        'mekanism:structural_glass',
        'morevanillalib:obsidian_shard_decompress',
        'jaopca:immersiveengineering.material_to_dust.obsidian',
        'lazierae2:compat/mekanism/grinder/dust_obsidian',
        'jaopca:mekanism.material_to_dust.obsidian',
        'mekanism:enriching/conversion/obsidian_to_obsidian_dust',
        'jaopca:thermal_expansion.material_to_dust.obsidian'
    ];

    const outputRemovals = [

    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
