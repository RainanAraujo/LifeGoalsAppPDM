import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
const height = Dimensions.get("window").height;
export const WrapperContent = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
  min-height: ${height}px; ;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${Colors.primary};
  padding: 18px 0;
  border-radius: 12px;
  align-items: center;
`;

export const LoginText = styled.Text`
  font-size: 24px;
  font-family: "PoppinsSemiBold";
  color: ${Colors.primary};
  margin-bottom: 24px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-family: "PoppinsSemiBold";
  color: #fff;
`;
