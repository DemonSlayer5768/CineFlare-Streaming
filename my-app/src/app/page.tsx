import React from "react";
import Header from "../Components/header";
import HeroSection from "../Components/heroSection";
import ContentGrid from "../Components/contentGridContinue";
import ContNew from "../Components/NuevoContent";
import ContSeries from "../Components/contentGridSeries";
import ContMovies from "../Components/contentGridMovies";
import ContAnime from "../Components/contentGidAnime";
// import ThemeToggle from "../components/ThemeToggle";
// import "../styles/page.css";
import Login from "../layouts/login";
import "../styles/globals.css";

export default function Page() {
  return (
    <div>
      <main>
        <Login />
      </main>
    </div>

    // <div>
    //   <Header />
    //   <HeroSection />
    //   {/* <ThemeToggle /> */}
    //   <main>
    //     <h1>Seguir Viendo</h1>
    //     <ContentGrid />
    //     <h2>Nuevo Contenido</h2>
    //     <ContNew />
    //     <h2>Series</h2>
    //     <ContSeries />
    //     <h2>Peliculas</h2>
    //     <ContMovies />
    //     <h2>Anime</h2>
    //     <ContAnime />
    //   </main>
    // </div>
  );
}
