const makeBoxLetter = require('../../Util/Functions/makeBoxLetters')
const {
  NoArguments
} = require('../../Configurations/Errors')
module.exports = {
  Triggers: ['emojify', 'fancytext'],
  Description: 'Write in emojis',
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
      Enabled: true,
      Time: 15000
    },
  },
  Run: async (client, message, paramaters) => {
    if(!paramaters[0]) {
      return message.channel.send(NoArguments)
    } else {
    message.channel.send(makeBoxLetter(paramaters.join(" ")))
  }}
}
