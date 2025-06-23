import React from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import logo from "../../assets/PlanZLogo.png";

const MainContainer = styled.div`
  margin: auto;
  padding: 200px 0px;
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
  return (
    <div>
      <MainContainer>
        <SubContainer>
          <img src={logo} alt="PlanZ 로고" />
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>
            나만의 일정 관리 서비스
          </div>
          <ButtonWrapper>
            <Button title={"로그인"} color={"black"} />
            <Button title={"회원가입"} color={"white"} />
          </ButtonWrapper>
        </SubContainer>
      </MainContainer>
    </div>
  );
};

export default InitPage;
