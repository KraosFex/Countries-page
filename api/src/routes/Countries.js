// se importan todos los metodos que se usaran
const { Router } = require("express");
const { Axios } = require("axios");
const { Op } = require("sequelize")
const { Sightseeing, Country } = require("../database/db.js");

const router = Router();

// GET /countries:
//  En una primera instancia deberán traer todos los países desde la API restcountries 
// y guardarlos en su propia base de datos con todos los campos de la tabla countries
// De esta ruta se debería obtener un listado de los paises.

router.get("/countries", async (req, res) => {
    // Creando un variable en la ruta se puede llegar a recibir un valor de búsqueda de pais por nombre.
    const { name } = req.query;

    // Hacemos un llamado a la tabla en postgres, para que asi la ruta nos traiga el contenido de la misma. 
    const dbCountries = await Country.findAll(); 

    // podemos hacer un try para la peticiones.
    try {
        // Se traen los datos desde la API, por que en caso de que la base de datos este vacia nos haran falta estos datos
        const allCountries = await axios.get("https://restcountries.com/v3/all");

        // En caso de que este vacia, haremos un llamado a la Api para de esta manera cargar la base de datos con
        // lo que necesitamos, para eso utilizaremos axios.
        !dbCountries.length && 
            (await Country.bulkCreate(
                allCountries.data.map( c =>  {
                    return {
                        id: c.cca3,
                        name: c.name.common.toLowerCase(),
                        flags: c.flags[0],
                        contients: c.contients,
                        capital: c.capital,
                        subregion: c.subregion,
                        area: Number(c.area),
                        population: Number(c.population),
                    }
                })
            ))

        // En caso de que llegue algun valor por req, se filtrara paises por nombre
        // let result = name ? await Country.findAll({
        //     where:{
        //         name: {
        //             [Op.like]: `%${name}%`, // se filtra el pais por el valor que llega como prametro
        //         },
        //     },
        //     include:[
        //         {
        //             model: Sightseeing,
        //             attributes: ["name"], // esta linea relaciona los paises y las actividades turisticas
        //             through: {
        //                 attributes: [],
        //             },
        //         },
        //     ],
        // }) // en caso de no haber valor por parametro, esta retornara la lista de todos los paises
        // : await Country.findAll({
        //     include:[
        //         {
        //             model: Sightseeing,
        //             attributes: ["name"], // esta linea relaciona los paises y las actividades turisticas
        //             through: {
        //                 attributes: [],
        //             },
        //         },
        //     ],
        // })

        res.status(202).json(
            dbCountries.map(c => {
                return {
                    cca3: c.cca3,
                    name: c.name,
                    flags: c.flags,
                    continents: c.continents,
                    subregion: c.subregion,
                    area: c.area,
                    population: c.population,

                    // la base de datos trae las actividades como un array de objetos
                    // donde cada uno tiene la propiedad name
                    // la cual se mapea para convertirla en un array de strings

                    // activities: c.activities.map(a => a.name),
                }
            })
        );
    } catch(error){
        res.json({error: "No se encontro respuesta"})
    }   
})

// GET /countries/{idPais}:
//  Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes

router.get("/countries/:id", async (req, res) => {
    //se consulta en la base de datos el pais con la PK que llega por params
    const { id } = req.params;

    try{
        let detail = await Country.findOne({
            where:{
                id:id,
            }
        })
        // si existe se mostrara la ciudad
        res.status(202).json(detail);
    } catch (error) {
        // si no existe el pais, se muestra un error
        res.json({ error: 'id no valido' })
    }

})

module.exports = router;
