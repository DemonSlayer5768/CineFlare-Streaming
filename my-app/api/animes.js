const express = require("express");
const router = express.Router();
const pool = require("../db/db"); // Asegúrate de que la ruta sea correcta

// Ruta para obtener todos los animes
router.get("/animes", async (req, res) => {
  try {
    // Ejecuta la consulta para obtener todos los animes
    const [results] = await pool.query("SELECT * FROM animes");
    res.json(results);
  } catch (err) {
    console.error("Error al obtener los animes:", err);
    res.status(500).json({ error: "Error al obtener los animes" });
  }
});

module.exports = router;
