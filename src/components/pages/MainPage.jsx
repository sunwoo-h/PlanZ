import React, { useState } from "react";
import logo from "../../assets/PlanZlogo.png";
import styled from "styled-components";
import Button from "../ui/Button";
import MyCalendar from "../ui/MyCalendar";

const MainContainer = styled.div`
  margin: auto;
  padding: 10vh 0px;
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const GlassCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.7) 100%
  );
`;

const InputBox = styled.textarea`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
  padding: 15px;
  opacity: 0.8;
  border: none;
  outline: none;
  resize: none;
  box-sizing: border-box;
`;

const TodoBox = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
  padding: 15px;
  border: none;
`;

const StyledButton = styled.div`
  background-color: ${({ color }) =>
    color === "white" ? "#fff" : color === "black" ? "#000" : "#ccc"};
  color: ${({ color }) =>
    color === "white" ? "#000" : color === "black" ? "#fff" : "#ccc"};
  border-radius: 10px;
  cursor: pointer;
  width: 30px;
  padding: 5px 7px;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 0.8rem;
`;

const BigNumber = styled.div`
  text-align: center;
  font-size: 70px;
`;

const MainPage = () => {
  const [date, setDate] = useState(new Date()); // 현재 날짜

  return (
    <div>
      <MainContainer>
        <Column>
          <Row style={{ justifyContent: "space-between" }}>
            <img style={{ width: "100px" }} src={logo} alt="PlanZ 로고" />
            <div>UserID님 안녕하세요!</div>
          </Row>
          <Row
            style={{
              gap: "40px",
            }}
          >
            <Column>
              <GlassCard style={{ textAlign: "center" }}>
                <MyCalendar date={date} setDate={setDate} />
              </GlassCard>

              <GlassCard>
                <InputBox placeholder="할일을 추가해보세요" />
                <Button title={"추가하기"} color={"black"} />
              </GlassCard>
            </Column>
            <Column>
              <GlassCard>
                {`${date.getFullYear()}년 ${
                  date.getMonth() + 1
                }월 ${date.getDate()}일의 TodoList`}
                <TodoBox>
                  <Row
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    투두리스트1
                    <Row style={{ gap: "10px" }}>
                      <StyledButton color="black">완료</StyledButton>
                      <StyledButton color="white">삭제</StyledButton>
                    </Row>
                  </Row>
                </TodoBox>
              </GlassCard>
              <Row style={{ gap: "20px" }}>
                <GlassCard>
                  <div style={{ textAlign: "center", fontWeight: "bold" }}>
                    남은 할 일
                  </div>
                  <BigNumber>5</BigNumber>
                </GlassCard>
                <GlassCard>
                  <div style={{ textAlign: "center", fontWeight: "bold" }}>
                    완료된 할 일
                  </div>
                  <BigNumber>5</BigNumber>
                </GlassCard>
                <GlassCard>
                  <div style={{ textAlign: "center", fontWeight: "bold" }}>
                    목표 달성률
                  </div>
                  <BigNumber>100%</BigNumber>
                </GlassCard>
              </Row>
            </Column>
          </Row>
        </Column>
      </MainContainer>
    </div>
  );
};

export default MainPage;
