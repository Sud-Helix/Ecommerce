import React, { useState } from "react";
import FormInput from "../formInput/FormInput";
import "./signInForm.scss";
import Button from "../button/button";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase-Utils/firebaseUtils";

const DetailsOfFrom = {
  email: "",
  password: "",
};

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  await createUserDocumentFromAuth(user);
};

const SignInForm = () => {
  const [data, setData] = useState(DetailsOfFrom);
  const { email, password } = data;

  const resetFormFields = () => {
    setData(DetailsOfFrom);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  // console.log(data);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
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
      <div className="sign-up-container">
        <h2>Already Have An Account?</h2>
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

          <div className="buttonDiv">
            <Button type="Submit">Sign-In</Button>
            <Button type="button" buttonType="google" onClick={logGoogleUser}>
              Google SignIn
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
