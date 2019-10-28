const {
  RichEmbed
} = require('discord.js')
const {
  NoArguments
} = require('../../Configurations/Errors')
const fetch = require('node-fetch')
module.exports = {
  Triggers: ['urban', 'urbandictionary', 'urbandict'],
  Description: 'Check the dictionary',
  Category: 'nsfw',
  Usage: '{c} [term]',
  Permissions: {
    User: [],
    Bot: ['SEND_MESSAGES']
  },
  Options: {
    Dev: false,
    NSFW: true,
    Cooldown: {
      Enabled: false,
      Time: 0
    },
  },
  Run: async (client, message, paramaters) => {
    let search = paramaters.join("+")
    if (paramaters.length < 0) {
      message.channel.send(NoArguments)
    }
    fetch('http://api.urbandictionary.com/v0/define?term=' + search)
      .then(res => res.json())
      .then(json => {
        let word = json.list[0]
        try {
          const Embed = new RichEmbed()
            .setTitle(word.word)
            .setColor('RED')
            .setFooter(`By: ${word.author}`)
            .addField('Description', word.definition.split("[").join("").split("]").join(""))
            .addField('Usage', word.example.split("[").join("").split("]").join(""))
            .addField('URL', `[Here](${word.permalink})`)
          message.channel.send(Embed)
        } catch (err) {
          message.channel.send('I could not find that word!')
        }
      })

  }
}
