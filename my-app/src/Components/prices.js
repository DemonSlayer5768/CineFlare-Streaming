"use client";
import React from "react";

const Price = () => {
  const items = [
    {
      id: 1,
      image: "../imgs_Home/logo.jpg",
      title: "BASICO",
      price: "$49.99",
    },
    {
      id: 2,
      image: "../imgs_Home/logo.jpg",
      title: "NORMAL",
      price: "$70.99",
    },
    {
      id: 3,
      image: "../imgs_Home/logo.jpg",
      title: "PREMIUM",
      price: "$100.99",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 p-4 md:p-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-background rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl text-white text-center"
        >
          <div className="flex justify-center items-center w-full h-90">
            <img
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="max-w-full max-h-full object-cover"
              style={{ aspectRatio: "200/200", objectFit: "cover" }}
            />
          </div>

          <div className="p-4">
            <h5 className="text-lg font-bold ">{item.title}</h5>
            <p className="text-muted-foreground">{item.price}</p>
            <button className="mt-4 w-full bg-none bg-white text-black text-lg">
              Comprar Ahora
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Price;
