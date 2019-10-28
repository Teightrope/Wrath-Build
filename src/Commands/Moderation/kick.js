const {
  UserExistance,
  NoArguments
} = require('../../Configurations/Errors')
const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['kick'],
  Description: 'Kick a user from your guild',
  Category: 'moderation',
  Usage: '{c} [user]',
  Permissions: {
    User: ['KICK_MEMBERS'],
    Bot: ['SEND_MESSAGES', 'KICK_MEMBERS']
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
    const user = message.mentions.members.first() || message.guild.members.get(paramaters[0])
    if (!user) {
      message.channel.send(NoArguments)
    } else if (!message.guild.members.has(user.id)) {
      message.channel.send(UserExistance)
    } else if (user.bannable === false) {
      message.channel.send(`That user could not be kicked!`)
    } else {
      const Ban = new RichEmbed()
        .setTitle(`${user.user.tag} was kicked!`)
        .setColor(16711680)
        .addField('By:', `<@${message.author.id}>`)
        .setFooter(`Time: ${message.createdAt.toLocaleString()}`)
      message.channel.send(Ban)
      user.kick()
    }
  }
}
