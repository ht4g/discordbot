const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Clear message',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'amount',
            description: 'amount of message',
            type: 'NUMBER',
            required: false,
        }
    ],
    run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has('MANAGE_MESSAGES')) return interaction.reply('Only admin can delete message!');
        const Amount = interaction.options.getNumber("amount");

        const Messages = await interaction.channel.messages.fetch();

        const Response = new MessageEmbed()
        .setColor('RANDOM')

            await interaction.channel.bulkDelete(Amount, true).then(messages =>{
                Response.setDescription(`🧹 Deteled \`${messages.size}\` message!`);
                interaction.reply({ embeds: [Response] });
            })
        }
    }