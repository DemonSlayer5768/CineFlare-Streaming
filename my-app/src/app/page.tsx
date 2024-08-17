import React from "react";
import "../styles/page.css";
import Home from "../layouts/home";
// npm install react react-dom
// # Limpia la caché y reconstruye el proyecto
// npm run build
// npm run dev

import "../styles/globals.css";

export default function Page() {
  return (
    <div>
      <main>
        <Home />
      </main>
    </div>
  );
}
