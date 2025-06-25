import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
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

  width: 100%;
  height: 100%;
`;

const BigNumber = styled.div`
  text-align: center;
  font-size: 70px;
`;

const Indicator = ({ todos, date }) => {
  const filteredTodos = todos.filter((todo) => date === todo.date); // 선택한 date의 todo만 필터링

  const leftTodos = () => {
    return filteredTodos.filter((todo) => !todo.isdone).length;
  };

  const completeTodos = () => {
    return filteredTodos.filter((todo) => todo.isdone).length;
  };

  const achivementRate = () => {
    const total = filteredTodos.length;
    const completed = completeTodos();

    if (total === 0) return 0;

    return Math.round((completed / total) * 100);
  };

  return (
    <div>
      <Row style={{ gap: "20px", minWidth: "600px" }}>
        <GlassCard>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            남은 할 일
          </div>
          <BigNumber>{leftTodos()}</BigNumber>
        </GlassCard>
        <GlassCard>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            완료된 할 일
          </div>
          <BigNumber>{completeTodos()}</BigNumber>
        </GlassCard>
        <GlassCard>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            목표 달성률
          </div>
          <BigNumber>{achivementRate()}%</BigNumber>
        </GlassCard>
      </Row>
    </div>
  );
};

export default Indicator;
