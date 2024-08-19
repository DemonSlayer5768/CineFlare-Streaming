import { useRouter } from "next/router";
import React from "react";
import Link from "next/link"; // Importa Link desde next/link
import pool from "../../../db/db"; // Asegúrate de que la ruta sea correcta

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const result = await pool.query("SELECT * FROM anime WHERE url_page = ?", [
      id,
    ]);
    // console.log(result);  // Imprime el resultado completo
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
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            Discover Our Innovative Products
          </h2>
          <p className="mt-2 text-muted-foreground md:text-lg">
            Explore our wide range of cutting-edge products designed to enhance
            your daily life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Product</span>
            </Link>
            <img
              src={animeDetail?.image_url}
              alt={animeDetail?.title}
              width={400}
              height={300}
              className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">
                Futuristic Smartwatch
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cutting-edge technology for your wrist.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Product</span>
            </Link>
            <img
              src={animeDetail?.image_url}
              alt={animeDetail?.title}
              width={400}
              height={300}
              className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">
                Levitating Bluetooth Speaker
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Experience music in a whole new way.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Product</span>
            </Link>
            <img
              src={animeDetail?.image_url}
              alt={animeDetail?.title}
              width={400}
              height={300}
              className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">
                Holographic Projector
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Bring your digital world to life.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Product</span>
            </Link>
            <img
              src={animeDetail?.image_url}
              alt={animeDetail?.title}
              width={400}
              height={300}
              className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">
                Eco-Friendly Drone
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore the skies with a sustainable twist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesDetail;
