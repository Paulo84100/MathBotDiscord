module.exports = {
    name : 'help',
    description : 'help list',
    execute(message, args, fs) {
        let res;
        const commandFolders = fs.readdirSync('./commands');
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`./commands/${folder}/${file}`);
                res += `Commande : ${command.name} Description : ${command.description} `
            }
        }
        message.channel.send(res)
    },
}