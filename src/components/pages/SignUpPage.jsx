import React from "react";
import SignCard from "../ui/SignCard";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const nav = useNavigate();

  const handleSignUp = () => {};

  const moveSignInPage = () => {
    nav("/signIn");
  };

  return (
    <div>
      <SignCard
        title={"회원가입"}
        BlackMention={"회원가입"}
        WhiteMention={"로그인 페이지로 돌아가기"}
        onBlackClick={handleSignUp}
        onWhiteClick={moveSignInPage}
      />
    </div>
  );
};

export default SignUpPage;
