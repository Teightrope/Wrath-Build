const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['invite', 'inv'],
  Description: 'Invite the bot',
  Category: 'information',
  Usage: '{c}',
  Permissions: {
    User: [],
    Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
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
    const Invite = new RichEmbed()
    Invite.setDescription(`Invite me [here](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=268545094)`)
    Invite.setColor('RED')
    message.channel.send(Invite)
  }
}
