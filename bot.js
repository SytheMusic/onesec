const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('http://knowyourmeme.com/');
  	 }

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('http://knowyourmeme.com/');
  	 } 
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
