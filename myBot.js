//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const botRem = new Discord.Client();

//Set listener on 'ready'
botRem.on('ready', () => {
  console.log('Rem ready!');
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'test') {
    message.reply('test');
  }
});

botRem.login('NDAxMjY3NTY0MjA4MDYyNDc1.DToBow.sPMdkj62x-VF4mSKJC6b9-FK-Dw');
