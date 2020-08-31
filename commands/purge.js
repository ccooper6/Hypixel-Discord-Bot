module.exports = {
	name: 'purge',
	description: 'Purge!',
	execute(message, args) {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sorry you do not have permission to run that command, for help do s!help')
    .then(message => message.delete({timeout: 7500}));


        message.channel
       .bulkDelete(parseInt(args[0])+1)
       .then(messages => 
         message.reply(`WOW, I just **PURGED** ${messages.size} messages!`))
       .then(message => message.delete({timeout: 5000}))
       .catch(console.error);
    }}