//database.js:
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://Lukinhas:lucas1920@ds247944.mlab.com:47944/robindb', { useNewUrlParser: true }, (erro) => {
if (erro) return console.log(`Ocorreu um piqueno erro ao conectar ao banco de dados.\n\n${erro}`);
console.log('Conectado ao Banco de dados.');
 
var User = new Schema({
  _id: {
    type: String
   
  },
  owner: {
   type: Boolean,
   default: false 
   
  },
  subowner: {
   type: Boolean,
   default: false
  
  },
  dev: {
   type: Boolean,
   default: false
    
  },
  sup: {
   type: Boolean,
   default: false
    
  },
  dzn: {
   type: Boolean,
   default: false
    
  },

})

var Guild = new Schema({
  _id: {
    type: String
    
  },
})

var Users = mongoose.model('Users', User)
var Guilds = mongoose.model('Guilds', Guild)
exports.Users = Users
exports.Guilds = Guilds

})
