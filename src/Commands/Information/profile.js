const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['profile'],
    Description: 'See a users profile information',
    Category: 'information',
    Usage: '{c} [user]',
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
        const user = message.mentions.members.first() || message.member;
        const Embed = new RichEmbed()
        .setColor('RANDOM')
        .setTitle(`${user.user.username}'s Profile`)
        .addField('💰 Wallet Ammount', client.Credits.get(user.id).Wallet, true)
        .addField('🏦 Bank Ammount', client.Credits.get(user.id).Bank, true)
        .setFooter(`https://www.wrath-discord.tk`)
        .setThumbnail(user.user.displayAvatarURL)
        if(client.PP.has(user.id)) {
            Embed.addField('😩 Penis Size', `${client.PP.get(user.id).size} inches`, true)
        }
        if(client.HowGay.has(user.id)) {
            Embed.addField('🏳️‍🌈 Gayness Rate', `${client.HowGay.get(user.id)}%`, true)
        }
        if(client.DankRate.has(user.id)) {
            Embed.addField('👌 Dankness Rate', `${client.DankRate.get(user.id)}%`, true)
        } 
        message.channel.send(Embed)
    }
    }
