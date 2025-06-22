import React from "react";
import Button from "../ui/Button";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 257px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const InitPage = () => {
  return (
    <div>
      나만의 일정 관리 서비스
      <ButtonWrapper>
        <Button title={"로그인"} color={"black"} />
        <Button title={"회원가입"} color={"white"} />
      </ButtonWrapper>
    </div>
  );
};

export default InitPage;
