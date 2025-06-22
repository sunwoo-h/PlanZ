import { createBrowserRouter } from "react-router-dom";
import InitPage from "./components/pages/InitPage";
import App from "./App";
import MainPage from "./components/pages/MainPage";

const router = createBrowserRouter([
  {
    papth: "/",
    element: <App />,
    children: [
      { index: true, element: <InitPage /> },
      { path: "/mainPage", element: <MainPage /> },
    ],
  },
]);

export default router;
