export interface Recipe {
  strMeal: string;
  strCategory: string;
    strMealThumb: string;
    strInstructions?: string;
  }

  
export type RecipesFromApi = Array<{
  strMeal: string,
  strCategory: string,
  strMealThumb: string,
  strInstructions: string
}>