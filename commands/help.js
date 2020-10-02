const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Help!',
	async execute(message) {

        const helpembed = new MessageEmbed()
            .setTitle(':heart: Help')
            .setColor(0xFFA500)
            .setFooter("Hystats | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
            .addFields(

                { name: "React to this message with the emojis to view a list of commands.", value: "```React to the 📊 emoji to see Statistic Commands \nReact to the 🎮 emoji to see General Minecraft Commands \nReact to the 🤖 emoji to see Bot Commands```"}
    
            )
            let emojis = await message.channel.send(helpembed)
            emojis.react('📊')
            emojis.react('🎮')
            emojis.react('🤖')


    const filter = (reaction, user) => {
        return ['📊', '🎮', '🤖'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    const collector = emojis.createReactionCollector(filter, { time: 60000 });
        collector.on('collect', (r, user) => {

        if (r.emoji.name === '📊') {
            const statsembed = new MessageEmbed()
                .setTitle(':bar_chart: Statistic Commands')
                .setColor(0xFFA500)
                .setFooter('Hystats | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .addFields(
                    
                    { name: "\u200b\n" + "*Statistic Commands are used to show information related to Hypixel*" + "\n\u200b", value: "`!hystats [IGN]`\nShows Hypixel statistics for a given player\n\n`!guild [Guild Name]`\nShows Hypixel statistics for a given guild\n\n`!watchdog`\nShows Watchdog statistics\n\n`!playercount`\nShows the current Hypixel Player Count, including individual games", inline: false},
                    
            )
        emojis.edit(statsembed)
        r.users.remove(user)
        }
        else if (r.emoji.name === '🎮') {
            const generalembed = new MessageEmbed()
                .setTitle(':video_game: General Minecraft Commands')
                .setColor(0xFFA500)
                .setFooter('Hystats | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .addFields(

                    { name: "\u200b\n" + "*General Minecraft Commands are used to show information not necessarily related to Hypixel*" + "\n\u200b", value: "`!uuid [IGN]`\nShows UUID information for a player\n\n`!ign [IGN]`\nShows past username history for a player\n\n`!skin [IGN]`\nShows a model of a players skin + a way to download it for yourself", inline: false},
    
            )
        emojis.edit(generalembed)
        r.users.remove(user)
        }
        else if (r.emoji.name === '🤖') {
            const botembed = new MessageEmbed()
                .setTitle(':robot: **Bot Commands**')
                .setColor(0xFFA500)
                .setFooter('Hystats | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .addFields(
                    { name: "\u200b\n" + "*Bot Commands are used to show information about the bot and for general assistance*" + "\n\u200b", value: "`!help`\nSends this help message\n\n`!info`\nSends a message containing information about the bot\n\n`!invite`\nSends a message containing an invite link for the bot\n\n`!support`\nSends a message containing an invite link to support server\n\n`!bug`\nGo through the steps of reporting a bug\n\n`!suggestion`\nGo through the steps of suggesting something new", inline: false},
            )
        emojis.edit(botembed)
        r.users.remove(user)
        }
    })}
}