const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help!',
    execute(message, client) {

        const embed = new MessageEmbed()

        .setTitle(":people_holding_hands: **Help** :people_holding_hands:")
        .setDescription('\u200b')
        .setColor(0x001cab)
        .setAuthor("Reforge Bot#1236")
        .addFields(
            {name: "**__General Commands__**", value: '\u200b', inline: false},
            {name: "s!help", value: "```Sends this help message```", inline: true},
            {name: "s!info", value: "```Sends a message containing information regarding the bot```", inline: true},
            {name: "s!uuid (username)", value: "```Provides the uuid of a certain player (used for talisman commands)```", inline: true},
            {name: "s!status (username)", value: "```Sends a message regarding whether or not a player is online on Hypixel```", inline: true},
            {name: "**__Admin Commands__**", value: '\u200b'},
            {name: "s!purge (1-99)", value: "```Purges up to 99 messages in the channel the command was sent in```", inline: true},
            {name: "s!mute (user) (time)", value: "```Mutes a user for a set amount of time```", inline: true},
            {name: "s!kick (user)", value: "```Kicks a user from the server```", inline: true},
            {name: "s!ban (user)", value: "```Bans a user from the server```", inline: true},
            {name: "**__Extra Features__**", value: '\u200b'},
            {name: "Welcome + Goodbye Feature", value: '```For this feature to be used, you require a channel named "welcome-and-goodbye"```'}
        )

        message.reply(embed)

    }
}