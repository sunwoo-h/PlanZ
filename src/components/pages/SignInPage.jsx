import React, { useState } from "react";
import SignCard from "../ui/SignCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL; // VITE_BASE_URL 불러오기

const SignInPage = () => {
  const nav = useNavigate();
  const [signInData, setSignInData] = useState({ username: "", password: "" });

  const moveSignUpPage = () => {
    nav("/signUp");
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/users/login/`, // ✅ 여기에 실제 요청 URL
        {
          username: signInData.username,
          password: signInData.password,
        }
      );

      console.log("POST 성공:", response.data);
      nav(`/main/${response.data.user_id}`, {
        state: {
          username: signInData.username,
        },
      });
    } catch (error) {
      console.error("POST 실패:", error);
    }
  };

  return (
    <div>
      <SignCard
        title={"로그인"}
        BlackMention={"로그인"}
        WhiteMention={"회원가입"}
        onBlackClick={handleSignIn}
        onWhiteClick={moveSignUpPage}
        formData={signInData}
        setFormData={setSignInData}
      />
    </div>
  );
};

export default SignInPage;
