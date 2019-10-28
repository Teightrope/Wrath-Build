const {
  RichEmbed
} = require('discord.js')
const {
  version
} = require('../../../package')
const {
  readdir
} = require('fs');
const moment = require('moment')
require('moment-duration-format')
module.exports = {
  Triggers: ['processinfo', 'process', 'processinformation', 'pi'],
  Description: 'View the process information',
  Category: 'developer',
  Usage: '{c}',
  Permissions: {
    User: [],
    Bot: ['SEND_MESSAGES']
  },
  Options: {
    Dev: true,
    NSFW: false,
    Cooldown: {
      Enabled: false,
      Time: 0
    },
  },
  Run: async (client, message, paramaters) => {
    const servUp = moment.duration(require('os').uptime() * 1000).format("M [months], D [days], H [hours]");
    const Stats = new RichEmbed()
      .setTitle('Process Information')
      .setColor('#36393f')
      .addField('Home Dir (CWD)', process.cwd(), true)
      .addField('Node Version', process.version, true)
      .addField('Platform', `${process.platform} (${process.arch})`, true)
      .addField('Server Uptime', servUp)
      readdir('./node_modules', (err, files) => { Stats.addField('Modules', `${files.length}`, true) } )
      Stats.setFooter(`Package Version: ${version}`)
    message.channel.send(Stats)

  }
}
