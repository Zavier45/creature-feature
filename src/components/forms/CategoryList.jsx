import { getAllCategories } from "../../services/categoryService.js";
import React from "react";

export const CategoryList = () => {
  const [allCategories, setAllCategories] = React.useState([]);

  React.useEffect(() => {
    getAllCategories().then((categoryArray) => {
      setAllCategories(categoryArray);
    });
  }, []);
  return (
    <>
      {allCategories.map((category) => {
        return (
          <option value={category.id} key={category.id}>
            {category.category}
          </option>
        );
      })}
    </>
  );
};
