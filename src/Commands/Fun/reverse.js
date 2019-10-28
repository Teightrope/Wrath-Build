module.exports = {
    Triggers: ['reverse', 'esrever'],
    Description: 'Reverse your text',
    Category: 'fun',
    Usage: '{c}',
    Permissions: {
      User: [],
      Bot: ['SEND_MESSAGES']
    },
    Options: {
      Dev: false,
      NSFW: false,
      Cooldown: {
        Enabled: true,
        Time: 0
      },
    },
    Run: async (client, message, paramaters) => {
        if(!paramaters[0]) {
         message.channel.send(require('../../Configurations/Errors.json').NoArguments)   
        } else {
        message.channel.send(paramaters.join(' ').split('').reverse().join(''))
    }}
  }
