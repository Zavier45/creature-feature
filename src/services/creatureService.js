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

export const putCreature = async (copyCreature) => {
  const putOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(copyCreature),
  };
  const response = await fetch(
    `http://localhost:4513/creatures/${copyCreature.id}`,
    putOptions
  );
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

export const getCreatureById = (creatureId) => {
  return fetch(
    `http://localhost:4513/creatures/${creatureId}/?_expand=country&_expand=category&_embed=creatureTypes`
  ).then((response) => response.json());
};

export const filterUserCreatures = (userId) => {
  return fetch(
    `http://localhost:4513/creatures?_expand=country&_expand=category&_embed=creatureTypes&userId=${userId}`
  ).then((response) => response.json());
};
