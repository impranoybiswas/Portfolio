import React from "react";
import Container from "../customs/Container";
import HeroText from "../components/HeroText";
import HeroPhoto from "../components/HeroPhoto";
export default function Header() {
  return (
    <Container id="home" customClass={"justify-center pt-10"}>
      <section className="flex flex-col-reverse md:flex-row items-center gap-5 w-full">
        <HeroText  />
        <HeroPhoto/>
      </section>
    </Container>
  );
}
