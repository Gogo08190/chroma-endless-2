// Put this file in kubejs/server_scripts folder
// by Gogo

let cleaningTime = 1200 * 30;
let timerCheck = 1200;
let timerOn = true;

// Notification times
const notifications = [30, 10, 1];

let round = 0;
let lastClearLagResult = Utils.newList();
let lastTotalClearLagResult = Utils.newCountingMap();

// Items Blacklist
let blacklist = [
  'chroma:andesite_with_iron',
  'ae2:fluix_pearl',
  'minecraft:redstone',
  'ae2:charged_certus_quartz_crystal',
  'minecraft:quartz',
  'ae2:fluix_dust',
  'ae2:quantum_entangled_singularity',
  'ae2:fluix_crystal_seed',
  'ae2:certus_crystal_seed',
  'chroma:andesite_with_zinc',
  'ae2:ender_dust',
  'minecraft:diamond',
  'ae2:sky_dust',
  'lazierae2:resonating_seed',
  'lazierae2:resonating_crystal',
  'create:andesite_alloy',
  'draconicevolution:chaos_shard',
  'draconicadditions:chaos_heart',
  'draconicevolution:dragon_heart',
  'minecraft:dragon_egg',
  'minecraft:dragon_head',
  'create:crushed_raw_iron',
  'create:crushed_raw_gold',
  'create:crushed_raw_copper',
  'create:crushed_raw_zinc',
  'create:crushed_raw_osmium',
  'create:crushed_raw_silver',
  'create:crushed_raw_tin',
  'create:crushed_raw_lead',
  'create:crushed_raw_aluminum',
  'create:crushed_raw_uranium',
  'create:crushed_raw_nickel',
  'jaopca:create_crushed_ores.calorite',
  'jaopca:create_crushed_ores.cloggrum',
  'jaopca:create_crushed_ores.cobalt',
  'jaopca:create_crushed_ores.desh',
  'jaopca:create_crushed_ores.draconium',
  'jaopca:create_crushed_ores.elementium',
  'jaopca:create_crushed_ores.froststeel',
  'jaopca:create_crushed_ores.netherite_scrap',
  'jaopca:create_crushed_ores.ostrum',
  'jaopca:create_crushed_ores.regalium',
  'jaopca:create_crushed_ores.utherium'
];

// Notification Clear Items
let clearLag =(server, reset) => {
    let itemList = server.getEntities().filter(entity => entity.type.equals('minecraft:item'));
    let lastResult = Utils.newCountingMap();

    lastClearLagResult.clear();
    lastTotalClearLagResult.clear();

    itemList.forEach(items => {
        if(!blacklist.includes(items.getFullNBT().Item.id)) {
            var key = items.name;
            lastResult.add(key, items.item.count);
            lastTotalClearLagResult.add(key, items.item.count);
            items.kill();
        }
    });

    lastClearLagResult.addAll(lastResult.entries);
    lastClearLagResult.sort(null);

    server.tell([Text.green('[ClearLag] ' ), `${lastTotalClearLagResult.totalCount}`, ' Items supprimés.']);
    if(reset) round = 0;
}

// Notification Messages
let timeSchedule = (server) => {
    if(timerOn) {
        server.tell([Text.green('[ClearLag]'),' ClearLag est activé !']);
        server.scheduleInTicks(timerCheck, server, callback => {
            let currentTime = timerCheck*++round;
            let nextItems = server.getEntities().filter(entity => entity.type.equals('minecraft:item')).length;
            // The time left until cleaning of items
            let minutesLeft = (cleaningTime - currentTime) / 1200

            if(cleaningTime <= currentTime) {
                clearLag(server, true);
                if(!timerOn) {
                    server.tell([Text.green('[ClearLag]'),' ClearLag est désactivé !']);
                    timerOnChanged = false;
                }
            }
            if (timerCheckChange) {
                timerCheckChange = false;
                round = 0;
                server.tell([Text.green('[ClearLag]'),' TimerCheck a été mis à jour a ', `${timerCheck/1200}`, '!']);
            }else if (cleaningTimeChange) {
                cleaningTimeChange = false;
                round = 0;
                server.tell([Text.green('[ClearLag]'),' La minuterie a été mise à jour à ', `${cleaningTime/1200}`, '!']);
            } else if (notifications.includes(minutesLeft))
                server.tell([Text.green('[ClearLag]'), ' Suppression de ', `${nextItems}`, ' items dans ', `${minutesLeft}`, ' minutes !']);
            if(timerOn) callback.reschedule();
        })
    }
}

onEvent('server.load', event => {
    timeSchedule(event.server);
});

let cleaningTimeChange = false;
let timerCheckChange = false;


// Custom Clerlag Commands
onEvent('command.registry', event => {
    const {commands: Commands, arguments: Arguments} = event;
    event.register(
        Commands.literal('clearlag')
        .then(Commands.literal('clear').executes(ctx => {
            let level = event.server
            clearLag(level, false);
            return 1;
        }))
        .then(Commands.literal('result').executes(ctx => {
            let server = event.server
            server.tell([Text.green('[ClearLag]'), ' Rapport:'])
            lastClearLagResult.forEach(results => {
                server.tell(['[ ', results.key, ': ', results.value, ' ]'])
            });
            return 1;
        }))
        .then(Commands.literal('interval').then(Commands.argument('integer', Arguments.INTEGER.create(event)).executes(ctx => {
            const time = Arguments.INTEGER.getResult(ctx, 'integer');
            timerCheckChange = true;
            timerCheck = time * 1200;
            server.tell([Text.green('[ClearLag]'), ' Intervalle réglé sur ', time, ' minute'])
            return 1;
        })))
        .then(Commands.literal('timer').then(Commands.argument('integer', Arguments.INTEGER.create(event)).executes(ctx => {
            const time = Arguments.INTEGER.getResult(ctx, 'integer');
            let server = event.server
            cleaningTimeChange = true
            cleaningTime = time * 1200;
            server.tell([Text.green('[ClearLag]'), ' Minuterie réglée sur ', time, ' minute'])
            return 1;
        })))
        .then(Commands.literal('timerOn').then(Commands.argument('boolean', Arguments.BOOLEAN.create(event)).executes(ctx => {
            const timeOn = Arguments.BOOLEAN.getResult(ctx, 'boolean');
            let server = event.server
            server.tell([Text.green('[ClearLag]'), ' ClearLag est ', timerOn])
            if(timerOn === timeOn) return 1;
            timerOn = timeOn;
            if(timerOn) timeSchedule(server);
            return 1;
        })))
    )
});
