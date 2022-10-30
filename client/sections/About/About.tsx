import { FC } from "react";
import Section from "../../components/Section/Section";
import colors from "../../utils/colors";
import bg from "../../assets/backgrounds/about-bg.jpg";
import nadav from "../../assets/img/nadav-head-shot.jpeg";
import {
  ButtonWrapper,
  Container,
  Description,
  Figure,
  SectionWrapper,
  Wrapper,
} from "./About.styled";
import Button from "../../components/Button/Button";
import Image from "next/image";
import { useAppContext } from "../../context/AppContext/AppContext";
import { data } from "./data";

const About: FC = () => {
  const { language } = useAppContext();

  return (
    <SectionWrapper>
      <Section
        id="about"
        justify={"center"}
        padding={"13vmax 10vw"}
        backgroundColor={colors.blue}
        backgroundImage={bg.src}
      >
        <Wrapper language={language}>
          <Container>
            <Description language={language}>
              <h2>{data[language].title}</h2>
              <p>{data[language].accent}</p>
            </Description>
            <ButtonWrapper language={language}>
              <Button
                language={language}
                responsive
                stroke={"true"}
                href={"/#consultation"}
              >
                {data[language].button}
              </Button>
            </ButtonWrapper>
          </Container>
          <Figure>
            <Image src={nadav} height={"400px"} width={"400px"} />
          </Figure>
        </Wrapper>
      </Section>
    </SectionWrapper>
  );
};

export default About;
