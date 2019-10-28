const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['leaderboard', 'levels', 'lb','lvls'],
  Description: 'Leaderboard for levels',
  Category: 'levels',
  Usage: '{c}',
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
    const user = message.mentions.members.first() || message.member
    const filtered = client.Points.filter( p => message.guild.members.has(p.user)).array()
    const sort = filtered.sort((a, b) => b.points - a.points)
    const top10 = sort.splice(0, 10)
    const Embed = new RichEmbed()
      .setColor('RED')
      .setTitle(`Global Points Leaderboard!`);
      
      for(const data of top10) {
        if(data.user === top10[0].user) {
          Embed.addField(`🏆 ${client.users.get(data.user).tag}`, `${data.points} points (level ${data.level})`);
        } else {
        Embed.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
      }}
      
    message.channel.send(Embed)

  }
}
