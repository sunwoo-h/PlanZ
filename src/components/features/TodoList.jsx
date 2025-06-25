import React from "react";
import TodoItem from "./TodoItem";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
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
    </div>
  );
};

export default TodoList;
