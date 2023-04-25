onEvent("morejs.player.start_trading", (event) => {
    if (event.merchant.getName().getKey().includes("entity.minecraft.villager.mna.spellmonger")) {
        event.forEachOffers((o,i) => {
            if (i == 0) {
                o.disabled = true;
            };
        });
    };
});