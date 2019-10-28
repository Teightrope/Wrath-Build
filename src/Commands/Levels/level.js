const {
    RichEmbed
} = require('discord.js')
const Canvas = require('canvas');
module.exports = {
    Triggers: ['level', 'rank', 'points', 'lvl'],
    Description: 'See how many points you have',
    Category: 'levels',
    Usage: '{c} [user]',
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
        const Embed = new RichEmbed()
            .setColor('RED')
            .setTitle(`${user.user.tag}'s points!`)
            .addField('Level', client.Points.get(user.id).level, true)
            .addField('Points', `${client.Points.get(user.id).points}/${(client.Points.get(user.id).level + 1) * 100}xp`, true)
        message.channel.send(Embed)

    }
}
