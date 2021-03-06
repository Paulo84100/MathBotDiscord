//variables that we use after

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');



for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}




//when bot is finnaly online

client.once('ready', () => {
    console.log('bot was successfully setted up !');
});







//when someone send a message

client.on('message', message => {

    //only if the message starts with the prefix and the autor is not the bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    //get the command and the args from message content
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();


    //check if the command exist
    if (!client.commands.has(commandName)) return;


    //get the module file
    const command = client.commands.get(commandName);


    //try to execute this command if there is an error, we do an Execption
    try {
        if (!command.name === 'help') {
            command.execute(message, args);
        }
        else {
            command.execute(message, args, fs);
        }
    }
    catch (error){
        console.error(error);
        message.reply('An error ocurred command doesn\'t exist :(');
    }
});









client.login(token);