import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

export const Container = styled.TouchableOpacity`
  background-color: transparent;
  width: 100%;
  padding: 16px 0;
  align-items: center;
  flex-direction: row;
`;
export const FeatherIcon = styled(Feather)`
  font-size: 26px;
  color: ${Colors.red};
`;

export const ButtonText = styled.Text`
  margin-left: 15px;
  font-size: 16px;
  color: ${Colors.red};
  font-family: "Poppins";
`;
