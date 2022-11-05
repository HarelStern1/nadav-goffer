import { FC } from "react";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import bg from "../../assets/backgrounds/hero-bg.jpg";
import { Content } from "./Hero.styled";
import { useAppContext } from "../../context/AppContext/AppContext";
import { data } from "./data";
import useMediaQuery from "../../hooks/useMediaQuery";

const Hero: FC = () => {
  const { language } = useAppContext();
  const isMobile = useMediaQuery(767);

  return (
    <Section
      justify={"center"}
      padding={!isMobile ? "14vmax 10vw" : "7vmax 10vw 14vmax 10vw"}
      backgroundColor={"#333"}
      backgroundImage={bg.src}
      backgroundOpacity={!isMobile ? 0.7 : 0.5}
    >
      <Content language={language}>
        <h2>{data[language].title}</h2>
        <p>{data[language].accent}</p>
        <Button href="/#consultation" stroke="true" language={language}>
          {data[language].button}
        </Button>
      </Content>
    </Section>
  );
};

export default Hero;
