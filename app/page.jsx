import { getHomePage } from "./api/fetch";
import Categories from "./categories/page";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";


import Posts from "./posts/page";

export default async function Home() {
  const data = await getHomePage()


  return (

      <main>
        <NavBar data={data?.homePage?.Home[0]} />
        <HeroSection data={data?.homePage?.Home[1]} />
        <div className="home">
          <Categories data={data?.homePage?.Home[2]?.categories} />
          <Posts data={data?.posts} />
        </div>
      </main>
  );
}
