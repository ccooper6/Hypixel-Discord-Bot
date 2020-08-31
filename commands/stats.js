const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'stats',
	description: 'Stats!',
	async execute(message, args, fetch) {
        
        let faceUrl = 'https://crafatar.com/avatars/'
        let username = message.content.replace(/\/bw /g, "")
        let statusUrl = 'https://api.slothpixel.me/api/players/';
        fetch(statusUrl + username)
            .then(res => res.json())
            .then(data => getStats = data)
            .then(() => {
                let uuid = (getStats.uuid)
                let bwStats = (getStats.stats.BedWars);
                let bwEmbed = new MessageEmbed()
                .setTitle('Bedwars Stats')
                .addFields(
                    { name: 'Level', value: JSON.stringify(bwStats.level), inline: true},
                    { name: 'Win Streak', value: JSON.stringify(bwStats.winstreak), inline: true},
                    { name: 'Coins', value: JSON.stringify(bwStats.coins), inline: true},
                    { name: 'Wins', value: JSON.stringify(bwStats.wins), inline: true},
                    { name: 'Losses', value: JSON.stringify(bwStats.losses), inline: true},
                    { name: 'Average W/L Ratio', value: JSON.stringify(bwStats.w_l), inline: true},
                    { name: 'Kills', value: JSON.stringify(bwStats.kills), inline: true},
                    { name: 'Deaths', value: JSON.stringify(bwStats.deaths), inline: true},
                    { name: 'Average KDR', value: JSON.stringify(bwStats.k_d), inline: true},
                    { name: 'Final Kills', value: JSON.stringify(bwStats.final_kills), inline: true},
                    { name: 'Final Deaths', value: JSON.stringify(bwStats.final_deaths), inline: true},
                    { name: 'Final KDR', value: JSON.stringify(bwStats.final_k_d), inline: true},
                )
                .setThumbnail(faceUrl + uuid)
                .setDescription(username + "'s Stats: ")
                .setColor('#001879')
                message.channel.send(bwEmbed)
            })
        }
    }
