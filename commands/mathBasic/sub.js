module.exports = {
    name : 'sub',
    description : 'substract math function',
    execute(message, args) {
        let res = args[0];
        for (let i = 1; i < args.length; i++) {
            res -= parseFloat(args[i], 10);
        }
        message.channel.send(`Le résultat est de ${res}`);
    },
}