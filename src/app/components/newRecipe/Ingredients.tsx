import React from "react";
import styles from "../../styles/styles.module.scss";

// prettier-ignore
interface Ingredient { name: string; amount: string; unit: string; }

interface IngredientsProps {
  ingredients: Ingredient[];
  handleIngredientChange: (index: number, field: keyof Ingredient, value: string) => void;
  addIngredient: () => void;
  removeIngredient: (index: number) => void;
}

export const Ingredients: React.FC<IngredientsProps> = ({ ingredients, handleIngredientChange, addIngredient, removeIngredient }) => {
  return (
    <div className={styles.ingredientContainer}>
      <h4>Ingredients</h4>
      {ingredients.map((ingredient, index) => (
        <div key={index} className={styles.ingredient}>
          <input type="text" placeholder="Name..." value={ingredient.name} onChange={(e) => handleIngredientChange(index, "name", e.target.value)} />
          <input type="text" placeholder="Amount..." value={ingredient.amount} onChange={(e) => handleIngredientChange(index, "amount", e.target.value)} />
          <input type="text" placeholder="Unit..." value={ingredient.unit} onChange={(e) => handleIngredientChange(index, "unit", e.target.value)} />
          <button type="button" onClick={() => removeIngredient(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addIngredient}>
        Add Ingredient
      </button>
    </div>
  );
};
