export default function IngredientList({ ingredients, getRecipe }) {
  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient} className="ingredient">
      {ingredient}
    </li>
  ));

  return (
    <div className="ingredient-list-container">
      <h2 className="ingredient-title">Ingredients:</h2>
      <ul className="ingredient-list" aria-live="polite">
        {ingredientListItems}
      </ul>
      {ingredients.length > 2 && (
        <section className="get-recipe-container">
          <div className="get-recipe-text-container">
            <h3 className="get-recipe-title">Ready for a recipe?</h3>
            <span className="get-recipe-text">
              Generate a recipe based on your ingredients.
            </span>
          </div>
          <button
            className="get-recipe-button"
            type="button"
            onClick={getRecipe}
          >
            Generate recipe
          </button>
        </section>
      )}
    </div>
  );
}
