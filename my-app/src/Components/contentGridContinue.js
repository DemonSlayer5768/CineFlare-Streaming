"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/router";

// const router = useRouter(); // Usar router para redirección
// const [items, setItems] = useState([]);

// useEffect(() => {
//   const fetchItems = async () => {
//     try {
//       // Asumiendo que tienes un endpoint para obtener los ítems
//       const response = await axios.get("/api/ID_Categorias");
//       setItems(response.data);
//     } catch (error) {
//       console.error("Error fetching items:", error);
//     }
//   };

//   fetchItems();
// }, []);

const ContentGrid = () => {
  const router = useRouter(); // Usar router para redirección
  const items = [
    {
      image: "../imgs_Carousel/naruto.jpg",
      title: "Naruto",
      route: "Anime/5f06b32b-fd85-42db-8c80-4d0b519930dd", // Ruta a la que redirigir
    },
    {
      image: "../imgs_Carousel/Baki.jpg",
      title: "DragonBall Z",
      route: "/naruto", // Ruta a la que redirigir
    },
    {
      image: "../imgs_Carousel/One_Piece_Red.jpg",
      title: "One Piece",
      route: "/naruto", // Ruta a la que redirigir
    },
    {
      image: "../imgs_Carousel/Baki.jpg",
      title: "Baki",
      route: "/naruto", // Ruta a la que redirigir
    },
    {
      image: "../imgs_Carousel/Baki.jpg",
      title: "Baki",
      route: "/naruto", // Ruta a la que redirigir
    },
    {
      image: "../imgs_Carousel/naruto.jpg",
      title: "Naruto",
      route: "/naruto", // Ruta a la que redirigir
    },
    {
      image: "../imgs_Carousel/Baki.jpg",
      title: "Baki",
      route: "/naruto", // Ruta a la que redirigir
    },
    {
      image: "../imgs_Carousel/naruto.jpg",
      title: "Naruto",
      route: "/naruto", // Ruta a la que redirigir
    },
    // Agrega más items aquí
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex < items.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleRedirect = (route) => {
    router.push(route);
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative px-10 py-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleRedirect(item.route)}
            className="bg-none rounded-lg shadow-lg overflow-hidden cursor-pointer relative"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-30 w-30 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {currentIndex > 0 && (
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-none-800 text-white p-4 text-4xl rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>
      )}

      {currentIndex + itemsPerPage < items.length && (
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-none-800 text-white p-4 text-4xl rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};
export default ContentGrid;
