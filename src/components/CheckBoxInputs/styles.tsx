import styled from "styled-components/native";
import Colors from "../../constants/Colors";

export const Container = styled.View`
  padding: 15px;
  padding-bottom: 0;
  margin-top: -15px;
`;

export const Label = styled.Text`
  color: ${Colors.gray};
  font-size: 12px;
  font-family: "Nunito";
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  color: ${Colors.black};
  font-size: 16px;
  font-family: "Poppins";
`;
