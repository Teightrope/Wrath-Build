module.exports = {
  Triggers: ['delrole', 'removerole', 'takerole'],
  Description: 'Remove someones role',
  Category: 'moderation',
  Usage: '{c} [user] [role]',
  Permissions: {
    User: ['MANAGE_ROLES'],
    Bot: ['MANAGE_ROLES', 'SEND_MESSAGES']
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
    const user = message.mentions.members.first()
    const role = message.guild.roles.find(f => f.name === paramaters[1])
    try {
      if (!user) {
        message.channel.send(errors.MissingArgs)
      } else if (!role) {
        message.channel.send(errors.MissingArgs)
      } else if (message.guild.roles.has(role.id)) {
        if (!user.roles.has(role.id)) {
          message.channel.send({
            embed: {
              description: `${user.user.tag} does not have <@&${role.id}>`,
              color: '16711680'
            }
          })
        } else {
          message.channel.send({
            embed: {
              description: `${user.user.tag} was taken away <@&${role.id}>`,
              color: '16711680'
            }
          })
          user.removeRole(role.id)
        }
      }
    } catch (err) {
      message.channel.send(`I could not find that role!`)
    }
  }
}
