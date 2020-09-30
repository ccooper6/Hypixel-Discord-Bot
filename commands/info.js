const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'info',
	description: 'Info!',
	async execute(message, client) {

       const embed = new MessageEmbed()

        .setTitle(":books: Information")
        .addFields(
            { name: "React to this message with the emojis to view a list of commands.", value: "```React to the 📊 emoji to see Server Information \nReact to the 🤖 emoji to see Bot Information```", inline: true}
        )
        .setColor(0xFFA500)
        .setFooter('Hystats | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')

        let infoembed = await message.channel.send(embed)
            infoembed.react('📊')
            infoembed.react('🤖')

            const filter = (reaction, user) => {
                return ['📊', '🤖'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
        
            const collector = infoembed.createReactionCollector(filter, { time: 60000 });
                collector.on('collect', (r, user) => {
        
                if (r.emoji.name === '🤖') {

                    let botdate = new Date(client.user.createdTimestamp).toDateString()
                    
                    let presence = client.user.presence.status
                    if (client.user.presence.status === "online") presence = 'Online'
                    else if (client.user.presence.status === "offline") presence = 'Offline'

                    const embed = new MessageEmbed()

                        .setTitle(":robot: Bot Info")
                        .setDescription("\u200b\n*Here's some information about the bot:*")
                        .setThumbnail("https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png")
                        .addFields(
                            { name: "\u200b", value: "**Username:**\n" + "`" + `${client.user.tag}` + "`\n\n**Created On:**\n" + "`" + `${botdate}` + "`\n\n**Activity:**\n" + "`" + `${presence}` + "`", inline: true},
                            { name: "\u200b", value: "**Total Servers:**\n" + "`" + `${client.guilds.cache.size}` + "`\n\n**Total Channels:**\n" + "`" + `${client.channels.cache.size}` + "`\n\n" + "**Total Members:**\n" + "`" + `${client.users.cache.size}` + "`", inline: true},
                        )
                        .setColor(0xFFA500)
                        .setFooter('Hystats | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                    infoembed.edit(embed)
                    r.users.remove(user)
                }
                else if (r.emoji.name === '📊') {

                    let date = new Date(message.guild.createdTimestamp).toDateString()
                    
                    const embed = new MessageEmbed()

                        .setTitle(":bar_chart: Server Info")
                        .setDescription("\u200b\n*Here's what I could find out about this server:*")
                        .setThumbnail(message.guild.iconURL())
                        .addFields(
                            { name: "\u200b", value: "**Server Name:**\n" +"`"+ `${message.guild.name}` + "`" + "\n\n**Server Owner:**\n" + "`" + `${(message.guild.owner.user.tag)}` + "`\n\n" + "**Members:**\n" + "`" + `${message.guild.memberCount}` + "`", inline: true},
                            { name: "\u200b", value: "**Text Channels:**\n" +"`"+ `${message.guild.channels.cache.filter(channel => channel.type === 'text').size}` + "`" + "\n\n**Voice channels:**\n" + "`" + `${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}` + "`\n\n" + "**Roles:**\n" + "`" + `${message.guild.roles.cache.size}` + "`", inline: true},
                            { name: "\u200b", value: "**Created On:**\n" + "`" + `${date}` + "`", inline: true},
                        )
                        .setColor(0xFFA500)
                        .setFooter('Hystats | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                    infoembed.edit(embed)
                    r.users.remove(user)
                }
        })},
};