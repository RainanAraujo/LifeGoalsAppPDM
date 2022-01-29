import React from "react";
import { Container, Title, SubTitle } from "./styles";

interface Props {
  title: String;
  subTitle?: String;
}

const HeaderSession: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default HeaderSession;
