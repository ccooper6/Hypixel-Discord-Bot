const { MessageEmbed } = require("discord.js")

module.exports = {
	name: 'talisman',
	description: 'Talisman!',
	async execute(message, args, fetch, axios) {

        let statusUrl = 'https://api.slothpixel.me/api/skyblock/profile/';
        let getTalisman;
            fetch(statusUrl + args[0])
            .then(res => res.json())
            .then(data => getTalisman = data)
            .then(() => {
                const uuid = args[1]
            getProfile = (getTalisman.members) + (`.`) + (uuid.talisman_bag.name)
        console.log(getProfile)
            })
    }
}

/* let MojangURL = 'https://api.mojang.com/users/profiles/minecraft/';
        let playerUUID;
        let username = args[0]
        fetch(MojangURL + username)
            .then(res => res.json())
            .then(data => playerUUID = data)
            .then(() => {
                uuid = (playerUUID.id) */
