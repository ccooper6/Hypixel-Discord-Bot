const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'Kick!',
	execute(message) {
		if (!message.guild) return;

		if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sorry you do not have permission to run that command, for help do s!help')
         .then(message => message.delete({timeout: 7500}));

		const user = message.mentions.users.first();
		if (user) {
		  const member = message.guild.member(user);
		  if (member) {
			member
			  .kick('They were bad! ')
			  .then(() => {
				
				const embed1 = new MessageEmbed()
				.setTitle(`**:white_check_mark: Successfully kicked ${user.tag}**`)
				.setColor(0x051094)
				.setAuthor('Splasher Bot', 'https://i.imgur.com/2KWU4aJ.png')
				.setTimestamp()
				.setThumbnail("https://pa1.narvii.com/5753/a851ba9b79f91bbdbe808583f67db3252ad92552_00.gif")
				.setFooter("Bot created by BlobFish#9669")
					 message.reply(embed1);
			  })

			  .catch(err => {
				
				const embed = new MessageEmbed()
				.setTitle('**:negative_squared_cross_mark: I was unable to kick the member**')
				.setColor(0x051094)
				.setAuthor('Splasher Bot', 'https://i.imgur.com/2KWU4aJ.png')
				.setTimestamp()
				.setThumbnail("https://pa1.narvii.com/5753/a851ba9b79f91bbdbe808583f67db3252ad92552_00.gif")
				.setFooter("Bot created by BlobFish#9669")
					 message.reply(embed);
				console.error(err);
			  });
		  } else {
			message.reply(":negative_squared_cross_mark: That user isn't in this guild!");
		  }
		} else {
		  message.reply(":negative_squared_cross_mark: You didn't mention the user to kick!");
		}
	  }
	};