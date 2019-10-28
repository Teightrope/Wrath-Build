const {
  RichEmbed
} = require('discord.js')
const {
  owner
} = require('../../Configurations/Config.json')
const firstUpper = require('../../Util/Functions/firstUpper')
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

    if (paramaters.length === 0) {
      const Embed = new RichEmbed()
        .setTitle('Need help?')
        .setFooter(`https://www.wrath-discord.tk || Prefix: ${client.Prefix.get(message.guild.id).prefix} || Commands: ${client.commands.size} || Alliases: ${client.triggers.size}`)
        .setColor('RANDOM')
      Embed.addField('📕 Information', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'information').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('😂 Fun', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'fun').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      if (message.member.hasPermission('KICK_MEMBERS')) {
          Embed.addField('🛠 Moderation', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'moderation').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
        }
      Embed.addField('🌹 Roleplay', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'roleplay').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('🎮 Games', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'games').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('📸 Images', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'images').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('🖼 Avatar', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'avatar_edit').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('🎚 Level', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'levels').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('💰 Currency', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'currency').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('🎵 Music', `\`play, remove, skip, leave, search, pause, resume, volume, queue, loop, clear, np, shuffle\``)
      if (message.channel.nsfw) {
        Embed.addField('🔞 NSFW', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'nsfw').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      }
      if (message.member.hasPermission('ADMINISTRATOR')) {
          Embed.addField('⚙ Settings', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'settings').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
        }
      if (owner.includes(message.author.id)) {
          Embed.addField('🎛 Developer', `\`${client.commands.filter(f => f.Options.Dev === true).map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
        }
      Embed.setThumbnail(client.user.displayAvatarURL)

      message.react("✅")
      message.author.send(Embed)
    } else if (paramaters[0] === 'all' && paramaters[1] === 'alliases') {
      const Embed = new RichEmbed()
        .setTitle('All alliases!')
        .setDescription(`\`${client.commands.filter(f => f.Options.Dev === false).map(f => f.Triggers.join(' ')).join(" \`, \`")}\``)
        .setFooter(`${client.triggers.size} alliases`)
        .setColor('RANDOM')
        message.react("✅")

      message.author.send(Embed)
    } else if (client.triggers.has(paramaters[0])) {
      const cmd = client.triggers.get(paramaters[0])
      const Embed = new RichEmbed()
      .setTitle(firstUpper(paramaters[0].toLowerCase()))
        .setColor('RANDOM')
        .addField('Description', cmd.Description.length === 0 ? 'None' : cmd.Description)
        .addField('All alliases', `\`${cmd.Triggers.sort().join(", ")}\``)
        .addField('Usage', `w!${cmd.Usage.replace('{c}', paramaters[0].toLowerCase()) || 'None given'}`)  
      .setFooter(`${message.guild.name}'s prefix: ${client.Prefix.get(message.guild.id).prefix} || ${firstUpper(cmd.Category)}`)
      message.react("✅")
      message.channel.send(Embed)
    } else if (paramaters[0] === 'all') {
      const Embed = new RichEmbed()
        .setTitle('All commands!')
        .setDescription(`\`${client.commands.filter(f => f.Options.Dev === false).map(f => f.Triggers[0]).join("\`, \`")}\``)
        .setFooter(`${client.commands.size} Commands`)
        .setColor('RANDOM')
      message.author.send(Embed)
    } else {
      message.react("❌")
      message.channel.send('That command doesn\'t exist.')
    }
  }
}
