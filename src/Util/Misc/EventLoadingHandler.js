// This is our function to Load events, it is a simple onliner and it works perfectly
const Load = (event) => require(`../Events/${event}`);
module.exports = (client) => {
    client.on('ready', () => Load('Ready')(client))
    client.on('message', Load('Message'))
}
