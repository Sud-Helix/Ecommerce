import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase-Utils/firebaseUtils";
import { createUserDocumentFromAuth } from "../../utils/firebase-Utils/firebaseUtils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>
        <h1>Hello Im SignIn Page</h1>

        <button onClick={logGoogleUser}> Sign In with Google PopUp</button>
      </div>
    </>
  );
};

export default SignIn;
