const {
      RichEmbed
} = require('discord.js')
module.exports = {
      Triggers: ['roleinfo'],
      Description: 'View a role\'s information',
      Category: 'information',
      Usage: '{c} [role]',
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
            const paramatersv2 = message.content.split(' ').splice(1).join(' '); // You can name this whatever you want, or alternatively just use parameters without [0]
            if (paramatersv2[0].length === 0) return message.channel.send(errors.MissingArgs)
            const role = message.guild.roles.find(f => f.name.toLowerCase() === paramatersv2.toLowerCase()) || message.mentions.roles.first()
            const specials = []
            if(role.serialize().ADMINISTRATOR) {
                  specials.push('Administrator')
            } else if(role.serialize().KICK_MEMBERS) {
                  specials.push('Kick Members')
            } if(role.serialize().BAN_MEMBERS) {
                  specials.push('Ban Members')
            } if(role.serialize().MANAGE_SERVER) {
                  specials.push('Manage Server')
            } if(role.serialize().SEND_TTS_MESSAGES) {
                  specials.push('TTS')
            } 
            if (role) {
                  const embed = new RichEmbed()
                        .setColor(role.color)
                        .setAuthor(role.name, message.guild.iconURL)
                        .addField("User Count!", `${role.members.size} users!`, true)
                        .addField("Created On", `${role.createdAt.toLocaleString().split(', ')[0]}`, true)
                        .addField('Role ID', role.id, true)
                        .addField('Color', role.color)
                        .addField('Special Permissions', specials.length > 0 ? specials.join(', ') : 'None', true)
                  message.channel.send(embed);

            } else {
                  message.channel.send(`I cannot find that role!`)
            }
      }
}
