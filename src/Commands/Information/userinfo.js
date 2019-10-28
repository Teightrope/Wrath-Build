const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['userinfo', 'ui'],
  Description: 'View some of the users information',
  Category: 'information',
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
  Run: async (client, msg, args) => {
    const member = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member;
    let bot;
    if (member.user.bot === true) {
      bot = "Yes";
    } else {
      bot = "No";
    }

    function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
    };
    const status = {
      online: "Online",
      idle: "Idle",
      dnd: "Do Not Disturb",
      offline: "Offline/Invisible"
    };
    const type = {
      0: "Playing",
      1: "Streaming",
      2: "Listening to",
      3: "Watching"
    };
    let playing;
    if (member.presence.status === 'offline' || member.presence.game === null) {
      playing = 'Playing'
    } else {
      playing = type[member.presence.game.type]
    }

    let lastMessage;
    if (member.lastMessage === null) {
      lastMessage = 'None'
    } else {
      lastMessage = `[Jump To](https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${member.lastMessage.id})`
    }


    const embed = new RichEmbed()
      .setColor('RED')
      .setAuthor(`${member.user.tag}(${member.id})`, `${member.user.displayAvatarURL}`)
      .setThumbnail(`${member.user.displayAvatarURL}`)
      .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : "No nickname"}`, true)
      .addField("Bot?", `${bot}`, true)
      .addField("Status", `${status[member.user.presence.status]}`, true)
      .addField(`${playing}`, `${member.user.presence.game ? `${member.user.presence.game.name}`: "None!"}`, true)
      .addField("Roles", `${member.roles.size}`, true)
      .addField("Last Message", `${lastMessage}`, true)
      .addField("Joined At", `${member.joinedAt.toLocaleString().split(",")[0]} (${checkDays(member.joinedAt)})`, true)
      .addField("Created On", `${member.user.createdAt.toLocaleString().split(",")[0]} (${checkDays(member.user.createdAt)})`, true);
    msg.channel.send({
      embed
    });
  }
}
