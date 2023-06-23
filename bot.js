const {Client, Intents, Collection} = require('discord.js');
const ayarlar = require('./ayarlar.json');
var token = ayarlar.token;
var mongodb = ayarlar.mongodb;
const client = new Client({  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
var colors = require('colors');
client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.interactions = new Collection();
client.cooldowns = new Collection();
['command', 'event', 'slashCommand'].forEach((_0x4272x7) => {
    return require(`${'./handlers/'}${_0x4272x7}${''}`)(client)
});
client.on('ready', (_0x4272x8) => {
    console.log('OverKill!!!!' ['red']);
});
client.login(token);