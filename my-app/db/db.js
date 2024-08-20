// db.js
const mysql = require("mysql2/promise");

// Crea una conexión a la base de datos con promesas
const pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "mypageweb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;

// mysql.createPool: Recomendado para aplicaciones con alta
//  carga de trabajo o muchas conexiones simultáneas. Maneja
//  automáticamente el pooling de conexiones,
//  lo que es más eficiente para aplicaciones que requieren muchas consultas concurrentes.

// mysql.createConnection: Adecuado para aplicaciones más simples o
// en desarrollo donde no se requiere el manejo de múltiples
//  conexiones simultáneas. Ideal para pruebas o aplicaciones con menor carga.

// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "root", // Asegúrate de que este usuario exista en MySQL
//   password: "", // Asegúrate de que esta contraseña sea correcta
//   database: "MyPageWeb", // Nombre de la base de datos
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error conectando a la base de datos:", err);
//     return;
//   }
//   console.log("Conexión a la base de datos establecida.");
// });

// module.exports = connection;
