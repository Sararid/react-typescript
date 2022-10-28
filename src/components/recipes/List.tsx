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
        <li key={recipe.strMeal} className="listRecipes__container">
          <img
            src={recipe.strMealThumb}
            alt="title of recipe"
            className="listRecipes__container--img"
          />
          <h3 className="listRecipes__container--title">{recipe.strMeal}</h3>
          <h5 className="listRecipes__container--category">
            {recipe.strCategory}
          </h5>
          <p className="listRecipes__container--description">
            {recipe.strInstructions?.substring(0, 100)}
          </p>
          <div >
            <button className="listRecipes__container--button">Delete recipe</button>
            <button className="listRecipes__container--button">Add to favorite</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default List;
