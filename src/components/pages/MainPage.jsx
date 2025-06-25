import React, { useRef, useState } from "react";
import logo from "../../assets/PlanZlogo.png";
import styled from "styled-components";
import MyCalendar from "../features/MyCalendar";
import TodoList from "../features/TodoList";
import Editor from "../features/Editor";

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

const BigNumber = styled.div`
  text-align: center;
  font-size: 70px;
`;

const mockData = [
  { id: 1, isdone: false, content: "투두리스트1" },
  { id: 2, isdone: false, content: "투두리스트2" },
  { id: 3, isdone: false, content: "투두리스트3" },
  { id: 4, isdone: false, content: "투두리스트4" },
];

const MainPage = () => {
  const [date, setDate] = useState(new Date()); // 현재 날짜
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(0);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isdone: false,
      content: content,
      date: date,
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isdone: !todo.isdone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

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
                <Editor onCreate={onCreate} />
              </GlassCard>
            </Column>
            <Column>
              <GlassCard>
                {`${date.getFullYear()}년 ${
                  date.getMonth() + 1
                }월 ${date.getDate()}일의 TodoList`}
                <TodoList
                  todos={todos}
                  date={date}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
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
