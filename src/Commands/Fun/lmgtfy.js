const {
  NoArguments
} = require('../../Configurations/Errors')
module.exports = {
  Triggers: ['lmgtfy', 'google', 'letmegooglethatforyou'],
  Description: 'Let me google that for you',
  Category: 'fun',
  Usage: '{c} [search]',
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
    const link = 'http://lmgtfy.com/?q='

    if (!paramaters[0]) {
      message.channel.send(NoArguments)
    } else {
      message.channel.send(`Here you go!\n${link}${paramaters.join("+")}`)
    }
  }
}
