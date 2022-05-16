const { Router } = require('express');


const router = Router();


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Countries = require("./Countries.js");
// const Sightseeing = require("./Sightseeing.js");




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", Countries);
// router.use("/", Sightseeing);


module.exports = router;
