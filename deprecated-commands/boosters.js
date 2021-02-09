const { MessageEmbed } = require('discord.js');
 
 
module.exports = {
    name: 'boosters',
    description: 'Boosters!',
    execute(message, fetch) {
        fetch('https://api.hypixel.net/boosters?key=642c5d12-b98b-4eda-98dd-dfb7c9d989a0')
    .then(result => result.json())
    .then(async ( json ) => {
 
        const boosterembed = new MessageEmbed()
            .setTitle(' :chart_with_upwards_trend: Boosters')
            .setColor(0xFFA500)
            .setFooter("Hystats | Made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')
            .addFields(
 
                { name: "React to this message to see active boosters for gamemodes.", value: "React to the :zero: emoji to see Blitz Survival Games Boosters \nReact to the :one: emoji to see Classic Games Boosters \nReact to the :two: emoji to see Mega Walls Boosters \nReact to the :three: emoji to see Skywars Boosters \nReact to the :four: emoji to see UHC Boosters\nReact to the :five: emoji to see Arcade Boosters \nReact to the :six: emoji to see TNT Games Boosters \nReact to the :seven: emoji to see Warlords Boosters \nReact to the :eight: emoji to see Smash Heroes Boosters \nReact to the :nine: emoji to see Cops and Crims Boosters"}
    
            );
            let emojis = await message.channel.send(boosterembed);
            emojis.react('0️⃣');
            emojis.react('1️⃣')
            emojis.react('2️⃣')
            emojis.react('3️⃣')
            emojis.react('4️⃣')
            emojis.react('5️⃣')
            emojis.react('6️⃣')
            emojis.react('7️⃣')
            emojis.react('8️⃣')
            emojis.react('9️⃣')
            const filter = (reaction, user) => {
                return ['0️⃣', '1️⃣', '2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            const collector = emojis.createReactionCollector(filter, { time: 60000 });
                collector.on('collect', (r, user) => {
 
            if (r.emoji.name === '0️⃣') {
                        const statsembed = new MessageEmbed()          
            .setTitle(':chart_with_upwards_trend: Booster Stats')
            .setDescription('\u200b\nThis is what I could find about Boosters:')
            .setColor(0xFFA500)
            .setFooter("Hystats | Command made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png%27%27')
            for (var i in json.boosters) {
                console.log(json.boosters[i].gameType);}
             if (json.boosters[i].gameType.toString().includes("5"))
              statsembed.addFields(
                 { name: "Booster:", value: "Survival Games has an active booster!" , inline: true})
             else 
               statsembed.addFields(
                   { name: "Booster", value: "Survival Games has no active boosters!" , inline:true})  
            emojis.edit(statsembed),
            r.users.remove(user)
            }
            else if (r.emoji.name === '1️⃣') {
                const Classic = new MessageEmbed()          
            .setTitle(':chart_with_upwards_trend: Booster Stats')
            .setDescription('\u200b\nThis is what I could find about Boosters:')
            .setColor(0xFFA500)
            .setFooter("Hystats | Command made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png%27%27')
            for (var i in json.boosters) {
                console.log(json.boosters[i].gameType);}
            if (json.boosters[i].gameType.toString().includes("56"))
              Classic.addFields(
                 { name: "Booster:", value: "Classic Games has an active booster!" , inline: true})
            else
              Classic.addFields(
                   { name: "Booster", value: "Classic Games has no active boosters!" , inline:true})  
            emojis.edit(Classic),
            r.users.remove(user)
            }
            else if (r.emoji.name === '2️⃣') {
                const Mega = new MessageEmbed()          
            .setTitle(':chart_with_upwards_trend: Booster Stats')
            .setDescription('\u200b\nThis is what I could find about Boosters:')
            .setColor(0xFFA500)
            .setFooter("Hystats | Command made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png%27%27')
            for (var i in json.boosters) {
                console.log(json.boosters[i].gameType);}
            if (json.boosters[i].gameType.toString().includes("13"))
              Mega.addFields(
                 { name: "Booster:", value: "Mega Walls has an active booster!" , inline: true})
            else
              Mega.addFields(
                   { name: "Booster", value: "Mega Walls has no active boosters!" , inline:true})  
            emojis.edit(Mega),
            r.users.remove(user)
            }
            else if (r.emoji.name === '3️⃣') {
                const Skywars = new MessageEmbed()          
            .setTitle(':chart_with_upwards_trend: Booster Stats')
            .setDescription('\u200b\nThis is what I could find about Boosters:')
            .setColor(0xFFA500)
            .setFooter("Hystats | Command made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png%27%27')
            for (var i in json.boosters) {
                console.log(json.boosters[i].gameType);}
            if (json.boosters[i].gameType.toString().includes("51"))
              Skywars.addFields(
                 { name: "Booster:", value: "Skywars has an active booster!" , inline: true})
            else
              Skywars.addFields(
                   { name: "Booster", value: "Skywars has no active boosters!" , inline:true})  
            emojis.edit(Skywars),
            r.users.remove(user)
            }
            else if (r.emoji.name === '4️⃣') {
                const UHCBoosters = new MessageEmbed()          
            .setTitle(':chart_with_upwards_trend: Booster Stats')
            .setDescription('\u200b\nThis is what I could find about Boosters:')
            .setColor(0xFFA500)
            .setFooter("Hystats | Command made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png%27%27')
            for (var i in json.boosters) {
                console.log(json.boosters[i].gameType);}
            if (json.boosters[i].gameType.toString().includes("20"))
              UHCBoosters.addFields(
                 { name: "Booster:", value: "Uhc has an active booster!" , inline: true})
            else
              UHCBoosters.addFields(
                   { name: "Booster", value: "Uhc has no active boosters!" , inline:true})  
            emojis.edit(UHCBoosters),
            r.users.remove(user)
            }
            else if (r.emoji.name === '5️⃣') {
                const ArcadeBoosters = new MessageEmbed()          
            .setTitle(':chart_with_upwards_trend: Booster Stats')
            .setDescription('\u200b\nThis is what I could find about Boosters:')
            .setColor(0xFFA500)
            .setFooter("Hystats | Command made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png%27%27')
            for (var i in json.boosters) {
                console.log(json.boosters[i].gameType);}
            if (json.boosters[i].gameType.toString().includes("14"))
              ArcadeBoosters.addFields(
                 { name: "Booster:", value: "Arcade Games has an active booster!" , inline: true})
            else
              ArcadeBoosters.addFields(
                   { name: "Booster", value: "Arcade Games has no active boosters!" , inline:true})  
            emojis.edit(ArcadeBoosters),
            r.users.remove(user)
            }
            else if (r.emoji.name === '6️⃣') {
                const TNT = new MessageEmbed()          
            .setTitle(':chart_with_upwards_trend: Booster Stats')
            .setDescription('\u200b\nThis is what I could find about Boosters:')
            .setColor(0xFFA500)
            .setFooter("Hystats | Command made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png%27%27')
            for (var i in json.boosters) {
                console.log(json.boosters[i].gameType);}
            if (json.boosters[i].gameType.toString().includes("6"))
              TNT.addFields(
                 { name: "Booster:", value: "TNT Games has an active booster!" , inline: true})
            else
              TNT.addFields(
                   { name: "Booster", value: "TNT Games has no active boosters!" , inline:true})  
            emojis.edit(TNT),
            r.users.remove(user)
            }
            else if (r.emoji.name === '7️⃣') {
                const WarlordsBoosters = new MessageEmbed()          
            .setTitle(':chart_with_upwards_trend: Booster Stats')
            .setDescription('\u200b\nThis is what I could find about Boosters:')
            .setColor(0xFFA500)
            .setFooter("Hystats | Command made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png%27%27')
            for (var i in json.boosters) {
                console.log(json.boosters[i].gameType);}
            if (json.boosters[i].gameType.toString().includes("23"))
              WarlordsBoosters.addFields(
                 { name: "Booster:", value: "Warlords has an active booster!" , inline: true})
            else
              WarlordsBoosters.addFields(
                   { name: "Booster", value: "Warlords has no active boosters!" , inline:true})  
            emojis.edit(WarlordsBoosters),
            r.users.remove(user)
            }
            else if (r.emoji.name === '8️⃣') {
                const SmashBoosters = new MessageEmbed()          
            .setTitle(':chart_with_upwards_trend: Booster Stats')
            .setDescription('\u200b\nThis is what I could find about Boosters:')
            .setColor(0xFFA500)
            .setFooter("Hystats | Command made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png%27%27')
            for (var i in json.boosters) {
                console.log(json.boosters[i].gameType);}
            if (json.boosters[i].gameType.toString().includes("23"))
              SmashBoosters.addFields(
                 { name: "Booster:", value: "Smash Heroes has an active booster!" , inline: true})
            else
              SmashBoosters.addFields(
                   { name: "Booster", value: "Smash Heroes has no active boosters!" , inline:true})  
            emojis.edit(SmashBoosters),
            r.users.remove(user)
            }
            else if (r.emoji.name === '9️⃣') {
                const CopsBoosters = new MessageEmbed()          
            .setTitle(':chart_with_upwards_trend: Booster Stats')
            .setDescription('\u200b\nThis is what I could find about Boosters:')
            .setColor(0xFFA500)
            .setFooter("Hystats | Command made by ambmt#6969", 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png%27%27')
            for (var i in json.boosters) {
                console.log(json.boosters[i].gameType);}
            if (json.boosters[i].gameType.toString().includes("21"))
              CopsBoosters.addFields(
                 { name: "Booster:", value: "Cops and Crims has an active booster!" , inline: true})
            else
              CopsBoosters.addFields(
                   { name: "Booster", value: "Cops and Crims has no active boosters!" , inline:true})  
            emojis.edit(CopsBoosters),
            r.users.remove(user)
            }
            
            
            
            
            })
        }
    )}}
