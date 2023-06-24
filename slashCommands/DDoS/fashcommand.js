var chuoi = [
  "discord.js",//0
  "../../ayarlar.json",//1
  "https",//2
  "fs",//3
  "moment",//4
  "versionbot",//5
  "img",//6
  "exports",//7
  "fashcommand",//8
  "\x53\u1EED\x20\x64\u1EE5\x6E\x67\x20\x6C\u1EC7\x6E\x68\x20\x6E\x68\x61\x6E\x68",//9 sử dụng lệnh nhanh
  "CHAT_INPUT", //10
  "ADMINISTRATOR", //11
  "has",//12
  "permissions", //13
  "member",//14
  "\x42\u1EA1\x6E\x20\x6B\x68\xF4\x6E\x67\x20\x63\xF3\x20\x71\x75\x79\u1EC1\x6E\x20\u0111\u1EC3\x20\x64\xF9\x6E\x67\x20\x6C\u1EC7\x6E\x68\x20\x6E\xE0\x79\x21", //15 bạn không có quyền sử dụng lệnh này
  "reply",//16
  "💻",//17
  "setEmoji",//18
  "SUCCESS",//19
  "setStyle",//20
  "Reload Proxy",//21
  "setLabel",//22
  "proxy",//23
  "setCustomId",//24
  "🛑",//25
  "DANGER",//26
  "Stop All Attack",//27
  "stop",//28
  "addComponents",//29
  "setTimestamp",//30
  "\xA9\x20\x44\x65\x76\x65\x6C\x6F\x70\x65\x72\x3A\x20\x6F\x76\x65\x72\x6B\x69\x6C\x6C\x33\x31\x30\x31", //31 developer overkill
  "setFooter",//32
  "\x60\x60\x60\x63\x73\x73\x0A\x5B\x20\x53\u1EEC\x20\x44\u1EE4\x4E\x47\x20\x4C\u1EC6\x4E\x48\x20\x4E\x48\x41\x4E\x48\x20\x5D\x0A\x60\x60\x60", //33 sử dụng lệnh nhanh
  "setDescription",//34
  "setTitle",//35
  "RANDOM",//36
  "setColor",//37
  "interactionCreate",//38
  "isButton",//39
  "customId",//40
  "https://cdn.discordapp.com/attachments/934796401760669769/1033391431194247240/proxies.txt",//41
  "proxies.txt",//42
  "createWriteStream",//43
  "\x20",//44
  "writeFileSync",//45
  "pipe",//46
  "",//47
  "[",//48
  "now",//49
  "utc",//50
  "\x5D\x20\x5B\x2A\x5D\x20\x43\u1EAD\x70\x20\x6E\x68\u1EAD\x74\x20\x74\x68\xE0\x6E\x68\x20\x63\xF4\x6E\x67\x20\x63\u01A1\x20\x73\u1EDF\x20\x64\u1EEF\x20\x6C\x69\u1EC7\x75\x20\x70\x72\x6F\x78\x79\x2E", //51 cập nhật thành công log
  "log",//52
  "get",//53
  "\xA9\x20\x6F\x76\x65\x72\x6B\x69\x6C\x33\x31\x30\x31", //54 overkill
  "\x50\x72\x6F\x78\x79\x20\u0111\u01B0\u1EE3\x63\x20\x63\xE0\x69\x20\u0111\u1EB7\x74\x20\x74\x72\x6F\x6E\x67\x20\x74\u1EAD\x70\x20\x74\x69\x6E\x3A\x20\x2A\x2A", //55 Proxy được cài đặt trong tập tin: proxies.txt
  "path",//56
  "**",//57
  "promisify",//58
  "util",//59
  "exec",//60
  "child_process",//61
  "pkill -f '/home/codespace/nvm/current/bin/node'",//62
  "\x44\u1EEB\x6E\x67\x20\x6C\u1EA1\x69\x20\x74\u1EA5\x74\x20\x63\u1EA3\x20\x63\x75\u1ED9\x63\x20\x74\u1EA5\x6E\x20\x63\xF4\x6E\x67\x3A", //63 TẤT CẢ CUỘC TẤN CÔNG ĐÃ DỪNG LẠI log
  "id",//64
  "guild",//65
  "\x60\x60\x60\x63\x73\x73\x0A\x5B\x20\x54\u1EA4\x54\x20\x43\u1EA2\x20\x43\x55\u1ED8\x43\x20\x54\u1EA4\x4E\x20\x43\xD4\x4E\x47\x20\u0110\xC3\x20\x44\u1EEA\x4E\x47\x20\x4C\u1EA0\x49\x20\x5D\x0A\x60\x60\x60", //66 [ TẤT CẢ CUỘC TẤN CÔNG ĐÃ DỪNG LẠI ]
  "on",//67
];
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const https = require('https');
const fs = require('fs');
const moment = require('moment');
var version = ayarlar['versionbot'];
var img = ayarlar['img'];
module['exports'] = {
  name: 'fashcommand',
  description: '\x53\u1EED\x20\x64\u1EE5\x6E\x67\x20\x6C\u1EC7\x6E\x68\x20\x6E\x68\x61\x6E\x68',
  type: 'CHAT_INPUT',
  run: async (_0x5188x7, _0x5188x8) => {
    if (!_0x5188x8[chuoi[14]][chuoi[13]][chuoi[12]](chuoi[11])) {
      return _0x5188x8[chuoi[16]](chuoi[15]);
    }
    const _0x5188x9 = new MessageActionRow()[chuoi[29]](
      new MessageButton()
        [chuoi[24]](chuoi[23])
        [chuoi[22]](chuoi[21])
        [chuoi[20]](chuoi[19])
        [chuoi[18]](chuoi[17]),
      new MessageButton()
        [chuoi[24]](chuoi[28])
        [chuoi[22]](chuoi[27])
        [chuoi[20]](chuoi[26])
        [chuoi[18]](chuoi[25])
    );
    const _0x5188xa = new MessageEmbed()
      [chuoi[37]](chuoi[36])
      [chuoi[35]](version)
      [chuoi[34]](chuoi[33])
      [chuoi[32]](chuoi[31], img)
      [chuoi[30]]();
    await _0x5188x8[chuoi[16]]({
      embeds: [_0x5188xa],
      components: [_0x5188x9],
    });
    _0x5188x7[chuoi[67]](chuoi[38], async (_0x5188x8) => {
      if (!_0x5188x8[chuoi[39]]()) {
        return;
      }
      if (_0x5188x8[chuoi[40]] === chuoi[23]) {
        var _0x5188xb = chuoi[41];
        const _0x5188xc = fs[chuoi[43]](chuoi[42]);
        fs[chuoi[45]](chuoi[42], chuoi[44]);
        const _0x5188xd = https[chuoi[53]](_0x5188xb, function (_0x5188xe) {
          _0x5188xe[chuoi[46]](_0x5188xc);
          console[chuoi[52]](
            `${chuoi[47]}${chuoi[48]}${chuoi[47]}${moment[chuoi[50]](
              Date[chuoi[49]]()
            )}${chuoi[47]}${chuoi[51]}${chuoi[47]}`
          );
        });
        const _0x5188xa = new MessageEmbed()
          [chuoi[35]](version)
          [chuoi[37]](chuoi[36])
          [chuoi[34]](
            `${chuoi[47]}${chuoi[55]}${chuoi[47]}${
              _0x5188xc[chuoi[56]]
            }${chuoi[47]}${chuoi[57]}${chuoi[47]}`
          )
          [chuoi[32]](chuoi[54], img)
          [chuoi[30]]();
        const _0x5188xf = require(chuoi[59])[chuoi[58]](setTimeout);
        await _0x5188xf(1000);
        await _0x5188x8[chuoi[16]]({ embeds: [_0x5188xa], ephemeral: true });
      }
      if (_0x5188x8[chuoi[40]] === chuoi[28]) {
        var _0x5188x10 = require(chuoi[61])[chuoi[60]];
        _0x5188x10(
          `${chuoi[47]}${chuoi[62]}${chuoi[47]}`,
          (_0x5188x11, _0x5188x12, _0x5188x13) => {}
        );
        console[chuoi[52]](chuoi[63] + _0x5188x8[chuoi[65]][chuoi[64]]);
        const _0x5188xa = new MessageEmbed()
          [chuoi[37]](chuoi[36])
          [chuoi[35]](version)
          [chuoi[34]](chuoi[66])
          [chuoi[32]](chuoi[31], img)
          [chuoi[30]]();
        const _0x5188xf = require(chuoi[59])[chuoi[58]](setTimeout);
        await _0x5188xf(1000);
        await _0x5188x8[chuoi[16]]({ embeds: [_0x5188xa], ephemeral: true });
      }
    });
  },
};
