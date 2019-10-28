const {
  NoArguments
} = require('../.././Configurations/Errors.json')
module.exports = {
  Triggers: ['say', 'speak'],
  Description: 'Make the bot say something',
  Category: 'fun',
  Usage: '{c} [text]',
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
    if (paramaters.includes('@everyone') || paramaters.includes('@here')) {
      return message.channel.send('You cannot ping everyone/here.')
    }
    const messageToSay = paramaters.join(" ")
    if (!messageToSay) {
      message.channel.send(errors.MissingArgs)
    } else {
      message.channel.send(messageToSay)
    }
  }
}
