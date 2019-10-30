// This is a function that logs the commands that are being loaded and just makes it look fancy. This command can be used for debugging purposes so that you can see it more clearly
const Write = require('../Functions/Write')
// Once again, we are just loading the 'readdir' function from the module so that we dont have to load the entire module.
// We use readdir so that we can grab all of the files from `./src/Commands/` and require them
const {
    readdir
} = require('fs')
// This is just something i added as a functionality for when i get bored or if you're using the bot.
const {
    LogCommandsOnStart,
    LogCount
} = require('../../Configurations/StartLog')
const {
    RichEmbed
} = require('discord.js')
const version = require('../../../src/Configurations/Config.json');
// This is our folders in `./src/Commands` If you do not have a foldername in this array then the folder will not be loaded
const Folders = ['Fun', 'Information', 'Moderation', 'Developer', 'Levels', 'NSFW', 'Settings', 'Currency', 'Images', 'Games', 'Music', 'Roleplay', 'Avatar']
module.exports = async (client) => {
    // Set the playing status to "I'm online" and then .5 seconds after set it to "x!help". I do this to make sure the bot restarts properly without having my terminal open
    client.user.setActivity('Turning on...')
    setTimeout(() => {
        client.user.setActivity(`v${version.version} - w!help`)
    }, 500)
    // var i = 0 is used for the `LogCommandsOnStart` and `LogCount`
    var i = 0
    // Here we take the folders array. Run a `forEach()` loop on it to loop through each of the folders with the same peice of code.
    Folders.forEach(Folder => {
        // Here we grab the files from each folder
        readdir(`./src/Commands/${Folder}`, (err, files) => {
            // And now we grab every file
            files.forEach(file => {
                // We require the file and save it under the `Command` variable name
                const Command = require(`../../Commands/${Folder}/${file}`)
                if (i < LogCount && LogCommandsOnStart) {
                    Write(`Command Started Succesfully: ${Command.Triggers[0]}`, 3)
                    i++
                }
                // Here we are setting client.commands so that i can use that for the help command. I'm still thinking of a way to get rid of client.commands
                client.commands.set(Command.Triggers[0], Command)
                // Here we are setting each trigger under client.triggers
                Command.Triggers.forEach(Trigger => {
                    client.triggers.set(Trigger, Command)
                })
            })
        })
    })
    // I kinda want to see how many commands are being loaded for debug sake so heres this too
    setTimeout(() => {
        Write(`${client.commands.size} Commands Loaded Succesfully (${client.triggers.size} Triggers Loaded)`, 0)
        Write(`Serving in ${client.guilds.size} Guilds.`, 0)
        Write(`Listening to ${client.channels.size} Channels`, 0)
        Write(`Watching ${client.users.size} Users`, 0)
    }, 1000)

    client.on("guildCreate", guild => {
        //  when the bot joins a guild.
        console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
        const joinEmbed = new RichEmbed()
        .setColor('RANDOM')
        .setTitle('Someone added Wrath in their Discord Server')
        .addField(`Server Name`, guild.name)
        .addField(`Server Members Count`, guild.memberCount)
        .addField(`Server Owner`, guild.owner.user.tag)
        .setThumbnail(guild.iconURL)
        .setFooter(`v1.0.0 Dev Build`)
    
        client.channels.get("638032546533343261").send(joinEmbed);
      });
      
      client.on("guildDelete", guild => {
        // when the bot is removed from a guild.
        console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
        const leftEmbed = new RichEmbed()
        .setColor('RANDOM')
        .setTitle('Someone deleted Wrath from their Discord Server')
        .addField(`Server Name`, guild.name)
        .addField(`Server Members Count`, guild.memberCount)
        .addField(`Server Owner`, guild.owner.user.tag)
        .setThumbnail(guild.iconURL)
        .setFooter(`v1.0.0 Dev Build`)
    
        client.channels.get("638032546533343261").send(leftEmbed);
    });

}
