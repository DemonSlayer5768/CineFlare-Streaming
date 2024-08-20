const express = require("express");
const router = express.Router();
const pool = require("../db/db"); // Importa el pool de la base de datos

// Ruta para obtener todos los episodios
router.get("/episodes", async (req, res) => {
  try {
    const [results] = await pool.query("SELECT * FROM episodes");
    res.json(results);
  } catch (err) {
    console.error("Error al obtener los episodios:", err);
    res.status(500).json({ error: "Error al obtener los episodios" });
  }
});

// Ruta para obtener episodios por temporada
router.get("/episodes/season/:season", async (req, res) => {
  const season = req.params.season;
  try {
    const [results] = await pool.query(
      "SELECT * FROM episodes WHERE season = ?",
      [season]
    );
    res.json(results);
  } catch (err) {
    console.error(
      `Error al obtener los episodios de la temporada ${season}:`,
      err
    );
    res
      .status(500)
      .json({
        error: `Error al obtener los episodios de la temporada ${season}`,
      });
  }
});

// Ruta para obtener un episodio específico por ID
router.get("/episodes/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const [results] = await pool.query("SELECT * FROM episodes WHERE id = ?", [
      id,
    ]);
    if (results.length === 0) {
      res.status(404).json({ error: "Episodio no encontrado" });
    } else {
      res.json(results[0]);
    }
  } catch (err) {
    console.error(`Error al obtener el episodio con ID ${id}:`, err);
    res
      .status(500)
      .json({ error: `Error al obtener el episodio con ID ${id}` });
  }
});

module.exports = router;
