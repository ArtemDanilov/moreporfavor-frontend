import { Metadata } from "next";
import Image from "next/image";
import Section from "@/app/components/Section";
import Hero from "@/app/components/hero/category/Hero";
import Shapes from "@/app/components/svg/shapes";

export const metadata: Metadata = {
  title: "O mnie",
  description:
    "Hej, jestem Kaja! Kocham słońce, dobre jedzenie, ładne budynki i odkrywanie nowych miejsc.",
};

const About: React.FC = () => {
  return (
    <>
      <Hero title="O mnie" />

      <Section className="relative max-w-3xl overflow-x-hidden md:overflow-visible xl:max-w-4xl">
        <div className="flex gap-4 flex-col items-center md:flex-row">
          <Image
            src="/assets/Kaja.jpg"
            alt="zdjęcie autora"
            width={300}
            height={480}
            className="w-full h-full max-w-md object-cover rounded-xl"
          />
          <Shapes className="absolute bottom-0 -z-10 w-[34rem] h-[43.5rem] text-[#FFCD60] md:-bottom-24 md:left-32" />
          <p className="font-sans font-normal text-base md:text-lg">
            Hej, jestem Kaja! Kocham słońce, dobre jedzenie, ładne budynki i
            odkrywanie nowych miejsc. Blog moreporfavor powstał, by dzielić się
            podróżniczą pasją i utrwalać wspomnienia. Nazwa nie jest
            przypadkowa. Ciągle mam ochotę na “more”. “Por favor” nawiązuje do
            języka hiszpańskiego, którego się uczę, a pierwszy kontakt z nim
            miałam, pracując na jednej z Wysp Kanaryjskich po maturze. Mam
            nadzieję, że zostaniesz tu na dłużej!
          </p>
        </div>
      </Section>
    </>
  );
};

export default About;
