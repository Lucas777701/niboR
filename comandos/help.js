//help.js:
const Discord = require("discord.js");
var database = require("../database.js");

module.exports.run = async(Robin, message, args) => {
    database.Users.findOne({
        "_id": message.author.id,
    }, function(err, documento) {
        if(documento){
            
        let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.id
        let bicon = message.client.user.displayAvatarURL
        let bnome = message.client.user.username

        var ajuda = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .setAuthor(`${bnome}`, bicon)
        .setDescription("Olá. Olá. Meu nome e Robin, Sou um simples BOT para discord. Criado no Brasil pelo **Lucas 👑#0100**. especializado em Moderação.")
        .setTitle("**Sobre Mim**")
        .addBlankField()
        .addField("Clique nas reações para mudar a pagina.","👮 **Comandos de Adminstração**\n🖼️ **Comandos de Manipulação**\n⚙️ **Comandos de Utilidades**\n😁 **Comandos de Diversão**")
        .setColor("36393e")
        message.channel.send(ajuda).then(async msg => {
            await msg.react("👮")
            await msg.react("🖼")
            await msg.react("⚙")
            await msg.react("😁")
            await msg.react('⬅')

            var ajuda2 = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setAuthor(`${bnome}`, bicon)
            .addField("👮 **Comandos de Adminstração**","`kick` **|** `ban` **|** `limpar` **|** `tempmute` **|** `mute` **|** `unmute` **|** `lock` **|** `unlock` **|** `unban`")
            .setColor("36393e")

            var ajuda3 = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setAuthor(`${bnome}`, bicon)
            .addField("🖼️ **Comandos de Manipulação**","`pr` **|** `hypesquad` **|** `laranjo` **|** `pp`")
            .setColor("36393e")

            var ajuda4 = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setAuthor(`${bnome}`, bicon)
            .addField("⚙️ **Comandos de Utilidades**","`avatar` **|** `invite` **|** `uptime` **|** `vote` **|** `staff`")
            .setColor("36393e")

            var ajuda5 = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setAuthor(`${bnome}`, bicon)
            .addField("😁 **Comandos de Diversão**","`kiss` **|** `hug` **|** `cuddle` **|** `pat` **|** `poke` **|** `slap` **|** `bite` **|** `punch`")
            .setColor("36393e")

            const a1 = (reaction, user) => reaction.emoji.name ==='👮' && user.id === message.author.id
            const a2 = (reaction, user) => reaction.emoji.name ==='🖼' && user.id === message.author.id
            const a3 = (reaction, user) => reaction.emoji.name ==='⚙' && user.id === message.author.id
            const a4 = (reaction, user) => reaction.emoji.name ==='😁' && user.id === message.author.id
            const a5 = (reaction, user) => reaction.emoji.name ==='⬅' && user.id === message.author.id
        
            const b1 = msg.createReactionCollector(a1, { time: 300000 });
            const b2 = msg.createReactionCollector(a2, { time: 300000 });
            const b3 = msg.createReactionCollector(a3, { time: 300000 });
            const b4 = msg.createReactionCollector(a4, { time: 300000 });
            const b5 = msg.createReactionCollector(a5, { time: 300000 });

            b1.on("collect", c1 => {
            msg.edit(ajuda2)
            c1.remove(message.author.id)
            })
            b2.on("collect", c2 => {
            msg.edit(ajuda3)
            c2.remove(message.author.id)
            })
            b3.on("collect", c3 => {
            msg.edit(ajuda4)
            c3.remove(message.author.id)   
            })
            b4.on("collect", c4 => {
            msg.edit(ajuda5)   
            c4.remove(message.author.id) 
            })
            b5.on("collect", c5 => {
            msg.edit(ajuda)   
            c5.remove(message.author.id) 
            })

        })
    } else {
 var usuario = new database.Users({
            _id: message.author.id,
        })
           usuario.save()
        }
    })
}

module.exports.help ={name: "help"}
