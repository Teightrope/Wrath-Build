const random = require('random-puppy')
const request = require('node-fetch')
const fs = require('fs')
const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['random', 'randomnsfw', 'porn'],
  Description: 'Check out some NSFW',
  Category: 'nsfw',
  Usage: '{c}',
  Permissions: {
    User: [],
    Bot: ['SEND_MESSAGES']
  },
  Options: {
    Dev: false,
    NSFW: true,
    Cooldown: {
      Enabled: false,
      Time: 0
    },
  },
  Run: async (client, message, paramaters) => {
    random('nsfw_hd').then((url) => {
      request(url).then(res => {
        const Embed = new RichEmbed()
          .setTitle('Random Image!')
          .setImage(res.url)
          .setColor('RED')
        message.channel.send(Embed)
      })
    })
  }
}
