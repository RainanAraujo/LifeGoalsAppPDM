import { Entypo, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import person from "./assets/images/person.jpg";
import * as React from "react";
import ManageGoal from "./screens/ManageGoal";
import GoalViewer from "./screens/GoalViewer";
import Home from "./screens/Home";
import ListGoalsTypes from "./screens/ListGoalsTypes";
import Login from "./screens/Login";
import Settings from "./screens/Settings";
import {
  RootStackParamList,
  TabParamList,
  RootTabScreenProps,
} from "./constants/types";
import Colors from "./constants/Colors";
import {
  StyleProp,
  ViewStyle,
  Image,
  TouchableOpacity,
  View,
  Text,
  Platform,
} from "react-native";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const headerStyle: StyleProp<ViewStyle> = {
  backgroundColor: Colors.white,
  elevation: 0,
  height: 120,
};

const headerModal = (props: NativeStackHeaderProps) => {
  return (
    <View
      style={{
        height: 120,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 18,
        paddingTop: 40,
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontFamily: "PoppinsSemiBold",
          color: Colors.black,
        }}
      >
        {props.options.title}
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{
          padding: 15,
          backgroundColor: Colors.backgroundItem,
          borderRadius: 5,
        }}
      >
        <Ionicons name="md-close" size={15} />
      </TouchableOpacity>
    </View>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigation"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="ManageGoal"
          component={ManageGoal}
          options={({
            route,
          }: NativeStackScreenProps<RootStackParamList, "ManageGoal">) => ({
            headerBackVisible: false,
            //Essa versão do react navigation está com um problema que so consigo personalizar o header de modals dessa forma :(
            title:
              route.params?.editGoal == true
                ? "Editar Objetivo"
                : "Novo Objetivo",
            header: headerModal,
          })}
        />
        <Stack.Screen
          name="ListGoalsTypes"
          component={ListGoalsTypes}
          options={({
            route,
          }: NativeStackScreenProps<RootStackParamList, "ListGoalsTypes">) => ({
            headerBackVisible: false,
            //Essa versão do react navigation está com um problema que so consigo personalizar o header de modals dessa forma :(
            title:
              route.params?.typesGoals == "LifeStyle"
                ? "Estilo de Vida"
                : "Vida Saudável",
            header: headerModal,
          })}
        />
        <Stack.Screen
          name="GoalViewer"
          component={GoalViewer}
          options={({ navigation }) => ({
            headerBackVisible: false,
            //Essa versão do react navigation está com um problema que so consigo personalizar o header de modals dessa forma :(
            title: "Objetivo",
            header: headerModal,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<TabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
        tabBarLabelStyle: {
          fontFamily: "PoppinsMedium",
          marginBottom: 5,
          marginTop: -10,
        },
        tabBarStyle: {
          height: Platform.OS === "android" ? 60 : "10%",
        },
        headerStyle: headerStyle,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          headerTitle: "NÃO DESISTA",
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: "PoppinsSemiBold",
            color: Colors.primary,
          },
          headerRight: () => (
            <Image
              source={person}
              style={{
                width: 50,
                height: 50,
                marginRight: 20,
                borderRadius: 5,
              }}
            ></Image>
          ),
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={24} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Configurações",
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: "PoppinsSemiBold",
            color: Colors.black,
          },
          tabBarIcon: ({ color }) => (
            <Entypo name="cog" color={color} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
