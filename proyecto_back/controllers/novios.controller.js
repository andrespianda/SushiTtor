const Novio = require("../models/novios.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let novio = new Novio({
        ident: req.body.ident,
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        edad: req.body.edad,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion
    })

    novio.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Novio.find(function(err, novios){
        res.json(novios)
    })
}

exports.findOne = function(req,res){
    Novio.findOne({_id: req.params.id},function(err, novio){
        res.json(novio)
    })
}

exports.update = function(req,res){
    let novio = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion
    }

    Novio.findByIdAndUpdate(req.params.id, {$set: novio}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado modifico correctamente"
        res.json(response)
    })
}


exports.remove = function(req,res){
    Novio.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado eliminado correctamente"
        res.json(response)
    })
}