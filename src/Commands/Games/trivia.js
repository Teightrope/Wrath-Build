const trivia = require('../../assets/trivia.js')
const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['trivia', 'quiz'],
    Description: 'Play some trvia games',
    Category: 'games',
    Usage: '{c}',
    Permissions: {
      User: [],
      Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
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
    const trivQ = trivia[Math.floor(Math.random() * trivia.length)]
    let correctAnswer;
        if(trivQ.a.correct) {
        correctAnswer = 'a'
        } else if(trivQ.b.correct) {
        correctAnswer = 'b'
        } else if(trivQ.c.correct) {
        correctAnswer = 'c'
        } else if(trivQ.d.correct) {
        correctAnswer = 'd'
        } 
    const embed = new RichEmbed()
    .setColor('RED')
    .setTitle(trivQ.question)
    .addField('A', trivQ.a.string)
    .addField('B', trivQ.b.string)
    .addField('C', trivQ.c.string)
    .addField('D', trivQ.d.string)
    .setFooter('Select a, b, c, or, d as your answer')
    const msg = await message.channel.send(embed)
    message.channel.awaitMessages(m => m.content.toLowerCase() === correctAnswer, {max: 1, time: 20000, errors: ['time']})
        .then(collected => {
        const rightAnswer = new RichEmbed()
        .setTitle(trivQ.question)
        .setColor('RED')
        .setDescription(`${collected.first().member.user.tag} got the correct answer!`)
        msg.edit(rightAnswer)
    })
        .catch(collected => {
        const wrongAnswer = new RichEmbed()
        .setColor('RED')
        .setTitle(trivQ.question)
        .setDescription(`No one answered the question correctly withen 20 seconds\nThe correct answer was **${correctAnswer.toUpperCase()}**`)
        msg.edit(wrongAnswer)
    })
    }
  }
