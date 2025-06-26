import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import sadzzall from "../../assets/sadzzal.png";

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

const TodoList = ({ todos, onUpdate, onDelete }) => {
  const filteredTodos = todos
    .slice() // 원본 보호
    .sort((a, b) => {
      // isdone이 false인 것이 먼저 오게
      if (a.is_checked === b.is_checked) return 0;
      return a.is_checked ? -1 : 1;
    });

  return (
    <div>
      <ScrollWrapper>
        {filteredTodos.length > 0 ? (
          filteredTodos
            .reverse()
            .map((todo) => (
              <TodoItem
                key={todo.todo_id}
                todo={todo}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))
        ) : (
          <div
            style={{
              display: "flex ",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              style={{ width: "38%", borderRadius: "10px" }}
              src={sadzzall}
              alt="슬픈 짤"
            />
            <div>할 일을 추가해 주세요</div>
          </div>
        )}
      </ScrollWrapper>
    </div>
  );
};

export default TodoList;
