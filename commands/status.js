const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'status',
	description: 'Status!',
	execute(client, message, args, fetch) {

        let statusUrl = 'https://api.slothpixel.me/api/players/';
                let usernameStatus = args[0]
                let isOnline;
                let getStatus;
                let statusEmbed = new MessageEmbed().setTitle('Status')
                    fetch(statusUrl + usernameStatus)
                    .then(res => res.json())
                    .then(data => isOnline = data)
                    .then(() => {
                    getStatus = JSON.stringify(isOnline.online)
                        if (getStatus == "true") {
                    statusEmbed = new MessageEmbed().setTitle('Status').addFields(
                        { name: 'Hypixel Status', value: usernameStatus + ' is online',})
                        message.channel.send(statusEmbed)
                }
                        if (getStatus == "false") {
                    statusEmbed = new MessageEmbed().setTitle('Status').addFields(
                        { name: 'Hypixel Status', value: usernameStatus + ' is offline',})
                        message.channel.send(statusEmbed)
                }
            })

    }
}