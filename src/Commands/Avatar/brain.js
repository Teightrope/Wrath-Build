const { RichEmbed } = require('discord.js');
const snekfetch = require("snekfetch");
const dankAPI = require('../../../src/Configurations/Config.json').dankAPI;
module.exports = {
    Triggers: ['brain'],
    Description: 'Big brain time.',
    Category: 'avatar_edit',
    Usage: '{c} [text]',
    Permissions: {
      User: [],
      Bot: ['SEND_MESSAGES']
    },
    Options: {
      Dev: false,
      NSFW: false,
      Cooldown: {
        Enabled: true,
        Time: 3
      },
    },
    Run: async (client, message, paramaters) => {
      let text = paramaters.join(" "); 

      if(!text) return message.channel.send(`Missing arguments. You need four items to use this command (split by commas).`)

      let url = `https://dankmemer.services/api/brain?text=${text}`;

  
      message.channel.startTyping();
      snekfetch.get(url, {
          headers: {
              "Authorization": dankAPI
          }
      }).then(async res => {
          await message.channel.send({   
            files: [{
                  attachment: res.body,
                  name: 'brain.png'
              }]
          }).then(() => message.channel.stopTyping());
      }).catch(err => console.error(err));
    }
}