var express = require('express');
var router = express.Router();
var empleadosController = require('../controllers/empleados.controller')

/* GET users listing. */
router.post("/", empleadosController.create);
router.get("/", empleadosController.find);
router.get("/:id", empleadosController.findOne);
router.put("/:id", empleadosController.update);
router.delete("/:id", empleadosController.remove);

module.exports = router;
