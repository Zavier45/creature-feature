export const getAllCreatures = () => {
  return fetch(
    "http://localhost:4513/creatures?_expand=country&_expand=category&_embed=creatureTypes"
  ).then((response) => response.json());
};

export const postCreature = async (creatureObject) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(creatureObject),
  };
  const response = await fetch("http://localhost:4513/creatures", postOptions);
};

export const deleteCreature = async (deletedCreature) => {
  const deleteOptions = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(deletedCreature),
  };
  const response = await fetch(
    `http://localhost:4513/creatures/${deletedCreature.id}`,
    deleteOptions
  );
};
