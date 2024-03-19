import React from "react";
import { getAllCreatures } from "../../services/creatureService.js";
import "./Creature.css";

export const Creature = () => {
  const [allCreatures, setAllCreatures] = React.useState([]);

  React.useEffect(() => {
    getAllCreatures().then((creaturesArray) => {
      setAllCreatures(creaturesArray);
    }, []);
  });

  return (
    <div className="creature-container">
      <article className="creatures">
        {allCreatures.map((creature) => {
          return (
            <section className="creature" key={creature.id}>
              <header className="creature-info">{creature?.name}</header>
              <h3>Description</h3>
              <div>{creature?.description}</div>
              <h3>Diet</h3>
              <div>{creature?.diet}</div>
              <h3>Country of Origin</h3>
              <div>{creature?.country.name}</div>
              <h3>Category</h3>
              <div>{creature?.category.category}</div>
            </section>
          );
        })}
      </article>
    </div>
  );
};
