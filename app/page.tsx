import Banner from "./components/Banner";
import CardsHome from "./components/CardsHome";
import HomePage from "./StorageHomePage";

export default async function Home() {
  return (
    <section className="text-gray-600 body-font w-full ">
      <Banner />
      <CardsHome />
      <HomePage key={1} />
    </section>
  );
}
