import { auth, db } from "../config/firabase";
import ToDo from "../models/ToDo";

const users = db.collection("users");

export const getAllToDo = async (): Promise<ToDo[]> => {
  const toDo = await users.doc(auth.currentUser?.uid).collection("toDos").get();
  return toDo.docs
    .map((doc) => {
      const id = doc.id;
      const { title, description, deadLineMonth, typeToDo } = doc.data();
      return new ToDo(id, title, description, deadLineMonth, typeToDo);
    })
    .reverse();
};

export const setToDo = async (toDo: ToDo) => {
  await users
    .doc(auth.currentUser?.uid)
    .collection("toDos")
    .doc(toDo.id)
    .set(toDo.toMap());
};

export const solveToDo = async (toDoId: string) => {
  await users
    .doc(auth.currentUser?.uid)
    .collection("toDos")
    .doc(toDoId)
    .delete();
};

export const getListForTypes = async (typeIndex: number): Promise<ToDo[]> => {
  const toDo = await users.doc(auth.currentUser?.uid).collection("toDos").get();
  return toDo.docs
    .map((doc) => {
      const id = doc.id;
      const { title, description, deadLineMonth, typeToDo } = doc.data();
      if (
        typeToDo[typeIndex].value == true ||
        (typeToDo[0].value == true && typeToDo[1].value == true)
      ) {
        return new ToDo(id, title, description, deadLineMonth, typeToDo);
      }
    })
    .filter((el) => el)
    .reverse();
};
