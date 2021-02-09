const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'playerinfo',
	description: 'Playerinfo!',
	execute(message, fetch, args) {

        if(!args[0]) {

            let embed = new MessageEmbed()

                .setTitle(':skull_crossbones: Error')
                .setColor(0xFFA500)
                .setFooter("Hystats | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .addFields(
                    { name: "\u200b\n", value: "*Argument not detected, please specify a valid username*\n\u200b", inline: true}
                )

            message.channel.send(embed)
            return;
        }

        fetch(`https://api.hypixel.net/player?key=API-KEY&name=${args[0]}`)
        .then(result => result.json())
        .then(({ player }) => {

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

            fetch(`https://api.hypixel.net/status?key=API-KEY&uuid=${uuid}`)
            .then(result => result.json())
            .then(({ session }) => {

            
            fetch(`https://api.hypixel.net/friends?key=API-KEY&uuid=${uuid}`)
            .then(res => res.json())
            .then(( json ) => {

                let online1 = 'Could not connect to API'
                if (session.online === false)  online1 = 'Not Online';
                else if (session.online === true) online1 = 'Online';

            const embed = new MessageEmbed()
                .setTitle(':bar_chart: Hypixel Statistics')
                .setDescription("***[" + rank + "]" + " " + player.displayname + "***")
                .setFooter('Hystats | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .setColor(0xFFA500)
                .addField("**Completed Achievements**", "`" + (player.achievementsOneTime).length + "`", true)
                .addField("**Achievement Points**", "`" + player.achievementPoints + "`", true)
                .addField("**Karma**", "`" + player.karma + "`", true)
                .addField("**Network Level**", "`" + exp + "`", true)
                .addField("**XP To Levelup**", "`" + exp1 + "`", true)
                .addField("**Friends**", "`" + (json.records).length + "`", true)
                .addField("**Online Status**", "`" + online1 + "`", true)
                .addField("**First Login**", "`" + date + "`", true)
                .addField("\u200b", "\u200b", true)
                .setThumbnail(data.player.avatar)

            message.channel.send(embed)
            })
            })
            })
        })
        .catch(err => {
            console.log(err)
        })
	},
};