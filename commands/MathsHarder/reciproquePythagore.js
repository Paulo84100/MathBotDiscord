module.exports = {
    name : 'recpythagore',
    description : 'Applique la réciproque du théorème de Pythagore à l\'aide de 3 arguments : les longueurs des 3 cotés du triangle.',
    execute(message, args) {
        let res = false;
        args.sort(function(a, b){return a-b});
        
        if (Math.pow(args[0], 2) + Math.pow(args[1], 2) === Math.pow(args[2], 2)) {
            res = true;
        }

        message.channel.send(`Is rectangle ? : ${res}.`);
    }
}