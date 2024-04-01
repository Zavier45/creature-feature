import "./UserProfile.css";
import { useNavigate } from "react-router";
import React from "react";
import UserService from "../../services/userService";

const userService = new UserService();
export const UserProfile = () => {
  // Utility
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("creature_user"));

  // Use States
  const [editMode, setEditMode] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    name: "",
    username: "",
    image: "",
    bio: "",
    favCreature: "",
    isStaff: false,
    id: 0,
  });

  // Use Effects
  React.useEffect(() => {
    // Get User
    userService.getUserById(userData.id).then((response) => {
      setUser(response[0]);
    });
  }, []);

  // Functions
  const handleUserChange = (property, newValue) => {
    setUser({ ...user, [property]: newValue });
  };

  const handleCancel = () => {
    setEditMode(false);
    userService.getUserById(user.id);
    // Turn Off Edit Mode
    // Get User Again
  };

  const handleSave = () => {
    userService.saveProfileChanges().then(() => {
      setEditMode(false);
    });

    // Save User
    // Turn Off Edit Mode
    // Set Local Storage
  };

  return (
    <section className="user-profile">
      {!editMode && (
        <React.Fragment>
          <img src={user?.image} alt="User Image" className="profile-img" />
          <div className="user">
            <div className="user-info"> {user?.name}</div>
            <div className="user-info">Username: {user?.username}</div>
            <div className="user-info">About: {user?.bio}</div>
            <div className="user-info">
              Favorite Creature: {user?.favCreature}
            </div>
          </div>
          <button
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit Profile
          </button>
        </React.Fragment>
      )}
      {editMode && (
        <React.Fragment>
          <div className="edit-profile">
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(event) =>
                handleUserChange("fullName", event.target.value)
              }
            />
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(unEvt) =>
                handleUserChange("userName", unEvt.target.value)
              }
            />
            <input
              type="text"
              placeholder="Profile Picture URL"
              value={user.image}
              onChange={(imgEvt) =>
                handleUserChange("image", imgEvt.target.value)
              }
            />
            <textarea
              rows="5"
              cols="75"
              placeholder="About You"
              value={user.bio}
              onChange={(bioEvt) =>
                handleUserChange("bio", bioEvt.target.value)
              }
            />
            <input
              type="text"
              placeholder="Favorite Creature"
              value={user.favCreature}
              onChange={(favEvt) =>
                handleUserChange("favCreature", favEvt.target.value)
              }
            />
            <button
              className="edit-button"
              onClick={(saveEvent) => handleSave(saveEvent.target.value)}
            >
              Save Changes
            </button>
            <button
              className="edit-button"
              onClick={(cancelEvent) => handleCancel(cancelEvent.target.value)}
            >
              Discard Changes
            </button>
          </div>
        </React.Fragment>
      )}
    </section>
  );
};
