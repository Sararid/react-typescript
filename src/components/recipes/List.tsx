import React from "react";
import { Recipe } from "../../types";
//style
import "./List.scss";

interface Props {
  recipes: Array<Recipe>;
}

const List = ({ recipes }: Props) => {
  return (
    <ul className="listRecipes">
      {recipes.map((recipe) => (
        <li key={recipe.strMeal}>
          <img src={recipe.strMealThumb} alt="title of recipe" />
          <h4>{recipe.strMeal}</h4>
          <h6>{recipe.strCategory}</h6>
          <p>{recipe.strInstructions?.substring(0, 100)}</p>
        </li>
      ))}
    </ul>
  );
};
export default List;
