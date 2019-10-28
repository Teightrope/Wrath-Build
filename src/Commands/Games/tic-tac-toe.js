const {
    RichEmbed
  } = require('discord.js')
  const { stripIndents } = require('common-tags');
  const { verify } = require('../../util/Util');  
  module.exports = {
    Triggers: ['tic-tac-toe', 'tictactoe'],
    Description: 'Have a nice game of Tic-Tac-Toe with another user.',
    Usage: '{c} [user]',
    Category: 'games',
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

    let opponent = message.guild.member(message.mentions.users.first() || message.guild.members.get(paramaters[0]));

if (opponent.client) return message.reply('Bots may not be played against.');
if (opponent.id === message.author.id) return message.reply('You may not play against yourself.');
const current = this.client.games.get(message.channel.id);
if (current) return message.reply(`Please wait until the current game of \`${current.name}\` is finished.`);
this.client.games.set(message.channel.id, { name: this.name });
try {
    await message.say(`${opponent}, do you accept this challenge?`);
    const verification = await verify(message.channel, opponent);
    if (!verification) {
        this.client.games.delete(message.channel.id);
        return message.say('Looks like they declined...');
    }
    const sides = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    const taken = [];
    let userTurn = true;
    let winner = null;
    while (!winner && taken.length < 9) {
        const user = userTurn ? message.author : opponent;
        const sign = userTurn ? 'X' : 'O';
        await message.say(stripIndents`
            ${user}, which side do you pick?
            \`\`\`
            ${sides[0]} | ${sides[1]} | ${sides[2]}
            —————————
            ${sides[3]} | ${sides[4]} | ${sides[5]}
            —————————
            ${sides[6]} | ${sides[7]} | ${sides[8]}
            \`\`\`
        `);
        const filter = res => {
            const choice = res.content;
            return res.author.id === user.id && sides.includes(choice) && !taken.includes(choice);
        };
        const turn = await message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000
        });
        if (!turn.size) {
            await message.say('Sorry, time is up!');
            userTurn = !userTurn;
            continue;
        }
        const choice = turn.first().content;
        sides[Number.parseInt(choice, 10)] = sign;
        taken.push(choice);
        if (this.verifyWin(sides)) winner = userTurn ? message.author : opponent;
        userTurn = !userTurn;
    }
    this.client.games.delete(message.channel.id);
    return message.say(winner ? `Congrats, ${winner}!` : 'Oh... The cat won.');
} catch (err) {
    this.client.games.delete(message.channel.id);
    throw err;
}
    },
    verifyWin(sides) {
		return (sides[0] === sides[1] && sides[0] === sides[2])
			|| (sides[0] === sides[3] && sides[0] === sides[6])
			|| (sides[3] === sides[4] && sides[3] === sides[5])
			|| (sides[1] === sides[4] && sides[1] === sides[7])
			|| (sides[6] === sides[7] && sides[6] === sides[8])
			|| (sides[2] === sides[5] && sides[2] === sides[8])
			|| (sides[0] === sides[4] && sides[0] === sides[8])
            || (sides[2] === sides[4] && sides[2] === sides[6]);
    }
};
