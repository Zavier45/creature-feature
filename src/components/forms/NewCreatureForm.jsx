import { CategoryList } from "./CategoryList";
import { CountryList } from "./CountryList";
import React from "react";
import {
  getAllCreatures,
  getCreatureById,
  postCreature,
  putCreature,
} from "../../services/creatureService";
import { useNavigate, useParams } from "react-router";

export const NewCreatureForm = ({ currentUser }) => {
  const [creatureObj, setCreatureObj] = React.useState({});
  const [creatureName, setCreatureName] = React.useState("");
  const [creatureCountry, setCreatureCountry] = React.useState(0);
  const [creatureCategory, setCreatureCategory] = React.useState(0);
  const [creatureDescription, setCreatureDescription] = React.useState("");
  const [creatureDiet, setCreatureDiet] = React.useState("");

  const { creatureId } = useParams();
  const navigate = useNavigate();

  const importExistingCreature = () => {
    getCreatureById(creatureId).then((editCreature) => {
      setCreatureName(editCreature.name);
      setCreatureCountry(editCreature.countryId);
      setCreatureCategory(editCreature.categoryId);
      setCreatureDescription(editCreature.description);
      setCreatureDiet(editCreature.diet);
    });
  };

  const addNewCreature = () => {
    const newCreature = {
      name: creatureName,
      description: creatureDescription,
      diet: creatureDiet,
      categoryId: creatureCategory,
      countryId: creatureCountry,
      userId: currentUser.id,
    };
    postCreature(newCreature).then((response) => {
      getAllCreatures().then((creaturesArray) => {
        setCreatureObj(creaturesArray);
        setCreatureName("");
        setCreatureCountry(0);
        setCreatureCategory(0);
        setCreatureDescription("");
        setCreatureDiet("");
      });
    });
  };

  const editCreature = () => {
    const editedCreature = {
      name: creatureName,
      description: creatureDescription,
      diet: creatureDiet,
      categoryId: creatureCategory,
      countryId: creatureCountry,
      userId: currentUser.id,
      id: creatureId,
    };
    putCreature(editedCreature).then(() => {
      navigate("/creatures");
    });
  };

  const handleSubmit = () => {
    if (creatureId) {
      editCreature();
    } else {
      addNewCreature();
    }
  };
  React.useEffect(() => {
    if (creatureId) {
      importExistingCreature();
    }
  }, [creatureId]);
  return (
    <div className="new-creature-form">
      <div>
        <input
          type="text"
          placeholder="Creature Name"
          value={creatureName}
          onChange={(nameEvent) => {
            setCreatureName(nameEvent.target.value);
          }}
        />
      </div>
      <div className="countries">
        <select
          id="country-item"
          name="country"
          value={creatureCountry}
          onChange={(cntEvt) => {
            setCreatureCountry(parseInt(cntEvt.target.value));
          }}
        >
          <option value={0} disabled hidden key={0}>
            ---Select A Country---
          </option>
          <CountryList />
        </select>
      </div>
      <div className="categories">
        <select
          id="category-item"
          name="category"
          value={creatureCategory}
          onChange={(catEvnt) => {
            setCreatureCategory(parseInt(catEvnt.target.value));
          }}
        >
          <option value={0} disabled hidden key={0}>
            ---Select A Category---
          </option>
          <CategoryList />
        </select>

        <div>
          <input
            className="description"
            placeholder="Creature Description"
            value={creatureDescription}
            onChange={(desEvent) => {
              setCreatureDescription(desEvent.target.value);
            }}
          ></input>
        </div>
        <div>
          <input
            className="diet"
            placeholder="Creature Diet"
            value={creatureDiet}
            onChange={(dietEvent) => {
              setCreatureDiet(dietEvent.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};
