module.exports = {
    name : 'pythagore',
    description : 'pythagore math function',
    execute(message, args) {
        let res = 0;
        res = Math.sqrt(Math.pow(args[0], 2) + Math.pow(args[1], 2));
        message.channel.send(`Le résultat est de ${res}.`);
    },
}