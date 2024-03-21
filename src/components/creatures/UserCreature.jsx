import React from "react";
import { filterUserCreatures } from "../../services/creatureService";

export const UserCreature = ({ currentUser }) => {
  const [userCreatures, setUserCreatures] = React.useState([]);

  React.useEffect(() => {
    filterUserCreatures(currentUser.id).then((creaturesArray) => {
      setUserCreatures(creaturesArray);
    });
  }, [currentUser]);

  return (
    <article className="creatures">
      {userCreatures.map((creature) => {
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
            {creature.userId === currentUser.id ? (
              <div>
                <button
                  onClick={() => {
                    deleteCreature(creature);
                  }}
                >
                  Terminate
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
  );
};

//need to write a function to filter out just the specific user's submitted creatures from all of them
//tie it to the My Creatures button on the navbar
