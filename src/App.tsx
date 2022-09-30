import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
const INITIAL_STATE = [
  {
    name: "Crock Pot Roast",
    steps:
      "Place beef roast in crock pot. 	Mix the dried mixes together in a bowl and sprinkle over the roast. Pour the water around the roast. Cook on low for 7-9 hours",
    imageURL:
      "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
    originalURL: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
  },
  {
    name: "Roasted Asparagus",

    imageURL:
      "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
    originalURL: "http://www.food.com/recipe/roasted-asparagus-50847",
  },
];

interface Recipe {
  name: string;
  imageURL: string;
  originalURL: string;
  steps?: string;
}

//aqui por ejemplo ponemos todos los estados del componente
interface AppStates {
  recipes: Array<Recipe>;
  newRecipes: number
}
function App() {
  const [recipes, setRecipes] = useState<AppStates["recipes"]>([]);
  //array es un tipo generico, el tipo q espera es parametrizable, array tiene tipo recipe
const [newRecipes, setNewRecipes]= useState<AppStates["newRecipes"]>(2)
  useEffect(() => {
    setRecipes(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>My recipes</h1>
   <List recipes={recipes}/>
   <Form/>
    </div>
  );
}

export default App;
