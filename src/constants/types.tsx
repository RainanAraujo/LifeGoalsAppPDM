/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ToDo from "../models/ToDo";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: undefined;
  TabNavigation: NavigatorScreenParams<TabParamList> | undefined;
  ManageGoal: { editGoal: boolean; toDo: ToDo };
  GoalViewer: { toDo: ToDo };
  ListGoalsTypes: { typesGoals: "LifeStyle" | "healthyLife" };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type TabParamList = {
  Home: undefined;
  Settings: undefined;
};

export type RootTabScreenProps<Screen extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
