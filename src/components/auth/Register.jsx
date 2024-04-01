import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import UserService from "../../services/userService";

const userService = new UserService();

export const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    username: "",
    bio: "",
    image: "",
    favCreature: "",
    isStaff: false,
  });
  let navigate = useNavigate();

  const registerNewUser = () => {
    userService.createUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "creature_user",
          JSON.stringify({
            id: createdUser.id,
            staff: createdUser.isStaff,
          })
        );

        navigate("/");
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    userService.getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists");
      } else {
        // Good email, create user.
        registerNewUser();
      }
    });
  };

  const updateUser = (evt) => {
    const copy = { ...user };
    copy[evt.target.id] = evt.target.value;
    setUser(copy);
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleRegister}>
        <h1>Creature Feature</h1>
        <h2>Please Register</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter a username"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            {/* <label>
              <input
                onChange={(evt) => {
                  const copy = { ...user };
                  copy.isStaff = evt.target.checked;
                  setUser(copy);
                }}
                type="checkbox"
                id="isStaff"
              />
              I am an employee{" "}
            </label> */}
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
