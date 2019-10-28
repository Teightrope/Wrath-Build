const { RichEmbed } = require('discord.js');
const { get } = require("snekfetch");
module.exports = {
    Triggers: ['hneko', 'nekohentai', 'hentaineko', 'hn'],
    Description: 'Sends hentai neko images.',
    Category: 'nsfw',
    Usage: '{c}',
    Permissions: {
      User: [],
      Bot: ['SEND_MESSAGES']
    },
    Options: {
      Dev: false,
      NSFW: true,
      Cooldown: {
        Enabled: true,
        Time: 3
      },
    },
    Run: async (client, message, paramaters) => {
        const { body } = await get(`https://nekobot.xyz/api/image?type=hneko`);

        const Embed = new RichEmbed()
        .setColor('RANDOM')
        .setImage(body.message)
        .setFooter(`https://www.wrath-discord.tk || Powered by NekoBot API`)

        await message.channel.send(Embed);  
    }
}