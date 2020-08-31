const { MessageEmbed } = require('discord.js');

module.exports = {
	      name: 'welcome',
	      description: 'Welcome!',
	      execute(member) { 
              
            const channel = member.guild.channels.cache.find(channel => channel.name === "welcome-and-goodbye");
            if(!channel) return;

            const embed = new MessageEmbed()
            .setTitle(`Welcome to ${message.guild.name}!`)
            .addField('Player Name', `${member.user.tag}`)
            .setColor(0x051094)
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
            .setFooter("Bot created by BlobFish#9669")

 
            channel.send(embed);
	},
};