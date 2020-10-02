const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'playercount',
	description: 'PlayerCount!',
	async execute(message, fetch) {

        fetch(`https://api.hypixel.net/gameCounts?key=642c5d12-b98b-4eda-98dd-dfb7c9d989a0`)
        .then(res => res.json())
        .then(( json ) => {

            fetch(`https://api.hypixel.net/gameCounts?key=642c5d12-b98b-4eda-98dd-dfb7c9d989a0`)
            .then(result => result.json())
            .then(({ games }) => {

                let embed = new MessageEmbed()

                .setTitle(':bar_chart: Player Count Statistics')
                .setColor(0xFFA500)
                .setFooter('Hystats | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .setDescription("\u200b\n*Here's what I could find out about the Hypixel Player Count:*\n\u200b")
                .addFields(
                    { name: "Arcade:", value: "`" + games.ARCADE.players + "`" , inline: true},
                    { name: "Bedwars:", value: "`" + games.BEDWARS.players + "`" , inline: true},
                    { name: "Build Battle:", value: "`" + games.BUILD_BATTLE.players + "`" , inline: true},
                    { name: "Classic Games:", value: "`" + games.LEGACY.players + "`" , inline: true},
                    { name: "Cops And Crims:", value: "`" + games.MCGO.players + "`" , inline: true},
                    { name: "Duels:", value: "`" + games.DUELS.players + "`" , inline: true},
                    { name: "Housing:", value: "`" + games.HOUSING.players + "`" , inline: true},
                    { name: "Mega Walls:", value: "`" + games.WALLS3.players + "`" , inline: true},
                    { name: "Murder Mystery:", value: "`" + games.MURDER_MYSTERY.players + "`" , inline: true},
                    { name: "Pit:", value: "`" + games.PIT.players + "`" , inline: true},
                    { name: "SkyBlock:", value: "`" + games.SKYBLOCK.players + "`" , inline: true},
                    { name: "SkyWars:", value: "`" + games.SKYWARS.players + "`" , inline: true},
                    { name: "Smash Heros:", value: "`" + games.SUPER_SMASH.players + "`" , inline: true},
                    { name: "Survival Games:", value: "`" + games.SURVIVAL_GAMES.players + "`" , inline: true},
                    { name: "TNT Games:", value: "`" + games.TNTGAMES.players + "`" , inline: true},
                    { name: "Warlords:", value: "`" + games.BATTLEGROUND.players + "`" , inline: true},
                    { name: "\u200b", value: "\u200b" , inline: true},
                    { name: "\u200b", value: "\u200b" , inline: true},
                    { name: "\u200b\nTotal Players:", value: "`" + json.playerCount + "`", inline: true},
                    { name: "\u200b\nLobbys:", value: "`" + (games.MAIN_LOBBY.players + games.TOURNAMENT_LOBBY.players + games.PROTOTYPE.players - games.PROTOTYPE.modes.TOWERWARS_SOLO) + "`", inline: true},
                    { name: "\u200b\nAFK:", value: "`" + (games.IDLE.players + games.LIMBO.players) + "`", inline: true},
                )

                message.channel.send(embed)
            })
        })
    }
}