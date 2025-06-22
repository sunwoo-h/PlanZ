import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  background-color: ${({ color }) =>
    color === "white" ? "#fff" : color === "black" ? "#000" : "#ccc"};
  color: ${({ color }) =>
    color === "white" ? "#000" : color === "black" ? "#fff" : "#ccc"};
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  padding: 14px 0px;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`;

const Button = ({ title, color }) => {
  return <StyledButton color={color}>{title}</StyledButton>;
};

export default Button;
