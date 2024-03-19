import { getAllTypes } from "../../services/typeService.js";
import React from "react";

export const TypeForm = () => {
  const [allTypes, setAllTypes] = React.useState([]);

  React.useEffect(() => {
    getAllTypes().then((typeArray) => {
      setAllTypes(typeArray);
    });
  }, []);

  return (
    <div className="type-container">
      <article className="types">
        {allTypes.map((type) => {
          return (
            <div key={type.id}>
              <input type="checkbox" name="type" />
              {type.type}
            </div>
          );
        })}
      </article>
    </div>
  );
};
