//vote.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {

    var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    let voto = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor('36393e')
    .setDescription(` **${nomeeapelido}** , Vejamos que deseja me ajudar ?, Então para me ajudar so basta clicar [aqui](https://discordbots.org/bot/522881366019407892)`)
    message.channel.send(voto)
}

module.exports.help = {name: "vote"}
