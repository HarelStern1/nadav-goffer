import { FC } from "react";
import Section from "../../components/Section/Section";
import colors from "../../utils/colors";

const Contact: FC = () => {
  return (
    <Section id="consultation" backgroundColor={colors.contact}>
      <p>Contact</p>
    </Section>
  );
};

export default Contact;
