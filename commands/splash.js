const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'splash',
	description: 'Splash!',
	async execute(message, args) {

            if(!message.member.roles.cache.find(r => r.name === "God Splasher")) return message.channel.send('Sorry you do not have permission to run that command, for help do !help')
         .then(message => message.delete({timeout: 7500}))

        args.join(' ')
        
    message.channel.send("**State The Hub**")
    let filter = m => m.author.id === message.author.id;
    const msg = await message.channel.awaitMessages(filter, { max: 1, time: '10000', errors:
    ['time'] });
    message.channel.send("**Hub:**" + " " + msg.first().content)
    
    
    .then


    message.channel.send("**State The Location**")
    let filter1 = m => m.author.id === message.author.id;
    const msg1 = await message.channel.awaitMessages(filter1, { max: 1, time: '10000', errors:
    ['time'] });
    message.channel.send("**Location:**" + " " + msg1.first().content)


    .then


    message.channel.send("**State The Pot Type**")
    let filter2 = m => m.author.id === message.author.id;
    const msg2 = await message.channel.awaitMessages(filter2, { max: 1, time: '10000', errors:
    ['time'] });
    message.channel.send("**Pot Type:**" + " " + msg2.first().content)


    .then


    message.channel.send("**State Extra Messages**")
    let filter3 = m => m.author.id === message.author.id;
    const msg3 = await message.channel.awaitMessages(filter3, { max: 1, time: '10000', errors:
    ['time'] });
    message.channel.send("**Extra Messages**" + " " + msg3.first().content)

    
    .then


    const channel = message.guild.channels.cache.find(channel => channel.name === "💦splashes");
            if(!channel) return;
    const channel1 = message.guild.channels.cache.find(channel => channel.name === "donator-announcements");
            if(!channel1) return;


            let role = message.guild.roles.cache.find(role => role.name == 'Free Splash')

        message.channel.send("Look out, splash incoming!") 

            const embed = new MessageEmbed()
            .setTitle('__**Username History**__')
            .setFooter('Hypixel Discord Test Bot | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
            .setColor(0xFFA500)
            .setTitle('Time for a splash!')
            .setThumbnail("https://pa1.narvii.com/5753/a851ba9b79f91bbdbe808583f67db3252ad92552_00.gif")
        .addFields(
                { name: '**Splasher**', value: `<@${message.author.id}>`, inline: false},
                { name: '**Hub:**', value: msg.first().content, inline: false},
                { name: '**Location**', value: msg1.first().content, inline: true},
                { name: '**Pot Type:**', value: msg2.first().content, inline: true},
                { name: '**Extra Messages**', value: msg3.first().content, inline: true},
          )

        
        channel1.send("<@&" + role + ">")
        channel1.send(embed)

        setTimeout(() => {channel.send("<@&" + role + ">")}, 60000);
            setTimeout(() => {channel.send(embed)}, 60000);

    }
}