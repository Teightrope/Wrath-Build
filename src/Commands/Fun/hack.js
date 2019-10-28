const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['hack'],
    Description: 'Hack someones discord account',
    Category: 'fun',
    Usage: '{c} [user]',
    Permissions: {
      User: [],
      Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
    },
    Options: {
      Dev: false,
      NSFW: false,
      Cooldown: {
        Enabled: true,
        Time: 0
      },
    },
    Run: async (client, message, paramaters) => {
    function getToken() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz._&";
	var string_length = 40
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring
}
        if(!paramaters[0]) {
          message.channel.send('Who are you going to hack?')
        } else {
          let user = message.mentions.members.first();
          let userToken = getToken();
          let msg = await message.channel.send(`Hacking ${user.user.tag}!`)
          setTimeout(() => {
            msg.edit('Gathering token')
          }, 500)
          
          setTimeout(() => {
            msg.edit(`Token gathered! (\`${userToken}\`)`)
          }, 1500)
	 setTimeout(() => {
		const embed = new RichEmbed()
            .setColor('GREEN')
            .setTitle(`${user.user.tag} successfully hacked!`)
            .addField('Token', '...')
            .addField('ID', user.id)
            msg.edit(embed)
	 }, 2000)
          setTimeout(() => {
            const Embed = new RichEmbed()
            .setColor('RED')
            .setTitle(`${user.user.tag} successfully hacked!`)
            .addField('Token', userToken)
            .addField('ID', user.id)
            msg.edit(Embed)
          }, 2500)
        }
    }
  }
