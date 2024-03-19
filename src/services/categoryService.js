export const getAllCategories = () => {
  return fetch("http://localhost:4513/categories").then((response) =>
    response.json()
  );
};
