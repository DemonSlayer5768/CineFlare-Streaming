import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    postcssImport(), // Asegúrate de que postcss-import esté correctamente importado
    tailwindcss(), // Inicializa Tailwind CSS
    autoprefixer(), // Añade prefijos de navegador automáticamente
  ],
};

export default config;
