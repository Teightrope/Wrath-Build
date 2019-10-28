const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['balance', 'coins', 'credits', 'money', 'bal', 'wallet'],
  Description: 'View your balance',
  Usage: '{c} [user]',
  Category: 'currency',
  Permissions: {
    User: [],
    Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
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

    const user = message.mentions.members.first() || message.member
    client.Credits.ensure(user.id, {
      Wallet: 500,
      lastUsed: null,
      Bank: 0,
      SecSys: false
    })
    const Balance = new RichEmbed()
      .setColor("RANDOM")
      .addField(`${user.user.username}'s balance`, `**Wallet** - ${client.Credits.get(user.id).Wallet}\n**Bank** - ${client.Credits.get(user.id).Bank}`)
      .setThumbnail(user.user.displayAvatarURL)
      .setFooter(`https://www.wrath-discord.tk`)
    message.channel.send(Balance)
  }
}
