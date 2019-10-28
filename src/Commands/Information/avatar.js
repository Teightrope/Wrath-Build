const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['avatar', 'pfp', 'icon', 'av'],
  Description: 'View someones avatar',
  Category: 'information',
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
    const user = message.mentions.members.first() || message.guild.members.find(f => f.user.username.toLowerCase() === paramaters[0]) || message.member
    const embed = new RichEmbed().setColor('RED').setTitle(`${user.user.username}'\s Avatar!`).setImage(user.user.displayAvatarURL)
    message.channel.send(embed)
  }
}
