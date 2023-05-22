const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'View bot ping',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`${client.user.username}'s Ping\``)
            .setDescription(`\`\`\`ini\n[ ${client.ws.ping}ms ]\n\`\`\``)
            .setColor("RANDOM")
            .setFooter({ text: "© » OverKill" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};