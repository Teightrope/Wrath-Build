const { RichEmbed } = require('discord.js');
const snekfetch = require("snekfetch");
const dankAPI = require('../../../src/Configurations/Config.json').dankAPI;
module.exports = {
    Triggers: ['airpods'],
    Description: 'DUDE WATCH OUT! OH NO THEY HAVE AIRPODS ON!!',
    Category: 'avatar_edit',
    Usage: '{c} [user]',
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
      let target = message.mentions.users.first() || message.author;
      let avatar = target.avatarURL;
      let url = `https://dankmemer.services/api/airpods?avatar1=${avatar}`;
  
      console.log(target.avatarURL)
  
      message.channel.startTyping();
      snekfetch.get(url, {
          headers: {
              "Authorization": dankAPI
          }
      }).then(async res => {
          await message.channel.send({   
            files: [{
                  attachment: res.body,
                  name: 'airpods.png'
              }]
          }).then(() => message.channel.stopTyping());
      }).catch(err => console.error(err));
    }
}