const {
  RichEmbed
} = require('discord.js')
const {
  NoArguments
} = require('../../Configurations/Errors')
module.exports = {
  Triggers: ['8ball', 'magic8'],
  Description: 'Roll the 8ball',
  Category: 'fun',
  Usage: '{c} [question]',
  Permissions: {
    User: [],
    Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
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
    const responses = ['It is certain', 'Without a doubt', 'You may rely on it', 'Yes, definitely', 'As i see it, yes', 'Most likely', 'Yes', 'The outlook is good', 'Signs point to yes', 'Reply hazy, try again', 'Better not tell you now', 'Ask again later', 'Cannot predict now', 'Dont count on it', 'Outlook not so good', 'My sources say no', 'Very doubtful', 'My reply is no']
    const question = paramaters.join(" ")
    if (!question) {
      message.channel.send(NoArguments)
    } else {
      const embed = new RichEmbed().setDescription(`Question: **${question}**`).addField(`The magic 8ball says:`, `${responses[Math.floor(Math.random() * responses.length)]}`).setColor('RED')
      message.channel.send(embed)
    }

  }
}
