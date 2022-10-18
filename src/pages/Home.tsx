import React, { useState, useEffect } from "react";
import Form from "../components/form/Form";
import Hero from "../components/hero/Hero";
import List from "../components/recipes/List";
import { getAllRecipes } from "../services/getAllRecipes";
import { Recipe } from "../types";
//aqui por ejemplo ponemos todos los estados del componente
interface AppStates {
  recipes: Array<Recipe>;
  newRecipes: number;
}
const Home = () => {
  //de la interfeza de appstate , quiero utilizar el state recipes
  const [recipes, setRecipes] = useState<AppStates["recipes"]>([]);
  //array es un tipo generico, el tipo q espera es parametrizable, array tiene tipo recipe
  const [newRecipes, setNewRecipes] = useState<AppStates["newRecipes"]>(0);
  useEffect(() => {
    getAllRecipes().then(setRecipes);
  }, []);
  const handleNewRecipe = (newRecipe: Recipe): void => {
    setRecipes((recipes) => [...recipes, newRecipe]);
    setNewRecipes((number) => number + 1);
  };

  return (
    <div>
      <Hero />
      <Form onNewRecipe={handleNewRecipe} />
      <h1>My recipes</h1>
      <List recipes={recipes} />
      <div>New count recipe : {newRecipes}</div>
    </div>
  );
};

export default Home;
