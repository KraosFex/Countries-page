const express = require('express');
const router = express.Router();


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Countries = require("./Countries.js");
const Activities = require("./Activities");




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/api/", Countries);
router.use("/api/", Activities);


module.exports = router;
