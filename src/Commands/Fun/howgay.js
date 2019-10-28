const { RichEmbed } = require('discord.js')
module.exports = {
      Triggers: ['howgay', 'gay'],
      Description: 'See how gay you are',
      Category: 'fun',
      Usage: '{c} [user]',
      Permissions: {
        User: [],
        Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
      },
      Options: {
        Dev: false,
        NSFW: false,
        Cooldown: {
          Enabled: false,
          Time: 0
        },
      },
      Run: async (client, message, paramaters) => {
            let user = message.mentions.members.first() || message.member;
            client.HowGay.ensure(user.id, Math.floor(Math.random() * 100))
            const Embed = new RichEmbed()
            .setTitle(`${user.user.tag} is...`)
            .setDescription(`${client.HowGay.get(user.id)}% gay!`)
            .setColor('RED')
            message.channel.send(Embed)
      }
    }
