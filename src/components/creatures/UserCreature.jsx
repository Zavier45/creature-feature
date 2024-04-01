import React from "react";
import { filterUserCreatures } from "../../services/creatureService";
import { useNavigate } from "react-router";
import { deleteCreature } from "../../services/creatureService";

export const UserCreature = ({ currentUser }) => {
  const [userCreatures, setUserCreatures] = React.useState([]);

  const navigate = useNavigate();

  const fetchUserCreatures = () => {
    filterUserCreatures(currentUser?.id).then((creaturesArray) => {
      setUserCreatures(creaturesArray);
    });
  };

  const handleDeleteCreatures = (creature) => {
    deleteCreature(creature).then(() => {
      fetchUserCreatures();
    });
  };
  React.useEffect(() => {
    fetchUserCreatures();
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
                    handleDeleteCreatures(creature);
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
