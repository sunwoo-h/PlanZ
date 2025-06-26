import { createBrowserRouter } from "react-router-dom";
import InitPage from "./components/pages/InitPage";
import App from "./App";
import MainPage from "./components/pages/MainPage";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";

const router = createBrowserRouter([
  {
    papth: "/",
    element: <App />,
    children: [
      { index: true, element: <InitPage /> },
      { path: "/main/:user_id", element: <MainPage /> },
      { path: "/signIn", element: <SignInPage /> },
      { path: "/signUp", element: <SignUpPage /> },
    ],
  },
]);

export default router;
