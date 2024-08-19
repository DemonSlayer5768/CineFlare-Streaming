"use client"; // Asegúrate de que este esté al inicio

import React, { useState, useEffect } from "react";
import "../styles/heroSection.css"; // Importa los estilos específicos para el carousel

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      src: "/imgs_Carousel/Baki.jpg",
      title: "Baki",
      description: `Sigue la historia de Baki Hanma, 
         un joven luchador que se entrena con intensidad para superar a su padre,
         el luchador más fuerte del mundo.
         La serie se centra en brutales combates de artes marciales, 
         con personajes extremadamente poderosos y técnicas sorprendentes.`,
    },
    {
      src: "/imgs_Carousel/dragonBallS.jpg",
      title: "DragonBall Z",
      description: `Sigue la vida de Goku, un guerrero saiyajin, 
      desde su infancia hasta la edad adulta. 
      La serie combina acción, artes marciales,
      y la búsqueda de poderosos enemigos y artefactos como las Esferas del Dragón,
      que pueden conceder deseos.`,
    },
    {
      src: "/imgs_Carousel/One_piece_Red.jpg",
      title: "One Piece",
      description: `Narra las aventuras de Monkey D. Luffy
        y su tripulación de piratas mientras buscan el legendario tesoro conocido como "One Piece".
        Luffy sueña con convertirse en el Rey de los Piratas, 
        y en su viaje se enfrentan a desafíos, enemigos y descubren misterios del mundo.`,
    },
    {
      src: "/imgs_Carousel/naruto.jpg",
      title: "Naruto",
      description: `Narra la historia de Naruto Uzumaki,
        un joven ninja que sueña con convertirse en el líder de su aldea, el Hokage, 
        mientras lucha por ser aceptado y reconocido en un mundo lleno de desafíos y técnicas ninja.`,
    },
    // Agrega más elementos según sea necesario
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 7000); // Cambia de imagen cada 7 segundos

    return () => clearInterval(interval);
  }, [items.length]);

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev-button" onClick={prevItem}>
        &#10094; {/* Símbolo de flecha hacia la izquierda */}
      </button>
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            <img src={item.src} alt={`Slide ${index}`} loading="lazy" />
            <div className="carousel-caption">
              <h2 className="carousel-title">{item.title}</h2>
              <p className="carousel-description">{item.description}</p>
              <button className="btn-primary">Empezar a Ver</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button next-button" onClick={nextItem}>
        &#10095; {/* Símbolo de flecha hacia la derecha */}
      </button>
    </div>
  );
};

export default HeroSection;
