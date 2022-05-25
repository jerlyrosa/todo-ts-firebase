import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { SyntheticEvent } from "react";
import { app } from "../../config/firebase";
import { FormInterface } from "../interface";
export const useMethodAuth = () => {
  const auth = getAuth(app);

  const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();

  const registerAuth = async (
    e: SyntheticEvent,
    isNewUser: boolean
  ): Promise<void> => {
    e.preventDefault();
    const target = e.target as typeof e.target & FormInterface;
    const email: string = target.useremailaddress.value;
    const password: string = target.userpassword.value;

    if (isNewUser) {
      addUserAuth(email, password);
    } else {
      signInAuth(email, password);
    }
  };

  const addUserAuth = async (
    email: string,
    password: string
  ): Promise<void> => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        // ..
      });
  };

  const signInAuth = async (
    email: string,
    password: string
  ): Promise<unknown> => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log("Signed:", user.email);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const AuthSignOut = async (): Promise<void> => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log("An error happened.", error);
      });
  };

  const singInWithGoogle = (): void => {
    signInWithRedirect(auth, googleProvider);
  };

  return {
    AuthSignOut,
    registerAuth,
    singInWithGoogle,
  } as const;
};
