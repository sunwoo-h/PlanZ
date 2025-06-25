import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
`;

const TodoBox = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  padding: 15px;
  border: none;
`;

const SmallButton = styled.div`
  background-color: ${({ color }) =>
    color === "white" ? "#fff" : color === "black" ? "#000" : "#ccc"};
  color: ${({ color }) =>
    color === "white" ? "#000" : color === "black" ? "#fff" : "#ccc"};
  border-radius: 10px;
  cursor: pointer;
  width: 30px;
  padding: 5px 7px;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 0.8rem;
`;

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <div>
      {todo.isdone === false ? (
        <TodoBox>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {todo.content}
            <Row style={{ gap: "10px" }}>
              <SmallButton
                onClick={() => {
                  onUpdate(todo.id);
                }}
                color="black"
              >
                완료
              </SmallButton>
              <SmallButton onClick={() => onDelete(todo.id)} color="white">
                삭제
              </SmallButton>
            </Row>
          </Row>
        </TodoBox>
      ) : (
        <TodoBox style={{ opacity: "0.2" }}>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {todo.content}
            <Row style={{ gap: "10px" }}>
              <SmallButton onClick={() => onDelete(todo.id)} color="white">
                삭제
              </SmallButton>
            </Row>
          </Row>
        </TodoBox>
      )}
    </div>
  );
};

export default TodoItem;
