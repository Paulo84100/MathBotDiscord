module.exports = {
    name : 'puissance',
    description : 'Fonction pour calculer la puissance à un nombre.',
    execute(message, args) {
        let res = 0;
        res = Math.pow(args[0], args[1]);
        message.channel.send(`Le résultat est de ${res}`);
    },
}