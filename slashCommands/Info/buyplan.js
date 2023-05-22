const { MessageEmbed } = require('discord.js');
module['exports'] = {
    name: 'buyplan',
    description: 'Buy DDoS Plan',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`Ex DDos Plan\``)
            .setDescription(`\n**[ 🔰 PLAN 🔰 ]**\n
                            \n💭 BASIC : xxK/Month\n
                            \n💮 VIP : xxK/Month\n



`)
.setColor("RANDOM")
            .setFooter({ text: "© » OverKill" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};
