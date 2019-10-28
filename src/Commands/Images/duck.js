const request = require('node-superfetch');
const { RichEmbed } = require('discord.js')
const res =  ['Ducky!', 'Ducky :)', 'Quack', 'Quack Quack!']
module.exports = {
    Triggers: ['duck', 'ducky', 'randomduck', 'ducks', 'quack'],
    Description: 'Quack!',
    Category: 'images',
    Usage: '{c}',
    Permissions: {
      User: [],
      Bot: ['SEND_MESSAGES']
    },
    Options: {
      Dev: false,
      NSFW: false,
      Cooldown: {
        Enabled: true,
        Time: 0
      },
    },
    Run: async (client, message, paramaters) => {
       const { body } = await request.get('https://random-d.uk/api/v1/quack');
       const embed = new RichEmbed()
       .setTitle(res[Math.floor(Math.random() * res.length)])
       .setImage(body.url)
       .setColor('RED');
       message.channel.send(embed)
    }
  }
