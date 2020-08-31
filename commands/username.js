const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'username',
	description: 'Username!',
	execute(message, fetch, args) {

        fetch(`https://playerdb.co/api/player/minecraft/${args[0]}`)
            .then(result => result.json())
            .then(({ data }) => {

                data.forEach(Element) .addField("Username: " + data.player.meta.name_history.name, "Changed On: " + data.player.meta.name_history.changedToAt, false)

                //let name1 = data.player.meta.name_history[1].name
                //let name2 = data.player.meta.name_history[2].name
                //let name3 = data.player.meta.name_history[3].name
                //let name4 = data.player.meta.name_history[4].name

                //let date1 = new Date(data.player.meta.name_history[1].changedToAt).toDateString()
                //let date2 = new Date(data.player.meta.name_history[2].changedToAt).toDateString()
                //let date3 = new Date(data.player.meta.name_history[3].changedToAt).toDateString()
                //let date4 = new Date(data.player.meta.name_history[4].changedToAt).toDateString()

                const embed = new MessageEmbed()
                .setTitle('__**Username History**__')
                .setDescription("**Username: " + args[0] + "**")
                .setFooter('Hypixel Discord Test Bot | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .setColor(0xFFA500)
                .setThumbnail(data.player.avatar)
                data.forEach(name) .addField("Username: " + data.player.meta.name_history.name, "Changed On: " + data.player.meta.name_history.changedToAt, false)

                //.addField("Username: " + name1, "Changed On: " + date1, false)
                //.addField("Username: " + name2, "Changed On: " + date2, false)
                //.addField("Username: " + name3, "Changed On: " + date3, false)
                //.addField("Username: " + name4, "Changed On: " + date4, false)
                
                message.channel.send(embed)
        })
        .catch(err => {
            console.log(err)
        })
    }
}