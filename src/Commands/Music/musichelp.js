const {
    RichEmbed,
    Discord
  } = require('discord.js')
  const Music = require('discord.js-musicbot-addon');
  module.exports = {
    Triggers: ['musichelp', 'mhelp', 'helpm'],
    Description: 'Access all music commands',
    Category: 'music',
    Usage: '{c} [command]',
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
        this.music = require("discord.js-musicbot-addon");
        var randomhex = '#'+Math.floor(Math.random()*16777215).toString(16);

        Music.start(client, {
            youtubeKey: "AIzaSyDkRng3UO1NMGA68EHP_Bb0JdruHXGOR9Y",
            botPrefix: `${client.Prefix.get(message.guild.id).prefix}`, // Prefix for the commands.
            helpCmd: `musichelp`,  
            global: false,            // Non-server-specific queues.
            maxQueueSize: 25,        // Maximum queue size of 25.
            clearInvoker: true, 
            disableLoop: false,
            requesterName: true,
            defVolume: 100,
            bitRate: 16000,
            clearInvoker: true,
            embedColor: 'RANDOM',
            thumbnailType: 'high',
            anyoneCanLeave: false,
            anyoneCanLeave: false,
            anyoneCanSkip: false,
            bigPicture: false,
          help: {
              alt: [`musichelp`],
              help: "Shows the music helpmenu. (music is made by an addon)",
              name: `${client.Prefix.get(message.guild.id).prefix}musichelp`
            },  
          });
    }
  }
  