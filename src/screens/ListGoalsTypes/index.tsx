import { useIsFocused } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useEffect, useState } from "react";
import { Container, ScrollView } from "../../components/globalStyles";
import ToDoItem from "../../components/ToDoItem";
import { RootStackParamList } from "../../constants/types";
import ToDo from "../../models/ToDo";
import { getListForTypes } from "../../services/firestore";
import { ListEmpty } from "./styles";

export default function ListGoalsTypes({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "ListGoalsTypes">) {
  const { typesGoals } = route.params;
  const [listToDos, setListToDos] = useState<Array<ToDo>>();
  const isFocused = useIsFocused();
  const getListToDo = async () => {
    setListToDos([
      ...(await getListForTypes(typesGoals == "LifeStyle" ? 1 : 0)),
    ]);
    console.log(listToDos);
  };

  useEffect(() => {
    getListToDo();
  }, [isFocused]);

  return (
    <ScrollView>
      <Container>
        {listToDos?.length != 0 ? (
          listToDos?.map((value, index) => {
            return (
              <ToDoItem
                key={index}
                onPress={() =>
                  navigation.navigate("GoalViewer", {
                    toDo: listToDos[index],
                  })
                }
                onCheck={true}
                title={value.title}
                id={value.id}
                description={value.description}
                deadline={value.deadLineMonth}
                goalOptions={value.typeToDo}
                onSolveGoal={() => getListToDo()}
              />
            );
          })
        ) : (
          <ListEmpty>Não existe objetivos deste tipo</ListEmpty>
        )}
      </Container>
    </ScrollView>
  );
}
