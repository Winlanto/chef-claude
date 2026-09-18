import "./Main.css";
import React from "react";
import ClaudeRecipe from "../ClaudeRecipe/claudeRecipe";
import IngredientList from "../ingredientList/IngredientList";
import { getRecipeFromMistral } from "../../utils/ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const ingredient = formData.get("ingredient")?.trim();
    if (ingredient) {
      setIngredients((prev) => [...prev, ingredient]);
    } else {
      console.log("No ingredient provided");
    }
  }

  return (
    <main className="main">
      <div className="container">
        <form action={addIngredient} className="ingredient-form">
          <input
            name="ingredient"
            aria-label="Add ingredient"
            type="text"
            placeholder="e.g. oregano"
          />
          <button type="submit">Add Ingredient</button>
        </form>

        {ingredients.length > 0 && (
          <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
        )}

        {recipe && <ClaudeRecipe recipe={recipe} />}
      </div>
    </main>
  );
}
