//laranjo.js:
var Discord = require('discord.js')
var Jimp = require('jimp');

module.exports.run = (Robin, message, args) => {
   
    if(message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.sendMessage(`\`${message.author.username}\`, Você não escreveu nada!`)
    } else {
        if(message.content.split(' ').slice(1).join(' ').length > 58) {
            message.channel.sendMessage(`\`${message.author.username}\`, Você ultrapassou o limite de 58 caracteres!`)
        } else {
            if(message.guild.member(Robin.user).hasPermission('ATTACH_FILES')) {
                Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (fonte) {           
                Jimp.read("https://cdn.glitch.com/b94d084b-e5f6-4bf9-bc57-563c25d6c68e%2Fimagem%20(1).png?1538783939685", function (erre, img) {
                            
                  let texto = message.content.split(' ').slice(1).join(' ')
                  
                  img.resize(719, 519)
                  img.print(fonte, 10, 20, texto, 750)  
                  img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                                    message.channel.send(``, new Discord.Attachment(buffer,  'laranjo.jpg')).catch(err => {
                                        message.channel.send('<a:checkNo:528625993569796121> **|' + message.author.tag + '**, Parece que ocorreu um erro ao enviar essa imagem.');
                                      
                         })                                                                                 
                      })
                  })
              })
           }
        }
    }
}
         
module.exports.help = {name: "laranjo"}
