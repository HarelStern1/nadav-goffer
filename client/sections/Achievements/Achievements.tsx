import { FC } from "react";
import Section from "../../components/Section/Section";
import colors from "../../utils/colors";
import bg from "../../assets/backgrounds/hero-background2.jpg";
import { Card } from "./Achievements.styled";
import { GoLaw } from "react-icons/go";

const Achievements: FC = () => {
  return (
    <Section
      justify="space-around"
      backgroundColor={colors.darkGray}
      backgroundImage={bg.src}
      backgroundOpacity={0.3}
      column
    >
      {[0, 1, 2, 3].map((_, idx) => {
        return (
          <Card key={idx}>
            <GoLaw size={40} color={colors.yellow} />
            <h2>1450</h2>
            <p>Happy Clients</p>
          </Card>
        );
      })}
    </Section>
  );
};

export default Achievements;
