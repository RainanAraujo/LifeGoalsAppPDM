import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

export const Container = styled.View`
  padding: 15px;
  background-color: ${Colors.backgroundItem};
  border-radius: 12px;
  margin-bottom: 15px;
  width: 100%;
`;

export const Label = styled.Text`
  color: ${Colors.gray};
  font-size: 12px;
  font-family: "Nunito";
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  color: ${Colors.black};
  font-size: 16px;
  font-family: "Poppins";
`;
