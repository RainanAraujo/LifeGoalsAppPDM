import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width;

export const WrapperTopics = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Topic = styled.TouchableOpacity`
  background-color: ${Colors.backgroundItem};
  padding: 20px;
  width: ${width * 0.43}px;
  border-radius: 18px;
  justify-content: space-around;
`;

export const IconTopic = styled(Ionicons)`
  font-size: 40px;
`;

export const TitleTopic = styled.Text`
  font-size: 18px;
  font-family: "PoppinsSemiBold";
  color: ${Colors.black};
`;

export const DescriptionTopic = styled.Text`
  font-size: 12px;
  font-family: "PoppinsMedium";
  color: ${Colors.black};
  padding: 5px 0;
`;

export const WrapperReminder = styled.View``;

export const ReminderText = styled.Text`
  font-size: 10px;
  font-family: "PoppinsLight";
  color: ${Colors.gray};
  margin-bottom: -3px;
`;

export const ReminderIndicator = styled.Text`
  font-size: 10px;
  font-family: "PoppinsSemiBold";
  color: ${Colors.gray};
`;
