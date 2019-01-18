//kick.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {
var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
if(message.guild.member(message.author.id).hasPermissions("KICK_MEMBERS")) {
    
if(message.guild.member(Robin.user.id).hasPermissions("KICK_MEMBERS")) {

let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send(`\`${nomeeapelido}\`, Você esqueçeu de **mencionar** o membro que deseja kickar!`);

let razao = args.slice(1).join(" ")
if(!razao) return message.channel.send(`\`${nomeeapelido}\`, Você se esqueceu de colocar a **razão**!`);

message.guild.member(usuario).kick(razao)

return message.channel.send(`\`${nomeeapelido}\`, o usuario **${usuario.username}** foi kickado com sucesso!`);

} else {
    message.channel.send(`\`${nomeeapelido}\`, Eu não tenho a permissão necessária para fazer isto. **KICK_MEMBERS**`)
}

} else {
    return message.channel.send(`\`${nomeeapelido}\`, Sem permissão!`);   
}

}

module.exports.config = {name: "kick"}
