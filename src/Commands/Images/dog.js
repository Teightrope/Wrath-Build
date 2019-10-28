const request = require('node-superfetch')
const { RichEmbed } = require('discord.js')
const res = ['Bark!', 'Doggy', 'Doggo', 'DOG!', 'Dog!', 'Woof Woof']
module.exports = {
    Triggers: ['dog', 'doge', 'doggo', 'showmethedogs', 'randomdog'],
    Description: 'View some cute doggys',
    Category: 'images',
    Usage: '{c}',
    Permissions: {
      User: [],
      Bot: ['ATTACH_FILES', 'EMBED_LINKS', 'SEND_MESSAGES']
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
        const { body } = await request.get('https://dog.ceo/api/breeds/image/random')
        const Embed = new RichEmbed()
        .setColor('RED')
        .setTitle(res[Math.floor(Math.random() * res.length)])
        .setImage(body.message)
        message.channel.send(Embed)
    }
  }
