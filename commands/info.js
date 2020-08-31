const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'info',
	description: 'Info!',
	execute(message, client) {

       const embed = new MessageEmbed()

        .setTitle("__**BOT INFO**__")
        .setDescription(`**${client.user.tag}**`)
        .addFields(
            { name: ":scroll: Server Name:", value: "`" + `${message.guild.name}` + "`" , inline: true},
            { name: ":bust_in_silhouette: Members:", value: "`" + `${message.guild.memberCount}` + "`", inline: true},
            { name: "\u200b", value: "\u200b", inline: true},
            { name: ":family: Total Servers:", value: "`" + `${client.guilds.cache.size}` + "`", inline: true},
            { name: ":hash: Total Channels:", value: "`" + `${client.channels.cache.size}` + "`", inline: true},
            { name: ":busts_in_silhouette: Total Members:", value: "`" + `${client.users.cache.size}` + "`", inline: true},
            { name: ":stopwatch: Ping:", value: "`" + `${Math.floor(message.createdTimestamp - Date.now())} ms` + "`", inline: false}
        )
        .setColor(0xFFA500)
        .setFooter('Hystacks | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')

        message.channel.send(embed)

        },
};