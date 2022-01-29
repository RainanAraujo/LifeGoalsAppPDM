import { useRef, useState } from "react";
import { setToDo } from "../../services/firestore";
import { Container, ScrollView } from "../../components/globalStyles";
import HeaderSession from "../../components/HeaderSession";
import DefaultTextInput from "../../components/DefaultTextInput";
import { Alert, TextInput } from "react-native";
import CheckBoxInputs from "../../components/CheckBoxInputs";
import FloatingAddButton from "../../components/FloatingAddButton";
import ToDoItem from "../../components/ToDoItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParamList } from "../../constants/types";

export default function ManageGoal({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "ManageGoal">) {
  const { editGoal, toDo } = route.params;
  const refInput2 = useRef<TextInput>(null);
  const refInput3 = useRef<TextInput>(null);
  const refInput4 = useRef<TextInput>(null);
  const [typeToDoSelected, setTypeToDoSelected] = useState(toDo.typeToDo);
  const [toDoTitle, setToDoTitle] = useState(toDo.title);
  const [toDoDescription, setToDoDescription] = useState(toDo.description);
  const [toDoDeadlineMonth, setToDoDeadlineMonth] = useState(
    toDo.deadLineMonth
  );

  const onSave = async () => {
    if (
      (typeToDoSelected[0].value == false &&
        typeToDoSelected[1].value == false) ||
      toDoTitle == "" ||
      toDoDescription == ""
    ) {
      Alert.alert("Error", "Preencha as informações obrigatórias");
    } else {
      toDo.title = toDoTitle;
      toDo.description = toDoDescription;
      toDo.deadLineMonth = toDoDeadlineMonth;
      toDo.typeToDo = typeToDoSelected;
      await setToDo(toDo);
      navigation.navigate("TabNavigation");
    }
  };

  return (
    <>
      <ScrollView>
        <Container>
          <DefaultTextInput
            label={"Título da meta *"}
            value={toDoTitle}
            onChangeText={(value) => setToDoTitle(value)}
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => refInput2?.current?.focus()}
          />
          <DefaultTextInput
            label={"Descrição da meta *"}
            value={toDoDescription}
            onChangeText={(value) => setToDoDescription(value)}
            returnKeyType="next"
            refInput={refInput2}
            onSubmitEditing={() => refInput3?.current?.focus()}
          />
          <DefaultTextInput
            label={"Data de vencimento (Meses)"}
            keyboardType="numeric"
            value={toDoDeadlineMonth.toString()}
            onChangeText={(value) => setToDoDeadlineMonth(value)}
            onSubmitEditing={() => refInput4?.current?.focus()}
            refInput={refInput3}
          />
          <CheckBoxInputs
            label={"Tipo de objetivo *"}
            options={typeToDoSelected}
            onPress={setTypeToDoSelected}
          />
          <HeaderSession title="Visualização da meta" />
          <ToDoItem
            goalOptions={typeToDoSelected}
            title={toDoTitle}
            description={toDoDescription}
            deadline={toDoDeadlineMonth.toString()}
          />
        </Container>
      </ScrollView>
      <FloatingAddButton onPress={() => onSave()} type="done" />
    </>
  );
}
