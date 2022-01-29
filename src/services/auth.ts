import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firabase";

export const signIn = async (email: string, password: string) => {
  return new Promise<string | unknown>(async (resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => resolve(user.user.uid))
      .catch((error) => reject(error));
  });
};

export const getUserID = () => auth.currentUser.uid;
