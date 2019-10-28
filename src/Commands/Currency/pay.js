// Require the 'NoArguments' String
const {
    NoArguments
} = require('../../Configurations/Errors')
// Require 'RichEmbed' and not the entire discord.js module.
// This is how we will create our embed
const {
    RichEmbed
} = require('discord.js')
module.exports = {
    Triggers: ['pay', 'givemoney'],
    Description: 'Pay someone',
    Category: 'currency',
    Usage: '{c} [user] [amount]',
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
        // This peice of code grabs the user from the first mentioned person in the message
        const user = message.mentions.members.first()
        // Make sure the user actually has credits
        client.Credits.ensure(user.id, {
            ID: user.id,
            Wallet: 500,
            lastUsed: null,
            Bank: 0,
            SecSys: false
        })
        // Make sure the person running the command has credits as well
        client.Credits.ensure(message.author.id, {
            ID: message.author.id,
            Wallet: 500,
            lastUsed: null,
            Bank: 0,
            SecSys: false
        })
        // This grabs the integer from paramaters[1] and sets it to the amount variable
        const amount = parseInt(paramaters[1])
        if (!user) {
            message.channel.send(NoArguments)
            return
            // If there is no paramaters[1] then the command says that you must include some arguments
        } else if (!amount) {
            message.channel.send(NoArguments)
            return
        }
        // If amount is not a number then it will tell you that you need to use a number
        if (isNaN(amount) === true) {
            message.channel.send('Please use a number')
            return
        }
        // If the user is a bot then you cannot pay it
        if (user.user.bot === true) {
            message.channel.send('You can\'t pay a bot!')
        // Check if the user than ran the command has enough credits to pay the other user
        } else if (client.Credits.get(message.author.id).Wallet - amount < 0) {
            message.channel.send(`You do not have enough money to do that!`)
            return
        } else if (amount < 100) {
            message.channel.send(`Please send more than 100 credits`)
            return
        } else if (user.id === message.author.id) {
            message.channel.send(`You cannot pay yourself!`)
            return
        } else if (user.id === '554686340248371209') {
            message.channel.send(`You cannot pay me!`)
            return
        } else {
            client.Credits.ensure(user.id, {
                ID: message.author.id,
                Wallet: 500,
                Bank: 0,
                lastUsed: null,
                SecSys: false
            })

            const payment = new RichEmbed()
                .setColor('RED')
                .setTitle('Payment Successful!')
                .addField('User', `**${user.user.tag}**`, true)
                .addField('Amount', `**${amount}**`, true)
            message.channel.send(payment)
            client.Credits.set(user.id, {
                ID: message.author.id,
                Bank: client.Credits.get(user.id).Bank,
                Wallet: client.Credits.get(user.id).Wallet + Math.floor(amount),
                lastUsed: client.Credits.get(user.id).lastUsed,
                SecSys: client.Credits.get(user.id).SecSys
            })
            client.Credits.set(message.author.id, {
                ID: message.author.id,
                Bank: client.Credits.get(message.author.id).Bank,
                Wallet: client.Credits.get(message.author.id).Wallet - amount,
                lastUsed: client.Credits.get(message.author.id).lastUsed,
                SecSys: client.Credits.get(message.author.id).SecSys
            })
        }

    }
}
