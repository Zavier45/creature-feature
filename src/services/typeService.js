export const getAllTypes = () => {
  return fetch("http://localhost:4513/types").then((response) =>
    response.json()
  );
};
