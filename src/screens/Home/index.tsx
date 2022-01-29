import { RootTabScreenProps } from "../../constants/types";
import { Container, ScrollView } from "../../components/globalStyles";
import HeaderSession from "../../components/HeaderSession";
import ToDoItem from "../../components/ToDoItem";
import ToDo from "../../models/ToDo";
import { useIsFocused } from "@react-navigation/native";
import {
  WrapperTopics,
  Topic,
  IconTopic,
  TitleTopic,
  DescriptionTopic,
  ReminderText,
  ReminderIndicator,
  WrapperReminder,
} from "./styles";
import Colors from "../../constants/Colors";
import FloatingAddButton from "../../components/FloatingAddButton";
import { getAllToDo } from "../../services/firestore";
import { useEffect, useState } from "react";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const [listToDos, setListToDos] = useState<Array<ToDo>>();
  const isFocused = useIsFocused();
  const getListToDo = async () => {
    setListToDos([...(await getAllToDo())]);
  };

  useEffect(() => {
    getListToDo();
  }, [isFocused]);

  return (
    <>
      <ScrollView>
        <Container>
          <HeaderSession
            title={"2 Grandes Desafios"}
            subTitle={"Pessoa ambiciosa, não é?"}
          />
          <WrapperTopics>
            <Topic
              onPress={() =>
                navigation.navigate("ListGoalsTypes", {
                  typesGoals: "LifeStyle",
                })
              }
            >
              <IconTopic
                name="alarm-outline"
                size={24}
                color={Colors.green}
              ></IconTopic>
              <TitleTopic>Estilo de vida</TitleTopic>
              <DescriptionTopic>Torne-se uma pessoa matinal</DescriptionTopic>
              <WrapperReminder>
                <ReminderText>Lembrete</ReminderText>
                <ReminderIndicator>Todos os dias</ReminderIndicator>
              </WrapperReminder>
            </Topic>
            <Topic
              onPress={() =>
                navigation.navigate("ListGoalsTypes", {
                  typesGoals: "healthyLife",
                })
              }
            >
              <IconTopic
                name="ios-heart-outline"
                size={24}
                color={Colors.red}
              ></IconTopic>
              <TitleTopic>Vida saudável</TitleTopic>
              <DescriptionTopic>
                Porque a saúde é o mais importante
              </DescriptionTopic>
              <WrapperReminder>
                <ReminderText>Lembrete</ReminderText>
                <ReminderIndicator>Todos os dias</ReminderIndicator>
              </WrapperReminder>
            </Topic>
          </WrapperTopics>
          <HeaderSession
            title={"Todos desafios"}
            subTitle={"Você tem " + listToDos?.length + " desafios para fazer"}
          />
          {listToDos?.map((value, index) => {
            return (
              <ToDoItem
                key={index}
                onPress={() =>
                  navigation.navigate("GoalViewer", { toDo: listToDos[index] })
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
          })}
        </Container>
      </ScrollView>
      <FloatingAddButton
        onPress={() =>
          navigation.navigate("ManageGoal", {
            editGoal: false,
            toDo: ToDo.createToDoEmpty(),
          })
        }
        type="add"
      />
    </>
  );
}
