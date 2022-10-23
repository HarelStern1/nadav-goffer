import { FC } from "react";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import bg from "../../assets/backgrounds/hero-bg.jpg";
import { Content } from "./Hero.styled";

const Hero: FC = () => {
  return (
    <Section
      justify={"center"}
      padding={"14vmax 10vw"}
      backgroundColor={"#333"}
      backgroundImage={bg.src}
      backgroundOpacity={0.7}
    >
      <Content>
        <h2>Nadav Goffer</h2>
        <p>Lawyer</p>
        <Button href="/#consultation" stroke="true">
          Request a Free Consulation
        </Button>
      </Content>
    </Section>
  );
};

export default Hero;
