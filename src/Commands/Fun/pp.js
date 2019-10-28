const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['pp', 'ppsize', 'dick', 'length'],
  Description: 'Check your pp',
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
      Enabled: false,
      Time: 0
    },
  },
  Run: async (client, message, paramaters) => {
    const user = message.mentions.members.first() || message.member
    const key = user.id
    client.PP.ensure(user.id, {
      size: Math.floor(Math.random() * 12)
    })
    const ppSize = []
    for (var i = 0; i < client.PP.get(key).size; i++) {
      ppSize.push("=")
    }
    const size = new RichEmbed()
      .setTitle(`${user.user.tag}'s dick size!`)
      .addField(`**${client.PP.get(key).size}** inches!`, `8${ppSize.join("")}D`)
      .setColor('RED')
    message.channel.send(size)
  }
}
