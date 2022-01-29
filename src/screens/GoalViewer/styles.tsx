import styled from "styled-components/native";
import Colors from "../../constants/Colors";

export const Deadline = styled.View`
  flex-direction: row;
  margin-top: 5px;
  justify-content: space-between;
  width: 55%;
`;

export const DeadlineText = styled.Text`
  color: ${Colors.gray};
  font-size: 12px;
  font-family: "PoppinsLight";
  margin-bottom: 20px;
`;
