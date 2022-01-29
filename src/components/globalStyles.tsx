import React from "react";
import styled from "styled-components/native";
import Colors from "../constants/Colors";

export const Container = styled.View`
  background-color: ${Colors.white};
  flex: 1;
  padding: 0 20px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.white};
`;
