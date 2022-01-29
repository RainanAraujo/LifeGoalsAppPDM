import React, { useCallback } from "react";

import Colors from "../../constants/Colors";
import { Container, Label, Input } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Props {
  label: string;
  options: Array<options>;
  onPress?: (value: Array<options>) => void;
}

type options = { label: string; value: boolean; icon: string };

const CheckBoxInputs: React.FC<Props> = ({ label, options, onPress }) => {
  const changeValueOptions = useCallback(
    (index: number, value: boolean) => {
      options[index].value = !value;
      onPress([...options]);
    },
    [onPress]
  );

  return (
    <Container>
      <Label>{label}</Label>
      {options.map((value, index) => {
        return (
          <BouncyCheckbox
            style={{ marginBottom: 10 }}
            onPress={() => changeValueOptions(index, value.value)}
            isChecked={value.value}
            key={index}
            size={24}
            fillColor={Colors.blue}
            unfillColor="#FFFFFF"
            text={value.label}
            iconStyle={{ borderColor: Colors.blue }}
            textStyle={{
              fontFamily: "Poppins",
              fontSize: 16,
              color: Colors.black,
              textDecorationLine: "none",
            }}
          />
        );
      })}
    </Container>
  );
};

export default CheckBoxInputs;
