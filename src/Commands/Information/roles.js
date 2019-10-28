const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['roles', 'severroles', 'sr'],
    Description: 'View all the roles in a server',
    Category: 'information',
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
        const roles = message.guild.roles.map(role => role.id).slice(1)
        if(roles.join(' ').length > 1800) {
            message.channel.send('There are too many roles to display!')
        } else {
        const Embed = new RichEmbed()
        .setTitle(`${message.guild.name}'s roles (${message.guild.roles.size})`)
        .setDescription(`<@&${roles.join('> | <@&')}>`)
        .setColor('RED')
        message.channel.send(Embed)
    }}
  }
