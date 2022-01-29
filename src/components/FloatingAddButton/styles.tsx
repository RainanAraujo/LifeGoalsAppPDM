import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  position: absolute;

  border-radius: 100px;
  background-color: ${Colors.primary};
  right: 20px;
  height: 60px;
  width: 60px;
  bottom: 30px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Ionicons)`
  color: #fff;
  font-size: 40px;
`;

export const IconDone = styled(MaterialIcons)`
  color: #fff;
  font-size: 30px;
`;

export const IconEdit = styled(Feather)`
  color: #fff;
  font-size: 20px;
`;
