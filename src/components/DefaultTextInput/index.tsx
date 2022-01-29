import React from "react";
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInput,
} from "react-native";
import Colors from "../../constants/Colors";
import { Container, Label, Input } from "./styles";

interface Props {
  label: String;
  keyboardType?: KeyboardTypeOptions;
  autoFocus?: boolean;
  blurOnSubmit?: boolean;
  refInput?: React.Ref<TextInput>;
  onSubmitEditing?: any;
  returnKeyType?: ReturnKeyTypeOptions;
  value?: string;
  secureTextEntry?: boolean;
  onChangeText?: (value: any) => void;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

const DefaultTextInput: React.FC<Props> = ({
  label,
  keyboardType,
  autoFocus,
  blurOnSubmit,
  refInput,
  returnKeyType,
  value,
  autoCapitalize,
  onSubmitEditing,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        value={value}
        onChangeText={onChangeText}
        blurOnSubmit={blurOnSubmit}
        ref={refInput}
        returnKeyType={returnKeyType}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        selectionColor={Colors.primary}
        placeholder="Digite aqui"
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};

export default DefaultTextInput;
