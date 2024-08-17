const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db"); // Asegúrate de que el path sea correcto
const bcrypt = require("bcrypt");

app.use(cors()); // Habilita CORS para todas las solicitudes
app.use(express.json()); // Analiza los cuerpos JSON

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  console.log(`Received login request with username: ${username}`);

  db.query(
    "SELECT username, password FROM usuarios WHERE username = ?",
    [username],
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
