const { MessageEmbed } = require('discord.js');
const axios = require("axios");

module.exports = {
    name: 'geoip',
    description: 'Web Infomation',
    type: 'CHAT_INPUT',
    options: [
    {
      name: "host",
      description: "Web IP",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {
      const host = interaction.options.getString("host")

        // good IP
        axios
          .get(`http://ip-api.com/json/${host}`)
          .then((response) => {
            const data = response.data;
            interaction.reply(
              "```" +
                `IP: ${data.query}\nNation: ${data.country}, ${data.countryCode}\nLocation: ${data.regionName}, ${data.region}\nCity: ${data.city}\nISP: ${data.isp}\nOrg: ${data.org}\nASN: ${data.as}` +
                "```"
            );
          })
          .catch((error) => {
            console.log(error);
            interaction.reply("Error!");
          });
      } 
}