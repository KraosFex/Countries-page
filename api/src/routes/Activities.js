const express = require('express');
const router = express.Router();
const { Activity, Country } = require("../database/db.js");
const { Op } = require("sequelize")


// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos

router.post("/activities", async (req, res) => {
    const { 
            nameCountry,
            name ,
            difficulty,
            duration,
            season,
        } = req.body

    try {
        // se crea la actividad de no existir en la base de datos
        const [newActivity, created] = await Activity.findOrCreate({
            where:{ 
                name: name,
            }, 
            defaults: { 
                difficulty: difficulty,
                duration: duration,
                season: season,
                }
        })
        // se mapean los paises para consultar cada uno en la tabla
        // y se relaciona con la actividad creada

        const findedCountry = await Country.findOne({ where : { name : nameCountry }})

        // solo relaciona las tablas si el pais existe previamente y si la actividad no habia sido creada
        findedCountry.addActivity(newActivity)

        const activities = await Activity.findAll()
        
        //res.json(`La actividad ${name} ha sido creada y relacionada a paises`);

        res.json(activities)

    } catch (error) {
        res.json({error: "Los datos enviados no son válidos "})
    }
})

router.get("/activities", async (req,res) => {
    // este request trae todas las actividades creadas por los usuarios
    // para que en el fontend se actualice en los filtros
    try{

        const allActivities = await Activity.findAll({ include : Country })
        
        // solo se envía un array de strings de los nombres
        res.json( allActivities ) 

    } catch (err){
        res.json({error:"No se pudo consultar o encontrar actividades"})
    }
})


module.exports = router;