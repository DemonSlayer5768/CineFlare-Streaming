const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db"); // Asegúrate de que el path sea correcto
const bcrypt = require("bcrypt");
const saltRounds = 10; // Cantidad de rondas para encriptar contraseñas

app.use(cors()); // Habilita CORS para todas las solicitudes
app.use(express.json()); // Analiza los cuerpos JSON

// Ruta para registrar un nuevo usuario
app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;

  console.log(
    `Received registration request with username: ${username}, email: ${email}`
  );

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.error("Password hashing error:", err);
      return res
        .status(500)
        .json({ message: "Error al encriptar la contraseña" });
    }

    // Guardar el usuario con la contraseña encriptada en la base de datos
    db.query(
      "INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
      (err, results) => {
        if (err) {
          console.error("Database query error:", err);
          return res.status(500).json({ message: "Error en la base de datos" });
        }

        console.log("User registered successfully");
        return res
          .status(201)
          .json({ message: "Usuario registrado exitosamente" });
      }
    );
  });
});

// Ruta para iniciar sesión
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  console.log(
    `Received login request with username: ${username}, password: ${password}`
  );

  // Consultar por nombre de usuario o correo electrónico
  db.query(
    "SELECT username, email, password FROM usuarios WHERE username = ? OR email = ?",
    [username, username],
    (err, results) => {
      if (err) {
        console.error("Database query error:", err);
        return res.status(500).json({ message: "Error en la base de datos" });
      }

      console.log(`Query results: ${JSON.stringify(results)}`);

      if (results.length === 0) {
        return res.status(401).json({ message: "Usuario no encontrado" });
      }

      const user = results[0];

      // Verifica si la contraseña en texto plano coincide con la almacenada encriptada
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.error("Password comparison error:", err);
          return res
            .status(500)
            .json({ message: "Error al comparar contraseñas" });
        }

        if (isMatch) {
          console.log("Password match successful");
          return res.status(200).json({ message: "Login exitoso", user });
        } else {
          console.log("Password match failed");
          return res.status(401).json({ message: "Contraseña incorrecta" });
        }
      });
    }
  );
});

// Inicia el servidor
app.listen(3305, () => {
  console.log("Servidor Express escuchando en el puerto 3305");
});
