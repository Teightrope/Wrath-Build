const {
    RichEmbed
  } = require('discord.js')
  const Battle = require('../../assets/battle/Battle');
  const { randomRange, verify } = require('../../Util/Util');
  module.exports = {
    Triggers: ['battle', 'fight'],
    Description: 'Battle with another user.',
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

        this.games = new Map();

let opponent = message.guild.member(message.mentions.users.first() || message.guild.members.get(paramaters[0]));

if (opponent.id === message.author.id) return message.reply('You may not battle yourself.');
const current = this.client.games.get(message.channel.id);
if (current) return message.reply(`Please wait until the current game of \`${current.name}\` is finished.`);
this.client.games.set(message.channel.id, { name: this.name, data: new Battle(message.author, opponent) });
const battle = this.client.games.get(message.channel.id).data;
try {
    if (!opponent.bot) {
        await message.say(`${opponent}, do you accept this challenge?`);
        const verification = await verify(message.channel, opponent);
        if (!verification) {
            this.client.games.delete(message.channel.id);
            return message.say('Looks like they declined...');
        }
    }
    while (!battle.winner) {
        const choice = await battle.attacker.chooseAction(message);
        if (choice === 'attack') {
            const damage = randomRange(battle.defender.guard ? 5 : 20, battle.defender.guard ? 20 : 50);
            await message.say(`${battle.attacker} deals **${damage}** damage!`);
            battle.defender.dealDamage(damage);
            battle.reset();
        } else if (choice === 'defend') {
            await message.say(`${battle.attacker} defends!`);
            battle.attacker.changeGuard();
            battle.reset(false);
        } else if (choice === 'special') {
            const miss = Math.floor(Math.random() * 3);
            if (miss) {
                await message.say(`${battle.attacker}'s special attack missed!`);
            } else {
                const damage = randomRange(battle.defender.guard ? 50 : 100, battle.defender.guard ? 100 : 150);
                await message.say(`${battle.attacker} deals **${damage}** damage!`);
                battle.defender.dealDamage(damage);
            }
            battle.attacker.useMP(50);
            battle.reset();
        } else if (choice === 'cure') {
            const amount = Math.round(battle.attacker.mp / 2);
            await message.say(`${battle.attacker} heals **${amount}** HP!`);
            battle.attacker.heal(amount);
            battle.attacker.useMP(battle.attacker.mp);
            battle.reset();
        } else if (choice === 'final') {
            await message.say(`${battle.attacker} uses their final move, dealing **150** damage!`);
            battle.defender.dealDamage(150);
            battle.attacker.useMP(100);
            battle.attacker.usedFinal = true;
            battle.reset();
        } else if (choice === 'run') {
            await message.say(`${battle.attacker} flees!`);
            battle.attacker.forfeit();
        } else if (choice === 'failed:time') {
            await message.say(`Time's up, ${battle.attacker}!`);
            battle.reset();
        } else {
            await message.say('I do not understand what you want to do.');
        }
    }
    const { winner } = battle;
    this.client.games.delete(message.channel.id);
    return message.say(`The match is over! Congrats, ${winner}!`);
} catch (err) {
    this.client.games.delete(message.channel.id);
    throw err;
        }
    }
}