import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Creature } from "./components/creatures/Creature.jsx";
import { NavBar } from "./components/nav/NavBar.jsx";
import { NewCreatureForm } from "./components/forms/NewCreatureForm.jsx";
import { Welcome } from "./components/home/Welcome.jsx";
import { CreateAccount } from "./components/forms/CreateAccount.jsx";
import { UserHome } from "./components/home/Home.jsx";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="user-home" element={<UserHome />} />
        <Route path="creatures" element={<Creature />} />
        <Route path="new-creature" element={<NewCreatureForm />} />
      </Route>

      <Route path="accounts" element={<CreateAccount />} />
    </Routes>
  );
};
