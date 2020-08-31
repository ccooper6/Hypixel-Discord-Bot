const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'guild',
	description: 'Guild!',
	execute(message, fetch, args) {

        const args1 = args.join(" ")

        fetch(`https://api.hypixel.net/guild?key=642c5d12-b98b-4eda-98dd-dfb7c9d989a0&name=${args1}`)
        .then(result => result.json())
        .then(({ guild }) => {
            
            console.log(args1)
            message.channel.send(`Guild Name: ${guild.name}`)

        })
    }
}