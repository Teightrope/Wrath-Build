const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['dankrate', 'dankness', 'dank', 'howdank'],
  Description: 'Just how dank are you?',
  Category: 'fun',
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
      Time: 0
    },
  },
  Run: async (client, message, paramaters) => {
  const user = message.mentions.members.first() || message.member
    client.DankRate.ensure(user.user.id, Math.floor(Math.random() * 100))
    const DankRate = new RichEmbed()
      .setTitle(`${user.user.tag} is`)
      .setDescription(`${client.DankRate.get(user.user.id)}% dank!`)
      .setColor('RANDOM')
    message.channel.send(DankRate)
  }
}
