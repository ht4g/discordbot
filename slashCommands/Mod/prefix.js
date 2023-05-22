const db = require('../../database');
module.exports = {
    name: 'prefix',
    description: 'View/Get preflix',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'prefix',
            description: 'Prefix you want to change',
            type: 'STRING',
            required: false,
        }
    ],
    run: async (client, interaction, serverData) => {
        if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply('Bạn không có quyền để dùng lệnh này!');
        const prefixSet = interaction.options.getString('prefix');
        if (!prefixSet) return interaction.reply(`Prefix is: ${serverData.prefix} now `);
        await db.set(interaction.guildId, { prefix: prefixSet.toLowerCase() });
        interaction.reply('Success!');
    },
};