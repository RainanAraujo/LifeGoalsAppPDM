import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

export const Container = styled.View`
  margin: 20px 0;
`;

export const Title = styled.Text`
  color: ${Colors.black};
  font-size: 24px;
  font-family: "PoppinsSemiBold";
`;

export const SubTitle = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  font-family: "NunitoSemiBold";
`;
