const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'support',
	description: 'Support!',
	async execute(message) {

        const embed = new MessageEmbed()
            .setTitle(':handshake: Support Server')
            .setColor(0xFFA500)
            .setFooter("Hystats | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
            .setDescription("[Click Here For An Invite To The Support Server](https://discord.gg/dJ7QZmvscG)")

        message.channel.send(embed)
    }
}