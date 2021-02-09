const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'guild',
	description: 'Guild!',
	async execute(message, fetch, args) {

        const args1 = args.join(" ")
        if (!args1) {

            let embed = new MessageEmbed()

                .setTitle(':skull_crossbones: Error')
                .setColor(0xFFA500)
                .setFooter("Hystats | Made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .addFields(
                    { name: "\u200b\n", value: "*Argument not detected, please specify a valid guild*\n\u200b", inline: true}
                )

            message.channel.send(embed)
        return
        }

        fetch(`https://api.hypixel.net/guild?key=API-KEY&name=${args1}`)
        .then(result => result.json())
        .then(({ guild }) => {

            let level = 0
            if(guild.exp < 100000) level = 0
            else if(guild.exp < 250000) level = 1
            else if(guild.exp < 500000) level = 2
            else if(guild.exp < 1000000) level = 3
            else if(guild.exp < 1750000) level = 4
            else if(guild.exp < 2750000) level = 5
            else if(guild.exp < 4000000) level = 6
            else if(guild.exp < 5500000) level = 7
            else if(guild.exp < 7500000) level = 8
            else if(guild.exp >= 7500000 < 15000000) level = Math.floor((guild.exp - 7500000) / 2500000) + 9
            else if(guild.exp >= 15000000) level = Math.floor((guild.exp - 15000000) / 3000000) + 12


            let xpneeded = 0
            if(guild.exp < 100000) xpneeded = 100000 - guild.exp
            else if(guild.exp < 250000) xpneeded = 250000 - guild.exp
            else if(guild.exp < 500000) xpneeded = 500000 - guild.exp
            else if(guild.exp < 1000000) xpneeded = 1000000 - guild.exp
            else if(guild.exp < 1750000) xpneeded = 1750000 - guild.exp
            else if(guild.exp < 2750000) xpneeded = 2750000 - guild.exp
            else if(guild.exp < 4000000) xpneeded = 4000000 - guild.exp
            else if(guild.exp < 5500000) xpneeded = 5500000 - guild.exp
            else if(guild.exp < 7500000) xpneeded = 7500000 - guild.exp
            else if(guild.exp >= 7500001 && guild.exp < 15000000) xpneeded = 15000000 - guild.exp
            else if(guild.exp >= 15000000) xpneeded = ((Math.floor(guild.exp / 3000000) + 1) * 3000000) - guild.exp

            let guildexp = guild.exp

            let guild1 = guild.members.find(({ rank }) => rank === "Guild Master" || "GUILDMASTER")
            let guildmaster = guild1.uuid

            let coins = guild.coinsEver.toLocaleString()
            if(guild.coinsEver === 0) coins = 'None'

            let date = new Date(guild.created).toDateString()

            fetch(`https://playerdb.co/api/player/minecraft/${guildmaster}`)
            .then(result => result.json())
            .then( async ({ data }) => {

            let preferredgames = guild.preferredGames

            let name = (data.player.username)

            const embed = new MessageEmbed()
            .setTitle(':bar_chart: Guild Statistics')
            .setDescription(`***[${guild.tag}] ${guild.name}***\n\n*Note: React to the emojis to scroll through pages*\n\u200b`)
            .setColor(0xFFA500)
            .setFooter("Hystats | Made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
            .addFields(
                { name: "Guild Master:", value: "`" + name + "`", inline: true},
                { name: "Total Coins:", value: "`" + coins + "`", inline: true},
                { name: "Members:", value: "`" + (guild.members).length + "/125`" , inline: true},
                { name: "Level:", value: "`" + level + "`", inline: true},
                { name: "Total Guild EXP:", value: "`" + guildexp.toLocaleString() + "`", inline: true},
                { name: "Guild EXP To Next Level:", value: "`" + xpneeded.toLocaleString() + "`", inline: true},
                { name: "Date Created:", value: "`" + date + "`", inline: true},
            )

            if (preferredgames === undefined) {

                embed.addFields(

                    { name: "Preferred Games:", value: "`I wasn't able to find any prefered games for " + `${guild.name}` + "`", inline: true},

                )
            }
            else {

                let preferedgames = guild.preferredGames.toString()

                    .replace('QUAKECRAFT', 'Quakecraft')
                    .replace('WALLS', 'Walls')
                    .replace('PAINTBALL', 'Paintball')
                    .replace('SURVIVAL_GAMES', 'Survival Games')
                    .replace('TNTGAMES', 'TNT Games')
                    .replace('VAMPIREZ', 'VampireZ')
                    .replace('WALLS3', 'Mega Walls')
                    .replace('ARCADE', 'Arcade')
                    .replace('ARENA', 'Arena')
                    .replace('UHC', 'UHC Champions')
                    .replace('MCGO', 'Cops and Crims')
                    .replace('BATTLEGROUND', 'Warlords')
                    .replace('SUPER_SMASH', 'Smash Heros')
                    .replace('GINGERBREAD', 'Turbo Kart Racers')
                    .replace('HOUSING', 'Housing')
                    .replace('SKYWARS', 'Skywars')
                    .replace('TRUE_COMBAT', 'Crazy Walls')
                    .replace('SPEED_UHC', 'Speed UHC')
                    .replace('SKYCLASH', 'SkyClash')
                    .replace('LEGACY', 'Classic Games')
                    .replace('PROTOTYPE', 'Prototype')
                    .replace('BEDWARS', 'Bedwars')
                    .replace('MURDER_MYSTERY', 'Murder Mystery')
                    .replace('BUILD_BATTLE', 'Build Battle')
                    .replace('DUELS', 'Duels')
                    .replace('SKYBLOCK', 'Skyblock')
                    .replace('PIT', 'Pit')

                embed.addFields(

                    { name: "Preferred Games:", value: "`" + preferedgames + "`", inline: true},

                )
            }

            let embed1 = await message.channel.send(embed)
            embed1.react('1️⃣')
            embed1.react('2️⃣')
            embed1.react('3️⃣')

            const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            
            const collector = embed1.createReactionCollector(filter, { time: 60000 });
                collector.on('collect', (r, user) => {
        
                if (r.emoji.name === '1️⃣') {

                    let name = (data.player.username)

                    let preferredgames = guild.preferredGames

                    const embed3 = new MessageEmbed()
                    .setTitle(':bar_chart: Guild Statistics')
                    .setDescription(`***[${guild.tag}] ${guild.name}***\n\n*Note: React to the emojis to scroll through pages*\n\u200b`)
                    .setColor(0xFFA500)
                    .setFooter("Hystats | Made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                    .addFields(
                        { name: "Guild Master:", value: "`" + name + "`", inline: true},
                        { name: "Total Coins:", value: "`" + coins + "`", inline: true},
                        { name: "Members:", value: "`" + (guild.members).length + "/125`" , inline: true},
                        { name: "Level:", value: "`" + level + "`", inline: true},
                        { name: "Total Guild EXP:", value: "`" + guildexp.toLocaleString() + "`", inline: true},
                        { name: "Guild EXP To Next Level:", value: "`" + xpneeded.toLocaleString() + "`", inline: true},
                        { name: "Date Created:", value: "`" + date + "`", inline: true},
                    )

                    if (preferredgames === undefined) {

                        embed3.addFields(

                            { name: "Preferred Games:", value: "`I wasn't able to find any prefered games for " + `${guild.name}` + "`", inline: true},

                        )
                    }
                    else {

                        let preferedgames = guild.preferredGames.toString()

                            .replace('QUAKECRAFT', 'Quakecraft')
                            .replace('WALLS', 'Walls')
                            .replace('PAINTBALL', 'Paintball')
                            .replace('SURVIVAL_GAMES', 'Survival Games')
                            .replace('TNTGAMES', 'TNT Games')
                            .replace('VAMPIREZ', 'VampireZ')
                            .replace('WALLS3', 'Mega Walls')
                            .replace('ARCADE', 'Arcade')
                            .replace('ARENA', 'Arena')
                            .replace('UHC', 'UHC Champions')
                            .replace('MCGO', 'Cops and Crims')
                            .replace('BATTLEGROUND', 'Warlords')
                            .replace('SUPER_SMASH', 'Smash Heros')
                            .replace('GINGERBREAD', 'Turbo Kart Racers')
                            .replace('HOUSING', 'Housing')
                            .replace('SKYWARS', 'Skywars')
                            .replace('TRUE_COMBAT', 'Crazy Walls')
                            .replace('SPEED_UHC', 'Speed UHC')
                            .replace('SKYCLASH', 'SkyClash')
                            .replace('LEGACY', 'Classic Games')
                            .replace('PROTOTYPE', 'Prototype')
                            .replace('BEDWARS', 'Bedwars')
                            .replace('MURDER_MYSTERY', 'Murder Mystery')
                            .replace('BUILD_BATTLE', 'Build Battle')
                            .replace('DUELS', 'Duels')
                            .replace('SKYBLOCK', 'Skyblock')
                            .replace('PIT', 'Pit')

                        embed3.addFields(

                            { name: "Preferred Games:", value: "`" + preferedgames + "`", inline: true},

                        )
                    }

                    embed1.edit(embed3)
                    r.users.remove(user)
                }
                else if (r.emoji.name === '2️⃣') {

                    const embed2 = new MessageEmbed()
                    .setTitle(':bar_chart: Guild Statistics')
                    .setDescription(`***[${guild.tag}] ${guild.name}***\n\n*Note: React to the emojis to scroll through pages*\n\u200b`)
                    .setColor(0xFFA500)
                    .setFooter("Hystats | Made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')

                    let arr = guild.ranks
                    let tmp = [];

                    if (arr === undefined) {embed2.addFields(
                        { name: "Ranks:", value: "```I wasn't able to find any roles for " + `${guild.name}` + "```"}
                    )}

                    else { arr.forEach((element) => tmp.push(element.name));
                    embed2.addFields(
                        { name: "Ranks:", value: "```+ " + tmp.join('\n+ ') + "```", inline: true}
                    )}
                    
                    embed1.edit(embed2)
                    r.users.remove(user)
                }
                else if (r.emoji.name === '3️⃣') {

                    const embed3 = new MessageEmbed()
                    .setTitle(':bar_chart: Guild Statistics')
                    .setDescription(`***[${guild.tag}] ${guild.name}***\n\n*Note: React to the emojis to scroll through pages*`)
                    .setColor(0xFFA500)
                    .setFooter("Hystats | Made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                    .addFields(
                            { name: "\u200b", value: "**Quakecraft:**\n" + "`" + guild.guildExpByGameType.QUAKECRAFT.toLocaleString() + "`\n\n" + "**VampireZ:**\n" + "`" + guild.guildExpByGameType.VAMPIREZ.toLocaleString() + "`\n\n" + "**Build Battle:**\n" + "`" + guild.guildExpByGameType.BUILD_BATTLE.toLocaleString() + "`\n\n" + "**Duels:**\n" + "`" + guild.guildExpByGameType.DUELS.toLocaleString() + "`\n\n" + "**Cops And Crims:**\n" + "`" + guild.guildExpByGameType.MCGO.toLocaleString() + "`\n\n" + "**Murder Mystery:**\n" + "`" + guild.guildExpByGameType.MURDER_MYSTERY.toLocaleString() + "`\n\n" + "**Walls:**\n" + "`" + guild.guildExpByGameType.WALLS.toLocaleString() + "`" , inline: true},
                            { name: "\u200b", value: "**Turbo Kart Racers:**\n" + "`" + guild.guildExpByGameType.GINGERBREAD.toLocaleString() + "`\n\n" + "**Bedwars:**\n" + "`" + guild.guildExpByGameType.BEDWARS.toLocaleString() + "`\n\n" + "**Warlords:**\n" + "`" + guild.guildExpByGameType.BATTLEGROUND.toLocaleString() + "`\n\n" + "**Prototype:**\n" + "`" + guild.guildExpByGameType.PROTOTYPE.toLocaleString() + "`\n\n" + "**Skywars:**\n" + "`" + guild.guildExpByGameType.SKYWARS.toLocaleString() + "`\n\n" + "**TNT Games:**\n" + "`" + guild.guildExpByGameType.TNTGAMES.toLocaleString() + "`\n\n" + "**Mega Walls:**\n" + "`" + guild.guildExpByGameType.WALLS3.toLocaleString() + "`", inline: true},
                            { name: "\u200b", value: "**Housing:**\n" + "`" + guild.guildExpByGameType.HOUSING.toLocaleString() + "`\n\n" + "**Survival Games:**\n" + "`" + guild.guildExpByGameType.SURVIVAL_GAMES.toLocaleString() + "`\n\n" + "**Arcade:**\n" + "`" + guild.guildExpByGameType.ARCADE.toLocaleString() + "`\n\n" + "**Paintball:**\n" + "`" + guild.guildExpByGameType.PAINTBALL.toLocaleString() + "`\n\n" + "**UHC Champions:**\n" + "`" + guild.guildExpByGameType.UHC.toLocaleString() + "`\n\n" + "**Smash Heros:**\n" + "`" + guild.guildExpByGameType.SUPER_SMASH.toLocaleString() + "`\n\n" + "**Arena:**\n" + "`" + guild.guildExpByGameType.ARENA.toLocaleString() + "`", inline: true},
                        )
                    embed1.edit(embed3)
                    r.users.remove(user)
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    })}
}