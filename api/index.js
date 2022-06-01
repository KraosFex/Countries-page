//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/database/db.js');
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, // <-- Rescuerda que esto es el puerto
     () => {
    // coneccion con la base de datos
    console.log(`Conexion establecidad y habilitada en el puerto: ${PORT}`); // eslint-disable-line no-console
  }); 
}).catch(error => console.error('Unable to connect to the database:', error));
