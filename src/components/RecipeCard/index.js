import React from 'react';
import { Link } from 'react-router-dom';
import './recipeCard.scss';

const RecipeCard = (recipe) => {
  return (
    <React.Fragment>
    <div className="recipe-card">
      <Link to={`/recipes/${recipe._id}`} >
        <img src={recipe.main_image.url} alt="recipe"></img>
      </Link>
      <div className="recipe-card__container">
        <h1>{recipe.title}</h1> 
      </div>
    </div>
    </React.Fragment>
  )
}

export default RecipeCard;