import React, { useState } from "react";

const Form = () => {
    const [inputValues, setInputValues] = useState({
        name: '',
        imageURL: '',
        originalURL:'',
        steps: ''
    })
  const handleSubmit = () => {
 
  };
     const handleChange =( e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => (

        setInputValues({
            ...inputValues,
        [e.target.name]: e.target.value
        })
    )
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.name} type="text" name="name" placeholder="name" />
        <input  onChange={handleChange}value={inputValues.imageURL}  type="imageURL" name="name" placeholder="imageURL" />

        <input  onChange={handleChange} value={inputValues.originalURL} type="text" name="originalURL" placeholder="originalURL" />

        <textarea  onChange={handleChange} value={inputValues.steps}  name="steps" placeholder="steps" />
        <button>Save new Recipe </button>
      </form>
    </div>
  );
};

export default Form;
