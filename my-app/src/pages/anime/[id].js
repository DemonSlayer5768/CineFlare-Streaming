import React, { useState } from "react";
import Header from "../../Components/header";
import HeroMyPage from "../../Components/heroSectionMyPage";
import pool from "../../../db/db";
// import VideoModal from "../../Components/videoModal";
import "../../styles/globals.css";

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const heroResult = await pool.query(
      "SELECT title, image_url, description FROM herosections WHERE anime_UUID = ?",
      [id]
    );
    const [heroRows] = heroResult;

    const episodesResult = await pool.query(
      "SELECT title, image_url, episode_count, descripcion, video_url FROM episodes WHERE anime_UUID = ?",
      [id]
    );
    const [episodesRows] = episodesResult;

    const hero = heroRows[0] || {};

    return {
      props: {
        hero: {
          title: hero.title || "Título predeterminado",
          description: hero.description || "Descripción predeterminada",
          src: hero.image_url || "/default.jpg",
        },
        episodes: episodesRows || [],
      },
    };
  } catch (err) {
    console.error("Error en la consulta:", err);
    return {
      props: {
        hero: {
          title: "Error",
          description: "No se pudo cargar la información.",
          src: "/error.jpg",
        },
        episodes: [],
      },
    };
  }
};

const SeriesDetail = ({ hero, episodes }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const openModal = (videoUrl) => {
    setCurrentVideoUrl(`http://localhost:3005/videos/${videoUrl}`);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideoUrl("");
  };

  if (!episodes || episodes.length === 0) {
    return <div>Error al cargar los detalles del anime.</div>;
  }

  return (
    <div>
      <Header />
      <HeroMyPage
        title={hero.title}
        description={hero.description}
        src={hero.src}
      />

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="w-full px-4 md:px-6 lg:px-10">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h1 className="text-5xl font-bold text-white">Anime</h1>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-4">
            {episodes.map((episode) => (
              <div
                key={episode.episode_count}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl min-h-[250px] min-w-[250px]"
                onClick={() => openModal(episode.video_url)}
              >
                <img
                  src={episode.image_url}
                  alt={episode.title}
                  width={400}
                  height={300}
                  className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105 cursor-pointer"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold text-white">
                    {episode.title} - Episodio {episode.episode_count}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {episode.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={currentVideoUrl}
      /> */}
    </div>
  );
};

export default SeriesDetail;
