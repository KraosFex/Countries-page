const { DataTypes } = require('sequelize');

// Cada país tiene las siguientes propiedades:
// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country", {
    id: {
      type: DataTypes.STRING(3),
      allowNull:false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    flag: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    continent: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    capital: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    subregion: {
      type:DataTypes.STRING,
    },
    area: {
      type:DataTypes.INTEGER,
    },
    population:{
      type: DataTypes.INTEGER,
    },
    translateName: {
      type: DataTypes.STRING,
    },
  },{
    charset:'utf8',
    collate:'utf8_general_ci',
    timestamps: false,
    createAT:false,
    updateAt:false,
  });
};
