const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['captcha', 'customcaptcha'],
    Description: 'Create your own captcha',
    Category: 'images',
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
        Time: 0
      },
    },
    Run: async (client, message, paramaters) => {

        if(!paramaters[0]) return message.channel.send(`Missing arguments. Please provide some text.`)
        const embed = new RichEmbed()
        .setColor('RED')
        .setImage(`https://media.bowser65.xyz/imgen/memes/captcha?text=${paramaters.join('%20')}`)
        message.channel.send(embed)
    }
  }
