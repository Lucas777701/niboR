//avatar.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {

let usuario = message.mentions.users.first() || message.author;
  
  let av = usuario.displayAvatarURL;
  if(av.endsWith('.gif')) {
    av = `${usuario.displayAvatarURL}?size=2048`
  }
    
 let embed = new Discord.RichEmbed()
 .setColor('36393e')
 .setDescription(`📸 [**${usuario.username}**](${av})`)
 .setImage(av)
message.channel.send(embed)

}

module.exports.help = {name: "avatar"}
