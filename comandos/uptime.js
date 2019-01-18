//ontime.js:
const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')

module.exports.run =  async (Robin, message, args) => {
let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
  
let ontime = moment.duration(Robin.uptime).format('D [d], H [h], m [m], s [s]');
  
message.channel.send(`\`${message.author.username}\`, Estou online a **: ${ontime}.**`);
  
}

module.exports.help = {name: "ontime"} 
