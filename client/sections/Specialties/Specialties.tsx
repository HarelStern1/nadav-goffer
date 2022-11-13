import { FC } from "react";
import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import useMediaQuery from "../../hooks/useMediaQuery";
import { specialties } from "./data";

const Specialties: FC = () => {
  const isMobile = useMediaQuery(767);

  return (
    <Section
      padding={!isMobile ? "7vmax 7vw 10vmax 7vw" : "7vmax 10vw 150px 10vw"}
      justify={"space-around"}
      column
    >
      {specialties.map((s, idx) => {
        return (
          <Card key={idx} title={s.title} body={s.body}>
            {s.icon}
          </Card>
        );
      })}
    </Section>
  );
};

export default Specialties;
