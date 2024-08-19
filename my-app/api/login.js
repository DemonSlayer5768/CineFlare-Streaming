const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const pool = require("../db/db"); // Importa el pool de la base de datos

const app = express();
const saltRounds = 10; // Número de rondas para bcrypt

app.use(cors()); // Habilita CORS para todas las solicitudes
app.use(express.json()); // Analiza los cuerpos JSON

// Ruta para iniciar sesión
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Consulta la base de datos usando el pool
    const [results] = await pool.query(
      "SELECT username, email, password FROM usuarios WHERE username = ? OR email = ?",
      [username, username]
    );

    if (results.length === 0) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const user = results[0];

    // Compara la contraseña usando bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.status(200).json({ message: "Login exitoso", user });
    } else {
      res.status(401).json({ message: "Contraseña incorrecta" });
    }
  } catch (err) {
    console.error("Error en la base de datos:", err);
    res.status(500).json({ message: "Error en la base de datos" });
  }
});

// Ruta para registrar un nuevo usuario
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Encripta la contraseña usando bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Inserta el nuevo usuario en la base de datos
    await pool.query(
      "INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (err) {
    console.error("Error en la base de datos:", err);
    res.status(500).json({ message: "Error en la base de datos" });
  }
});

// Iniciar el servidor
app.listen(3305, () => {
  console.log("Servidor Express escuchando en el puerto 3305");
});

// // server.js
// const express = require("express");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const pool = require("./db"); // Importa la configuración de la base de datos

// const app = express();
// const saltRounds = 10; // Número de rondas para bcrypt

// app.use(cors()); // Habilita CORS para todas las solicitudes
// app.use(express.json()); // Analiza los cuerpos JSON

// // Ruta para iniciar sesión
// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;

//   pool.query(
//     "SELECT username, email, password FROM usuarios WHERE username = ? OR email = ?",
//     [username, username],
//     (err, results) => {
//       if (err) {
//         console.error("Error en la base de datos:", err);
//         return res.status(500).json({ message: "Error en la base de datos" });
//       }

//       if (results.length === 0) {
//         return res.status(401).json({ message: "Usuario no encontrado" });
//       }

//       const user = results[0];

//       bcrypt.compare(password, user.password, (err, isMatch) => {
//         if (err) {
//           console.error("Error al comparar contraseñas:", err);
//           return res
//             .status(500)
//             .json({ message: "Error al comparar contraseñas" });
//         }

//         if (isMatch) {
//           res.status(200).json({ message: "Login exitoso", user });
//         } else {
//           res.status(401).json({ message: "Contraseña incorrecta" });
//         }
//       });
//     }
//   );
// });

// // Ruta para registrar un nuevo usuario
// app.post("/api/register", (req, res) => {
//   const { username, email, password } = req.body;

//   bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
//     if (err) {
//       console.error("Error al encriptar la contraseña:", err);
//       return res
//         .status(500)
//         .json({ message: "Error al encriptar la contraseña" });
//     }

//     pool.query(
//       "INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)",
//       [username, email, hashedPassword],
//       (err, results) => {
//         if (err) {
//           console.error("Error en la base de datos:", err);
//           return res.status(500).json({ message: "Error en la base de datos" });
//         }
//         res.status(201).json({ message: "Usuario registrado exitosamente" });
//       }
//     );
//   });
// });

// // Iniciar el servidor
// app.listen(3305, () => {
//   console.log("Servidor Express escuchando en el puerto 3305");
// });
