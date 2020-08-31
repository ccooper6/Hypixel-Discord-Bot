module.exports = {
	name: 'profile',
	description: 'Profile!',
	async execute(message, args, fetch) {


		let ApiUrl = 'https://api.slothpixel.me/api/skyblock/profile/';
		let mojangUrl = 'https://api.mojang.com/users/profiles/minecraft/';
		
			let username = args[0]
			if(!username) return message.reply("Please Supply A Username")
			
			let playerUUID;

			fetch(mojangUrl + username)
            	.then(res => res.json())
            	.then(data => playerUUID = data)
            	.then(() => {
					uuid = (playerUUID.id)
					console.log(uuid)
				})
				.then(() => {

					let apiJson;
				
					fetch(ApiUrl + username)
					.then(res => res.json())
					.then(data => apiJson = data)
						
						.then(fetch(mojangUrl + username)
						.then(res => res.json())
						.then(data => apiJson = data))
		
						.then(() => {
		
							let uuid = (playerUUID.id)
		
							console.log((apiJson.members) + ('.') + (uuid) + ('.') + (talisman_bag))
						
						})
						.catch(console.error)
					})
				

    }
}