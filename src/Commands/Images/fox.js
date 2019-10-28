const res = ['Fox', 'FOX!', 'Foxxy', 'Foxxy!']
const request = require('node-superfetch');
const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['fox', 'foxxy', 'foxy', 'foxer'],
    Description: 'Check out some random foxes.',
    Category: 'images',
    Usage: '{c}',
    Permissions: {
      User: [],
      Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
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
        const { body } = await request.get('https://randomfox.ca/floof/');
       const embed = new RichEmbed()
       .setTitle(res[Math.floor(Math.random() * res.length)])
       .setImage(body.image)
       .setColor('RED');
       message.channel.send(embed)
    }
  }
