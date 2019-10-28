const Write = require('../../Util/Functions/Write')
module.exports = {
  Triggers: ['restart', 'kys', 'fuckoff', 'r', 'reload', 'kysfag', 'kysfaggot'],
  Description: 'Restart the bot',
  Category: 'developer',
  Usage: '{c}',
  Permissions: {
    User: [],
    Bot: ['SEND_MESSAGES']
  },
  Options: {
    Dev: true,
    NSFW: false,
    Cooldown: {
      Enabled: false,
      Time: 0
    },
  },
  Run: async (client, message, paramaters) => {
    message.channel.send('Restarting! (Restart will happen in 500ms)')
    client.user.setActivity('Restarting...')
    Write('Restarting in 250MS', 1)
    setTimeout(() => {
      process.exit()
    }, 250)
  }
}
