import React, { useState } from "react";
import FormInput from "../formInput/FormInput";
import "./signUpForm.scss";
import Button from "../button/button";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase-Utils/firebaseUtils";

const DetailsOfFrom = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [data, setData] = useState(DetailsOfFrom);
  const { displayName, email, password, confirmPassword } = data;

  const resetFormFields = () => {
    setData(DetailsOfFrom);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password Does Not Match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot Create User , Email Already in Use");
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Don't Have An Account?</h2>
        <span>Sign Up with Email and Password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            onChange={handleChange}
            name="displayName"
            type="text"
            value={displayName}
            required
          />

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

          <FormInput
            label="Confirm Password"
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
          />

          <Button type="Submit">Sign-Up</Button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
