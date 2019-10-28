const moment = require('moment')
require('moment-duration-format')
const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['status', 'stats', 'uptime', 'statistics'],
  Description: 'Check the bots status',
  Category: 'information',
  Usage: '{c}',
  Permissions: {
    User: [],
    Bot: ['SEND_MESSAGES', 'EMBED_LINKS']
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

    const duration = moment.duration(Math.floor(process.uptime()) * 1000).format(" D [days], H [hours], m [minutes]");

    const embed = new RichEmbed()
      .setColor('RED')
      .setTitle(`Bot's status!`)
      .addField("Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
      .addField("Commands Used", `${client.commandsUsed}`, true)
      .addField("Uptime", `${duration}`, true)
      .addField("Users", `${Math.ceil((client.users.size - 1) / 1000)} K`, true)
      .addField(`Servers`, `${client.guilds.size.toLocaleString()}`, true)
      .addField(`Channels`, `${client.channels.size.toLocaleString()}`, true)
    message.channel.send(embed);
  }
}
