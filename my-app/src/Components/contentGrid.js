import React from "react";
import "../styles/contentGrid.css"; // Asegúrate de ajustar la ruta según sea necesario

const ContentGrid = ({ items }) => {
  return (
    <div className="contentGrid">
      {items.map((item, index) => (
        <div key={index} className="grid-item">
          <img src={item.src} alt={item.title} className="grid-image" />
          <div className="grid-overlay">
            <h3 className="grid-title">{item.title}</h3>
            <p className="grid-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;
