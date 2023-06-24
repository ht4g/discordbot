module.exports = {
    name: 'help', 
    category: 'info',
    aliases: ['p'],
    run: (client, message, args) => {
        message.reply("**Layer7**\n`If you need help, contact OverKill`\n`or use your head /`");
    }
}