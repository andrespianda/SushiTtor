var express = require('express');
var router = express.Router();
var noviosController = require('../controllers/novios.controller')

/* GET users listing. */
router.post("/", noviosController.create);
router.get("/", noviosController.find);
router.get("/:id", noviosController.findOne);
router.put("/:id", noviosController.update);
router.delete("/:id", noviosController.remove);

module.exports = router;
