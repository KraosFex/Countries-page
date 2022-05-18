// se importan todos los metodos que se usaran
const express = require('express');
const router = express.Router();
const axios = require("axios");
const { Op } = require("sequelize")
const { Activity , Country } = require("../database/db.js");

// GET /countries:
//  En una primera instancia deberán traer todos los países desde la API restcountries 
// y guardarlos en su propia base de datos con todos los campos de la tabla countries
// De esta ruta se debería obtener un listado de los paises.

router.get("/countries", async (req, res) => {
    try{
        // Se llama a la base de datos && a la api
        const { name } = req.query;
        let allCountries = await Country.findAll({ include : Activity })
        const allApiCountries = await axios.get("https://restcountries.com/v3/all")    
        
        // En caso de que la abase de datos este vacia, se cargara la base de datos con
        // los valores que vienen de la api

        if(allCountries.length > 0 && !name) res.status(202).json(allCountries);
        else if (allCountries.length > 0){
            const country = await Country.findOne({ 
                where:{ name: name },
                include : Activity 
            });
            res.status(202).json(country);
        } else {
            await Country.bulkCreate(
                                allApiCountries.data.map(c => {
                                // se accede a la propiedad data donde se encuentra el array de objetos
                                // con la info de los paises, y se mapea para añadir cada uno a la tabla countries
                                    return {
                                        id: c.cca3,
                                        name: c.name.common.toLowerCase(),
                                        flag: c.flags[0],
                                        continent: c.continents[0],
                                        // capital: c.capital.length ? c.capital[0] : 'has no capital',
                                        subregion: c.subregion,
                                        area: Number(c.area),
                                        population: Number(c.population)
                                    }
                            })
                        );
                        if(allCountries.length > 0 && !name) res.status(202).json(allCountries);
                        else {
                            const country = await Country.findOne({ where:{ name: name } });
                            res.status(202).json(country);
                        }

        }
    } catch(error){
        // en casi de haber algun error se dispara el catch
        res.json({error: "No se encontro respuesta"})
    } 
})

// GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes

router.get("/countries/:id", async (req, res) => {
    //se consulta en la base de datos el pais con la PK que llega por params
    const { id } = req.params;

    try{
        let detail = await Country.findByPk(id, { include : Activity })
        // si existe se mostrara la ciudad
        res.status(202).json(detail);
    } catch (error) {
        // si no existe el pais, se muestra un error
        res.json({ error: 'id no valido' })
    }

})

module.exports = router;
