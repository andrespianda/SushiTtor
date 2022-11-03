const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductosSchema =  new Schema({
    codigoPlato:{type: String , required: true , max: 6 },
    plato: {type: String, required: true , max: 60 },
    precio: {type: Number, required: true },
    activo:{type: Boolean, required: true },
    ingredientes:{type: String}

})

module.exports = mongoose.model("productos", ProductosSchema)