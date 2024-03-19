import "./Users.css";

export const Users = ({ user }) => {
  return (
    <div className="user">
      <div>
        <div className="user-info">Submitted by:</div>
        <div>{user.username}</div>
      </div>
    </div>
  );
};
