import React from "react";
import {
  deleteCreature,
  getAllCreatures,
} from "../../services/creatureService.js";
import "./Creature.css";
import { useNavigate } from "react-router";

export const Creature = ({ currentUser }) => {
  const [allCreatures, setAllCreatures] = React.useState([]);
  const [searchObj, setSearchObj] = React.useState("");
  const [filteredCreature, setFilteredCreature] = React.useState([]);

  React.useEffect(() => {
    getAllCreatures().then((creaturesArray) => {
      setAllCreatures(creaturesArray);
    }, []);
  });

  React.useEffect(() => {
    const foundCreature = allCreatures.filter((creature) =>
      creature.name.toLowerCase().includes(searchObj.toLowerCase())
    );
    setFilteredCreature(foundCreature);
  }, [searchObj, allCreatures]);

  const navigate = useNavigate();

  return (
    <div className="creature-container">
      <div>
        <input
          type="text"
          placeholder="Search Creatures"
          className="creature-search"
          value={searchObj}
          onChange={(searchEvent) => {
            setSearchObj(searchEvent.target.value);
          }}
        />
      </div>
      <article className="creatures">
        {filteredCreature.map((creature) => {
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
              <h3>Tales</h3>
              <div>{creature?.tales}</div>
              <div>
                <img
                  src={creature.image}
                  alt="creature-image"
                  className="creature-image"
                />
              </div>
              {creature.userId === currentUser.id ? (
                <div>
                  <button
                    onClick={() => {
                      deleteCreature(creature);
                    }}
                  >
                    Slay
                  </button>
                  <button
                    onClick={() => {
                      navigate(`../edit/${creature.id}`);
                    }}
                  >
                    Edit
                  </button>
                </div>
              ) : (
                ""
              )}
            </section>
          );
        })}
      </article>
    </div>
  );
};
