import SignupUser from "./components/signup";
import Dashborad from "./components/dashboard";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  );
}

export default App
