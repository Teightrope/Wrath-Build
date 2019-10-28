const {
    NoArguments
} = require('../../Configurations/Errors')
module.exports = {
    Triggers: ['prefix', 'setprefix'],
    Description: 'Set the bots prefix',
    Category: 'settings',
    Usage: '{c} [prefix]',
    Permissions: {
          User: ['ADMINISTRATOR'],
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
          if (paramaters.length === 0) {
                message.channel.send(NoArguments)
          }
          if (paramaters[0].length > 2) {
                message.channel.send('Please use a prefix 2 characters or less!')
          } else {
                client.Prefix.set(message.guild.id, {
                      prefix: paramaters[0]
                })
                message.channel.send('Prefix set to ' + paramaters[0])
          }
    }
}
