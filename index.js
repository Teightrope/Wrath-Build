// Instead of loading the entire discord.js module, I choose to load everything that i need for this one snippet of code.
const {
	Client,
    login,
    Collection
} = require('discord.js');
const WRATH_TOKEN = process.env;
// First we create the client
const client = new Client();
// Next we login and grab our token straight from our file so that it is not saved anywhere on the bot.
client.login(process.env.WRATH_TOKEN);
// Here we make new collections for all of the commands
client.triggers = new Collection();
client.commands = new Collection();
client.queue = new Map();
// We have commands used here as well. This is for the status command
client.commandsUsed = 0;
// Here is were we load all of the events.
require('./src/Util/Misc/EventLoadingHandler.js')(client);
// Soon i will be switching to a custom DataBase but for now i am using enmap made by evie.codes
const Enmap = require('enmap');
// Below this is where i load all of the DataBases that stores everything
client.Prefix = new Enmap({
	name: 'prefix'
});
client.Points = new Enmap({
	name: 'Points'
});
client.Credits = new Enmap({
	name: 'credits'
});
client.PP = new Enmap({
	name: 'PP'
});
client.HowGay = new Enmap({
	name: 'HowGay'
});
client.DankRate = new Enmap({
	name: 'DankRate'
});
