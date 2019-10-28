const {
  NoArguments
} = require('../../Configurations/Errors')
module.exports = {
  Triggers: ['addrole', 'giverole'],
  Description: 'Add a role to someone',
  Category: 'moderation',
  Usage: '{c} [user] [role]',
  Permissions: {
    User: ['MANAGE_ROLES'],
    Bot: ['SEND_MESSAGES', 'MANAGE_ROLES']
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
        message.channel.send(NoArguments)
      } else if (!role) {
        message.channel.send(NoArguments)
      } else if (message.guild.roles.has(role.id)) {
        if (user.roles.has(role.id)) {
          message.channel.send({
            embed: {
              description: `${user.user.tag} already has <@&${role.id}>`,
              color: '16711680'
            }
          })
        } else {
          user.addRole(role.id).then(f => {
            message.channel.send({
              embed: {
                description: `${user.user.tag} was given <@&${role.id}>`,
                color: '16711680'
              }
            })
          }).catch(err => message.channel.send(`I cannot add that role to ${user.user.tag}.`))
        }
      }
    } catch (err) {
      message.channel.send(`I could not find that role!`)
    }
  }
}
