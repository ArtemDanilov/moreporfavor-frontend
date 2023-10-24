import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O mnie",
  description:
    "Hej, jestem Kaja! Kocham słońce, dobre jedzenie, ładne budynki i odkrywanie nowych miejsc.",
};

const About: React.FC = () => {
  return <h1>O mnie</h1>;
};

export default About;
