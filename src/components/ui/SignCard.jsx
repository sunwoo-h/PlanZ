import React from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  margin: auto;
  padding: 25vh 0px;
  display: flex;
  justify-content: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 500px;
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.7) 100%
  );
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputBox = styled.input`
  border: solid 1px #a9a9a9;
  width: 100%;
  padding: 14px 15px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const SignCard = ({ title, blackmention, whitemention }) => {
  const nav = useNavigate();
  return (
    <div>
      <MainContainer>
        <MainWrapper>
          <div style={{ textAlign: "center", fontSize: "30px" }}>{title}</div>
          <InputWrapper>
            아이디
            <InputBox placeholder="아이디를 입력하세요." />
            비밀번호
            <InputBox placeholder="비밀번호를 입력하세요." />
          </InputWrapper>
          <ButtonWrapper>
            <Button
              onClick={() => {
                nav("/signIn");
              }}
              title={blackmention}
              color={"black"}
            />
            <Button
              onClick={() => {
                nav("/signUp");
              }}
              title={whitemention}
              color={"white"}
            />
          </ButtonWrapper>
        </MainWrapper>
      </MainContainer>
    </div>
  );
};

export default SignCard;
