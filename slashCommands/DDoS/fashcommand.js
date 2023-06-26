const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { exec } = require('child_process');
const ayarlar = require('../../ayarlar.json');
module.exports = {
  name: 'fastcommand',
  description: 'Thực thi lệnh nhanh',
  type: 'CHAT_INPUT',
  run: async (client, interaction) => {
    if (
      interaction.user.id !== ayarlar.ownerID.ownerID1 &&
      interaction.user.id !== ayarlar.ownerID.ownerID2
    ) {
      const unauthorizedEmbed = new MessageEmbed()
        .setTitle('Lỗi')
        .setDescription('Bạn không có quyền sử dụng lệnh này.')
        .setColor('RED');
    
      return interaction.reply({ embeds: [unauthorizedEmbed], ephemeral: true });
    }
    const command = interaction.options.getString('command');
    
    let actionRow = new MessageActionRow();
    let stopAllButton = new MessageButton()
      .setCustomId('stopall')
      .setLabel('🛑 Stop all Attack')
      .setStyle('DANGER');

    let reloadProxyButton = new MessageButton()
      .setCustomId('reloadproxy')
      .setLabel('💻 Reload Proxy')
      .setStyle('SUCCESS');

    actionRow.addComponents(stopAllButton, reloadProxyButton);

    const embed = new MessageEmbed()
      .setTitle('Fast Command')
      .setDescription('\x60\x60\x60\x63\x73\x73\x0A\x5B\x20\x53\u1EEC\x20\x44\u1EE4\x4E\x47\x20\x4C\u1EC6\x4E\x48\x20\x4E\x48\x41\x4E\x48\x20\x5D\x0A\x60\x60\x60')
      .setColor('RANDOM');

    interaction.reply({ embeds: [embed], components: [actionRow] });

    const filter = (i) => i.user.id === interaction.user.id;
    const collector = interaction.channel.createMessageComponentCollector({ filter });

    collector.on('collect', async (button) => {
      if (button.customId === 'stopall') {
        exec("pkill -f '/home/codespace/nvm/current/bin/node'", (error, stdout, stderr) => {
          const stopAllEmbed = new MessageEmbed()
            .setTitle('Đã dừng tất cả các cuộc tấn công.')
            .setColor('GREEN');
          
          button.reply({ embeds: [stopAllEmbed], ephemeral: true });
        });
        exec("pkill python3");
      } else if (button.customId === 'reloadproxy') {
        exec("cd vip && cd L7 && python3 scan.py");
        exec("cd basic && cd L7 && python3 scan.py");

        const reloadProxyEmbed = new MessageEmbed()
          .setTitle('Proxy đã được tải lại thành công.')
          .setColor('GREEN');
        
        button.reply({ embeds: [reloadProxyEmbed], ephemeral: true });
      }
    });
  },
};
