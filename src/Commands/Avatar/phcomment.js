const { RichEmbed } = require('discord.js');
const { get } = require("snekfetch");
module.exports = {
    Triggers: ['phcomment'],
    Description: 'Will you click it?',
    Category: 'avatar_edit',
    Usage: '{c} [user]',
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
        let target = message.author;
        let avatar = target.displayAvatarURL;
        let username = target.tag;
        let text = paramaters.join(" "); 

        if(!text) return message.channel.send(`Missing arguments. Please specify some text.`)

        const { body } = await get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${avatar}&text=${text}&username=${username}`);
        // let body = `https://nekobot.xyz/api/imagegen?type=awooify&url=${avatar}&raw=1`;
    
        console.log(target.displayAvatarURL);

        const Embed = new RichEmbed()
        .setColor('RANDOM')
        .setImage(body.message)
        .setFooter(`https://www.wrath-discord.tk || Powered by NekoBot API`)

        await message.channel.send(Embed);  
    }
}