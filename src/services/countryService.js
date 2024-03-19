export const getAllCountries = () => {
  return fetch("http://localhost:4513/countries").then((response) =>
    response.json()
  );
};
