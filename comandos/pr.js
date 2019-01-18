//pr.js:
var Discord = require('discord.js')
var Jimp = require('jimp');
 
module.exports.run = (Robin, message, ops, args) => {
   
    if(message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.sendMessage(`\`${message.author.username}\`, Você não escreveu nada.`)
    } else {
        if(message.content.split(' ').slice(1).join(' ').length > 58) {
            message.channel.sendMessage(`\`${message.author.username}\`, Você ultrapassou o limite de 58 caracteres.`)
        } else {
            if(message.guild.member(Robin.user).hasPermission('ATTACH_FILES')) {
              
                    Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (fonte) {
                    Jimp.read("https://cdn.discordapp.com/attachments/464270386943623188/518807328053657610/Camada_2.png", function (erre, img) {
                    Jimp.read("https://cdn.discordapp.com/attachments/425865939691765760/528329687491936267/image.png", function (erre, PR) {
                            img.resize(443, 103);
                            img.composite(PR, 0, 0);
                            img.print(fonte, 115, 36, message.content.split(' ').slice(1).join(' '));
                                img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                                    message.channel.send(``, new Discord.Attachment(buffer,  'pr.png')).catch(err => {
                                        message.channel.send(`\`${message.author.username}\`, Parece que ocorreu um erro ao enviar essa imagem.`);
                                });
                            });
                        });
                    });
                });
            }
        }
    }
}
 
module.exports.help = {name: "pr"}
