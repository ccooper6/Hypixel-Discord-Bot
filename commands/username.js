const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'username',
	description: 'Username!',
	execute(message, fetch, args) {

        fetch(`https://playerdb.co/api/player/minecraft/${args[0]}`)
            .then(result => result.json())
            .then(({ data }) => {

                data.forEach(Element) .addField("Username: " + data.player.meta.name_history.name, "Changed On: " + data.player.meta.name_history.changedToAt, false)
                const embed = new MessageEmbed()
                .setTitle('__**Username History**__')
                .setDescription("**Username: " + args[0] + "**")
                .setFooter('Hystacks | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .setColor(0xFFA500)
                .setThumbnail(data.player.avatar)
                data.forEach(name) .addField("Username: " + data.player.meta.name_history.name, "Changed On: " + data.player.meta.name_history.changedToAt, false)

                message.channel.send(embed)
        })
        .catch(err => {
            console.log(err)
        })
    }
}