import HomepageHero from "./components/hero/HomepageHero";

const entries = [
  {
    title: "Kazachstan praktyczne informacje",
    url: "/azja",
    image: "/assets/tenerife.jpg",
  },
  {
    title: "Grecja i jej plaże",
    url: "/azja",
    image: "/assets/Kaja.jpg",
  },
];

export default function Home() {
  return (
    <main className="">
      <HomepageHero entries={entries} />
    </main>
  );
}
