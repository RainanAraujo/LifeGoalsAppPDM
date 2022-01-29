import { Container, ScrollView } from "../../components/globalStyles";
import FloatingAddButton from "../../components/FloatingAddButton";
import HeaderSession from "../../components/HeaderSession";
import { Deadline, DeadlineText } from "./styles";
import ButtonIconTransparent from "../../components/ButtonIconTransparent";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParamList } from "../../constants/types";

export default function GoalViewer({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "GoalViewer">) {
  const { toDo } = route.params;
  function getNewDate(deadline): string {
    const newDate = new Date();
    newDate.setMonth(newDate.getMonth() + parseInt(deadline));
    return newDate.toDateString();
  }
  return (
    <>
      <ScrollView>
        <Container>
          <HeaderSession title={toDo.title} subTitle={toDo.description} />
          <Deadline>
            <DeadlineText>Prazo Final</DeadlineText>
            <DeadlineText>{getNewDate(toDo.deadLineMonth)}</DeadlineText>
          </Deadline>
        </Container>
      </ScrollView>
      <FloatingAddButton
        onPress={() =>
          navigation.navigate("ManageGoal", { editGoal: true, toDo })
        }
        type="edit"
      />
    </>
  );
}
