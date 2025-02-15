import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import Posts from "./posts/page";

export default function Home() {
  return (
    <main className="app">
      <NavBar />
      <HeroSection />
      <div className="home">
        <Posts />
      </div>
    </main>
  );
}
