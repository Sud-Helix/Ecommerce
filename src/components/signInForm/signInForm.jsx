import React, { useState } from "react";
import FormInput from "../formInput/FormInput";
import "./signInFormStyles.jsx";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase-Utils/firebaseUtils";
import { ButtonDiv, Heads, SignInContainer } from "./signInFormStyles.jsx";

const DetailsOfFrom = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [data, setData] = useState(DetailsOfFrom);
  const { email, password } = data;

  const logInGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setData(DetailsOfFrom);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Inccorect Password ");
          break;

        case "auth/user-not-found":
          alert("User Does not Exist");
          break;

        default:
          console.log(error);
      }
    }
  };

  return (
    <>
      <SignInContainer>
        <Heads>Already Have An Account?</Heads>
        <span>Sign Up with Email and Password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Enter Email"
            onChange={handleChange}
            type="text"
            name="email"
            value={email}
            required
          />
          <FormInput
            label="Enter Password"
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            required
          />

          <ButtonDiv>
            <Button type="Submit">Sign-In</Button>
            <Button
              type="button"
              buttonType={BUTTON_TYPES_CLASSES.google}
              onClick={logInGoogleUser}
            >
              Google SignIn
            </Button>
          </ButtonDiv>
        </form>
      </SignInContainer>
    </>
  );
};

export default SignInForm;
