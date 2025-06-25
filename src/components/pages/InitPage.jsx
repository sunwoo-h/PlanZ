import React from "react";
import Button from "../ui/Button";
import styled, { keyframes } from "styled-components";
import logo from "../../assets/PlanZLogo.png";
import { useNavigate } from "react-router-dom";

// 아래에서 위로 + 투명도 → 천천히 보여지게
const slideUp = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MainContainer = styled.div`
  margin: auto;
  padding: 25vh 0px;
  animation: ${slideUp} 1s ease-out forwards;
`;

const SubContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 257px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const InitPage = () => {
  const nav = useNavigate();
  return (
    <div>
      <MainContainer>
        <SubContainer>
          <img src={logo} alt="PlanZ 로고" />
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>
            나만의 일정 관리 서비스
          </div>
          <ButtonWrapper>
            <Button
              onClick={() => {
                nav("/signIn");
              }}
              title={"로그인"}
              color={"black"}
            />
            <Button
              onClick={() => {
                nav("/signUp");
              }}
              title={"회원가입"}
              color={"white"}
            />
          </ButtonWrapper>
        </SubContainer>
      </MainContainer>
    </div>
  );
};

export default InitPage;
