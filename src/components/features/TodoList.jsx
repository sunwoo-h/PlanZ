import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, date, onUpdate, onDelete }) => {
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
