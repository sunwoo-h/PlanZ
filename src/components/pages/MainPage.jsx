import React, { useEffect, useState } from "react";
import logo from "../../assets/PlanZlogo.png";
import styled, { keyframes } from "styled-components";
import MyCalendar from "../features/MyCalendar";
import TodoList from "../features/TodoList";
import Editor from "../features/Editor";
import Indicator from "../features/Indicator";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

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

const BASE_URL = import.meta.env.VITE_BASE_URL; // VITE_BASE_URL 불러오기

const MainPage = () => {
  const [date, setDate] = useState(new Date()); // 현재 날짜

  const [todos, setTodos] = useState([]);

  const location = useLocation();
  const username = location.state?.username;

  const { user_id } = useParams();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/todos/${user_id}?month=${
            date.getMonth() + 1
          }&day=${date.getDate()}`
        );
        console.log("받은 데이터:", response.data);
        setTodos(response.data);
      } catch (error) {
        console.error("GET 요청 실패:", error);
      }
    };
    fetchTodos();
  }, [user_id, date]);

  const onCreate = async (content) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/todos/${user_id}`, // ✅ 여기에 실제 요청 URL
        {
          date: date,
          content: content,
        }
      );
      const newTodo = response.data;
      setTodos([newTodo, ...todos]);
      console.log("POST 성공:", response.data);
    } catch (error) {
      console.error("POST 실패:", error);
    }
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.todo_id === targetId
          ? { ...todo, is_checked: !todo.is_checked }
          : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.todo_id !== targetId));
  };

  console.log(todos);

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
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              </GlassCard>
              <Indicator todos={todos} />
            </Column>
          </Row>
        </Column>
      </MainContainer>
    </div>
  );
};

export default MainPage;
