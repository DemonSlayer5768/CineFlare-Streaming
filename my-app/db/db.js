const mysql = require("mysql2");
//db.js: Configura y exporta la conexión a la base de datos.
const connection = mysql.createConnection({
  //   host: "localhost",
  host: "127.0.0.1",
  port: 3306,
  user: "root", // Asegúrate de que este usuario exista en MySQL
  password: "", // Asegúrate de que esta contraseña sea correcta
  database: "MyPageWeb", // Nombre de la base de datos
});

connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos establecida.");
});

module.exports = connection;
