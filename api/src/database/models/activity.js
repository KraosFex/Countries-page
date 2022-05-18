const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Activity',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM,
      values: ['1','2','3','4','5'],
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    season: {
      type: DataTypes.ENUM,
      values: ['spring','summer','autumn','winter'],
    },
  },
  { 
    charset:'utf8',
    collate:'utf8_general_ci',
    timestamps: false,
    createdAt: false,
    updateAt: false,
  });
};