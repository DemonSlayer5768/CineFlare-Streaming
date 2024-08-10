import Header from "../Components/header";
import HeroSection from "../Components/heroSection";
import ContentGrid from "../Components/contentGrid";

export default function Page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <main>
        <h1>Para ti</h1>
        <ContentGrid />
      </main>
    </div>
  );
}
