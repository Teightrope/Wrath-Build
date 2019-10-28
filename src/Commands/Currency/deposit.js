const {
      NoArguments
} = require('../../Configurations/Errors')
const {
      RichEmbed
} = require('discord.js')
module.exports = {
      Triggers: ['deposit', 'dep', 'depo'],
      Description: 'Put money in the bank',
      Category: 'currency',
      Usage: '{c} [amount]',
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
            client.Credits.ensure(message.author.id, {
                  ID: message.author.id,
                  Wallet: 500,
                  lastUsed: null,
                  Bank: 0,
                  SecSys: false
            })
            if (paramaters.length === 0) {
                  message.channel.send(NoArguments)
            } else if (client.Credits.get(message.author.id).Wallet - parseInt(paramaters[0]) < 0) {
                  message.channel.send('You do not have enough credits for that!')
            } else if (paramaters[0].toLowerCase() === 'all') {
                  const Embed = new RichEmbed()
                        .setTitle('Success!')
                        .addField('New Balance', client.Credits.get(message.author.id).Bank + client.Credits.get(message.author.id).Wallet)
                        .setColor('RED')
                  message.channel.send(Embed)
                  client.Credits.set(message.author.id, {
                        ID: message.author.id,
                        Wallet: 0,
                        Bank: client.Credits.get(message.author.id).Bank + client.Credits.get(message.author.id).Wallet,
                        SecSys: client.Credits.get(message.author.id).SecSys,
                        lastUsed: client.Credits.get(message.author.id).lastUsed
                  })
            } else {
                  const Embed = new RichEmbed()
                        .setTitle('Success!')
                        .addField('New Balance', client.Credits.get(message.author.id).Bank + parseInt(paramaters[0]))
                        .setColor('RED')
                  message.channel.send(Embed)
                  client.Credits.set(message.author.id, {
                        ID: message.author.id,
                        Wallet: client.Credits.get(message.author.id).Wallet - parseInt(paramaters[0]),
                        Bank: client.Credits.get(message.author.id).Bank + parseInt(paramaters[0]),
                        SecSys: client.Credits.get(message.author.id).SecSys,
                        lastUsed: client.Credits.get(message.author.id).lastUsed
                  })
            }
      }
}
