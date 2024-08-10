import Header from "../Components/header";
import HeroSection from "../Components/heroSection";
import ContentGrid from "../Components/contentGrid";

const items = [
  {
    src: "../imgs_Carousel/Baki.jpg",
    title: "Item 1",
    description: "Descripción del ítem 1",
  },
  {
    src: "/path/to/image2.jpg",
    title: "Item 2",
    description: "Descripción del ítem 2",
  },
  {
    src: "/path/to/image3.jpg",
    title: "Item 3",
    description: "Descripción del ítem 3",
  },
  // Agrega más ítems según sea necesario
];

export default function Page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <main>
        <h1>Para ti</h1>
        <ContentGrid items={items} />
      </main>
    </div>
  );
}
