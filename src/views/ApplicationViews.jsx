import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar.jsx";
import { NewCreatureForm } from "../components/forms/NewCreatureForm.jsx";
import { Home } from "../components/home/Home.jsx";
import { Creature } from "../components/creatures/Creature.jsx";
import { UserCreature } from "../components/creatures/UserCreature.jsx";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = React.useState();
  React.useEffect(() => {
    const localCreatureUser = localStorage.getItem("creature_user");
    const creatureUserObj = JSON.parse(localCreatureUser);

    setCurrentUser(creatureUserObj);
  }, []);
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
        <Route index element={<Home currentUser={currentUser} />} />
        <Route
          path="creatures"
          element={<Creature currentUser={currentUser} />}
        />
        <Route
          path="user-creature"
          element={<UserCreature currentUser={currentUser} />}
        />
        <Route
          path="new-creature"
          element={<NewCreatureForm currentUser={currentUser} />}
        />
        <Route path="edit">
          <Route
            path=":creatureId"
            element={<NewCreatureForm currentUser={currentUser} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
