const { RichEmbed } = require('discord.js');
module.exports = {
    Triggers: ['rich', 'moneylb', 'richleaderboard', 'richest', 'richs'],
    Description: 'See whos the richest of all!',
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
        Enabled: true,
        Time: 0
      },
    },
    Run: async (client, message, paramaters) => {
    const filtered = client.Credits.filter( p => message.guild.members.has(p.ID)).array()
    const sort = filtered.sort((a, b) => b.Wallet - a.Wallet)
    const top5 = sort.splice(0, 5)
        const Embed = new RichEmbed()
        .setColor('RED')
              for(const data of top5) {
        if(data.ID === top5[0].ID) {
          Embed.addField(`🏆 ${client.users.get(data.ID).tag}`, `${data.Wallet} Credits`);
        } else {
        Embed.addField(client.users.get(data.ID).tag, `${data.Wallet} Credits`);
      }}
        message.channel.send(Embed);
  }

}
