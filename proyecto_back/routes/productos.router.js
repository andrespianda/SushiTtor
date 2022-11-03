var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productos.controller')

/* GET users listing. */
router.post("/", productosController.create);
router.get("/", productosController.find);
router.get("/:id", productosController.findOne);
router.put("/:id", productosController.update);
router.delete("/:id", productosController.remove);

module.exports = router;
