import React, { useState } from "react";
import SignCard from "../ui/SignCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL; // VITE_BASE_URL 불러오기

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({ username: "", password: "" });

  const nav = useNavigate();

  const moveSignInPage = () => {
    nav("/signIn");
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/users/register/`, // ✅ 여기에 실제 요청 URL
        {
          username: signUpData.username,
          password: signUpData.password,
        }
      );

      console.log("POST 성공:", response.data);
      alert("회원가입이 완료되었습니다!");
      moveSignInPage();
    } catch (error) {
      console.error("POST 실패:", error);
    }
  };

  return (
    <div>
      <SignCard
        title={"회원가입"}
        BlackMention={"회원가입"}
        WhiteMention={"로그인 페이지로 돌아가기"}
        onBlackClick={handleSignUp}
        onWhiteClick={moveSignInPage}
        formData={signUpData}
        setFormData={setSignUpData}
      />
    </div>
  );
};

export default SignUpPage;
