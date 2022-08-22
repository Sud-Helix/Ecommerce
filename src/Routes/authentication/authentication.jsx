import React from "react";
import "./authentication.scss";

import SignUpForm from "../../components/signUpForm/signupform";
import SignInForm from "../../components/signInForm/signInForm";

const Authentication = () => {
  return (
    <>
      <div className="div">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
