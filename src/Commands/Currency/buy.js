const { RichEmbed } = require('discord.js')
const shop = require('../../Configurations/Shop')
module.exports = {
    Triggers: ['buy'],
    Description: 'Buy something from the shop',
    Category: 'currency',
    Usage: '{c} [item] [amount]',
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
        const item = paramaters[0]
        let amount = paramaters[1]
        if(!item) {
            return message.channel.send('Are you even trying to buy anything?')
        } else if(!amount || isNaN(amount)) {
            amount = 1
        } 
        if(item.toLowerCase() === 'security') {
            if(client.Credits.get(message.author.id).Wallet - 5000 < 0) {
                return message.channel.send('You do not have enough credits for that')
            }
            message.channel.send('You bought a **Security System**')
            client.Credits.set(message.author.id, {ID: message.author.id, Wallet: client.Credits.get(message.author.id).Wallet - 5000, Bank: client.Credits.get(message.author.id).Bank, SecSys: true, lastUsed: client.Credits.get(message.author.id).lastUsed})
        } else if(item.toLowerCase() === 'enlarge') {
            if(client.Credits.get(message.author.id).Wallet - 1000 < 0) {
                return message.channel.send('You do not have enough credits for that')
            }
            message.channel.send('You bought a **Penis Enlargment** pill')
            client.PP.set(message.author.id, {size: client.PP.get(message.author.id).size + 1})
            client.Credits.set(message.author.id, { ID: message.author.id, Wallet: client.Credits.get(message.author.id).Wallet - 1000, Bank: client.Credits.get(message.author.id).Bank, SecSys: client.Credits.get(message.author.id).SecSys, lastUsed: client.Credits.get(message.author.id).lastUsed})
        }
    }
  }
