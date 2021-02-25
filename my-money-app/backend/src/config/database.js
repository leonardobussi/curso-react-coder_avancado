const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// mongodb+srv://rpg:rpg@cluster0.0ddez.mongodb.net/myMoney?retryWrites=true&w=majority
module.exports = mongoose.connect('mongodb://rpg:rpg@cluster0-shard-00-00.0ddez.mongodb.net:27017,cluster0-shard-00-01.0ddez.mongodb.net:27017,cluster0-shard-00-02.0ddez.mongodb.net:27017/myMoney?ssl=true&replicaSet=atlas-nvmzgw-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}, ()=> {
    try {
        console.log("Mongo conectado")
      } catch (error) {
        console.log(`Error: ${error}`)
      }
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' não é válido para o atributo '{PATH}'."