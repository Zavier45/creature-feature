export const getAllUsers = () => {
  return fetch("http://localhost:4513/users").then((response) =>
    response.json()
  );
};
export const getUserByEmail = (email) => {
  return fetch(`http://localhost:4513/users?email=${email}`).then((response) =>
    response.json()
  );
};

export const createUser = (user) => {
  return fetch("http://localhost:4513/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
};
