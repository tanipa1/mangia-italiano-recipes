import React from 'react';

const Recipe = ({ recipe }) => {
    const filteredRecipes = recipe.filter((recipeData) => recipeData.chef_id === id);
    console.log(filteredRecipes);
    return (
        <div>

        </div>
    );
};

export default Recipe;