import { Outlet } from "react-router-dom";
import "./App.css";
import background from "./assets/BackGround.png";
import styled from "styled-components";

const BackgroundWrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
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
