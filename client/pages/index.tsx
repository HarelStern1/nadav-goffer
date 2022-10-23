import type { NextPage } from "next";
import About from "../sections/About/About";
import Achievements from "../sections/Achievements/Achievements";
import Contact from "../sections/Contact/Contact";
import Expirience from "../sections/Expirience/Expirience";
import Hero from "../sections/Hero/Hero";
import Specialties from "../sections/Specialties/Specialties";

const index: NextPage = () => {
  return (
    <>
      <Hero />
      <Specialties />
      <About />
      <Expirience />
      <Achievements />
      <Contact />
    </>
  );
};

export default index;
