const {
  MessageEmbed
} = require('discord.js');
const https = require('https');
const fs = require('fs');
const moment = require('moment');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var img = ayarlar.img;
module.exports = {
      name: 'proxy',
      description: 'Cập nhật Proxy',
      type: 'CHAT_INPUT',
      run: async (_0x7293x7, _0x7293x8) => {
              const _0x7293x9 = ayarlar.ownerID;
              if (_0x7293x8.member.user.id !== _0x7293x9) {
                  return _0x7293x8.reply({
                      embeds: [new MessageEmbed().setColor('RANDOM').setDescription(`${''}${'Chỉ có <@'}${''}${_0x7293x9}${''}${'> mới được dùng lệnh này.'}${''}`).setFooter('© Developer: overkill#4176', img).setTimestamp()]
                  })
              };
              var _0x7293xa = 'https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all';
              const _0x7293xb = fs.createWriteStream('proxies.txt');
              fs.writeFileSync('proxies.txt', ' ');
              const _0x7293xc = https.get(_0x7293xa, function (_0x7293xd) {
                  _0x7293xd.pipe(_0x7293xb);
                  console.log(`${''}${'['}${''}${moment .utc (Date .now ())}${''}${'] [*] Cập nhật thành công cơ sở dữ liệu proxy.'}${''}`)
              });
              const embed = new MessageEmbed()
            .setTitle(`\`MUA PLAN DDOS DISCORD\``)
            .setDescription(`\n**[ 🔰 PLAN 🔰 ]**\n
                            \n💭 BASIC : 29K/VINH VIEN\n
                            \n💮 VIP : 49K/VINH VIEN\n
                            \n💠 SUPER : 99K/VINH VIEN\n



`)
.setColor("RANDOM")
            .setFooter({ text: "© » JubiChan" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};