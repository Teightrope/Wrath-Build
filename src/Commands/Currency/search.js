const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['search', 'look', 'scavenge', 'beg'],
  Description: 'Search for some coins',
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
    client.Credits.ensure(message.author.id, {
      ID: message.author.id,
      Wallet: 500,
      lastUsed: null,
      Bank: 0,
      SecSys: false
    })
    const Embed = new RichEmbed()
    const ChanceOfDeath = Math.floor(Math.random() * 2);
    const coinAmount = Math.floor(Math.random() * 65);
    const wayOfFinding = ["digging through the dumpster", `finding ${message.guild.members.random().user.tag}'s wallet`, 'your moms car', 'looking in the bottom of your purse']
    const wayOfDeath = ['fell down a hole', 'accidently fell in the dumpster']
    if (ChanceOfDeath === 0) {
      Embed.setTitle(`You found ${coinAmount} coins by ${wayOfFinding[Math.floor(Math.random() * wayOfFinding.length)]}`).setColor("RED")
      client.Credits.set(message.author.id, {
        ID: message.author.id,
        Wallet: client.Credits.get(message.author.id).Wallet + coinAmount,
        Bank: client.Credits.get(message.author.id).Bank,
        lastUsed: client.Credits.get(message.author.id).lastUsed,
        secSys: client.Credits.get(message.author.id).lastUsed
      })
      message.channel.send(Embed)
    } else {
      Embed.setTitle(`You didnt find any coins because you ${wayOfDeath[Math.floor(Math.random() * wayOfDeath.length)]}`).setColor("RED")
      message.channel.send(Embed)
    }
  }
}
