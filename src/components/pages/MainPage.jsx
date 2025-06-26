import React, { useRef, useState } from "react";
import logo from "../../assets/PlanZlogo.png";
import styled, { keyframes } from "styled-components";
import MyCalendar from "../features/MyCalendar";
import TodoList from "../features/TodoList";
import Editor from "../features/Editor";
import Indicator from "../features/Indicator";
import { useLocation } from "react-router-dom";

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
  padding: 10vh 0px;
  display: flex;
  justify-content: center;
  animation: ${slideUp} 1s ease-out forwards;
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

const MainPage = () => {
  const [date, setDate] = useState(new Date()); // 현재 날짜
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);

  const location = useLocation();
  const username = location.state?.username;

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
        <Column style={{ gap: "30px" }}>
          <Row style={{ justifyContent: "space-between" }}>
            <img style={{ width: "110px" }} src={logo} alt="PlanZ 로고" />
            <div>
              {username ? `${username}님 환영합니다!` : "로그인 정보 없음"}
            </div>
          </Row>
          <Row
            style={{
              gap: "40px",
            }}
          >
            <Column>
              <GlassCard>
                <MyCalendar date={date} setDate={setDate} />
              </GlassCard>
              <GlassCard>
                <Editor onCreate={onCreate} />
              </GlassCard>
            </Column>
            <Column>
              <GlassCard style={{ minHeight: "51%", minWidth: "40vw" }}>
                <div style={{ fontWeight: "bold" }}>
                  {`${date.getFullYear()}년 ${
                    date.getMonth() + 1
                  }월 ${date.getDate()}일의 TodoList`}
                </div>
                <TodoList
                  todos={todos}
                  date={date}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              </GlassCard>
              <Indicator todos={todos} date={date} />
            </Column>
          </Row>
        </Column>
      </MainContainer>
    </div>
  );
};

export default MainPage;
