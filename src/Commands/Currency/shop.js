const shop = require('../../Configurations/Shop')
const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['shop', 'store'],
    Description: 'View a list of items in the shop',
    Category: 'currency',
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
        const Embed = new RichEmbed()
        .setTitle('Shop')
        .setColor('RED')
        .addField(`${shop.security.FullNames[0]} (${shop.security.Price} credits)`, `Protect your wallet! (one time use) \`ID: ${shop.security.ID}\``)
        .addField(`${shop.enlarge.FullNames[0]} (${shop.enlarge.Price} credits)`, `Grow that big pp by once inch \`ID: ${shop.enlarge.ID}\``)
        .setFooter(`Use \`${client.Prefix.get(message.guild.id).prefix}buy ID\` to buy something`)
        message.channel.send(Embed)
    }
  }
