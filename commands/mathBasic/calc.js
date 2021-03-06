module.exports = {
    name : 'calc',
    description : 'Commande pouvant éxécuter une suite d\'opération arithmétiques.',
    execute(message, args) {

        let res = parseFloat(args[0]);
        let currentMode = 0;
        let mode = ['+', '-', '*', '/'];


        
        for (let i = 1; i < args.length; i++) {
            if (mode.includes(args[i])) {
                currentMode = mode.indexOf(args[i]);
                continue;
            } else {
                switch (currentMode) {
                    case 0 :
                        res += parseFloat(args[i]);
                        break;
                    case 1 :
                        res -= parseFloat(args[i]);
                        break;
                    case 2 :
                        res *= parseFloat(args[i]);
                        break;
                    case 3 :
                        res /= parseFloat(args[i]);
                        break;
                }
            }
        }
        message.channel.send(`Le résultat est de ${res}`);
    },
}