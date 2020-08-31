module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {


		message.channel.send(':ping_pong: Pong! Your ping is `' + `${Math.floor(message.createdTimestamp - Date.now())}` + ' ms`');
	},

};