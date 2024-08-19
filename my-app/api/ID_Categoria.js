import pool from "../db/db";

export default async function handler(req, res) {
  const { uuid } = req.query;

  try {
    const [rows] = await pool.query("SELECT * FROM categorias WHERE id = ?", [
      uuid,
    ]);
    if (rows.length === 0) {
      res.status(404).json({ error: "Serie no encontrada" });
      return;
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error fetching series data:", error);
    res.status(500).json({ error: "Error al recuperar datos" });
  }
}
