import { FC } from "react";
import { SectionProps } from "./index";
import { StyledSection, Content } from "./Section.styled";

const Section: FC<SectionProps> = ({
  children,
  padding,
  backgroundColor,
  backgroundImage,
  backgroundOpacity,
  align,
  justify,
  column,
  id,
}) => {
  return (
    <StyledSection
      id={id}
      padding={padding}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundOpacity={backgroundOpacity}
    >
      <Content align={align} justify={justify} column={column}>
        {children}
      </Content>
    </StyledSection>
  );
};

export default Section;
