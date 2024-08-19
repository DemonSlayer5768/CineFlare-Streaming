import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const PageAnime = () => {
  const router = useRouter();
  const { nombre, uuid } = router.query;
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    if (uuid) {
      const fetchSerie = async () => {
        try {
          const response = await axios.get(`/api/ID_Categorias/${uuid}`);
          setSerie(response.data);
        } catch (error) {
          console.error("Error fetching series data:", error);
        }
      };

      fetchSerie();
    }
  }, [uuid]);

  if (!serie) return <p>Cargando...</p>;

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            {serie.title}
          </h2>
          <p className="mt-2 text-muted-foreground md:text-lg">
            {serie.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {serie.episodes.map((episode) => (
            <div
              key={episode.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={episode.image_url}
                alt={episode.title}
                width={400}
                height={300}
                className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold md:text-xl">
                  {episode.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {episode.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageAnime;
