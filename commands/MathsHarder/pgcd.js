module.exports = {
    name : 'pgcd',
    description : 'Retourne le plus grand diviseur commun de 2 arguments, pour une fraction',
    execute (message, args) {


        function pgcd(a,b) {
            if (a>b){return (pgcd(b,a));
            }else{
                if ((b % a) == 0){return (a);
                }else{return (pgcd(a,b-a));
                }}}

            
        let res = pgcd(args[0], args[1]);
        
        message.channel.send(`Diviseur : ${res} soit ${args[0] / res} sur ${args[1] / res}`);
            
    }
}