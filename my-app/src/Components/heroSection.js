"use client"; // Asegúrate de que este esté al inicio

import React, { useState, useEffect } from "react";
import "../styles/heroSection.css"; // Importa los estilos específicos para el carousel

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      src: "../imgs_Carousel/Baki.jpg",
      title: "Baki",
      description: "Peleas",
    },
    {
      src: "../imgs_Carousel/dragonBallS.jpg",
      title: "DragonBall Z",
      description: "Peleas",
    },
    {
      src: "../imgs_Carousel/One_piece_Red.jpg",
      title: "One Piece",
      description: "PIRATA",
    },
    {
      src: "../imgs_Carousel/naruto.jpg",
      title: "Naruto",
      description: "Ninja",
    },
    // Agrega más elementos según sea necesario
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 7000); // Cambia de imagen cada 7 segundos

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.src} alt={`Slide ${index}`} />
            <div className="carousel-caption">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button className="btn-primary">Ir a la película</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
