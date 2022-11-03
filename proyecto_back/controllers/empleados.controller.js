const Empleado = require("../models/empleados.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let empleado = new Empleado({
        codigoPlato: req.body.codigoPlato,
        plato: req.body.plato,
        precio: req.body.precio,
        activo: req.body.activo,
        ingredientes: req.body.ingredientes
    })

    empleado.save(function(err){
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
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}

exports.findOne = function(req,res){
    Empleado.findOne({_id: req.params.id},function(err, empleado){
        res.json(empleado)
    })
}

exports.update = function(req,res){
    let empleado = {
        codigoPlato: req.body.codigoPlato,
        plato: req.body.plato,
        precio: req.body.precio,
        activo: req.body.activo,
        ingredientes: req.body.ingredientes
    }

    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){
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
    Empleado.findByIdAndRemove({_id: req.params.id}, function(err){
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