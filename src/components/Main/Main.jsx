import "./Main.css";
import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredienttListItems = ingredients.map((ingredient) => (
    <li key={ingredient} className="ingredient">
      {ingredient}
    </li>
  ));

  function addIngredient(formData) {
    const ingredient = formData.get("ingredient")?.trim();
    if (ingredient) {
      setIngredients((prev) => [...prev, ingredient]);
      // console.log(ingredients);
    } else {
      console.log("No ingredient provided");
      //#TBD empty input field handling, red border, error message, etc.
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
          <div className="ingredient-list-container">
            <h2 className="ingredient-title">Ingredients:</h2>
            <ul className="ingredient-list" aria-live="polite">
              {ingredienttListItems}
            </ul>
            {ingredients.length > 2 && (
              <section className="get-recipe-container">
                <div className="get-recipe-text-container">
                  <h3 className="get-recipe-title">Ready for a recipe?</h3>
                  <span className="get-recipe-text">
                    Generate a recipe based on your ingredients.
                  </span>
                </div>
                <button className="get-recipe-button" type="button">
                  Generate Recipe
                </button>
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
