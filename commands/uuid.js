const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'uuid',
	description: 'uuid!',
    execute(message, fetch, args) {

        if(!args[0]) {

            let embed = new MessageEmbed()

                .setTitle(':skull_crossbones: Error')
                .setColor(0xFFA500)
                .setFooter("Hystats | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .addFields(
                    { name: "\u200b\n", value: "*Argument not detected, please specify a valid username*\n\u200b", inline: true}
                )

            message.channel.send(embed)
            return;
        }

    fetch(`https://playerdb.co/api/player/minecraft/${args[0]}`)
            .then(result => result.json())
            .then(({ data }) => {
    
                let uuid = data.player.id
                let uuid1 = data.player.raw_id

                const embed = new MessageEmbed()

                .setTitle(':scroll: UUID Information')
                .setDescription("***Username: " + args[0] + "***")
                .setFooter('Hystats | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .setColor(0xFFA500)
                .addField("UUID", "`" + uuid + "`", false)
                .addField("Trimmed UUID","`" + uuid1 + "`", false)
                .setThumbnail(data.player.avatar)

                message.channel.send(embed)
    
            })
            .catch(err => {
                console.log(err)
            })
}}