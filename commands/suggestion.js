const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'suggestion',
	description: 'Suggestion!',
	async execute(message, client) {

        let embed = new MessageEmbed()

        .setTitle(":bulb: Suggestion")
        .setDescription("***Please send a message containing the suggestion!***")
        .setColor(0xFFA500)
        .setFooter("Hystacks | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')

        message.channel.send(embed)

        let filter = m => m.author.id === message.author.id;
        const msg = await message.channel.awaitMessages(filter, { max: 1, time: 60000 });
        
        let embed1 = new MessageEmbed()

        .setTitle(":bulb: Suggestion")
        .setDescription("***Is this correct?***")
        .setColor(0xFFA500)
        .setFooter("Hystacks | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
        .addFields(
            { name: "\u200b", value: "`" + msg.first().content + "`\n\u200b", inline: true},
        )
        let embed2 = await message.channel.send(embed1)
        embed2.react('✅')
        embed2.react('❎')

        const filter1 = (reaction, user) => {
            return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        const collector = embed2.createReactionCollector(filter1, { max: 1, time: 60000 });
            collector.on('collect', async (r, user) => {
    
            if (r.emoji.name === '✅') {

                const channel = client.channels.cache.get('760368226915581953');
                if(!channel) return;

                let embed3 = new MessageEmbed()

                .setTitle(":bulb: Suggestion Report")
                .setDescription("***Your suggestion has been recorded!***")
                .setColor(0xFFA500)
                .setFooter("Hystacks | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')

                embed2.edit(embed3)

                let embed4 = new MessageEmbed()

                .setTitle(":bulb: Suggestion")
                .setDescription("***Suggestion from " + `${user.tag}` + "***")
                .setColor(0xFFA500)
                .setFooter("Hystacks | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .addFields(
                    { name: "\u200b", value: "`" + msg.first().content + "`\n\u200b", inline: true},
                )

                channel.send(embed4)
            }
            else if (r.emoji.name === '❎') {

                let embed5 = new MessageEmbed()

                .setTitle(":bulb: Suggestion")
                .setDescription("***Aborting in 5 seconds, to restart do !suggestion again!***")
                .setColor(0xFFA500)
                .setFooter("Hystacks | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')

                embed2.edit(embed5)
                setTimeout(() => {message.channel.bulkDelete(4)}, 5000);
                    
            }
        })

    }
}