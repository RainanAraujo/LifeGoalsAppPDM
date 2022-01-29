import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Ionicons, Entypo } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const Container = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${Colors.backgroundItem};
  border-radius: 12px;
  margin-bottom: 13px;
  elevation: 3;
  shadow-color: #00000050;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled(BouncyCheckbox)`
  position: absolute;
  right: -15px;
  top: 0;
`;

export const WrapperIcon = styled.View`
  padding: 10px;
  background-color: ${Colors.white};
  border-radius: 10px;
  margin-right: 10px;
`;

export const Icon = styled(Ionicons)`
  color: ${Colors.blue};
  font-size: 30px;
`;

export const WrapperText = styled.View`
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${Colors.blackWeighty};
  font-size: 16px;
  width: 70%;
  font-family: "Nunito";
`;

export const Description = styled.Text`
  color: ${Colors.black};
  font-size: 12px;
  width: 90%;
  font-family: "PoppinsLight";
`;

export const Divider = styled.View`
  background-color: #e0e0e0;
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  height: 2px;
`;

export const Deadline = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  margin-bottom: -7px;
  justify-content: space-between;
  width: 70%;
`;

export const ClockIcon = styled(Entypo)`
  font-size: 18px;
  color: ${Colors.gray};
  margin: 0 15px;
`;

export const DeadlineText = styled.Text`
  color: ${Colors.gray};
  font-size: 12px;
  font-family: "PoppinsLight";
`;
