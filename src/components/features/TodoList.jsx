import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 30vh;
  overflow-y: auto;
  padding: 5px;
  border-radius: 10px;

  /* 스크롤 바 얇고 깔끔하게 */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const TodoList = ({ todos, date, onUpdate, onDelete }) => {
  const filteredTodos = todos
    .filter((todo) => date === todo.date) // 선택한 date의 todo만 필터링
    .slice() // 원본 보호
    .sort((a, b) => {
      // isdone이 false인 것이 먼저 오게
      if (a.isdone === b.isdone) return 0;
      return a.isdone ? 1 : -1;
    });

  return (
    <div>
      <ScrollWrapper>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div>todo값이 없습니다!</div>
        )}
      </ScrollWrapper>
    </div>
  );
};

export default TodoList;
