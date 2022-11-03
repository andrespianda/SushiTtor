const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoviosSchema =  new Schema({
    ident:{type: String , required: true , max: 60 },
    nombre: {type: String, required: true , max: 60 },
    apellido_p: {type: String, required: true , max: 40 },
    edad:{type: Number, required: true , max: 100 },
    telefono:{type: String, required: true , max: 15 },
    mail:{type: String, required: true , max: 70 },
    direccion: {type: String, required: true , max: 150 }
})

module.exports = mongoose.model("novios", NoviosSchema)