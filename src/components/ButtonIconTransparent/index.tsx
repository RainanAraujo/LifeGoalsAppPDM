import React from "react";

import { ButtonText, Container, FeatherIcon } from "./styles";

interface Props {
  onPress: () => void;
  text: string;
  FeatherIconName: string;
}

const ButtonIconTransparent: React.FC<Props> = ({
  onPress,
  text,
  FeatherIconName,
}) => {
  return (
    <Container onPress={onPress}>
      <FeatherIcon name={FeatherIconName} />
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export default ButtonIconTransparent;
