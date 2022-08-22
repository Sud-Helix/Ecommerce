import React from "react";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase-Utils/firebaseUtils";

import SignUpForm from "../../components/signUpForm/signupform";

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
        <SignUpForm />
      </div>
    </>
  );
};

export default SignIn;
