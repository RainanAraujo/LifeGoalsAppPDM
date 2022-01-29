import React, { useState } from "react";
import { GestureResponderEvent } from "react-native";
import Colors from "../../constants/Colors";
import { solveToDo } from "../../services/firestore";
import {
  Container,
  Content,
  WrapperIcon,
  Icon,
  WrapperText,
  Title,
  Description,
  Divider,
  Deadline,
  ClockIcon,
  DeadlineText,
  Checkbox,
} from "./styles";

interface Props {
  title: String;
  description: String;
  goalOptions?: Array<options>;
  deadline?: string;
  id?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onCheck?: boolean;
  onSolveGoal?: () => void;
}
type options = { label: string; value: boolean; icon: string };

const ToDoItem: React.FC<Props> = ({
  title,
  id,
  description,
  deadline,
  onPress,
  goalOptions,
  onCheck,
  onSolveGoal,
}) => {
  var currentIcon: Array<string> = ["help"];
  const newDate = new Date();
  const [isChecked, setChecked] = useState(false);
  const solveGoal = async (id: string) => {
    await solveToDo(id);
    onSolveGoal();
  };

  function getNewDate(deadline): string {
    newDate.setMonth(newDate.getMonth() + parseInt(deadline));
    return newDate.toDateString();
  }

  function getCurrentIcon(): string {
    goalOptions?.forEach((index) => {
      index.value == true && currentIcon.unshift(index.icon);
    });
    if (currentIcon.length > 2) {
      return "rocket-outline";
    }
    return currentIcon[0];
  }

  return (
    <Container onPress={onPress}>
      <Content>
        <WrapperIcon>
          <Icon name={getCurrentIcon()} />
        </WrapperIcon>
        <WrapperText>
          <Title numberOfLines={1}>{title}</Title>
          <Description numberOfLines={1}>{description}</Description>
        </WrapperText>
        {onCheck && (
          <Checkbox
            key={id}
            onPress={() => solveGoal(id)}
            iconStyle={{ borderColor: Colors.blue }}
            fillColor={Colors.blue}
          />
        )}
      </Content>
      {deadline != "" && (
        <>
          <Divider />
          <Deadline>
            <ClockIcon name={"clock"} />
            <DeadlineText>Prazo final</DeadlineText>
            <DeadlineText>{getNewDate(deadline)}</DeadlineText>
          </Deadline>
        </>
      )}
    </Container>
  );
};

export default ToDoItem;
