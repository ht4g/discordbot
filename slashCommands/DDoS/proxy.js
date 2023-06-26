const { MessageEmbed } = require('discord.js');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var img = ayarlar.img;

module.exports = {
  name: 'proxy',
  description: 'Cập nhật Proxy',
  type: 'CHAT_INPUT',
  run: async (client, interaction) => {
    const command = 'python3 scan.py';
    const { exec } = require('child_process');
    exec(`cd vip && cd L7 && ${command}`);   
    console.log(`${'['}${moment.utc(Date.now())}${'] [*] Cập nhật proxy thành công !'}`);
    const embed = new MessageEmbed()
      .setTitle(`\`CẬP NHẬT PROXY\``)
      .setDescription(`\n**Cập nhật proxy thành công !**\n\n`)
      .setColor('RANDOM')
      .setFooter('© Developer: OverKill')
      .setTimestamp();

    interaction.reply({ embeds: [embed] });
  },
};
