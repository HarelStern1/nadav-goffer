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
  Wrapper,
} from "./About.styled";
import Button from "../../components/Button/Button";
import Image from "next/image";

const About: FC = () => {
  return (
    <Section
      id="about"
      justify={"center"}
      padding={"13vmax 10vw"}
      backgroundColor={colors.blue}
      backgroundImage={bg.src}
    >
      <Wrapper>
        <Container>
          <Description>
            <h2>About Me</h2>
            <p>
              When you place your case in the hands of our lawyers and
              paralegals, you are placing your case in the hands of
              professionals who are committed to achieving the best possible
              outcome.
            </p>
          </Description>
          <ButtonWrapper>
            <Button responsive stroke={"true"} href={"/#consultation"}>
              Requset a Free Consulation
            </Button>
          </ButtonWrapper>
        </Container>
        <Figure>
          <Image src={nadav} height={"400px"} width={"400px"} />
        </Figure>
      </Wrapper>
    </Section>
  );
};

export default About;
