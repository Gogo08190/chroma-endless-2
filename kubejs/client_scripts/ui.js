// By Gogo08
onEvent("ui.main_menu", (event) => {
  event.replace((ui) => {
    ui.fillBackground("chroma:textures/ui/bg.png", 1920, 1080);
    ui.widgetTexture = "chroma:textures/ui/widgets.png";

    // Pack logo
    ui.image((i) => {
      i.height = 300 * 0.0010 * ui.h;
      i.width = 825 * 0.0010 * ui.h;
      i.x = ui.width / 2 - i.width / 2;
      i.y = ui.height * 0.075;
      i.texture = "chroma:textures/ui/logo.png";
    });

    //Singleplayer
    ui.button((b) => {
        b.name = Text.translate("menu.singleplayer");
        b.width = 150;
        b.x = (ui.width - 150) / 2;
        b.y = ui.height / 2 - 40;
        b.action = "minecraft:singleplayer";
        b.hoverColor = 0x00C3B3;
        b.shadow = false;
    });

    //multiplayer
    ui.button((b) => {
        b.name = Text.translate("menu.multiplayer");
        b.width = 150;
        b.x = (ui.width - 150) / 2;
        b.y = ui.height / 2 - 14;
        b.action = "minecraft:multiplayer";
        b.hoverColor = 0x00C3B3;
        b.shadow = false;
    });

    //Mods
    ui.button((b) => {
        b.name = Text.translate("fml.menu.mods");
        b.width = 73;
        b.x = (ui.width - 150) / 2;
        b.y = ui.height / 2 + 12;
        b.action = "forge:mod_list";
        b.hoverColor = 0x00C3B3;
        b.shadow = false;
    });

    //Discord
    ui.button((b) => {
        b.name = Text.of("Discord");
        b.width = 73;
        b.x = ((ui.width - 150) / 2) + b.width + 5;
        b.y = ui.height / 2 + 12;
        b.action = "https://discord.gg/cVEMguY";
        b.hoverColor = 0x00C3B3;
        b.shadow = false;
    });

    //Bisect
    ui.button((b) => {
        b.name = Text.of("Get a server !");
        b.width = 150;
        b.x = (ui.width - 150) / 2;
        b.y = ui.height / 2 + 38;
        b.action = "https://www.bisecthosting.com/chromatech";
        b.hoverColor = 0x00C3B3;
        b.shadow = false;
    });

    //Options
    ui.button((b) => {
        b.name = Text.translate("menu.options");
        b.width = 73;
        b.x = (ui.width - 150) / 2;
        b.y = ui.height / 2 + 64;
        b.action = "minecraft:options";
        b.hoverColor = 0x00C3B3;
        b.shadow = false;
    });

    //Quit
    ui.button((b) => {
        b.name = Text.of("Quit");
        b.width = 73;
        b.x = ((ui.width - 150) / 2) + b.width + 5;
        b.y = ui.height / 2 + 64;
        b.action = "minecraft:quit";
        b.hoverColor = 0xff0000;
        b.shadow = false;
    });

    //Team Chroma
    ui.label((l) => {
        l.height = 8;
        l.color = 0x181818;
        l.name = "By Team Chroma";
        l.action = "https://chromatech.fr/"
        l.x = ui.width - l.width - 2;
        l.y = ui.height - 11;
    });

    //Forge version
    ui.label((l) => {
        l.height = 10;
        l.color = 0x181818;
        l.hoverColor = 0x181818;
        l.name = "Forge Version: " + Platform.mods.forge.version;
        l.x = ui.width - l.width - 2;
        l.y = ui.height - 41;
    });

    //Mods loaded
    ui.label((l) => {
        l.height = 10;
        l.color = 0x181818;
        l.hoverColor = 0x181818;
        l.name = Platform.mods.size() + " Mods Loaded";
        l.x = ui.width - l.width - 2;
        l.y = ui.height - 31;
    });

    //Mojang
    ui.label((l) => {
        l.height = 10;
        l.color = 0x181818;
        l.hoverColor = 0x181818;
        l.name = "Copyright Mojang AB";
        l.x = ui.width - l.width - 2;
        l.y = ui.height - 21;
    });
  });
});
