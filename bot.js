var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

var commPre = '!';

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == commPre) {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Eh? You want me to say \'PONG!\' like some kinda kid?'
                });
                break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Here\'s a helpful guide to knowing your commands!\n\nJust kidding. You aren\'t worth it.'
                });
                break;
            case 'broccoli':
                bot.sendMessage({
                    to: channelID,
                    message: 'Easy, broccoli is the yellow one! You can\'t fool me! Kihihihi-... right...?'
                });
                break;
            break;
         }
     }
});
