import React from "react";
import { GestureResponderEvent } from "react-native";
import { Container, Icon, IconDone, IconEdit } from "./styles";

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  type: typeIcon;
}

type typeIcon = "add" | "done" | "edit";

const FloatingAddButton: React.FC<Props> = ({ onPress, type }) => {
  return (
    <Container onPress={onPress}>
      {type === "add" && <Icon name="add-outline" />}
      {type === "done" && <IconDone name="done" />}
      {type === "edit" && <IconEdit name="edit-2" />}
    </Container>
  );
};

export default FloatingAddButton;
