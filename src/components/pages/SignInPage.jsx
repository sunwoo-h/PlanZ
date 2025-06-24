import React from "react";
import SignCard from "../ui/SignCard";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const nav = useNavigate();

  const handleSignIn = () => {};

  const moveSignUpPage = () => {
    nav("/signUp");
  };

  return (
    <div>
      <SignCard
        title={"로그인"}
        BlackMention={"로그인"}
        WhiteMention={"회원가입"}
        onBlackClick={handleSignIn}
        onWhiteClick={moveSignUpPage}
      />
    </div>
  );
};

export default SignInPage;
