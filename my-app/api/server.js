const express = require("express");
const app = express();
const cors = require("cors");

// Importar los routers
const episodesRouter = require("./episodes");
const authRouter = require("./login");
const animesRouter = require("./animes"); // Asegúrate de que esta ruta es correcta

// Middleware
app.use(cors());
app.use(express.json());

// Montar las rutas
app.use("/api", episodesRouter);
app.use("/api", authRouter);
app.use("/api", animesRouter); // Asegúrate de que esta línea esté incluida

// Iniciar el servidor
const PORT = process.env.PORT || 3305;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
