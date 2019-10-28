const {
  RichEmbed
} = require('discord.js')
const version = require('../../../src/Configurations/Config.json');
module.exports = {
  Triggers: ['version', 'v', 'ver'],
  Description: 'Check the bots version',
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
    
    const embed = new RichEmbed()
      .setColor('RANDOM')
      .setDescription(`**v${version.version}**`)
    message.channel.send(embed);

  }
}
