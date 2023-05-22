module.exports = {
    name: 'say',
    description: 'Bot say anything',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'query',
            description: 'Content you want to bot say',
            type: 'STRING',
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const query = interaction.options.getString('query');
        interaction.reply({ content: 'Success!', ephemeral: true });
        interaction.channel.send(query);
    },
};