import { FC } from "react";
import Section from "../../components/Section/Section";
import colors from "../../utils/colors";
import bg from "../../assets/backgrounds/hero-background2.jpg";
import { Card } from "./Achievements.styled";
import { GoLaw } from "react-icons/go";
import { achievments } from "./data";

const Achievements: FC = () => {
  return (
    <Section
      justify="space-around"
      backgroundColor={colors.darkGray}
      backgroundImage={bg.src}
      backgroundOpacity={0.3}
      column
    >
      {achievments.map((a, idx) => {
        return (
          <Card key={idx}>
            {a.icon}
            <h2>{a.title}</h2>
            <p>{a.accent}</p>
          </Card>
        );
      })}
    </Section>
  );
};

export default Achievements;
