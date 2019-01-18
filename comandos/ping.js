//ping.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message, args) => {
let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
let embed = new Discord.RichEmbed()
.setDescription(`\`${nomeeapelido}\`, Estou com **${parseInt(Robin.ping)}**ms.`)
.setColor('36393e')
message.channel.send(embed)

}

module.exports.help = {name: "ping"}
