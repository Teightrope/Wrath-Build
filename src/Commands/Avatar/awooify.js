const { RichEmbed } = require('discord.js');
const { get } = require("snekfetch");
module.exports = {
    Triggers: ['awooify'],
    Description: 'Awooify someones avatar.',
    Category: 'avatar_edit',
    Usage: '{c} [user]',
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
        let target = message.mentions.users.first() || message.author;
        let avatar = target.displayAvatarURL;
        const { body } = await get(`https://nekobot.xyz/api/imagegen?type=awooify&url=${avatar}`);
        // let body = `https://nekobot.xyz/api/imagegen?type=awooify&url=${avatar}&raw=1`;
    
        console.log(target.displayAvatarURL);

        const Embed = new RichEmbed()
        .setColor('RANDOM')
        .setImage(body.message)
        .setFooter(`https://www.wrath-discord.tk || Powered by NekoBot API`)

        await message.channel.send(Embed);  
    }
}