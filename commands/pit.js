const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pit',
	description: 'Pit!',
	async execute(message, fetch, args) {

        if (!args1) {

            let embed = new MessageEmbed()

                .setTitle(':skull_crossbones: Error')
                .setColor(0xFFA500)
                .setFooter("Hystats | Made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
                .addFields(
                    { name: "\u200b\n", value: "*Argument not detected, please specify a valid player*\n\u200b", inline: true}
                )

            message.channel.send(embed)
        return
        }

        fetch(`https://api.hypixel.net/player?key=API_KEY&name=${args1}`)
        .then(result => result.json())
        .then(({ user }) => {


            let embed1 = new MessageEmbed()
            embed1.setTitle(':bar_chart: Guild Statistics')
            embed1.setDescription(`***[${json.playername}***\n\n*Note: React to the emojis to scroll through pages*\n\u200b`)
            embed1.setColor(0xFFA500)
            embed1.setFooter("Hystats | Made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
            embed1.addFields(
                    {name: `**Kills**`, value: `${user.player.stats.Pit.pit_stats_ptl.kills}`, inline: true},
                    {name: `**Deaths**`, value: `${user.player.stats.Pit.pit_stats_ptl.deaths}`, inline: true},
                    {name: `**Assits**`, value: `${user.player.stats.Pit.pit_stats_ptl.assists}`, inline: true},
                    {name: `**KDA**`, value: `${((user.player.stats.Pit.pit_stats_ptl.kills+user.player.stats.Pit.pit_stats_ptl.assists)/user.player.stats.Pit.pit_stats_ptl.deaths).toFixed(2)}`, inline: true},
                    {name: `**Max streak**`, value: `${user.player.stats.Pit.pit_stats_ptl.max_streak}`, inline: true},
                    {name: `**Prestige**`, value: `${(!user.player.stats.Pit.profile.prestiges) ? 0 : user.player.stats.Pit.profile.prestiges.length}`, inline: true},
                    {name: `**Joins**`, value: `${user.player.stats.Pit.pit_stats_ptl.joins}`, inline: true},
                    {name: `**Jumps into pit**`, value: `${user.player.stats.Pit.pit_stats_ptl.jumped_into_pit}`, inline: true},
                    {name: `**Playtime**`, value: `${(!user.player.stats.Pit.pit_stats_ptl.playtime_minutes) ? `~0m` : user.player.stats.Pit.pit_stats_ptl.playtime_minutes.toString().toTimeString()}`, inline: true}
                )
                message.channel.send(embed);
    });
}
};

