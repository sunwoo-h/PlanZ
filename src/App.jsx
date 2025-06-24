import { Outlet } from "react-router-dom";
import "./App.css";
import background from "./assets/BackGround.png";
import styled, { keyframes } from "styled-components";

// 아래에서 위로 + 투명도 → 천천히 보여지게
const slideUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const BackgroundWrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  min-height: 100vh;

  animation: ${slideUp} 1s ease-out forwards;
`;

function App() {
  return (
    <div>
      <BackgroundWrapper>
        <Outlet />
      </BackgroundWrapper>
    </div>
  );
}

export default App;
