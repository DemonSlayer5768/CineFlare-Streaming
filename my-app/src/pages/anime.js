"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../Components/header";
import "../styles/globals.css";
import axios from "axios";

const Anime = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    // Fetching animes data from the backend API
    const fetchAnimes = async () => {
      try {
        const response = await axios.get("/api/animes"); // Ruta a tu API para obtener los animes
        setAnimes(response.data);
      } catch (error) {
        console.error("Error fetching animes:", error);
      }
    };
    fetchAnimes();
  }, []);

  return (
    <div>
      <Header />
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Explore Our Anime Collection
            </h2>
            <p className="mt-3 text-lg text-muted-foreground sm:mt-4 md:text-xl">
              Discover a wide range of anime series.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {animes.map((anime) => (
              <div
                key={anime.UUID}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Link
                  href={`/anime/${anime.UUID}`} // Verifica que anime.UUID es el identificador correcto
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View {anime.title}</span>
                </Link>
                <img
                  src={anime.image_url}
                  alt={anime.title}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{anime.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {anime.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Anime;
