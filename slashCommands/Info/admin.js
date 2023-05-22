const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'admin',
    description: 'Admin Info',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`${client.user.username}'s admin\``)
            .setDescription(`\`\`\`ini\n[ 🔽 Name : NTH OverKill ]\n\`\`\`
                             \`\`\`ini\n[ 💍 Age : 2k? ]\n\`\`\`                                               
                             \`\`\`ini\n[ 👉 Hobbies : Hacker]\n\`\`\`
                             \`\`\`ini\n[ 🔗 Zalo : https://zalo.me/hieudz3101 ]\n\`\`\`
                             \`\`\`ini\n[ 📌 Github  : https://github.com/ht4g ]\n\`\`\`
                             \`\`\`ini\n[ 🌐 Website : https://ht4gvpn.com ]\n\`\`\`
`)
            .setColor("RANDOM")
            .setFooter({ text: "© » OverKill" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};