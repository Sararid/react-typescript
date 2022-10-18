import { useReducer } from "react";
import {Recipe} from "../types";
//esto es un customhool
//el reducer recibe dos parametros, de un lado el estado y luego la action
interface FormState {
    inputValue: Recipe
  }


const INITIAL_STATE = 
{
  strMeal: "",
  strCategory: "",
  strMealThumb: "",
  strInstructions: "",
}

type FormReducerAction = {
    type: "change_value"
    payload: {
      inputName: string,
      inputValue: string
    } 
  }| {
      type: "clear"
    }
  
const formReducer=(state: FormState["inputValue"], action: FormReducerAction) => {
  switch (action.type) {
  case "change_value" : {
    const {inputName, inputValue} = action.payload
    return{
      ...state,
      [inputName]: inputValue
    }}
  case "clear" : 
    return INITIAL_STATE
  }
   
}
  
const useNewRecipe = () => {
  return useReducer(formReducer, INITIAL_STATE)
}
export default useNewRecipe;

//esto es un cutsom hook 