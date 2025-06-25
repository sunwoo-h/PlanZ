import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Row = styled.div`
  display: flex;
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

const TodoList = ({ todos, date }) => {
  const filteredTodos = todos.filter((todo) => date === todo.date);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <div>todo값이 없습니다!</div>
      )}
    </div>
  );
};

export default TodoList;
