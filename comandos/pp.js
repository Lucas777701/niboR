//pp.js:
const Discord = require('discord.js');
const Jimp = require('jimp');

module.exports.run = (Robin, message, args) => {
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
    if(message.content.split(' ').slice(1).join(' ').length < 1) {
            message.channel.send(`\`${nomeeapelido}\`, Você não escreveu nada.`)
        } else {
            if(message.content.split(' ').slice(1).join(' ').length > 50) {
                message.channel.send(`\`${nomeeapelido}\`, Você ultrapassou o limite de 50 caracteres.`)
            } else {
                if(message.guild.member(Robin.user).hasPermission('ATTACH_FILES')) {
                    
                Jimp.read(`https://cdn.discordapp.com/attachments/521271130154205194/521300355313565696/1540468746593.png`, function (err, image) {
                if (err) message.channel.send(`\`${nomeeapelido}\`, Ocorreu um erro ao criar a imagem.`)
                Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                image.print(font, 11, 13, message.content.split(' ').slice(1).join(' ')[0] + '... ' + message.content.split(' ').slice(1).join(' ')[0] + '..', 400)
                image.print(font, 19, 290, message.content.split(' ').slice(1).join(' '), 320)
                image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                message.channel.sendAttachment(buffer, 'pp.png', '🖼 | <@' + message.author.id + '>')
                
                
                })
                })})
            
                } else {
                    message.channel.send(`\`${nomeeapelido}\`, Eu não tenho a permissão necessária para fazer isto. **ATTACH_FILES**`)
                }
            }
    
        }
    }

module.exports.help = {name: "pp"}
