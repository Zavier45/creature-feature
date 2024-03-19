import React from "react";

export const UserCreature = () => {
  const [showUserCreatures, setShowUserCreatures] = React.useState([]);

  React.useEffect();

  return (
    <section>
      <div className="user-creature"></div>
    </section>
  );
};

//need to write a function to filter out just the specific user's submitted creatures from all of them
//tie it to the My Creatures button on the navbar
