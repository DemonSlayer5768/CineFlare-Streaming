"use client";

import React from "react";

const HeroMyPage = () => {
  const items = [
    {
      src: "/imgs_Carousel/naruto.jpg",
      title: "Naruto",
      description: `Sigue la historia de Baki Hanma, 
         un joven luchador que se entrena con intensidad para superar a su padre,
         el luchador más fuerte del mundo.
         La serie se centra en brutales combates de artes marciales, 
         con personajes extremadamente poderosos y técnicas sorprendentes.`,
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        overflow: "hidden",
      }}
    >
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${item.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                color: "white",
                padding: "10px",
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "5px",
              }}
            >
              <h2 style={{ margin: 0 }}>{item.title}</h2>
              <p style={{ fontSize: "20px", margin: "10px 0" }}>
                {item.description}
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  color: "black",
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Empezar a Ver
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroMyPage;
