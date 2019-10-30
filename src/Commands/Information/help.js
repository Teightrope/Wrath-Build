const {
  RichEmbed
} = require('discord.js')
const {
  owner
} = require('../../Configurations/Config.json')
const firstUpper = require('../../Util/Functions/firstUpper')
const version = require('../../../src/Configurations/Config.json')
module.exports = {
  Triggers: ['help', 'h', 'h?', '?', 'whatdoido'],
  Description: 'Shows all commands',
  Category: 'information',
  Usage: '{c} [command]',
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

    let category = paramaters[0];

    if(category === "info") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Information Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'information').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "fun") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Fun Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'fun').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "mod") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Moderator Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'moderation').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "roleplay") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Roleplay Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'roleplay').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "games") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Games Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'games').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "images") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Images Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'images').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "avatar") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Avatar Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'avatar_edit').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "level") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Level Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'levels').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "currency") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Currency Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'currency').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "music") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Music Commands')
      .setDescription(`\`play, remove, skip, leave, search, pause, resume, volume, queue, loop, clear, np, shuffle\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "nsfw") {
      if(!message.channel.nsfw) return message.reply(`You can only see these commands in a __NSFW__ channel.`)
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('N.S.F.W Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'nsfw').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "settings") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Settings Commands')
      .setDescription(`\`${client.commands.filter(f => f.Category.toLowerCase() === 'settings').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "developer") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('Developer Commands')
      .setDescription(`\`${client.commands.filter(f => f.Options.Dev === true).map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      message.channel.send(infoEmbed)
      return;
    } else if(category === "all") {
      const infoEmbed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('All Commands')
      .setDescription(`\`${client.commands.filter(f => f.Options.Dev === false).map(f => f.Triggers[0]).join("\`, \`")}\``)
      message.channel.send(infoEmbed)
      return;
    }

    const Embed = new RichEmbed()
    .setColor('RANDOM')
    .setDescription(`You need some help? type **${client.Prefix.get(message.guild.id).prefix}help category** to see commands from any category.`)
    Embed.addField(`⫸ Information`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help info\`\`\``, true)
    Embed.addField(`⫸ Fun`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help fun\`\`\``, true)
    if (message.member.hasPermission('KICK_MEMBERS')) {
    Embed.addField(`⫸ Moderator`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help mod\`\`\``, true)
  }
    Embed.addField(`⫸ Roleplay`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help roleplay\`\`\``, true)
    Embed.addField(`⫸ Games`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help games\`\`\``, true)
    Embed.addField(`⫸ Images`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help images\`\`\``, true)
    Embed.addField(`⫸ Avatar`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help avatar\`\`\``, true)
    Embed.addField(`⫸ Level`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help level\`\`\``, true)
    Embed.addField(`⫸ Currency`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help currency\`\`\``, true)
    Embed.addField(`⫸ Music`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help music\`\`\``, true)
    if (message.channel.nsfw) {
      Embed.addField(`⫸ N.S.F.W`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help nsfw\`\`\``, true)
    }
    if (message.member.hasPermission('ADMINISTRATOR')) {
      Embed.addField(`⫸ Settings`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help settings\`\`\``, true)
    }
    if (owner.includes(message.author.id)) {
      Embed.addField(`⫸ Developer`, `\`\`\`${client.Prefix.get(message.guild.id).prefix}help developer\`\`\``, true)
    }
    Embed.addField(`Changelog`, `\`\`\`diff\n  Version: v${version.version}\n\n+ Added Music Commands\n+ Added Avatar Commands\`\`\``)
    Embed.setThumbnail(client.user.displayAvatarURL)
    Embed.setFooter(`https://www.wrath-discord.tk || Prefix: ${client.Prefix.get(message.guild.id).prefix} || Commands: ${client.commands.size} || Alliases: ${client.triggers.size}`)

    message.react("✅")
    message.channel.send(Embed)
    // if (paramaters.length === 0) {
    //   const Embed = new RichEmbed()
    //     .setTitle('Need help?')
    //     .setFooter(`https://www.wrath-discord.tk || Prefix: ${client.Prefix.get(message.guild.id).prefix} || Commands: ${client.commands.size} || Alliases: ${client.triggers.size}`)
    //     .setColor('RANDOM')
    //   Embed.addField('⫸ Information', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'information').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //   Embed.addField('⫸ Fun', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'fun').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //   if (message.member.hasPermission('KICK_MEMBERS')) {
    //       Embed.addField('⫸ Moderation', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'moderation').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //     }
    //   Embed.addField('⫸ Roleplay', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'roleplay').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //   Embed.addField('⫸ Games', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'games').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //   Embed.addField('⫸ Images', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'images').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //   Embed.addField('⫸ Avatar', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'avatar_edit').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //   Embed.addField('⫸ Level', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'levels').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //   Embed.addField('⫸ Currency', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'currency').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //   Embed.addField('⫸ Music', `\`play, remove, skip, leave, search, pause, resume, volume, queue, loop, clear, np, shuffle\``)
    //   if (message.channel.nsfw) {
    //     Embed.addField('> NSFW', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'nsfw').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //   }
    //   if (message.member.hasPermission('ADMINISTRATOR')) {
    //       Embed.addField('⫸ Settings', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'settings').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //     }
    //   if (owner.includes(message.author.id)) {
    //       Embed.addField('⫸ Developer', `\`${client.commands.filter(f => f.Options.Dev === true).map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
    //     }
    //   Embed.addField(`Changelog`, '```diff\n- Added Music Commands\n- Added Avatar Commands```')
    //   Embed.setThumbnail(client.user.displayAvatarURL)

    //   message.react("✅")
    //   message.author.send(Embed)
    // } else if (paramaters[0] === 'all' && paramaters[1] === 'alliases') {
    //   const Embed = new RichEmbed()
    //     .setTitle('All alliases!')
    //     .setDescription(`\`${client.commands.filter(f => f.Options.Dev === false).map(f => f.Triggers.join(' ')).join(" \`, \`")}\``)
    //     .setFooter(`${client.triggers.size} alliases`)
    //     .setColor('RANDOM')
    //     message.react("✅")

    //   message.author.send(Embed)
    // } else if (client.triggers.has(paramaters[0])) {
    //   const cmd = client.triggers.get(paramaters[0])
    //   const Embed = new RichEmbed()
    //   .setTitle(firstUpper(paramaters[0].toLowerCase()))
    //     .setColor('RANDOM')
    //     .addField('Description', cmd.Description.length === 0 ? 'None' : cmd.Description)
    //     .addField('All alliases', `\`${cmd.Triggers.sort().join(", ")}\``)
    //     .addField('Usage', `w!${cmd.Usage.replace('{c}', paramaters[0].toLowerCase()) || 'None given'}`)  
    //   .setFooter(`${message.guild.name}'s prefix: ${client.Prefix.get(message.guild.id).prefix} || ${firstUpper(cmd.Category)}`)
    //   message.react("✅")
    //   message.channel.send(Embed)
    // } else if (paramaters[0] === 'all') {
    //   const Embed = new RichEmbed()
    //     .setTitle('All commands!')
    //     .setDescription(`\`${client.commands.filter(f => f.Options.Dev === false).map(f => f.Triggers[0]).join("\`, \`")}\``)
    //     .setFooter(`${client.commands.size} Commands`)
    //     .setColor('RANDOM')
    //   message.author.send(Embed)
    // } else {
    //   message.react("❌")
    //   message.channel.send('That command doesn\'t exist.')
    // }
  }
}
