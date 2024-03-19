import { CategoryList } from "./CategoryList";
import { CountryList } from "./CountryList";
import React from "react";
import { getAllCreatures, postCreature } from "../../services/creatureService";

export const NewCreatureForm = () => {
  const [creatureObj, setCreatureObj] = React.useState({});
  const [creatureName, setCreatureName] = React.useState("");
  const [creatureCountry, setCreatureCountry] = React.useState(0);
  const [creatureCategory, setCreatureCategory] = React.useState(0);
  const [creatureDescription, setCreatureDescription] = React.useState("");
  const [creatureDiet, setCreatureDiet] = React.useState("");

  const addNewCreature = () => {
    const newCreature = {
      name: creatureName,
      description: creatureDescription,
      diet: creatureDiet,
      categoryId: creatureCategory,
      countryId: creatureCountry,
      userId: 2,
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
          <button
            onClick={() => {
              addNewCreature();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
