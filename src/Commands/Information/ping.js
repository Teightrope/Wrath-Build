module.exports = {
  Triggers: ['ping', 'pong'],
  Description: 'Check the bots ping',
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
    const pong = await message.channel.send('My ping is...')
    pong.edit(`My ping is ${pong.createdTimestamp - message.createdTimestamp}ms`)
  }
}
