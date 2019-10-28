const {
      RichEmbed
} = require('discord.js')
module.exports = {
      Triggers: ['daily', 'dailycoins'],
      Description: 'Claim your daily credits',
      Category: 'currency',
      Usage: '{c}',
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
            if (message.createdTimestamp - client.Credits.get(message.author.id).lastUsed >= 86400000) {
                  client.Credits.set(message.author.id, {
                        ID: message.author.id,
                        Wallet: client.Credits.get(message.author.id).Wallet + 250,
                        Bank: client.Credits.get(message.author.id).Bank,
                        lastUsed: message.createdTimestamp,
                        SecSys: client.Credits.get(message.author.id).SecSys
                  })
                  const Embed = new RichEmbed()
                        .setColor('RED')
                        .addField('You have claimed your daily 250 credits!', 'Your balance is now ' + client.Credits.get(message.author.id).Wallet)
                  message.channel.send(Embed)
            } else {
                  message.channel.send('You must wait 24 hours to do that!')
            }

      }
}
