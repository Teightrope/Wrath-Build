const {
    RichEmbed
  } = require('discord.js')
const superagent = require("superagent");
  module.exports = {
    Triggers: ['kiss'],
    Description: 'Kiss another user',
    Usage: '{c} [user]',
    Category: 'roleplay',
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
let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!hugUser) return message.channel.send(":x: **You need to mention an user**");
if(hugUser.id == message.author.id) return message.reply("I feel bad for you.")

const {body} = await superagent
.get(`https://api.nekos.dev/api/v3/images/sfw/gif/kiss/`);

let hugEmbed = new RichEmbed()
.setDescription(`**${message.author.username}** kissed **${message.mentions.users.first().username}**!`)
.setImage(body.data.response.url)
.setColor("RANDOM")
.setFooter(`https://www.wrath-discord.tk || Powered by Nekos.life API`)

message.channel.send(hugEmbed);
    }
}