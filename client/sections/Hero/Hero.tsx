import { FC, useEffect } from "react";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import bg from "../../assets/backgrounds/hero-bg.jpg";
import { Content } from "./Hero.styled";
import { useAppContext } from "../../context/AppContext/AppContext";
import { data } from "./data";

const Hero: FC = () => {
  const { language } = useAppContext();

  return (
    <Section
      justify={"center"}
      padding={"14vmax 10vw"}
      backgroundColor={"#333"}
      backgroundImage={bg.src}
      backgroundOpacity={0.7}
    >
      <Content language={language}>
        <h2>{data.en.title}</h2>
        <p>{data.en.accent}</p>
        <Button href="/#consultation" stroke="true" language={language}>
          {data.en.button}
        </Button>
      </Content>
    </Section>
  );
};

export default Hero;
