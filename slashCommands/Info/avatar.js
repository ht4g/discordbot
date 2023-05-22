const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Get your avatar or other avatar',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'user',
            description: 'Person',
            type: 'USER',
            required: false,
        }
    ],
    run: async (client, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;
        const avatarURL = user.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
        const embed = new MessageEmbed()
            .setImage(avatarURL)
            .setTitle(`${user.tag}'s avatar <3`);
        interaction.reply({ embeds: [embed] });
    },
};