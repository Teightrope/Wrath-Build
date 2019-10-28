const { RichEmbed } = require('discord.js');
const { get } = require("snekfetch");
module.exports = {
    Triggers: ['whowouldwin'],
    Description: 'Find out who would win between two users.',
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
        // let target = message.mentions.users.first();
        // let target2 = message.mentions.users.last();

        let target = message.mentions.users.first();
        let target2 = message.mentions.users.last();

        if(!target) return message.channel.send(`Missing arguments. Please specify the first user.`);
        if(!target2) return message.channel.send(`Missing arguments. Please specify the second user.`);

        let avatar = target.displayAvatarURL;
        let avatar2 = target2.displayAvatarURL 
        const { body } = await get(`https://nekobot.xyz/api/imagegen?type=whowouldwin&user1=${avatar}&user2=${avatar2}`);
        // let body = `https://nekobot.xyz/api/imagegen?type=awooify&url=${avatar}&raw=1`;
    
        console.log(target.displayAvatarURL);

        const Embed = new RichEmbed()
        .setColor('RANDOM')
        .setImage(body.message)
        .setFooter(`https://www.wrath-discord.tk || Powered by NekoBot API`)

        await message.channel.send(Embed);  
    }
}