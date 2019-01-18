//robin.js:
const Discord = require('discord.js');
const {TOKEN} = require('./setup.js');
const Robin = new Discord.Client({
autoReconnect: true, 
fetchAllMembers: true,
disableEveryone: true,
disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
messageCacheMaxSize: 2024,
})
var mongoose = require('mongoose');
var database = require('./database.js');
const fs = require('fs');
const moment = require('moment');
require('moment-duration-format');
moment.locale('pt-BR');

function changing_status() {
  
  let status = [`Criado no Brasil pelo ! ↝¯̶̄Lucas™ 合#0001.`, `${Robin.users.size.toLocaleString()} usuários.`, `${Robin.guilds.size} servidores.`, `${Robin.channels.size} canais.`, `${Robin.emojis.size} emojis.`, `rb.help para ver meus comandos.`]
  let randomStatus = status[Math.floor(Math.random() * status.length)]
  
  Robin.user.setPresence({game:{name: randomStatus}, status: "dnd"})
  
} 

Robin.on('message', message => {

let args = message.content.split(" ").slice(1); 
let cmd  =  message.content.split(" ")[0]; 

if(message.author.bot) 
 return;
if(message.channel.type == "dm") 
 return;
if(!message.content.startsWith("rb.")) 
 return; 
    
  cmd = cmd.slice("rb.".length);
 
  try {

const file = require(`./comandos/${cmd}.js`);
file.run(Robin, message, args);
console.log(`Comando ${cmd}.js foi usado no servidor ${message.guild.name}.`);

} catch(erro) {
console.log(`Ocorreu um piqueno erro no comando ${cmd}.js no servidor ${message.guild.name}.\n\n${erro}`);
 }
})

Robin.on('ready', () => { console.log(`${Robin.user.username}, está online.`) 
setInterval(changing_status, 10000); });
Robin.login(TOKEN).catch(erro => {
 console.log(`Ocorreu uma piquena falha ao fazer o login do bot.\n\n${erro}`);
})
