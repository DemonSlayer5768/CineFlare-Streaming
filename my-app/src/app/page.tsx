import React from "react";
import Header from "../Components/header";
import HeroSection from "../Components/heroSection";
import ContentGrid from "../Components/contentGridContinue";
import ContNew from "../Components/NuevoContent";
import "../styles/page.css";

export default function Page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <main>
        <h1>Seguir Viendo</h1>
        <ContentGrid />
        <h2>Nuevo Contenido</h2>
        <ContNew />
        <h2>Accion</h2>
      </main>
    </div>
  );
}
