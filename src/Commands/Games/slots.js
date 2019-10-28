const {
    RichEmbed
  } = require('discord.js')
  const { stripIndents } = require('common-tags');
  const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];
  module.exports = {
    Triggers: ['slots'],
    Description: 'Have a nice game of Slots.',
    Usage: '{c}',
    Category: 'games',
    Permissions: {
      User: [],
      Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
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
		const slotOne = slots[Math.floor(Math.random() * slots.length)];
		const slotTwo = slots[Math.floor(Math.random() * slots.length)];
		const slotThree = slots[Math.floor(Math.random() * slots.length)];
		if (slotOne === slotTwo && slotOne === slotThree) {
            return message.reply(stripIndents`
            Results:
            ---------------
            |${slotTwo}|${slotThree}|${slotOne}|
            |${slotOne}|${slotTwo}|${slotThree}|
            |${slotTwo}|${slotOne}|${slotThree}|
            ---------------
            \`\`\`🎉 Congratulations! You won the slots! 🎉\`\`\`
			`);
		}
        return message.reply(stripIndents`
        Results:
        ---------------
        |${slotTwo}|${slotThree}|${slotOne}|
        |${slotOne}|${slotTwo}|${slotThree}|
        |${slotTwo}|${slotOne}|${slotThree}|
        ---------------
			\`\`\`Welp, it looks like you lost. Maybe try again?\`\`\`
		`);
    }
}