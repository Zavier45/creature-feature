import React from "react";

export const UserHome = () => {
  const [searchObj, setSearchObj] = React.useState("");

  return (
    <section>
      <div>
        <h1>Creature Features</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Creatures"
          className="creature-search"
          value={searchObj}
        />
      </div>
      <div></div>
    </section>
  );
};
