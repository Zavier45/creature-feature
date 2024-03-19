import React from "react";
import { getAllCountries } from "../../services/countryService";

export const CountryList = () => {
  const [allCountries, setAllCountries] = React.useState([]);

  React.useEffect(() => {
    getAllCountries().then((countryArr) => {
      setAllCountries(countryArr);
    }, []);
  });
  return (
    <>
      {allCountries.map((country) => {
        return (
          <option value={country.id} key={country.id}>
            {country.name}
          </option>
        );
      })}
    </>
  );
};
