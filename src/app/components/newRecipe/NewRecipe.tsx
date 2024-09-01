import React, { FormEvent, useState } from "react";
import styles from "../../styles/styles.module.scss";
import { Ingredients } from "./Ingredients";

// prettier-ignore
interface Ingredient { name: string; amount: string; unit: string; }

const NewRecipe: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([{ name: "", amount: "", unit: "" }]);
  const [steps, setSteps] = useState([""]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "image":
        setImage(event.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...newIngredients[index], [field]: value };
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", amount: "", unit: "" }]);
  };

  const removeIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index: number) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // send data to an mongoDB
    console.log({ name, description, image, ingredients, steps });
  };

  return (
    <div className={styles.createRecipeCard}>
      <h3>Create a Recipe</h3>
      <div className={styles.createRecipe}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Recipe Name..." value={name} onChange={handleChange} />
          <textarea name="description" placeholder="Description..." value={description} onChange={handleChange} />
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
          <Ingredients ingredients={ingredients} handleIngredientChange={handleIngredientChange} addIngredient={addIngredient} removeIngredient={removeIngredient}></Ingredients>
          <div className={styles.steps}>
            <h4>Steps</h4>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <ol>
                  <li>
                    <input type="text" value={step} onChange={(e) => handleStepChange(index, e.target.value)} />
                    <button type="button" onClick={() => removeStep(index)}>
                      Remove
                    </button>
                  </li>
                </ol>
              </div>
            ))}
            <button type="button" onClick={addStep}>
              Add Step
            </button>
          </div>
          <button className={styles.submitRecipe} type="submit">
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
