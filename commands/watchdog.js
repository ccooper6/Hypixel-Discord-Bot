const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'watchdog',
	description: 'Watchdog!',
    execute(message, fetch) {

        fetch(`https://api.hypixel.net/watchdogstats?key=API-KEY`)
        .then(res => res.json())
        .then(( json ) => {
            
            let embed = new MessageEmbed()

            .setTitle(':bar_chart: Watchdog Stats')
            .setDescription('\u200b\n***Heres what I could find out about Watchdog:***')
            .setColor(0xFFA500)
            .setFooter("Hypixel Discord Test Bot | Made by BlobFish#9669", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
            .addFields(
                { name: "\u200b", value: "**Bans in the Last Minute:**\n`" + json.watchdog_lastMinute.toLocaleString() + "`\n\n**Staff Bans Today:**\n" + "`" + json.staff_rollingDaily.toLocaleString() + "`\n\n**Watchdog Bans Today:**\n`" + json.watchdog_rollingDaily.toLocaleString() + "`\n\n**Total Staff Bans:**\n`" + json.staff_total.toLocaleString() + "`\n\n**Total Watchdog Bans:**\n`" + json.watchdog_total.toLocaleString() + "`", inline: true}
            )

            message.channel.send(embed)
        })
    }
}