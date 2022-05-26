const express = require('express');
const router = express.Router();
const { Activity, Country } = require("../database/db.js");

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

        console.log(name)
        console.log(difficulty)
        console.log(duration)
        console.log(season)
        console.log(typeof nameCountry)

    try {
        if( typeof nameCountry === "string"){
            // the countries are mapped to consult each one in the table
            // and relates to the activity created

            const findedCountry = await Country.findOne({ where : { name : nameCountry }})
            if (!findedCountry) return res.json({ info: "The selected country does not exist" });

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

            // it only relates the tables if the country exists previously and if the activity had not been created
            findedCountry.addActivity(newActivity)

            const activities = await Activity.findAll()

            res.json(activities)
        } else {
            const newActivitie = await nameCountry.map( async c => {
                // the countries are mapped to consult each one in the table
            // and relates to the activity created

            const findedCountry = await Country.findOne({ where : { name : c }})
            if (!findedCountry) return res.json({ info: "The selected country does not exist" });

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

            // it only relates the tables if the country exists previously and if the activity had not been created
            
            
            return findedCountry.addActivity(newActivity)
            })

            console.log(newActivitie)
            res.json(newActivitie)
        }


        
    } catch (error) {
        res.json({error: "The data sent is not valid"})
    }
})

router.get("/activities", async (req,res) => {
    // this request brings all activities created by users
    // so that in the fontend it is updated in the filters
    try{

        const allActivities = await Activity.findAll({ include : Country })
        
        // only an array of strings of the names is sent
        res.json( allActivities ) 

    } catch (err){
        res.json({error:"Could not query or find activities"})
    }
})

router.put("/activities/:id", async (req, res) => {
    const { id } = req.params;

    try{
        const activitiDelete = await Activity.destroy({where: {id}})

        return res.send({deleteStatus: "Activity successfully removed"})

    } catch (error) {
        // if the country does not exist, an error is displayed
        res.json({ error: 'invalid id' })
    }

})

module.exports = router;