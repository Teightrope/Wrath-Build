const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['unscramble', 'unscram'],
    Description: 'Unscramble a word',
    Category: 'games',
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
    const { wordList } = require('random-words')
    const word = wordList[Math.floor(Math.random() * wordList.length)]
    const Scramble = require('../../Util/Functions/Scrammble.js')(word)
         const wordEmbed = new RichEmbed()
        .setColor('RANDOM')
        .setDescription(`The scrambled word is: \`\`\`${Scramble}\`\`\``)
        .setFooter(`You have 20 seconds!`)
        const msg = await message.channel.send(wordEmbed)
        const now = msg.createdTimestamp
        message.channel.awaitMessages(m => m.content === word, {max: 1, time: 20000, errors:['time']})
        .then(collected => {
            let completedIn = `${(collected.first().createdTimestamp - now) / 1000}`.substring(0, 4)
           const gotIt = new RichEmbed()
        .setDescription(`Goodjob, ***${collected.first().member.user.tag}*** !\n You discovered the word in ${completedIn} seconds.\n The word was \`\`\`${word}\`\`\``)
        .setColor('RANDOM')
        msg.edit(gotIt)
        })
        .catch(collected => {
         const missedIt = new RichEmbed()
        .setDescription(`No one guessed the word witen 20 seconds. The word was \`\`\`${word}\`\`\``)
        .setColor('RANDOM')
        msg.edit(missedIt)
        })
    }
  }