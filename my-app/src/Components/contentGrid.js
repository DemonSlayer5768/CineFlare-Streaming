import React from "react";

const ContentGrid = () => {
  const items = [
    {
      image: "url-de-la-imagen-1",
      title: "Título 1",
      description: "Descripción del contenido 1.",
    },
    {
      image: "url-de-la-imagen-2",
      title: "Título 2",
      description: "Descripción del contenido 2.",
    },
    {
      image: "url-de-la-imagen-2",
      title: "Título 2",
      description: "Descripción del contenido 2.",
    },
    {
      image: "url-de-la-imagen-2",
      title: "Título 2",
      description: "Descripción del contenido 2.",
    },
    {
      image: "url-de-la-imagen-2",
      title: "Título 2",
      description: "Descripción del contenido 2.",
    },
    // Agrega más items aquí
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;
