module.exports = {
	name: 'mute',
	description: 'Mute!',
	execute(message, ms) {

    let messageArray = message.content.split(" ");
    let args1 = messageArray.slice(1);

        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args1[0]));
            if(!member) return message.reply('Please Provide a Member to TempMute.')

            let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
            let role = message.guild.roles.cache.find(role => role.name === "Muted");

            if (!role) return message.reply("Couldn't find the 'muted' role.")

            let time = args1[1];
            if (!time) {
                return message.reply("You didnt specify a time!");
            }

            member.roles.remove(mainrole.id)
            member.roles.add(role.id);

            message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)

            setTimeout( function () {
                member.roles.add(mainrole.id)
                member.roles.remove(role.id);
                message.channel.send(`@${member.user.tag} has been unmuted.`)
            }, ms(time));

        } else {
            return message.channel.send('You dont have perms.')
        }
    }

}
