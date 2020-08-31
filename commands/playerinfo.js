const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'playerinfo',
	description: 'Playerinfo!',
	execute(message, fetch, args) {

        fetch(`https://api.hypixel.net/player?key=642c5d12-b98b-4eda-98dd-dfb7c9d989a0&name=${args[0]}`)
        .then(result => result.json())
        .then(({ player }) => {

            if(!args[0]) {
                message.channel.send("Please provide a username")
                return;
            }

            let date = new Date(player.firstLogin).toDateString()


            let exp = Math.round((Math.sqrt(player.networkExp + 15312.5) - 125/Math.sqrt(2)) / (25 * Math.sqrt(2)))
            let exp1 = Math.round(25*Math.sqrt(2*exp)+(125/Math.sqrt(2)))**2-15312.5

            let rank = 'Non'
            if (player.monthlyPackageRank === "SUPERSTAR")  rank = 'MVP++';
            else if (player.newPackageRank === "VIP")  rank = 'VIP';
            else if (player.newPackageRank === "VIP_PLUS")  rank = 'VIP+';
            else if (player.newPackageRank === "MVP")  rank = 'MVP';
            else if (player.newPackageRank === "MVP_PLUS")  rank = 'MVP+';
                   
            fetch(`https://playerdb.co/api/player/minecraft/${args[0]}`)
            .then(result => result.json())
            .then(({ data }) => {

                const uuid = data.player.id

            fetch(`https://api.hypixel.net/status?key=642c5d12-b98b-4eda-98dd-dfb7c9d989a0&uuid=${uuid}`)
            .then(result => result.json())
            .then(({ session }) => {

                let online1 = 'Could not connect to API'
                if (session.online === false)  online1 = 'Not Online';
                else if (session.online === true) online1 = 'Online';

            const embed = new MessageEmbed()
                .setTitle('__**Hypixel Stats**__')
                .setDescription("**[" + rank + "]" + " " + player.displayname + "**")
                .setFooter('Hypixel Discord Test Bot | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .setColor(0xFFA500)
                .addField("**Completed Achievements**", "`" + (player.achievementsOneTime).length + "`", true)
                .addField("**Achievement Points**", "`" + player.achievementPoints + "`", true)
                .addField("**Karma**", "`" + player.karma + "`", false)
                .addField("**Network Level**", "`" + exp + "`", true)
                .addField("**XP To Levelup**", "`" + exp1 + "`", true)
                .addField("**Online Status**", "`" + online1 + "`", false)
                .addField("**First Login**", "`" + date + "`", false)
                .setThumbnail(data.player.avatar)

            message.channel.send(embed)

                })
            })
        })
        .catch(err => {
            console.log(err)
        })
	},
};