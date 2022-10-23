import { FC } from "react";
import { CardProps } from ".";
import {
  Container,
  Divider,
  IconWrapper,
  Paragraph,
  Top,
  Wrapper,
} from "./Card.styled";

const Card: FC<CardProps> = ({ children, title, body }) => {
  return (
    <Wrapper>
      <Container>
        <Top>
          <IconWrapper>{children}</IconWrapper>
          <h2>{title}</h2>
        </Top>
        <Divider />
        <Paragraph>{body}</Paragraph>
      </Container>
    </Wrapper>
  );
};

export default Card;
