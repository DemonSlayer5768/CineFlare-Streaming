// pages/inicio.js
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../Components/header";
import HeroSection from "../Components/heroSection";
import ContContinue from "../Components/contentGridContinue";
import ContNew from "../Components/NuevoContent";
import ContSeries from "../Components/contentGridSeries";
import ContMovies from "../Components/contentGridMovies";
import ContAnime from "../Components/contentGidAnime";
import "../styles/inicio.css";
import "../styles/globals.css";

const Inicio = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [isMounted, setIsMounted] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   // Indicar que el componente está montado
  //   setIsMounted(true);
  // }, []);

  // useEffect(() => {
  //   if (isMounted) {
  //     const token = localStorage.getItem("authToken");
  //     console.log("Token:", token); // Depuración
  //     if (!token) {
  //       router.push("/login");
  //     } else {
  //       setIsAuthenticated(true);
  //     }
  //   }
  // }, [isMounted, router]);

  // if (!isAuthenticated) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <Header />
      <HeroSection />
      <main>
        <h1>Seguir Viendo</h1>
        <ContContinue />
        <h2>Nuevo Contenido</h2>
        <ContNew />
        <h2>Series</h2>
        <ContSeries />
        <h2>Películas</h2>
        <ContMovies />
        <h2>Anime</h2>
        <ContAnime />
      </main>
    </div>
  );
};

export default Inicio;
