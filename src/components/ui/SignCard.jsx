import React from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import logo from "../../assets/PlanZLogo.png";

const MainContainer = styled.div`
  margin: auto;
  padding: 15vh 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  outline: none;
`;

const ButtonWrapper = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const SignCard = ({
  title,
  BlackMention,
  WhiteMention,
  onBlackClick,
  onWhiteClick,
}) => {
  return (
    <div>
      <MainContainer>
        <img
          style={{ width: "150px", marginBottom: "30px" }}
          src={logo}
          alt="PlanZ 로고"
        />
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
              onClick={onBlackClick}
              title={BlackMention}
              color={"black"}
            />
            <Button
              onClick={onWhiteClick}
              title={WhiteMention}
              color={"white"}
            />
          </ButtonWrapper>
        </MainWrapper>
      </MainContainer>
    </div>
  );
};

export default SignCard;
