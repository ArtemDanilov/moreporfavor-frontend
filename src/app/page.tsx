import HomepageHero from "./components/hero/HomepageHero";
import About from "./components/sections/About";

import Section from "./components/Section";

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

      <Section heading="Krótko o mnie">
        <About
          img="/assets/me.jpg"
          text="Lorem ipsum dolor sit amet consectetur. Blandit euismod cras orci enim gravida tellus ultricies tincidunt. Sit felis in vitae eu augue pretium nunc. Aliquam elit vitae congue aenean. Proin arcu vulputate sem purus morbi urna. Pulvinar suspendisse eget amet in id in aliquet."
          className="sm:flex sm:items-center sm:space-x-5 sm:max-w-[37.75rem] sm:text-left"
        />
      </Section>
    </main>
  );
}
