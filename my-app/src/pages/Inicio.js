// pages/content.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
//principal
import Header from "../Components/header";
import HeroSection from "../Components/heroSection";
import ContentGrid from "../Components/contentGridContinue";
import ContNew from "../Components/NuevoContent";
import ContSeries from "../Components/contentGridSeries";
import ContMovies from "../Components/contentGridMovies";
import ContAnime from "../Components/contentGidAnime";

const Inicio = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verifica si el usuario está autenticado
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("api/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <HeroSection />
      {/* <ThemeToggle /> */}
      <main>
        <h1>Seguir Viendo</h1>
        <ContentGrid />
        <h2>Nuevo Contenido</h2>
        <ContNew />
        <h2>Series</h2>
        <ContSeries />
        <h2>Peliculas</h2>
        <ContMovies />
        <h2>Anime</h2>
        <ContAnime />
      </main>
    </div>
  );
};

export default Inicio;
