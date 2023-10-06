import { Metadata } from "next";
import Wrapper from "@/app/Wrapper";

export const metadata: Metadata = {
  title: "O mnie",
  description:
    "Hej, jestem Kaja! Kocham słońce, dobre jedzenie, ładne budynki i odkrywanie nowych miejsc.",
};

const About: React.FC = () => {
  return (
    <Wrapper>
      <h1>O mnie</h1>
    </Wrapper>
  );
};

export default About;
