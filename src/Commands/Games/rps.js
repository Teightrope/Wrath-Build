const {
      RichEmbed
} = require('discord.js')
module.exports = {
      Triggers: ['rps'],
      Description: 'Play a game!',
      Category: 'games',
      Usage: '{c} [rock|paper|scissors]',
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
            const choices = ["paper", "rock", "scissors"]
            const choice = paramaters[0]
            const botChoice = choices[Math.floor(Math.random() * choices.length)]




            function rps(input, botInput) {
                  if (input === botInput) {
                        return `I choose **${botInput}**, It looks like its a tie!`
                  }
                  if (input === "paper" && botInput === "rock") {
                        return `I choose **${botInput}**, It looks like you win this time :cry:.`
                  }
                  if (input === "paper" && botInput === "scissors") {
                        return `I choose **${botInput}**, I win!`
                  }
                  if (input === "rock" && botInput === "paper") {
                        return `I choose **${botInput}**, I win!`
                  }
                  if (input === "rock" && botInput === "scissors") {
                        return `I choose **${botInput}**, It looks like you win this time :cry:.`
                  }
                  if (input === "scissors" && botInput === "rock") {
                        return `I choose **${botInput}**, I win!`
                  }
                  if (input === "scissors" && botInput === "paper") {
                        return `I choose **${botInput}**, It looks like you win this time :cry:.`
                  }
            }
            if (!choice || choices.includes(choice) === false) {
                  const NoArgsEmbed = new RichEmbed()
                        .setColor('RED')
                        .setTitle('No Arguments!')
                        .addField(`Please provide one of the following!`, `**${choices.join("**, **")}**`)
                  message.channel.send(NoArgsEmbed)
                  //message.channel.send(`Please select one of the following **${choices.join("**, **")}**, You have **${client.RPSWins.get(key, "rpsWins")}** Wins!`)
            } else {
                  message.channel.send(rps(choice, botChoice))
            }

      }
}
