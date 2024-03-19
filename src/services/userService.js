export const getAllUsers = () => {
  return fetch("http://localhost:4513/users").then((response) =>
    response.json()
  );
};
