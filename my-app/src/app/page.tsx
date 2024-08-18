import React from "react";
import Home from "../layouts/home";
import "../styles/globals.css";
// npm install react react-dom
// # Limpia la caché y reconstruye el proyecto
// npm run build
// npm run dev

export default function Page() {
  return (
    <div>
      <main>
        <Home />
      </main>
    </div>
  );
}
