const { MessageEmbed, Emoji } = require('discord.js');
const { MessageAttachment } = require('discord.js')

module.exports = {
	name: 'inventory',
	description: 'Inventory!',
	async execute(message, fetch, args, Canvas, fs) {

        const loading = new MessageEmbed()
        
        .setTitle("<a:loading:762813605988401153>  Loading")
        .setDescription("Please wait for the message to load!")
        .setColor(0xFFA500)
        .setFooter('Hypixel Discord Test Bot | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')

        let loadingembed = await message.channel.send(loading)

        fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`)
			.then(result => result.json())
			.then(( json ) => {

                if (json === undefined) {
                    message.channel.send("error")

                    return
                }

                const uuid = json.id;
                const skin = `https://crafatar.com/renders/body/${uuid}`

        fetch(`https://api.hypixel.net/skyblock/profiles?key=642c5d12-b98b-4eda-98dd-dfb7c9d989a0&uuid=${uuid}`)
            .then(res => res.json())
            .then(async ( json ) => {

                let tmp = []
                let tmp1 = []
                let tmp2 = []

                const embed = new MessageEmbed()

                .setTitle("<:SkyBlock:761784031440011295> Inventory For " + args[0])
                .setDescription('React to this message with the emoji for your SkyBlock profile')
                .setColor(0xFFA500)
                .setFooter('Hypixel Discord Test Bot | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')

                for (i in json.profiles) {
                    tmp.push(json.profiles[i].cute_name)
                }

                let PROFILE_EMOJIS = {  
                        'Apple': '🍎',
                        'Bannana': '🍌',
                        'Blueberry': '🫐',
                        'Coconut': '🥥',
                        'Cucumber': '🥒',
                        'Grapes': '🍇',
                        'Kiwi': '🥝',
                        'Lemon': '🍋',
                        'Lime': '🟢',
                        'Mango': '🥭',
                        'Orange': '🍊',
                        'Papaya': '🟠',
                        'Peach': '🍑',
                        'Pear': '🍐',
                        'Pineapple': '🍍',
                        'Pomegranate': '🔴',
                        'Raspberry': '🍒',
                        'Strawberry': '🍓',
                        'Tomato': '🍅',
                        'Watermelon': '🍉',
                        'Zucchini': '🥬',
                }

                tmp.forEach(element => {
                tmp1.push(PROFILE_EMOJIS[element] + " " + "`" + element + "`")
                })

                embed.addFields(
                    {name: "Profiles:", value: "+ " + tmp1.join('\n+ '), inline:true}
                )

                let react = await loadingembed.edit(embed)

                tmp.forEach(element => {
                    tmp2.push(PROFILE_EMOJIS[element])
                })
                tmp2.reduce((promise, emoji) => promise.then(() => react.react(emoji)), Promise.resolve())

                const filter = (reaction, user) => {
                    return ['🍎','🍌','🫐','🥥','🥒','🍇','🥝','🍋','🟢','🥭','🍊','🟠','🍑','🍐','🍍','🔴','🍒','🍓','🍅','🍉','🥬'].includes(reaction.emoji.name) && user.id === message.author.id;
                };

                const collector = react.createReactionCollector(filter, { time: 60000 });
                collector.on('collect', async (r, user) => {

                        tmp3 = []

                        const loading1 = new MessageEmbed()
        
                        .setTitle("<a:loading:762813605988401153>  Loading")
                        .setDescription("Please wait for the image to load!")
                        .setColor(0xFFA500)
                        .setFooter('Hypixel Discord Test Bot | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')

                        let loadingembed1 = await message.channel.send(loading1)

                        let PROFILE_EMOJIS1 = {  
                            '🍎': 'Apple',
                            '🍌': 'Banana',
                            '🫐': 'Blueberry',
                            '🥥': 'Coconut',
                            '🥒': 'Cucumber',
                            '🍇': 'Grapes',
                            '🥝': 'Kiwi',
                            '🍋': 'Lemon',
                            '🟢': 'Lime',
                            '🥭': 'Mango',
                            '🍊': 'Orange',
                            '🟠': 'Papaya',
                            '🍑': 'Peach',
                            '🍐': 'Pear',
                            '🍍': 'Pineapple',
                            '🔴': 'Pomegranate',
                            '🍒': 'Raspberry',
                            '🍓': 'Strawberry',
                            '🍅': 'Tomato',
                            '🍉': 'Watermelon',
                            '🥬': 'Zucchini',
                        }
                        
                        let profile = json.profiles.find(element => element.cute_name === PROFILE_EMOJIS1[r.emoji.name])
                        
                        fetch(`https://api.slothpixel.me/api/skyblock/profile/${args[0]}/${profile.profile_id}`)
                        .then(res => res.json())
                        .then(async({members}) => {

                            if (members[`${uuid}`].inventory[0] === undefined) {

                                let errembed = new MessageEmbed()

                                .setTitle("<:error:763321906128355338> Error")
                                .setDescription("Please enable your SkyBlock inventory API")
                                .setColor(0xFFA500)
                                .setFooter('Hypixel Discord Test Bot | Made by BlobFish#9669', 'https://cdn.discordapp.com/attachments/686410633989587022/748091989903409152/pixil-frame-0_1.png')

                                loadingembed1.edit(errembed)
                                return;
                            }
                            

                        let name1 = " "
                        if (members[`${uuid}`].inventory[0].name === undefined || members[`${uuid}`].inventory[0].name === "")  name1 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[0].name.substring(2).toLowerCase()}.png`) === false) name1 = 'null'                        
                        else name1 = members[`${uuid}`].inventory[0].name.substring(2).toLowerCase()
                        
                        let name2 = " "
                        if (members[`${uuid}`].inventory[1].name === undefined || members[`${uuid}`].inventory[1].name === "") name2 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[1].name.substring(2).toLowerCase()}.png`) === false) name2 = 'null'
                        else name2 = members[`${uuid}`].inventory[1].name.substring(2).toLowerCase()

                        let name3 = " "
                        if (members[`${uuid}`].inventory[2].name === undefined || members[`${uuid}`].inventory[2].name === "") name3 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[2].name.substring(2).toLowerCase()}.png`) === false) name3 = 'null'                        
                        else name3 = members[`${uuid}`].inventory[2].name.substring(2).toLowerCase()
                        
                        let name4 = " "
                        if (members[`${uuid}`].inventory[3].name === undefined || members[`${uuid}`].inventory[3].name === "") name4 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[3].name.substring(2).toLowerCase()}.png`) === false) name4 = 'null'
                        else name4 = members[`${uuid}`].inventory[3].name.substring(2).toLowerCase()

                        let name5 = " "
                        if (members[`${uuid}`].inventory[4].name === undefined || members[`${uuid}`].inventory[4].name === "") name5 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[4].name.substring(2).toLowerCase()}.png`) === false) name5 = 'null'
                        else name5 = members[`${uuid}`].inventory[4].name.substring(2).toLowerCase()

                        let name6 = " "
                        if (members[`${uuid}`].inventory[5].name === undefined || members[`${uuid}`].inventory[5].name === "") name6 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[5].name.substring(2).toLowerCase()}.png`) === false) name6 = 'null'
                        else name6 = members[`${uuid}`].inventory[5].name.substring(2).toLowerCase()
                        
                        let name7 = " "
                        if (members[`${uuid}`].inventory[6].name === undefined || members[`${uuid}`].inventory[6].name === "") name7 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[6].name.substring(2).toLowerCase()}.png`) === false) name7 = 'null'
                        else name7 = members[`${uuid}`].inventory[6].name.substring(2).toLowerCase()

                        let name8 = " "
                        if (members[`${uuid}`].inventory[7].name === undefined || members[`${uuid}`].inventory[7].name === "") name8 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[7].name.substring(2).toLowerCase()}.png`) === false) name8 = 'null'
                        else name8 = members[`${uuid}`].inventory[7].name.substring(2).toLowerCase()

                        let name10 = " "
                        if (members[`${uuid}`].inventory[9].name === undefined || members[`${uuid}`].inventory[8].name === "") name10 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[9].name.substring(2).toLowerCase()}.png`) === false) name10 = 'null'
                        else name10 = members[`${uuid}`].inventory[9].name.substring(2).toLowerCase()
                        
                        let name11 = " "
                        if (members[`${uuid}`].inventory[10].name === undefined || members[`${uuid}`].inventory[10].name === "") name11 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[10].name.substring(2).toLowerCase()}.png`) === false) name11 = 'null'
                        else name11 = members[`${uuid}`].inventory[10].name.substring(2).toLowerCase()
                        
                        let name12 = " "
                        if (members[`${uuid}`].inventory[11].name === undefined || members[`${uuid}`].inventory[11].name === "") name12 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[11].name.substring(2).toLowerCase()}.png`) === false) name12 = 'null'
                        else name12 = members[`${uuid}`].inventory[11].name.substring(2).toLowerCase()
                        
                        let name13 = " "
                        if (members[`${uuid}`].inventory[12].name === undefined || members[`${uuid}`].inventory[12].name === "") name13 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[12].name.substring(2).toLowerCase()}.png`) === false) name13 = 'null'
                        else name13 = members[`${uuid}`].inventory[12].name.substring(2).toLowerCase()
                        
                        let name14 = " "
                        if (members[`${uuid}`].inventory[13].name === undefined || members[`${uuid}`].inventory[13].name === "") name14 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[13].name.substring(2).toLowerCase()}.png`) === false) name14 = 'null'
                        else name14 = members[`${uuid}`].inventory[13].name.substring(2).toLowerCase()  

                        let name15 = " "
                        if (members[`${uuid}`].inventory[14].name === undefined || members[`${uuid}`].inventory[14].name === "") name15 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[14].name.substring(2).toLowerCase()}.png`) === false) name15 = 'null'
                        else name15 = members[`${uuid}`].inventory[14].name.substring(2).toLowerCase()
                        
                        let name16 = " "
                        if (members[`${uuid}`].inventory[15].name === undefined || members[`${uuid}`].inventory[15].name === "") name16 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[15].name.substring(2).toLowerCase()}.png`) === false) name16 = 'null'
                        else name16 = members[`${uuid}`].inventory[15].name.substring(2).toLowerCase()
                        
                        let name17 = " "
                        if (members[`${uuid}`].inventory[16].name === undefined || members[`${uuid}`].inventory[16].name === "") name17 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[16].name.substring(2).toLowerCase()}.png`) === false) name17 = 'null'
                        else name17 = members[`${uuid}`].inventory[16].name.substring(2).toLowerCase()
                        
                        let name18 = " "
                        if (members[`${uuid}`].inventory[17].name === undefined || members[`${uuid}`].inventory[17].name === "") name18 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[17].name.substring(2).toLowerCase()}.png`) === false) name18 = 'null'
                        else name18 = members[`${uuid}`].inventory[17].name.substring(2).toLowerCase()
                        
                        let name19 = " "
                        if (members[`${uuid}`].inventory[18].name === undefined || members[`${uuid}`].inventory[18].name === "") name19 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[18].name.substring(2).toLowerCase()}.png`) === false) name19 = 'null'
                        else name19 = members[`${uuid}`].inventory[18].name.substring(2).toLowerCase()
                        
                        let name20 = " "
                        if (members[`${uuid}`].inventory[19].name === undefined || members[`${uuid}`].inventory[19].name === "") name20 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[19].name.substring(2).toLowerCase()}.png`) === false) name20 = 'null'
                        else name20 = members[`${uuid}`].inventory[19].name.substring(2).toLowerCase()

                        let name21 = " "
                        if (members[`${uuid}`].inventory[20].name === undefined || members[`${uuid}`].inventory[20].name === "") name21 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[20].name.substring(2).toLowerCase()}.png`) === false) name21 = 'null'
                        else name21 = members[`${uuid}`].inventory[20].name.substring(2).toLowerCase()
                        
                        let name22 = " "
                        if (members[`${uuid}`].inventory[21].name === undefined || members[`${uuid}`].inventory[21].name === "") name22 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[21].name.substring(2).toLowerCase()}.png`) === false) name22 = 'null'
                        else name22 = members[`${uuid}`].inventory[21].name.substring(2).toLowerCase()                      

                        let name23 = " "
                        if (members[`${uuid}`].inventory[22].name === undefined || members[`${uuid}`].inventory[22].name === "") name23 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[22].name.substring(2).toLowerCase()}.png`) === false) name23 = 'null'
                        else name23 = members[`${uuid}`].inventory[22].name.substring(2).toLowerCase()

                        let name24 = " "
                        if (members[`${uuid}`].inventory[23].name === undefined || members[`${uuid}`].inventory[23].name === "") name24 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[23].name.substring(2).toLowerCase()}.png`) === false) name24 = 'null'
                        else name24 = members[`${uuid}`].inventory[23].name.substring(2).toLowerCase()
                        
                        let name25 = " "
                        if (members[`${uuid}`].inventory[24].name === undefined || members[`${uuid}`].inventory[24].name === "") name25 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[24].name.substring(2).toLowerCase()}.png`) === false) name25 = 'null'
                        else name25 = members[`${uuid}`].inventory[24].name.substring(2).toLowerCase()
                        
                        let name26 = " "
                        if (members[`${uuid}`].inventory[25].name === undefined || members[`${uuid}`].inventory[25].name === "") name26 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[25].name.substring(2).toLowerCase()}.png`) === false) name26 = 'null'
                        else name26 = members[`${uuid}`].inventory[25].name.substring(2).toLowerCase()

                        let name27 = " "
                        if (members[`${uuid}`].inventory[26].name === undefined || members[`${uuid}`].inventory[26].name === "") name27 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[26].name.substring(2).toLowerCase()}.png`) === false) name27 = 'null'
                        else name27 = members[`${uuid}`].inventory[26].name.substring(2).toLowerCase()

                        let name28 = " "
                        if (members[`${uuid}`].inventory[27].name === undefined || members[`${uuid}`].inventory[27].name === "") name28 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[27].name.substring(2).toLowerCase()}.png`) === false) name28 = 'null'
                        else name28 = members[`${uuid}`].inventory[27].name.substring(2).toLowerCase()

                        let name29 = " "
                        if (members[`${uuid}`].inventory[28].name === undefined || members[`${uuid}`].inventory[28].name === "") name29 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[28].name.substring(2).toLowerCase()}.png`) === false) name29 = 'null'
                        else name29 = members[`${uuid}`].inventory[28].name.substring(2).toLowerCase()

                        let name30 = " "
                        if (members[`${uuid}`].inventory[29].name === undefined || members[`${uuid}`].inventory[29].name === "") name30 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[29].name.substring(2).toLowerCase()}.png`) === false) name30 = 'null'
                        else name30 = members[`${uuid}`].inventory[29].name.substring(2).toLowerCase()

                        let name31 = " "
                        if (members[`${uuid}`].inventory[30].name === undefined || members[`${uuid}`].inventory[30].name === "") name31 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[30].name.substring(2).toLowerCase()}.png`) === false) name31 = 'null'
                        else name31 = members[`${uuid}`].inventory[30].name.substring(2).toLowerCase()

                        let name32 = " "
                        if (members[`${uuid}`].inventory[31].name === undefined || members[`${uuid}`].inventory[31].name === "") name32 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[31].name.substring(2).toLowerCase()}.png`) === false) name32 = 'null'
                        else name32 = members[`${uuid}`].inventory[31].name.substring(2).toLowerCase()

                        let name33 = " "
                        if (members[`${uuid}`].inventory[32].name === undefined || members[`${uuid}`].inventory[32].name === "") name33 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[32].name.substring(2).toLowerCase()}.png`) === false) name33 = 'null'
                        else name33 = members[`${uuid}`].inventory[32].name.substring(2).toLowerCase()

                        let name34 = " "
                        if (members[`${uuid}`].inventory[33].name === undefined || members[`${uuid}`].inventory[33].name === "") name34 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[33].name.substring(2).toLowerCase()}.png`) === false) name34 = 'null'
                        else name34 = members[`${uuid}`].inventory[33].name.substring(2).toLowerCase()

                        let name35 = " "
                        if (members[`${uuid}`].inventory[34].name === undefined || members[`${uuid}`].inventory[34].name === "") name35 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[34].name.substring(2).toLowerCase()}.png`) === false) name35 = 'null'
                        else name35 = members[`${uuid}`].inventory[34].name.substring(2).toLowerCase()

                        let name36 = " "
                        if (members[`${uuid}`].inventory[35].name === undefined || members[`${uuid}`].inventory[34].name === "") name36 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[`${uuid}`].inventory[35].name.substring(2).toLowerCase()}.png`) === false) name36 = 'null'
                        else name36 = members[`${uuid}`].inventory[35].name.substring(2).toLowerCase()



                        let name_1 = " "
                        if (members[uuid].armor[0].name === undefined || members[uuid].armor[0].name === "") name_1 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[uuid].armor[0].name.substring(2).toLowerCase()}.png`) === false) name_1 = 'null'
                        else name_1 = members[uuid].armor[0].name.substring(2).toLowerCase()

                        let name_2 = " "
                        if (members[uuid].armor[1].name === undefined || members[uuid].armor[1].name === "") name_2 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[uuid].armor[1].name.substring(2).toLowerCase()}.png`) === false) name_2 = 'null'
                        else name_2 = members[uuid].armor[1].name.substring(2).toLowerCase()

                        let name_3 = " "
                        if (members[uuid].armor[2].name === undefined || members[uuid].armor[2].name === "") name_3 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[uuid].armor[2].name.substring(2).toLowerCase()}.png`) === false) name_3 = 'null'
                        else name_3 = members[uuid].armor[2].name.substring(2).toLowerCase()

                        let name_4 = " "
                        if (members[uuid].armor[3].name === undefined || members[uuid].armor[3].name === "") name_4 = 'blank'
                        else if (fs.existsSync(`./Vanilla_Items/${members[uuid].armor[3].name.substring(2).toLowerCase()}.png`) === false) name_4 = 'null'
                        else name_4 = members[uuid].armor[3].name.substring(2).toLowerCase()
                        

                            const canvas = Canvas.createCanvas(344, 324)
                            const ctx = canvas.getContext('2d')
                            
                            const background = await Canvas.loadImage('./Blank Inv.png')
                            ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        
                            const avatar = await Canvas.loadImage(skin);
                            ctx.drawImage(avatar, 70, 20, 60, 135);

                            const item1 = await Canvas.loadImage(`./Vanilla_Items/${name1}.png`)
                            ctx.drawImage(item1, 15, 285, 30, 30)
                            const item2 = await Canvas.loadImage(`./Vanilla_Items/${name2}.png`)
                            ctx.drawImage(item2, 51, 285, 30, 30)
                            const item3 = await Canvas.loadImage(`./Vanilla_Items/${name3}.png`)
                            ctx.drawImage(item3, 87, 285, 30, 30)
                            const item4 = await Canvas.loadImage(`./Vanilla_Items/${name4}.png`)
                            ctx.drawImage(item4, 123, 285, 30, 30)
                            const item5 = await Canvas.loadImage(`./Vanilla_Items/${name5}.png`)
                            ctx.drawImage(item5, 159, 285, 30, 30)
                            const item6 = await Canvas.loadImage(`./Vanilla_Items/${name6}.png`)
                            ctx.drawImage(item6, 195, 285, 30, 30)
                            const item7 = await Canvas.loadImage(`./Vanilla_Items/${name7}.png`)
                            ctx.drawImage(item7, 231, 285, 30, 30)
                            const item8 = await Canvas.loadImage(`./Vanilla_Items/${name8}.png`)
                            ctx.drawImage(item8, 267, 285, 30, 30)
                            const item9 = await Canvas.loadImage(`./skyblock menu.png`)
                            ctx.drawImage(item9, 303, 285, 30, 30)

                            const item10 = await Canvas.loadImage(`./Vanilla_Items/${name10}.png`)
                            ctx.drawImage(item10, 15, 168, 30, 30)
                            const item11 = await Canvas.loadImage(`./Vanilla_Items/${name11}.png`)
                            ctx.drawImage(item11, 51, 168, 30, 30)
                            const item12 = await Canvas.loadImage(`./Vanilla_Items/${name12}.png`)
                            ctx.drawImage(item12, 87, 168, 30, 30)
                            const item13 = await Canvas.loadImage(`./Vanilla_Items/${name13}.png`)
                            ctx.drawImage(item13, 123, 168, 30, 30)
                            const item14 = await Canvas.loadImage(`./Vanilla_Items/${name14}.png`)
                            ctx.drawImage(item14, 159, 168, 30, 30)
                            const item15 = await Canvas.loadImage(`./Vanilla_Items/${name15}.png`)
                            ctx.drawImage(item15, 195, 168, 30, 30)
                            const item16 = await Canvas.loadImage(`./Vanilla_Items/${name16}.png`)
                            ctx.drawImage(item16, 231, 168, 30, 30)
                            const item17 = await Canvas.loadImage(`./Vanilla_Items/${name17}.png`)
                            ctx.drawImage(item17, 267, 168, 30, 30)
                            const item18 = await Canvas.loadImage(`./Vanilla_Items/${name18}.png`)
                            ctx.drawImage(item18, 303, 168, 30, 30)

                            const item19 = await Canvas.loadImage(`./Vanilla_Items/${name19}.png`)
                            ctx.drawImage(item19, 15, 204, 30, 30)
                            const item20 = await Canvas.loadImage(`./Vanilla_Items/${name20}.png`)
                            ctx.drawImage(item20, 51, 204, 30, 30)
                            const item21 = await Canvas.loadImage(`./Vanilla_Items/${name21}.png`)
                            ctx.drawImage(item21, 87, 204, 30, 30)
                            const item22 = await Canvas.loadImage(`./Vanilla_Items/${name22}.png`)
                            ctx.drawImage(item22, 123, 204, 30, 30)
                            const item23 = await Canvas.loadImage(`./Vanilla_Items/${name23}.png`)
                            ctx.drawImage(item23, 159, 204, 30, 30)
                            const item24 = await Canvas.loadImage(`./Vanilla_Items/${name24}.png`)
                            ctx.drawImage(item24, 195, 204, 30, 30)
                            const item25 = await Canvas.loadImage(`./Vanilla_Items/${name25}.png`)
                            ctx.drawImage(item25, 231, 204, 30, 30)
                            const item26 = await Canvas.loadImage(`./Vanilla_Items/${name26}.png`)
                            ctx.drawImage(item26, 267, 204, 30, 30)
                            const item27 = await Canvas.loadImage(`./Vanilla_Items/${name27}.png`)
                            ctx.drawImage(item27, 303, 204, 30, 30)

                            const item28 = await Canvas.loadImage(`./Vanilla_Items/${name28}.png`)
                            ctx.drawImage(item28, 15, 240, 30, 30)
                            const item29 = await Canvas.loadImage(`./Vanilla_Items/${name29}.png`)
                            ctx.drawImage(item29, 51, 240, 30, 30)
                            const item30 = await Canvas.loadImage(`./Vanilla_Items/${name30}.png`)
                            ctx.drawImage(item30, 87, 240, 30, 30)
                            const item31 = await Canvas.loadImage(`./Vanilla_Items/${name31}.png`)
                            ctx.drawImage(item31, 123, 240, 30, 30)
                            const item32 = await Canvas.loadImage(`./Vanilla_Items/${name32}.png`)
                            ctx.drawImage(item32, 159, 240, 30, 30)
                            const item33 = await Canvas.loadImage(`./Vanilla_Items/${name33}.png`)
                            ctx.drawImage(item33, 195, 240, 30, 30)
                            const item34 = await Canvas.loadImage(`./Vanilla_Items/${name34}.png`)
                            ctx.drawImage(item34, 231, 240, 30, 30)
                            const item35 = await Canvas.loadImage(`./Vanilla_Items/${name35}.png`)
                            ctx.drawImage(item35, 267, 240, 30, 30)
                            const item36 = await Canvas.loadImage(`./Vanilla_Items/${name36}.png`)
                            ctx.drawImage(item36, 303, 240, 30, 30)

                            const armor4 = await Canvas.loadImage(`./Vanilla_Items/${name_4}.png`)
                            ctx.drawImage(armor4, 15, 16, 30, 30)

                            const armor3 = await Canvas.loadImage(`./Vanilla_Items/${name_3}.png`)
                            ctx.drawImage(armor3, 15, 52, 30, 30)
                            
                            const armor2 = await Canvas.loadImage(`./Vanilla_Items/${name_2}.png`)
                            ctx.drawImage(armor2, 15, 88, 30, 30)
                            
                            const armor1 = await Canvas.loadImage(`./Vanilla_Items/${name_1}.png`)
                            ctx.drawImage(armor1, 15, 124, 30, 30)

                            
                            const attachment = new MessageAttachment(canvas.toBuffer(), 'inventory.png')
                            
                            loadingembed1.delete()
                            message.channel.send(attachment)
                            
                        })
                })
            })
        })
    }
}