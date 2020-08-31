//642c5d12-b98b-4eda-98dd-dfb7c9d989a0
const fs = require('fs');
const Discord = require('discord.js');
const prefix = ('!');
const { setInterval } = require('timers');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const ascii = require('ascii-table');
const table = new ascii().setHeading('Command', 'Status');
const fetch = require('node-fetch')


//Fetch Commands//


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);

    let pull = require(`./commands/${file}`);

    if (pull.name) {
        client.commands.set(pull.name, pull);
        table.addRow(file, 'Loaded!');
        } else {
            table.addRow(file, '❌ -> Command failed to load, please check your work again!');
            continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases))
            pull.aliases.forEach(alias => {
                return client.aliases.set(alias, pull.name);
            });
    }
console.log(table.toString());


//Shows If Bot Logs In + Command Handler//


client.on('ready', async () => {

    console.log(`\n` + "✅ Connection made to Discord!")
    console.log("✅ Connected as " + client.user.tag)

    client.on('message', async message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        
           if(command === 'hyinfo') {
            client.commands.get('playerinfo').execute(message, fetch, args); 
           }
           else if(command === 'info') {
            client.commands.get('info').execute(message, client);
           }
           else if(command === 'uuid') {
            client.commands.get('uuid').execute(message, fetch, args); 
           }
           else if(command === 'skin') {
            client.commands.get('skin').execute(message, fetch, args); 
           }
           else if(command === 'ign') {
               client.commands.get('username').execute(message, fetch, args);
           }
           else if(command === 'splash') {
            client.commands.get('splash').execute(message, args);
           }
           else if(command === 'guild') {
            client.commands.get('guild').execute(message, fetch, args);
           }
    })
})


//Bot Token//

//NzQ4MDY3MTY2OTUxMTc4MzAw.X0YB1w.O2yeqWVfZw7395c2OP9GWODaZNg
client.login(process.env.token);