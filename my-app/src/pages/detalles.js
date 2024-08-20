import { useRouter } from "next/router";
import React from "react";
import Link from "next/link"; // Importa Link desde next/link
import pool from "../../db/db"; // Asegúrate de que la ruta sea correcta
import "../styles/globals.css";
import Header from "../Components/header";
import HeroMyPage from "../Components/heroSectionMyPage";

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const result = await pool.query(
      "SELECT title, image_url, episode_count FROM anime WHERE UUID = ?", // Filtra por el id
      [id]
    );
    const [rows] = result;
    return { props: { anime: rows } };
  } catch (err) {
    console.error("Error en la consulta:", err);
    return { props: { anime: [] } };
  }
};

const SeriesDetail = ({ anime }) => {
  // Verifica si anime es un array y usa el primer elemento si es así
  const [animeDetail] = anime;

  if (!animeDetail) {
    return <p>Anime no encontrado</p>; // Maneja el caso en que no se encuentra el anime
  }

  return (
    <div>
      <Header />
      <HeroMyPage />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              {animeDetail.title} {/* Muestra el título del anime */}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <img
                src={animeDetail.image_url}
                alt={animeDetail.title}
                width={400}
                height={300}
                className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold md:text-xl">
                  {animeDetail.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Episodes: {animeDetail.episode_count}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
