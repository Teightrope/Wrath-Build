module.exports = {
      Triggers: ['lockdown', 'ld'],
      Description: 'Locks down the current channel.',
      Category: '',
      Description: 'Lock down a channel',
      Category: 'moderation',
      Usage: '{c}',
      Permissions: {
            User: ['MANAGE_SERVER'],
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
            if (message.channel.permissionsFor(message.guild.id).has("SEND_MESSAGES")) {
                  message.channel.overwritePermissions(message.guild.id, {
                        READ_MESSAGES: false,
                        SEND_MESSAGES: false
                  })
                  message.channel.send('Channel is now on lockdown')
            } else if (!message.channel.permissionsFor(message.guild.id).has('SEND_MESSAGES')) {
                  message.channel.overwritePermissions(message.guild.id, {
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true
                  })
                  message.channel.send('Channel is no longer on lockdown')
            }

      }
}
