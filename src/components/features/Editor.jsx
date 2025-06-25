import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const InputBox = styled.textarea`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
  padding: 15px;
  opacity: 0.8;
  border: none;
  outline: none;
  resize: none;
  box-sizing: border-box;
  width: 100%;
`;

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <InputBox
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder="할일을 추가해보세요!"
      />
      <Button
        onClick={() => {
          if (content === "") {
            contentRef.current.focus();
            return;
          } else {
            onCreate(content);
          }
        }}
        title={"추가하기"}
        color={"black"}
      />
    </div>
  );
};

export default Editor;
