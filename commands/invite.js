const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'Invite!',
	async execute(message, client) {

        const embed = new MessageEmbed()
            .setTitle(':robot: Bot Invite')
            .setColor(0xFFA500)
            .setFooter("Hystats | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
            .setDescription("[Click Here To Invite The Bot To Your Server](https://discord.com/api/oauth2/authorize?client_id=749894859510251560&permissions=8&scope=bot)")

        message.channel.send(embed)
    }
}