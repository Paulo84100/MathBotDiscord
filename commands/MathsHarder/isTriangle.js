module.exports = {
    name : 'istriangle',
    description : 'Calcule si une figure est un triangle à l\'aide des ses 3 angles.',
    execute(message, args) {
        for (let i = 0; i < args.length; i++) {
            args[i] = parseInt(args[i]);
        }
        let res = args[0] + args[1] + args[2];
        if (res === 180) {
            message.channel.send('Cette figure est bien un triangle.');
        } else {
            message.channel.send('Non, la figure n\'est pas un triangle');
        }
    },
}