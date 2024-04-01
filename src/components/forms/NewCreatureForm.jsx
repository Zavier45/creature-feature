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
import "./NewCreature.css";

export const NewCreatureForm = ({ currentUser }) => {
  const [creatureObj, setCreatureObj] = React.useState({});
  const [creatureName, setCreatureName] = React.useState("");
  const [creatureCountry, setCreatureCountry] = React.useState(0);
  const [creatureCategory, setCreatureCategory] = React.useState(0);
  const [creatureDescription, setCreatureDescription] = React.useState("");
  const [creatureDiet, setCreatureDiet] = React.useState("");
  const [creatureImg, setCreatureImg] = React.useState("");
  const [creatureTale, setCreatureTale] = React.useState("");

  const { creatureId } = useParams();
  const navigate = useNavigate();

  const importExistingCreature = () => {
    getCreatureById(creatureId).then((editCreature) => {
      setCreatureName(editCreature.name);
      setCreatureCountry(editCreature.countryId);
      setCreatureCategory(editCreature.categoryId);
      setCreatureDescription(editCreature.description);
      setCreatureDiet(editCreature.diet);
      setCreatureImg(editCreature.image);
      setCreatureTale(editCreature.tales);
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
      image: creatureImg,
      tales: creatureTale,
    };
    postCreature(newCreature).then((response) => {
      getAllCreatures().then((creaturesArray) => {
        setCreatureObj(creaturesArray);
        setCreatureName("");
        setCreatureCountry(0);
        setCreatureCategory(0);
        setCreatureDescription("");
        setCreatureDiet("");
        setCreatureImg("");
        setCreatureTale("");
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
      image: creatureImg,
      tales: creatureTale,
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
      <div className="names">
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
      </div>
      <div>
        <label>
          <textarea
            className="description"
            placeholder="Creature Description"
            value={creatureDescription}
            rows="5"
            cols="75"
            onChange={(desEvent) => {
              setCreatureDescription(desEvent.target.value);
            }}
          ></textarea>
        </label>
      </div>
      <div>
        <textarea
          rows="5"
          cols="75"
          className="diet"
          placeholder="Creature Diet"
          value={creatureDiet}
          onChange={(dietEvent) => {
            setCreatureDiet(dietEvent.target.value);
          }}
        />
      </div>
      <div>
        <input
          className="tales"
          placeholder="Tales"
          value={creatureTale}
          onChange={(taleEvt) => {
            setCreatureTale(taleEvt.target.value);
          }}
        />
      </div>
      <div>
        <input
          className="image"
          placeholder="Image URL"
          value={creatureImg}
          onChange={(imgEvt) => {
            setCreatureImg(imgEvt.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
