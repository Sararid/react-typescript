import { Recipe, RecipesFromApi } from "../types"
export const  getAllRecipes = () => {
  return fetchRecipes().then(mapFromApi)
}

const fetchRecipes = () : Promise<RecipesFromApi>=>{
  return  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(res => res.json())
    .then(res => res.meals)
}
const mapFromApi =  (apiRes :RecipesFromApi): Array<Recipe> => {
  return apiRes.map(recipeFromApi => {
    console.log(recipeFromApi)
    const {
      strMeal, strCategory, strMealThumb, strInstructions

    } = recipeFromApi
    return {
      strMeal, strCategory, strMealThumb, strInstructions

    }
  })
}
fetchRecipes()
  .then(recipe => {
    console.log( recipe)
    const recipes= mapFromApi(recipe)      
  })