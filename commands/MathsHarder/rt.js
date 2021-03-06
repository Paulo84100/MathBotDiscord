module.exports = {
    name : 'rt',
    description : 'Envoie la racine d\'un nombre exposant au choix',
    execute(message, args) {
        let res = Math.exp((1/args[1])*Math.log(args[0]));
        message.channel.send(res);
    },
}