const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'username',
	description: 'Username!',
	execute(message, fetch, args) {

        if(!args[0]) {

            let embed = new MessageEmbed()

                .setTitle(':skull_crossbones: Error')
                .setColor(0xFFA500)
                .setFooter("Hypixel Discord Test Bot | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .addFields(
                    { name: "\u200b\n", value: "*Argument not detected, please specify a valid username*\n\u200b", inline: true}
                )

            message.channel.send(embed)
            return;
        }        

        fetch(`https://playerdb.co/api/player/minecraft/${args[0]}`)
            .then(result => result.json())
            .then(({ data }) => {

                let arr = data.player.meta.name_history

                const embed = new MessageEmbed()
                .setTitle(':scroll: Username History')
                .setDescription('*\u200b\nPlease note that the Mojang api does not provide a date for when a account was created.\n\u200b*')
                .setFooter('Hystats | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .setColor(0xFFA500)
                .setThumbnail(data.player.avatar)
                arr.forEach(element => {

                    let date = new Date(element.changedToAt).toDateString()
                    if(new Date(element.changedToAt).toDateString() === "Invalid Date")date="No Date Provided - Usually First Name Of Player"

                    embed.addField("Name:","`" + element.name + "`", true)
                    embed.addField("Date Changed:", "`" + date + "`", true)
                    embed.addField("\u200b", "\u200b", true)
                }); 
                message.channel.send(embed)
            })
        .catch(err => {
            console.log(err)
        })
    }
}