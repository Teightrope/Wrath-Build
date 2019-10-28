const {
  NoArguments
} = require('../../Configurations/Errors')
module.exports = {
  Triggers: ['purge', 'clean', 'bulkdelete'],
  Description: 'Delete X messages in a channel',
  Category: 'moderation',
  Usage: '{c} [amount]',
  Permissions: {
    User: ['MANAGE_MESSAGES'],
    Bot: ['SEND_MESSAGES', 'MANAGE_MESSAGES']
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
    const amount = paramaters[0]
    if (!amount) {
      message.channel.send(NoArguments)
    } else if (parseInt(amount) > 100 || parseInt(amount) < 1) {
      message.channel.send(`Please select a number between 1 and 100`)
    } else {
      await message.delete()
      await message.channel.bulkDelete(parseInt(amount))
    }
  }
}
