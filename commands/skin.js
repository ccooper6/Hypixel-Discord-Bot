const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'skin',
	description: 'Skin!',
	execute(message, fetch, args) {

        fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`)
            .then(result => result.json())
            .then(({ id }) => {
                
                let uuid = id

                const embed = new MessageEmbed()
                .setTitle('__**Skin**__')
                .setDescription("**Username: " + args[0] + "**" + "\n Save the image in order to select \n it as your own.")
                .setFooter('Hystacks | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .setColor(0xFFA500)
                .setImage(`https://crafatar.com/renders/body/${uuid}`)
                .setThumbnail(`https://crafatar.com/skins/${uuid}`)

                message.channel.send(embed)
            })
    }
}