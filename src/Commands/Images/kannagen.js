const { RichEmbed } = require('discord.js');
const { get } = require("snekfetch");
module.exports = {
    Triggers: ['kannagen'],
    Description: 'Make Kanna say everything you want',
    Category: 'images',
    Usage: '{c} [text]',
    Permissions: {
      User: [],
      Bot: ['SEND_MESSAGES']
    },
    Options: {
      Dev: false,
      NSFW: false,
      Cooldown: {
        Enabled: true,
        Time: 3
      },
    },
    Run: async (client, message, paramaters) => {

        let text = paramaters.join(" "); 

        if(!text) return message.channel.send(`Missing arguments. Please specify some text.`)

        const { body } = await get(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${text}`);

        const Embed = new RichEmbed()
        .setColor('RANDOM')
        .setImage(body.message)
        .setFooter(`https://www.wrath-discord.tk || Powered by NekoBot API`)

        await message.channel.send(Embed);  
    }
}