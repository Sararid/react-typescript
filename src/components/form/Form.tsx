import React from "react";
import { Recipe } from "../../types";
import useNewRecipe from "../../hooks/useNewRecipe"
//style
import "./Form.scss";

//las interfaces son mas extensibles, puedo saltar linea volver a nombrar de neuvo la interfaz y añadir nuevos valores
interface FormProps {
 //   onNewRecipe : React.Dispatch<React.SetStateAction<Recipe[]>>
 onNewRecipe: (newRecipe: Recipe) => void
  } 
  

const Form = ({onNewRecipe} : FormProps) => {
  //const [inputValues, setInputValues] = useState<FormState["inputValue"]>(INITIAL_STATE);

  const [inputValues, dispatch] =useNewRecipe()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewRecipe(inputValues);
    handleClear()
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target
    dispatch({
      type: "change_value",
      payload : {
        inputName: name,
        inputValue: value
      }
    })
  }
 
  const handleClear= () => {
    dispatch({type: "clear"})

  }
  
  return (
    <div className="form">
      <h2>Add new recipe</h2> 
      <form onSubmit={handleSubmit} className="form__container">
        <input
          onChange={handleChange}
          value={inputValues.strMeal}
          type="text"
          name="strMeal"
          placeholder="name"
        />
        <input
          onChange={handleChange}
          value={inputValues.strCategory}
          type="strCategory"
          name="name"
          placeholder="Category"
        />

        <input
          onChange={handleChange}
          value={inputValues.strMealThumb}
          type="text"
          name="strMealThumb"
          placeholder="originalURL"
        />

        <textarea
          onChange={handleChange}
          value={inputValues.strInstructions}
          name="strInstructions"
          placeholder="steps"
        />
        <button className="form__button" onClick={handleClear} type="button" >Clear form</button>
        <button  className="form__button" type="submit" >Save new Recipe </button>
      </form>
    </div>
  );
};

export default Form;
